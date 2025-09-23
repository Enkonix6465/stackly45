import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
    // Theme detection
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [navigate])

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const showSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  // Smooth scroll to section if hash is present
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
      }
    }
  }, [])

  const user = getCurrentUser()
  const capabilities = [
    { key: 'Planning', title: 'Event Planning & Strategy', points: ['Comprehensive event planning from concept to execution', 'Timeline development and milestone tracking', 'Budget planning and cost optimization', 'Risk assessment and contingency planning'] },
    { key: 'Coordination', title: 'Vendor Management & Coordination', points: ['Vendor selection and negotiation', 'Contract management and compliance', 'Timeline coordination across all stakeholders', 'Quality control and performance monitoring'] },
    { key: 'Technology', title: 'Event Technology Solutions', points: ['Registration and ticketing systems', 'Event management software integration', 'Live streaming and virtual event capabilities', 'Mobile apps and digital experiences'] },
    { key: 'Logistics', title: 'Logistics & Operations', points: ['Venue selection and management', 'Transportation and accommodation coordination', 'Equipment rental and setup', 'On-site event management and support'] },
    { key: 'Marketing', title: 'Event Marketing & Promotion', points: ['Multi-channel marketing campaigns', 'Social media strategy and management', 'Email marketing and communication', 'Partnership development and sponsorships'] },
    { key: 'Support', title: 'Client Support & Communication', points: ['Dedicated project management', 'Regular progress updates and reporting', '24/7 support during events', 'Post-event follow-up and feedback collection'] }
  ]
  const [activeCapability, setActiveCapability] = useState(capabilities[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isWheelHovered, setIsWheelHovered] = useState(false)
  const servicesSectionRef = useRef(null)

  // Auto-cycle active capability when not hovered
  useEffect(() => {
    if (isWheelHovered) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length)
    }, 2200)
    return () => clearInterval(id)
  }, [isWheelHovered, capabilities.length])

  // Sync capability text with active index
  useEffect(() => {
    setActiveCapability(capabilities[activeIndex])
  }, [activeIndex])


  function handleLogout() {
    logoutUser()
    navigate('/login', { replace: true })
  }

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar user={user} />

      {/* Showcase */}
      <section
        id="showcase"
        className="relative overflow-hidden h-screen flex items-center justify-center text-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Services.mp4" type="video/mp4" />
          {t('services.video.notSupported')}
        </video>

        {/* Overlay (darken video for readability) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none text-white">
            {t('services.showcase.title')}
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
            {t('services.showcase.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <button
              onClick={() => navigate('/services')}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
            >
              {t('services.showcase.exploreButton')}
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => navigate('/about')}
              className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}
            >
              {t('services.showcase.planEventButton')}
            </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('services.howItWorks.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.howItWorks.subtitle')}
            </p>
          </div>

          {/* Steps Container */}
          <div className="relative">
            {/* Steps Grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-4">
              {/* Step 1 */}
              <div className="group relative">
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "border border-gray-100"
                }`}>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                      <g fill="none">
                        <path fill="#66e1ff" d="M12.556 11.333a6.54 6.54 0 0 0 2.79 1.08v2.936c.479-.478 3.348-2.869 3.826-3.31a5.75 5.75 0 0 0 3.825-5.297a5.99 5.99 0 0 0-6.216-5.738c-5.02 0-8.634 5.5-4.225 10.329"></path>
                        <path fill="#c2f3ff" d="M16.782 2.917a6.095 6.095 0 0 1 6.13 4.782a5.4 5.4 0 0 0 .086-.957a5.99 5.99 0 0 0-6.216-5.738c-3.777 0-6.756 3.111-6.12 6.706a6.09 6.09 0 0 1 6.12-4.793"></path>
                        <path fill="#e3e3e3" d="M1.002 23a6.695 6.695 0 0 1 13.388 0z"></path>
                        <path fill="#fff" d="M7.696 16.306A6.694 6.694 0 0 0 1.002 23h6.694z"></path>
                        <path fill="#e3e3e3" d="M7.696 14.871a4.064 4.064 0 1 0 0-8.128a4.064 4.064 0 0 0 0 8.128"></path>
                        <path fill="#fff" d="M7.696 14.871a4.065 4.065 0 0 1 0-8.129z"></path>
                        <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M7.696 14.871a4.064 4.064 0 1 0 0-8.128a4.064 4.064 0 0 0 0 8.128M1.002 23a6.695 6.695 0 0 1 13.388 0zm12.89-10.965c.469.183.957.311 1.455.382v2.936c.478-.478 3.347-2.869 3.825-3.31a5.75 5.75 0 0 0 3.826-5.297a5.99 5.99 0 0 0-6.216-5.742a6.2 6.2 0 0 0-5.855 3.826" strokeWidth={1}></path>
                        <path stroke="#191919" d="M13.677 7.55a.24.24 0 0 1 0-.479m0 .479a.24.24 0 0 0 0-.479m3.108.479a.24.24 0 0 1 0-.479m0 .479a.24.24 0 0 0 0-.479m3.108.479a.24.24 0 0 1 0-.479m0 .479a.24.24 0 0 0 0-.479" strokeWidth={1}></path>
                      </g>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 text-center ${isDark ? "text-black" : "text-gray-900"}`}>
                    {t('services.howItWorks.steps.consultation.title')}
                  </h3>
                  <p className={`text-center ${isDark ? "text-black" : "text-gray-600"}`}>
                    {t('services.howItWorks.steps.consultation.description')}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "border border-gray-100"
                }`}>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 64 64">
                      <path fill="#93a2aa" d="M36.6 15.1c-1.7 2.6-6.1 5.3-10 7.3c.2.2.6.8.8.8c1.1-.5 2.2-.9 3.3-1.4c2.2-1 4.4-2.3 6.4-3.8c4-3.2 5.5-12.8 8.4-13c1.7 0 3.3 2.5 4.5 3.6l1.7-1.7c.1-.1-1.3-1.4-1.4-1.5c-1.7-1.7-3.7-3.5-6.4-2.5c-3.6 1.4-5.3 9.3-7.3 12.2m9.3-10s.1 0 0 0m-1.3.2q-.15 0 0 0M2.3 60.9c-.3.4-.4.8-.2 1s.7.1 1-.2L5.5 60L4 58.5z"></path>
                      <g fill="#42ade2">
                        <path d="m28.3 26.3l9.4 9.4l23.4-25l-7.8-7.8z"></path>
                        <path d="m9.372 46.795l19.729-19.728l7.778 7.778L17.15 54.573z"></path>
                      </g>
                      <path fill="#c7d3d8" d="m3.2 57.7l3.1 3.1l10.9-6.2l-7.8-7.8zm28-34.3l9.4 9.4l-2.9 2.9l-9.4-9.4z"></path>
                      <path fill="#42ade2" d="m53.8 3.4l6.8 6.8c1.9-1.9 1.9-4.9 0-6.8s-4.9-1.9-6.8 0"></path>
                      <path fill="#c7d3d8" d="m51.953 3.748l1.414-1.414l8.344 8.344l-1.414 1.414z"></path>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 text-center ${isDark ? "text-black" : "text-gray-900"}`}>
                    {t('services.howItWorks.steps.planning.title')}
                  </h3>
                  <p className={`text-center ${isDark ? "text-black" : "text-gray-600"}`}>
                    {t('services.howItWorks.steps.planning.description')}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "border border-gray-100"
                }`}>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48">
                      <g fill="#2f88ff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
                        <path d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"></path>
                        <path d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z"></path>
                      </g>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 text-center ${isDark ? "text-black" : "text-gray-900"}`}>
                    {t('services.howItWorks.steps.coordination.title')}
                  </h3>
                  <p className={`text-center ${isDark ? "text-black" : "text-gray-600"}`}>
                    {t('services.howItWorks.steps.coordination.description')}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group relative">
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "border border-gray-100"
                }`}>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48">
                      <g fill="none" fillRule="evenodd" strokeWidth={3} clipRule="evenodd">
                        <path fill="#8fbffa" d="M43.696 9.135c.98 1.336.762 3.135-.15 4.518c-8.535 12.93-14.682 20.785-18.083 24.85c-1.687 2.015-4.617 2.163-6.525.354A165 165 0 0 1 4.955 23.794c-1.21-1.483-1.46-3.576-.282-5.085c1.024-1.312 2.193-2.438 3.25-3.33c1.753-1.48 4.284-1.144 5.86.524c4.863 5.152 7.794 8.75 7.794 8.75s4.818-7.04 12.548-17.87c1.197-1.677 3.33-2.458 5.132-1.459c1.447.803 3.129 2.025 4.439 3.81Z"></path>
                        <path stroke="#2859c5" strokeLinecap="round" strokeLinejoin="round" d="M43.696 9.135c.98 1.336.762 3.135-.15 4.518c-8.535 12.93-14.682 20.785-18.083 24.85c-1.687 2.015-4.617 2.163-6.525.354A165 165 0 0 1 4.955 23.794c-1.21-1.483-1.46-3.576-.282-5.085c1.024-1.312 2.193-2.438 3.25-3.33c1.753-1.48 4.284-1.144 5.86.524c4.863 5.152 7.794 8.75 7.794 8.75s4.818-7.04 12.548-17.87c1.197-1.677 3.33-2.458 5.132-1.459c1.447.803 3.129 2.025 4.439 3.81Z"></path>
                      </g>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 text-center ${isDark ? "text-black" : "text-gray-900"}`}>
                    {t('services.howItWorks.steps.execution.title')}
                  </h3>
                  <p className={`text-center ${isDark ? "text-black" : "text-gray-600"}`}>
                    {t('services.howItWorks.steps.execution.description')}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Event Categories Section */}
