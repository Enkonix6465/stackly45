import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../components/language-selector'
import { ThemeToggle } from '../components/theme-toggle'
import { loginUser } from '../utils/auth'

export default function Login() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError(t('login.errorEmailPassword'))
      return
    }

    // Check for admin credentials
    if ((email === "admin@enkonix.in" || email === "admin@enkonix.com") && password === "admin123") {
      // Store admin user in localStorage for authentication
      const adminUser = {
        id: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        email: email,
        password: password,
        role: 'admin',
        loginTime: new Date().toISOString()
      }
      localStorage.setItem('authUser', JSON.stringify(adminUser))
      navigate('/admin-dashboard', { replace: true })
      return
    }

    const { success, message } = loginUser(email, password)
    if (!success) {
      setError(message)
      return
    }
    navigate('/home', { replace: true })
  }

  return (
    <div className={`min-h-screen w-full relative transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${isDark ? 'from-gray-900 to-gray-800' : 'from-slate-50 via-purple-50 to-purple-50'}`} />
      
      {/* Header with Theme Toggle and Language Selector */}
      <div className="relative z-20 w-full animate-fade-in">
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-gray-700/60 shadow-sm sticky top-0 z-50 transition-colors">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <LanguageSelector variant="login" />
              <ThemeToggle />
            </div>
          </div>
        </header>
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-lg lg:max-w-xl animate-fade-in">
          <div className={`backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-10 animate-slide-up border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white/80 border-slate-200 text-slate-900'}` }>
            <div className="mb-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t('login.welcomeBack')}</h2>
              <p className="text-slate-600 dark:text-white/70 mt-1">{t('login.loginToContinue')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-white/80">{t('login.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('login.emailPlaceholder')}
                  className="mt-1 w-full rounded-lg px-3 py-2 outline-none border focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder-slate-500 border-slate-300 focus:ring-indigo-600 dark:bg-white/20 dark:text-white dark:placeholder-white/60 dark:border-white/30 dark:focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-white/80">{t('login.password')}</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('login.passwordPlaceholder')}
                  className="mt-1 w-full rounded-lg px-3 py-2 outline-none border focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder-slate-500 border-slate-300 focus:ring-indigo-600 dark:bg-white/20 dark:text-white dark:placeholder-white/60 dark:border-white/30 dark:focus:ring-indigo-400"
                />
              </div>

              {error && (
                <div className="text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2 text-sm dark:text-red-300 dark:bg-red-900/40 dark:border-red-700/50">{error}</div>
              )}

              <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl">
                {t('login.signIn')}
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-sm text-slate-600 dark:text-white/80">
                {t('login.forgotPassword')} <Link to="/forgot-password" className="text-purple-300 hover:text-purple-200 underline">{t('login.reset')}</Link>
              </span>
            </div>

            <p className="mt-6 text-center text-sm text-slate-600 dark:text-white/80">
              {t('login.noAccount')} <Link to="/register" className="text-purple-300 hover:text-purple-200 underline">{t('login.register')}</Link>
            </p>
          </div>

          
        </div>
      </div>
    </div>
  )
} 