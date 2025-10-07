import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../components/language-selector'
import { ThemeToggle } from '../components/theme-toggle'
import { resetPassword } from '../utils/auth'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [step, setStep] = useState(1) // 1: email, 2: reset password
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  function handleEmailSubmit(e) {
    e.preventDefault()
    setError('')
    
    if (!email.trim()) {
      setError(t('forgotPassword.errorEmailRequired'))
      return
    }

    // Check if email exists in users
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase())
    
    if (!userExists) {
      setError(t('forgotPassword.errorEmailNotFound'))
      return
    }

    setStep(2)
    setSuccess(t('forgotPassword.successEmailVerified'))
  }

  function handlePasswordReset(e) {
    e.preventDefault()
    setError('')
    
    if (newPassword.length < 6) {
      setError(t('forgotPassword.errorPasswordLength'))
      return
    }
    
    if (newPassword !== confirmPassword) {
      setError(t('forgotPassword.errorPasswordsMismatch'))
      return
    }

    const result = resetPassword(email, newPassword)
    if (result.success) {
      setSuccess(t('forgotPassword.successPasswordReset'))
      setTimeout(() => {
        navigate('/login', { replace: true })
      }, 2000)
    } else {
      setError(result.message)
    }
  }

  function handleBackToEmail() {
    setStep(1)
    setError('')
    setSuccess('')
    setNewPassword('')
    setConfirmPassword('')
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
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {step === 1 ? t('forgotPassword.resetPassword') : t('forgotPassword.setNewPassword')}
              </h2>
              <p className={`mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                {step === 1 ? t('forgotPassword.enterEmailToContinue') : t('forgotPassword.createNewPassword')}
              </p>
            </div>

            {step === 1 ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-white/80">{t('forgotPassword.email')}</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('forgotPassword.emailPlaceholder')}
                    className="mt-1 w-full rounded-lg px-3 py-2 outline-none border focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder-slate-500 border-slate-300 focus:ring-indigo-600 dark:bg-white/20 dark:text-white dark:placeholder-white/60 dark:border-white/30 dark:focus:ring-indigo-400"
                  />
                </div>

                {error && (
                  <div className="text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2 text-sm dark:text-red-300 dark:bg-red-900/40 dark:border-red-700/50">{error}</div>
                )}

                <button type="submit" className="w-full btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl">
                  {t('forgotPassword.continue')}
                </button>
              </form>
            ) : (
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 dark:text-white/80">{t('forgotPassword.newPassword')}</label>
                  <input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder={t('forgotPassword.newPasswordPlaceholder')}
                    className="mt-1 w-full rounded-lg px-3 py-2 outline-none border focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder-slate-500 border-slate-300 focus:ring-indigo-600 dark:bg-white/20 dark:text-white dark:placeholder-white/60 dark:border-white/30 dark:focus:ring-indigo-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-white/80">{t('forgotPassword.confirmPassword')}</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t('forgotPassword.confirmPasswordPlaceholder')}
                    className="mt-1 w-full rounded-lg px-3 py-2 outline-none border focus:ring-2 focus:border-transparent bg-white text-slate-900 placeholder-slate-500 border-slate-300 focus:ring-indigo-600 dark:bg-white/20 dark:text-white dark:placeholder-white/60 dark:border-white/30 dark:focus:ring-indigo-400"
                  />
                </div>

                {error && (
                  <div className="text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2 text-sm dark:text-red-300 dark:bg-red-900/40 dark:border-red-700/50">{error}</div>
                )}

                {success && (
                  <div className="text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2 text-sm dark:text-green-300 dark:bg-green-900/40 dark:border-green-700/50">{success}</div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBackToEmail}
                    className="flex-1 btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-xl"
                  >
                    {t('forgotPassword.back')}
                  </button>
                  <button type="submit" className="flex-1 btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl">
                    {t('forgotPassword.resetPasswordButton')}
                  </button>
                </div>
              </form>
            )}

            <p className={`mt-6 text-center text-sm ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
              {t('forgotPassword.rememberPassword')} <Link to="/login" className="text-purple-300 hover:text-purple-200 underline">{t('forgotPassword.signIn')}</Link>
            </p>
          </div>

          
        </div>
      </div>
    </div>
  )
}
