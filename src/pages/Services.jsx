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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none text-white whitespace-nowrap">
            {t('services.showcase.title')}
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto whitespace-nowrap">
            {t('services.showcase.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25"
            >
              {t('services.showcase.exploreButton')}
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => navigate('/about')}
              className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border-white text-white hover:bg-white hover:text-purple-600 shadow-white/20"
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
            <p className={`text-xl max-w-3xl mx-auto whitespace-nowrap ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.howItWorks.subtitle')}
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full"></div>
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
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <p className={`text-xl max-w-3xl mx-auto whitespace-nowrap ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.eventCategories.subtitle')}
      </p>
            </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              {t('services.eventPackages.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('services.eventPackages.subtitle')}
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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


      {/* 6) CTA (distinct for freelancing platform) */}
      <section id="cta" className="border-t border-black/10 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url(/images/CalltoAction.jpg)' }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Blur Effect */}
        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold text-white">{t('services.servicesCta.title')}</h2>
               <p className="mt-2 text-white/80">
      {t('services.servicesCta.subtitle')}
    </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
      {t('services.servicesCta.benefits', { returnObjects: true }).map((benefit, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          <span className="text-white/90">{benefit}</span>
        </li>
      ))}
    </ul>
          </div>
          <div className="md:justify-self-end">
            <a
              href="/about"
              className="btn-animate-strong inline-flex items-center justify-center rounded-lg bg-purple-500 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('services.servicesCta.button')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


