import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'

export default function Contact() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: ''
  })

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

  const user = getCurrentUser()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert(t('contact.successMessage'))
  }

  const eventTypes = [
    t('contact.form.eventTypes.weddingPlanning'),
    t('contact.form.eventTypes.corporateEvents'),
    t('contact.form.eventTypes.birthdayPrivateParties'),
    t('contact.form.eventTypes.concerts'),
    t('contact.form.eventTypes.exhibitionsTradeShows'),
    t('contact.form.eventTypes.sportsOutdoorEvents'),
    t('contact.form.eventTypes.other')
  ]

  return (
    <div className={`transition-colors duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar user={user} />

      {/* Showcase Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center text-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {t('contact.showcase.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              {t('contact.showcase.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}>
                {t('contact.showcase.getFreeQuote')}
              </button>
              <button className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}>
                {t('contact.showcase.callNow')}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {t('contact.form.title')}
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('contact.form.subtitle')}
                </p>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('contact.form.fullName')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500'
                      }`}
                      placeholder={t('contact.form.placeholders.fullName')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('contact.form.emailAddress')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500'
                      }`}
                      placeholder={t('contact.form.placeholders.email')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('contact.form.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500'
                      }`}
                      placeholder={t('contact.form.placeholders.phone')}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('contact.form.eventType')} *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    >
                      <option value="">{t('contact.form.placeholders.selectEventType')}</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('contact.form.eventDate')}
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('contact.form.budgetRange')}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-black'
                      }`}
                    >
                      <option value="">{t('contact.form.placeholders.selectBudgetRange')}</option>
                      <option value="under-5k">{t('contact.form.budgetRanges.under5k')}</option>
                      <option value="5k-10k">{t('contact.form.budgetRanges.5k10k')}</option>
                      <option value="10k-25k">{t('contact.form.budgetRanges.10k25k')}</option>
                      <option value="25k-50k">{t('contact.form.budgetRanges.25k50k')}</option>
                      <option value="50k-plus">{t('contact.form.budgetRanges.50kPlus')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('contact.form.tellUsAboutEvent')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder={t('contact.form.placeholders.eventDescription')}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
                >
                  {t('contact.form.sendInquiry')}
                </button>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {t('contact.map.title')}
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('contact.map.subtitle')}
                </p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953736315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1620211234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
                <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                    {t('contact.map.officeHours')}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact.map.hours.mondayFriday')}</span>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{t('contact.map.times.weekday')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact.map.hours.saturday')}</span>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{t('contact.map.times.saturday')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact.map.hours.sunday')}</span>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{t('contact.map.hours.closed')}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
                <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                    {t('contact.map.parkingTransportation')}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{t('contact.map.parking.title')}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact.map.parking.description')}</p>
                    </div>
                    <div>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>{t('contact.map.transport.title')}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact.map.transport.description')}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`relative overflow-hidden py-20 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-purple-50 text-black"
      }`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {t('contact.faq.title')}
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('contact.faq.subtitle')}
                </p>
              </ScrollAnimation>
            </div>

            <div className="space-y-4">
              {t('faq.questions', { returnObjects: true }).map((faq, index) => (
                <ScrollAnimation key={index} animation="fade-in" stagger={`scroll-stagger-${index + 3}`}>
                  <div className={`border rounded-lg ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                    <button
                      className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-opacity-80 transition-colors ${
                        isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-50'
                      }`}
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling
                        const icon = e.currentTarget.querySelector('svg')
                        if (content.style.maxHeight) {
                          content.style.maxHeight = null
                          icon.style.transform = 'rotate(0deg)'
                        } else {
                          content.style.maxHeight = content.scrollHeight + 'px'
                          icon.style.transform = 'rotate(180deg)'
                        }
                      }}
                    >
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                        {faq.question}
                      </h3>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: '0px' }}
                    >
                      <div className={`px-6 pb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}