<section
        id="event-categories"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              {t('services.eventCategories.title')}
      </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.eventCategories.subtitle')}
      </p>
            </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Planning */}
            <div className="service-card group relative overflow-hidden rounded-2xl service-card-black shadow-lg animate-service-card animate-service-delay-100">
              <div className="aspect-square">
                <img
                  src="/images/Wedding Planning.jpg"
                  alt="Wedding Planning"
                  className="animate-service-image"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <h3 className="service-title">{t('services.eventCategories.weddingPlanning.title')}</h3>
                <p className="service-description">
                  {t('services.eventCategories.weddingPlanning.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="service-price">{t('services.eventCategories.weddingPlanning.price')}</span>
                  <button 
                    onClick={() => navigate('/services/wedding-planning')}
                    className="service-button bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {t('services.eventCategories.weddingPlanning.button')}
                  </button>
                </div>
              </div>
              <div className="animate-service-accent bg-white"></div>
            </div>

            {/* Corporate Events */}
            <div className="service-card group relative overflow-hidden rounded-2xl service-card-black shadow-lg animate-service-card animate-service-delay-200">
              <div className="aspect-square">
                <img
                  src="/images/CorporateEvents.jpg"
                  alt="Corporate Events"
                  className="animate-service-image"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <h3 className="service-title">{t('services.eventCategories.corporateEvents.title')}</h3>
                <p className="service-description">
                  {t('services.eventCategories.corporateEvents.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="service-price">{t('services.eventCategories.corporateEvents.price')}</span>
                  <button 
                    onClick={() => navigate('/services/corporate-events')}
                    className="service-button bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {t('services.eventCategories.corporateEvents.button')}
                  </button>
                </div>
              </div>
              <div className="animate-service-accent bg-white"></div>
            </div>

            {/* Birthday & Private Parties */}
            <div className="service-card group relative overflow-hidden rounded-2xl service-card-black shadow-lg animate-service-card animate-service-delay-300">
              <div className="aspect-square">
                <img
                  src="/images/Birthday & Private Parties.jpg"
                  alt="Birthday & Private Parties"
                  className="animate-service-image"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <h3 className="service-title">{t('services.eventCategories.birthdayParties.title')}</h3>
                <p className="service-description">
                  {t('services.eventCategories.birthdayParties.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="service-price">{t('services.eventCategories.birthdayParties.price')}</span>
                  <button 
                    onClick={() => navigate('/services/birthday-private-parties')}
                    className="service-button bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {t('services.eventCategories.birthdayParties.button')}
                  </button>
                </div>
              </div>
              <div className="animate-service-accent bg-white"></div>
          </div>

            {/* Concerts & Entertainment Shows */}
            <div className="service-card group relative overflow-hidden rounded-2xl service-card-black shadow-lg animate-service-card animate-service-delay-400">
              <div className="aspect-square">
                <img
                  src="/images/Concerts.jpg"
                  alt="Concerts & Entertainment Shows"
                  className="animate-service-image"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <h3 className="service-title">{t('services.eventCategories.concertsEntertainment.title')}</h3>
                <p className="service-description">
                  {t('services.eventCategories.concertsEntertainment.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="service-price">{t('services.eventCategories.concertsEntertainment.price')}</span>
                  <button 
                    onClick={() => navigate('/services/concerts-entertainment')}
                    className="service-button bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {t('services.eventCategories.concertsEntertainment.button')}
                  </button>
                </div>
              </div>
              <div className="animate-service-accent bg-white"></div>
          </div>

            {/* Sports & Outdoor Events */}
            <div className="service-card group relative overflow-hidden rounded-2xl service-card-black shadow-lg animate-service-card animate-service-delay-500">
              <div className="aspect-square">
                <img
                  src="/images/Sports & Outdoor Events.jpg"
                  alt="Sports & Outdoor Events"
                  className="animate-service-image"
                />
                  </div>
              <div className="absolute bottom-0 left-0 right-0">
                <h3 className="service-title">{t('services.eventCategories.sportsOutdoor.title')}</h3>
                <p className="service-description">
                  {t('services.eventCategories.sportsOutdoor.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="service-price">{t('services.eventCategories.sportsOutdoor.price')}</span>
                  <button 
                    onClick={() => navigate('/services/sports-outdoor-events')}
                    className="service-button bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {t('services.eventCategories.sportsOutdoor.button')}
                  </button>
                  </div>
              </div>
              <div className="animate-service-accent bg-white"></div>
                    </div>

            {/* Exhibitions & Trade Shows */}
            <div className="service-card group relative overflow-hidden rounded-2xl service-card-black shadow-lg animate-service-card animate-service-delay-600">
              <div className="aspect-square">
                <img
                  src="/images/Exhibitions & Trade Shows.jpg"
                  alt="Exhibitions & Trade Shows"
                  className="animate-service-image"
                />
                  </div>
              <div className="absolute bottom-0 left-0 right-0">
                <h3 className="service-title">{t('services.eventCategories.exhibitionsTradeShows.title')}</h3>
                <p className="service-description">
                  {t('services.eventCategories.exhibitionsTradeShows.description')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="service-price">{t('services.eventCategories.exhibitionsTradeShows.price')}</span>
                  <button 
                    onClick={() => navigate('/services/exhibitions-trade-shows')}
                    className="service-button bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {t('services.eventCategories.exhibitionsTradeShows.button')}
                  </button>
                  </div>
                </div>
              <div className="animate-service-accent bg-white"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Event Packages Section */}
 <section
        id="packages"
        className={`relative overflow-hidden py-20 transition-colors duration-300 ${
          isDark ? "bg-black text-white" : "bg-purple-50 text-black"
        }`}
      >
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              {t('services.eventPackages.title')}
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.eventPackages.subtitle')}
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Birthday Parties */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-2">{t('services.eventPackages.birthdayParties.title')}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{t('services.eventPackages.birthdayParties.price')}</div>
              </div>
              <div className="bg-black p-6 text-white">
                <ul className="space-y-3 text-center">
                  <li>{t('services.eventPackages.birthdayParties.duration')}</li>
                  <li>{t('services.eventPackages.birthdayParties.capacity')}</li>
                  <li>{t('services.eventPackages.birthdayParties.decoration')}</li>
                  <li>{t('services.eventPackages.birthdayParties.catering')}</li>
                </ul>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mt-6 hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Family Celebrations */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-2">{t('services.eventPackages.familyCelebrations.title')}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{t('services.eventPackages.familyCelebrations.price')}</div>
              </div>
              <div className="bg-purple-600 p-6 text-white">
                <ul className="space-y-3 text-center">
                  <li>{t('services.eventPackages.familyCelebrations.duration')}</li>
                  <li>{t('services.eventPackages.familyCelebrations.capacity')}</li>
                  <li>{t('services.eventPackages.familyCelebrations.decoration')}</li>
                  <li>{t('services.eventPackages.familyCelebrations.catering')}</li>
                </ul>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mt-6 hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Wedding Celebrations */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-2">{t('services.eventPackages.weddingCelebrations.title')}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{t('services.eventPackages.weddingCelebrations.price')}</div>
              </div>
              <div className="bg-black p-6 text-white">
                <ul className="space-y-3 text-center">
                  <li>{t('services.eventPackages.weddingCelebrations.duration')}</li>
                  <li>{t('services.eventPackages.weddingCelebrations.capacity')}</li>
                  <li>{t('services.eventPackages.weddingCelebrations.decoration')}</li>
                  <li>{t('services.eventPackages.weddingCelebrations.catering')}</li>
                </ul>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mt-6 hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Corporate Events */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-2">{t('services.eventPackages.corporateEvents.title')}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{t('services.eventPackages.corporateEvents.price')}</div>
              </div>
              <div className="bg-purple-600 p-6 text-white">
                <ul className="space-y-3 text-center">
                  <li>{t('services.eventPackages.corporateEvents.duration')}</li>
                  <li>{t('services.eventPackages.corporateEvents.capacity')}</li>
                  <li>{t('services.eventPackages.corporateEvents.decoration')}</li>
                  <li>{t('services.eventPackages.corporateEvents.catering')}</li>
    </ul>
                <button 
                  onClick={() => navigate('/services/corporate-events')}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mt-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              </div>
          </div>
        </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
 <section
        id="upcoming-events"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              {t('services.upcomingEvents.title')}
      </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.upcomingEvents.subtitle')}
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Event 1 */}
              <div className="w-full flex-shrink-0 relative">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src="/images/Summer.jpg"
                    alt="Summer Music Festival 2024"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      {t('services.upcomingEvents.summerFestival.category')}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{t('services.upcomingEvents.summerFestival.title')}</h3>
                    <p className="text-lg mb-4 opacity-90">{t('services.upcomingEvents.summerFestival.description')}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{t('services.upcomingEvents.summerFestival.date')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{t('services.upcomingEvents.summerFestival.location')}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      {t('services.upcomingEvents.summerFestival.button')}
                    </button>
                  </div>
                </div>
                </div>

              {/* Event 2 */}
              <div className="w-full flex-shrink-0 relative">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src="/images/Corparate.jpeg"
                    alt="Corporate Networking Gala"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="bg-black px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      {t('services.upcomingEvents.networkingGala.category')}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{t('services.upcomingEvents.networkingGala.title')}</h3>
                    <p className="text-lg mb-4 opacity-90">{t('services.upcomingEvents.networkingGala.description')}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{t('services.upcomingEvents.networkingGala.date')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{t('services.upcomingEvents.networkingGala.location')}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      {t('services.upcomingEvents.networkingGala.button')}
                    </button>
                  </div>
                </div>
                </div>

              {/* Event 3 */}
              <div className="w-full flex-shrink-0 relative">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src="/images/weddingc.jpg"
                    alt="Wedding Expo 2024"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      {t('services.upcomingEvents.weddingExpo.category')}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{t('services.upcomingEvents.weddingExpo.title')}</h3>
                    <p className="text-lg mb-4 opacity-90">{t('services.upcomingEvents.weddingExpo.description')}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{t('services.upcomingEvents.weddingExpo.date')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                        <span>{t('services.upcomingEvents.weddingExpo.location')}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      {t('services.upcomingEvents.weddingExpo.button')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white'
                }`}
                onClick={() => showSlide(0)}
              ></button>
              <button
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === 1 ? 'bg-white' : 'bg-white/50 hover:bg-white'
                }`}
                onClick={() => showSlide(1)}
              ></button>
              <button
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === 2 ? 'bg-white' : 'bg-white/50 hover:bg-white'
                }`}
                onClick={() => showSlide(2)}
              ></button>
            </div>

            {/* Previous/Next Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
              onClick={previousSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
              onClick={nextSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
            </button>
          </div>
        </div>
      </section>


      {/* CTA Section - Simple Design */}
      <section id="cta" className="relative overflow-hidden py-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/SBG.jpg)' }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('services.servicesCta.title')}
              </h2>
              <p className="text-xl text-purple-300 mb-8">
                {t('services.servicesCta.subtitle')}
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25"
              >
                {t('services.servicesCta.button')}
              </button>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/CTASs.jpg"
                  alt="Professional Networking Event"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


