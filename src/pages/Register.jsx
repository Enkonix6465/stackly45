import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../components/language-selector'
import { registerUser } from '../utils/auth'

function isValidEmail(value) {
  return /.+@.+\..+/.test(String(value).toLowerCase())
}

export default function Register() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError(t('register.errorFirstNameLastName'))
      return
    }
    if (!isValidEmail(form.email)) {
      setError(t('register.errorValidEmail'))
      return
    }
    if (form.password.length < 6) {
      setError(t('register.errorPasswordLength'))
      return
    }
    if (form.password !== form.confirmPassword) {
      setError(t('register.errorPasswordsMatch'))
      return
    }

    const { success, message } = registerUser({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email,
      password: form.password
    })

    if (!success) {
      setError(message)
      return
    }

    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 relative">
      
      {/* Header with Language Selector */}
      <div className="relative z-20 w-full animate-fade-in">
        <header className="bg-black/80 backdrop-blur-md border-b border-white/20 shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <LanguageSelector variant="login" />
            </div>
          </div>
        </header>
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 lg:p-10 text-white animate-slide-up">
            <div className="mb-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t('register.createAccount')}</h2>
              <p className="text-white/70 mt-1">{t('register.joinUs')}</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80">{t('register.firstName')}</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder={t('register.firstNamePlaceholder')}
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80">{t('register.lastName')}</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder={t('register.lastNamePlaceholder')}
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">{t('register.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('register.emailPlaceholder')}
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80">{t('register.password')}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder={t('register.passwordPlaceholder')}
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80">{t('register.confirmPassword')}</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  className="mt-1 w-full rounded-lg bg-white/20 border border-white/30 px-3 py-2 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
              </div>

              {error && (
                <div className="sm:col-span-2 text-red-300 bg-red-900/40 border border-red-700/50 rounded-md px-3 py-2 text-sm">{error}</div>
              )}

              <div className="sm:col-span-2">
                <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl">
                  {t('register.createAccountButton')}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-sm text-purple-300 hover:text-purple-200 underline">
                {t('register.forgotPassword')}
              </Link>
            </div>

            <p className="mt-6 text-center text-sm text-white/80">
              {t('register.alreadyHaveAccount')} <Link to="/login" className="text-purple-300 hover:text-purple-200 underline">{t('register.login')}</Link>
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-white/70">
            <span className="h-2 w-2 bg-white/40 rounded-full animate-float-slow" />
            <span className="h-2 w-2 bg-white/40 rounded-full animate-float-slow [animation-delay:200ms]" />
            <span className="h-2 w-2 bg-white/40 rounded-full animate-float-slow [animation-delay:400ms]" />
          </div>
        </div>
      </div>
    </div>
  )
} 