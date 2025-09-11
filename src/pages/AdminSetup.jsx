import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAdminUser, loginUser } from '../utils/auth';

export default function AdminSetup() {
  const [status, setStatus] = useState('');

  const handleCreateAdmin = () => {
    const result = createAdminUser();
    if (result.success) {
      setStatus('✅ Admin user created successfully! Email: admin@example.com, Password: admin123');
    } else {
      setStatus('❌ Failed to create admin user: ' + result.message);
    }
  };

  const handleLoginAdmin = () => {
    const result = loginUser('admin@example.com', 'admin123');
    if (result.success) {
      setStatus('✅ Admin logged in successfully! Redirecting to dashboard...');
      setTimeout(() => {
        window.location.href = '/admin-dashboard';
      }, 1000);
    } else {
      setStatus('❌ Failed to login admin: ' + result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Setup</h1>
        
        <div className="space-y-4">
          <button
            onClick={handleCreateAdmin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Create Admin User
          </button>
          
          <button
            onClick={handleLoginAdmin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Login as Admin
          </button>
          
          <Link
            to="/admin-dashboard"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
          >
            Go to Admin Dashboard
          </Link>
          
          <Link
            to="/login"
            className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
          >
            Back to Login
          </Link>
        </div>
        
        {status && (
          <div className="mt-6 p-4 bg-black/20 rounded-lg">
            <p className="text-sm">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
