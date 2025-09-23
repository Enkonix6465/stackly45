import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from './theme-toggle'
import { LanguageSelector } from './language-selector'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { ChevronDown, LogIn } from 'lucide-react'


export default function Navbar({ user }) {
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    // Check if 'dark' class is present on <html>
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    // Listen for class changes (for live theme switching)
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])


  const navigate = useNavigate()
  const initials = user ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() : 'U'
   

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 dark:border-white/10 transition-colors ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <nav className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - Far Left */}
        <div className="flex-shrink-0">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/Logo.jpg" alt="Logo" className="h-8 w-auto" />
            <span className="sr-only">Home</span>
          </a>
        </div>

        {/* Navigation Menu - Center */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  {t('nav.home')}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem onClick={() => navigate('/home')}>
                  {t('nav.home1')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/home2')}>
                  {t('nav.home2')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          
          <li>
            <button onClick={() => navigate('/about')} className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.about')}
            </button>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  {t('nav.services')}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {/* All Services Section */}
                <DropdownMenuItem 
                  onClick={() => navigate('/services')}
                  className="font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                >
                  {t('nav.allServices')}
                </DropdownMenuItem>
                
                {/* Separator */}
                <div className="h-px bg-gray-200 dark:bg-gray-700 mx-2 my-1" />
                
                {[
                  {label: t('nav.weddingPlanning'), path:'/services/wedding-planning'},
                  {label: t('nav.corporateEvents'), path:'/services/corporate-events'},
                  {label: t('nav.birthdayPrivateParties'), path:'/services/birthday-private-parties'},
                  {label: t('nav.concertsEntertainmentShows'), path:'/services/concerts-entertainment'},
                  {label: t('nav.sportsOutdoorEvents'), path:'/services/sports-outdoor-events'},
                  {label: t('nav.exhibitionsTradeShows'), path:'/services/exhibitions-trade-shows'}
                ].map((item) => (
                  <DropdownMenuItem 
                    key={item.label} 
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <button onClick={() => navigate('/blog')} className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.blog')}
            </button>
          </li>

          <li>
            <button onClick={() => navigate('/contact')} className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.contact')}
            </button>
          </li>
        </ul>

        {/* Right Side Controls - Far Right */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <LanguageSelector />
          
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Login Icon */}
          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Login"
            title={t('nav.login') || 'Login'}
          >
            <LogIn className="h-5 w-5" />
          </button>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" aria-label="Menu" aria-expanded={isMobileOpen} aria-controls="mobile-nav">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Mobile User Avatar - Login Button */}
          <button
            onClick={() => navigate('/login')}
            className="md:hidden grid h-9 w-9 rounded-full bg-purple-500 dark:bg-purple-600 text-white place-items-center font-semibold select-none hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            aria-label="Login"
            title={t('nav.login') || 'Login'}
          >
            JM
          </button>

          {/* Desktop User Avatar */}
          <div className="hidden md:grid h-9 w-9 rounded-full bg-purple-500 dark:bg-purple-600 text-white place-items-center font-semibold select-none">
            {initials}
          </div>
          
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      {isMobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-3">
            <button onClick={() => { navigate('/home'); setIsMobileOpen(false) }} className="text-left hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.home1')}
            </button>
            <button onClick={() => { navigate('/home2'); setIsMobileOpen(false) }} className="text-left hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.home2')}
            </button>
            <button onClick={() => { navigate('/about'); setIsMobileOpen(false) }} className="text-left hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => { navigate('/services'); setIsMobileOpen(false) }} className="text-left hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => { navigate('/blog'); setIsMobileOpen(false) }} className="text-left hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.blog')}
            </button>
            <button onClick={() => { navigate('/contact'); setIsMobileOpen(false) }} className="text-left hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}