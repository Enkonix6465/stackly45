import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../components/language-selector";
import { ThemeToggle } from "../components/theme-toggle";
import { useTheme } from "../components/theme-provider";
import { getCurrentUser, logoutUser, getUsers, saveUsers, registerUser } from "../utils/auth";
import { 
  Users, 
  UserCheck, 
  UserPlus, 
  Activity, 
  Search, 
  Filter,
  Download,
  LogOut,
  TrendingUp,
  Shield
} from "lucide-react";

function getUsersFromLocalStorage() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function getLoggedInUser() {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
}

export default function AdminDashboard() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user'
  });
  const [addUserError, setAddUserError] = useState('');

  useEffect(() => {
    setUsers(getUsersFromLocalStorage());
    setLoggedInUser(getLoggedInUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    window.location.href = "/login";
  };

  const handleDeleteUser = (userId) => {
    // Prevent admin from deleting themselves
    if (loggedInUser && loggedInUser.id === userId) {
      alert(t('admin.addUserModal.cannotDeleteSelf'));
      return;
    }

    if (window.confirm(t('admin.addUserModal.confirmDelete'))) {
      const allUsers = getUsers();
      const updatedUsers = allUsers.filter(user => user.id !== userId);
      saveUsers(updatedUsers);
      
      // Update local state
      setUsers(updatedUsers);
      
      console.log('✅ User deleted successfully:', userId);
    }
  };

  const handleAddUser = () => {
    setShowAddUserModal(true);
    setAddUserError('');
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'user'
    });
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
    setAddUserError('');
  };

  const handleSubmitNewUser = (e) => {
    e.preventDefault();
    setAddUserError('');

    // Validation
    if (!newUser.firstName.trim() || !newUser.lastName.trim()) {
      setAddUserError(t('admin.addUserModal.validation.firstNameRequired'));
      return;
    }
    if (!newUser.email.trim()) {
      setAddUserError(t('admin.addUserModal.validation.emailRequired'));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser.email)) {
      setAddUserError(t('admin.addUserModal.validation.emailInvalid'));
      return;
    }
    if (!newUser.password || newUser.password.length < 6) {
      setAddUserError(t('admin.addUserModal.validation.passwordMinLength'));
      return;
    }

    // Create user
    const result = registerUser({
      firstName: newUser.firstName.trim(),
      lastName: newUser.lastName.trim(),
      email: newUser.email.trim(),
      password: newUser.password,
      role: newUser.role
    });

    if (result.success) {
      // Update local state
      setUsers(getUsersFromLocalStorage());
      setShowAddUserModal(false);
      setNewUser({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'user'
      });
      alert(t('admin.addUserModal.success'));
    } else {
      setAddUserError(result.message);
    }
  };

  const handleCloseModal = () => {
    setShowAddUserModal(false);
    setAddUserError('');
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'user'
    });
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || 
                         (filterStatus === "active" && user.loginTime) ||
                         (filterStatus === "inactive" && !user.loginTime);
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.loginTime).length,
    newRegistrations: users.filter(u => {
      const regDate = new Date(u.createdAt || Date.now());
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return regDate > weekAgo;
    }).length,
    totalSessions: users.reduce((acc, user) => acc + (user.sessionCount || 0), 0)
  };

  const StatCard = ({ title, value, icon: Icon, color, trend, delay = 0 }) => (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {trend && (
            <div className="flex items-center space-x-1 text-emerald-500">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+{trend}%</span>
            </div>
          )}
        </div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' 
        : 'bg-gradient-to-br from-slate-50 via-purple-50 to-purple-50'
    }`}>

      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-gray-700/60 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Right side - Theme toggle, Language selector and user menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSelector variant="default" />
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('nav.logout')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {t('admin.welcome')}
            </h2>
            <p className="text-purple-500 dark:text-purple-300">
              {t('admin.overview')}
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title={t('admin.totalUsers')}
              value={stats.totalUsers}
              icon={Users}
              color="from-purple-500 to-purple-600"
              trend={12}
              delay={0}
            />
            <StatCard
              title={t('admin.activeUsers')}
              value={stats.activeUsers}
              icon={UserCheck}
              color="from-emerald-500 to-emerald-600"
              trend={8}
              delay={100}
            />
            <StatCard
              title={t('admin.newRegistrations')}
              value={stats.newRegistrations}
              icon={UserPlus}
              color="from-purple-500 to-purple-600"
              trend={24}
              delay={200}
            />
            <StatCard
              title={t('admin.totalSessions')}
              value={stats.totalSessions}
              icon={Activity}
              color="from-orange-500 to-orange-600"
              trend={15}
              delay={300}
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('admin.quickActions.title')}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="group p-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div className="flex items-center space-x-3">
                      <Download className="h-6 w-6 text-white" />
                      <span className="text-white font-medium">{t('admin.quickActions.exportData')}</span>
                    </div>
                  </button>
                  <button 
                    onClick={handleAddUser}
                    className="group p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <UserPlus className="h-6 w-6 text-white" />
                      <span className="text-white font-medium">{t('admin.quickActions.addUser')}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{t('admin.recentActivity.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg">
                    <UserCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{t('admin.recentActivity.newUserRegistered')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 {t('admin.recentActivity.minutesAgo')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{t('admin.recentActivity.systemBackupCompleted')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">1 {t('admin.recentActivity.hourAgo')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{t('admin.recentActivity.securityScanPassed')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">3 {t('admin.recentActivity.hoursAgo')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Management Table */}
          <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/20 dark:border-gray-700/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t('admin.userManagement')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('admin.users')}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t('admin.filters.search')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="all">{t('admin.filters.all')}</option>
                    <option value="active">{t('admin.filters.active')}</option>
                    <option value="inactive">{t('admin.filters.inactive')}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-white/5 dark:bg-gray-800/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t('admin.userDetails.name')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t('admin.userDetails.email')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t('admin.userDetails.status')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t('admin.userTable.lastActive')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t('admin.userDetails.actions')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 dark:divide-gray-700/10">
                  {filteredUsers.map((user, index) => (
                    <tr key={user.id} className="hover:bg-white/5 dark:hover:bg-gray-800/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {user.firstName?.[0]}{user.lastName?.[0]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              ID: {user.id?.slice(0, 8)}...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          user.loginTime 
                            ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400' 
                            : 'bg-gray-100 dark:bg-gray-800/20 text-gray-800 dark:text-gray-400'
                        }`}>
                          {user.loginTime ? t('admin.filters.active') : t('admin.filters.inactive')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {user.loginTime ? new Date(user.loginTime).toLocaleString() : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          {loggedInUser && loggedInUser.id === user.id ? (
                            <span className="px-3 py-1 text-sm font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-lg">
                              {t('admin.userTable.currentUser')}
                            </span>
                          ) : (
                            <button 
                              onClick={() => handleDeleteUser(user.id)}
                              className="px-3 py-1 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                            >
                              {t('admin.userTable.delete')}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  {searchTerm || filterStatus !== 'all' ? t('admin.userTable.noUsersFound') : t('admin.userTable.noUsersYet')}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {searchTerm || filterStatus !== 'all' 
                    ? t('admin.userTable.tryAdjustingSearch') 
                    : t('admin.userTable.usersWillAppear')}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('admin.addUserModal.title')}</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmitNewUser} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('admin.addUserModal.firstName')} {t('admin.addUserModal.required')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={newUser.firstName}
                      onChange={handleNewUserChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('admin.addUserModal.lastName')} {t('admin.addUserModal.required')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={newUser.lastName}
                      onChange={handleNewUserChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('admin.addUserModal.email')} {t('admin.addUserModal.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleNewUserChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('admin.addUserModal.password')} {t('admin.addUserModal.required')}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleNewUserChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                    minLength={6}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('admin.addUserModal.role')}
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={newUser.role}
                    onChange={handleNewUserChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="user">{t('admin.addUserModal.userRole')}</option>
                    <option value="admin">{t('admin.addUserModal.adminRole')}</option>
                  </select>
                </div>

                {addUserError && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                    <p className="text-sm text-red-600 dark:text-red-400">{addUserError}</p>
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {t('admin.addUserModal.cancel')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                  >
                    {t('admin.addUserModal.createUser')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}