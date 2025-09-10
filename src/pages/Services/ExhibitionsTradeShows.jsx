import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../../utils/auth'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../hooks/useLanguage'

export default function ExhibitionsTradeShows() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const [isDark, setIsDark] = useState(false)

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

  const exhibitionServices = [
    {
      title: t('exhibitionsTradeShows.services.tradeShows.title'),
      description: t('exhibitionsTradeShows.services.tradeShows.description'),
      features: t('exhibitionsTradeShows.services.tradeShows.features', { returnObjects: true }),
      price: t('exhibitionsTradeShows.services.tradeShows.price')
    },
    {
      title: t('exhibitionsTradeShows.services.productExhibitions.title'),
      description: t('exhibitionsTradeShows.services.productExhibitions.description'),
      features: t('exhibitionsTradeShows.services.productExhibitions.features', { returnObjects: true }),
      price: t('exhibitionsTradeShows.services.productExhibitions.price')
    },
    {
      title: t('exhibitionsTradeShows.services.industryConferences.title'),
      description: t('exhibitionsTradeShows.services.industryConferences.description'),
      features: t('exhibitionsTradeShows.services.industryConferences.features', { returnObjects: true }),
      price: t('exhibitionsTradeShows.services.industryConferences.price')
    },
    {
      title: t('exhibitionsTradeShows.services.boothManagement.title'),
      description: t('exhibitionsTradeShows.services.boothManagement.description'),
      features: t('exhibitionsTradeShows.services.boothManagement.features', { returnObjects: true }),
      price: t('exhibitionsTradeShows.services.boothManagement.price')
    },
    {
      title: t('exhibitionsTradeShows.services.brandActivations.title'),
      description: t('exhibitionsTradeShows.services.brandActivations.description'),
      features: t('exhibitionsTradeShows.services.brandActivations.features', { returnObjects: true }),
      price: t('exhibitionsTradeShows.services.brandActivations.price')
    },
    {
      title: t('exhibitionsTradeShows.services.leadGeneration.title'),
      description: t('exhibitionsTradeShows.services.leadGeneration.description'),
      features: t('exhibitionsTradeShows.services.leadGeneration.features', { returnObjects: true }),
      price: t('exhibitionsTradeShows.services.leadGeneration.price')
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: t('exhibitionsTradeShows.process.strategy.title'),
      description: t('exhibitionsTradeShows.process.strategy.description'),
      icon: "🎯"
    },
    {
      step: "02", 
      title: t('exhibitionsTradeShows.process.design.title'),
      description: t('exhibitionsTradeShows.process.design.description'),
      icon: "🎨"
    },
    {
      step: "03",
      title: t('exhibitionsTradeShows.process.logistics.title'),
      description: t('exhibitionsTradeShows.process.logistics.description'),
      icon: "🚚"
    },
    {
      step: "04",
      title: t('exhibitionsTradeShows.process.execution.title'),
      description: t('exhibitionsTradeShows.process.execution.description'),
      icon: "🎪"
    }
  ]

  const testimonials = [
    {
      name: t('exhibitionsTradeShows.testimonials.alex.name'),
      company: t('exhibitionsTradeShows.testimonials.alex.company'),
      role: t('exhibitionsTradeShows.testimonials.alex.role'),
      content: t('exhibitionsTradeShows.testimonials.alex.content'),
      rating: 5
    },
    {
      name: t('exhibitionsTradeShows.testimonials.maria.name'),
      company: t('exhibitionsTradeShows.testimonials.maria.company'),
      role: t('exhibitionsTradeShows.testimonials.maria.role'),
      content: t('exhibitionsTradeShows.testimonials.maria.content'),
      rating: 5
    },
    {
      name: t('exhibitionsTradeShows.testimonials.david.name'),
      company: t('exhibitionsTradeShows.testimonials.david.company'),
      role: t('exhibitionsTradeShows.testimonials.david.role'),
      content: t('exhibitionsTradeShows.testimonials.david.content'),
      rating: 5
    }
  ]

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar user={user} />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center text-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Corporate Events Excellence.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          {/* Language Indicator */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              <span className="text-lg">
                {currentLanguage === 'en' ? '🇺🇸' : currentLanguage === 'ar' ? '🇸🇦' : '🇮🇱'}
              </span>
              <span>
                {currentLanguage === 'en' ? 'English' : currentLanguage === 'ar' ? 'العربية' : 'עברית'}
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            {t('exhibitionsTradeShows.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t('exhibitionsTradeShows.hero.description')}
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('exhibitionsTradeShows.hero.getQuote')}
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-xl"
            >
              {t('exhibitionsTradeShows.hero.viewServices')}
            </button>
          </div>
        </div>
      </section>

      {/* Language Demo Section */}
      <section 
        className={`py-8 transition-colors duration-300 ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
              🌐 Language Switching Demo
            </h3>
            <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Current Language: <strong>{currentLanguage === 'en' ? 'English' : currentLanguage === 'ar' ? 'العربية' : 'עברית'}</strong> | 
              Use the language selector in the navigation bar to switch languages
            </p>
          </div>
        </div>
      </section>

      {/* About Exhibitions & Trade Shows Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Images */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/Exhibitions & Trade Shows.jpg"
                  alt={t('exhibitionsTradeShows.gallery.altTexts.exhibitionSetup')}
                  className="w-full h-[500px] object-cover"
                />
                {/* Circular Overlay Image */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/Agent2.jpg"
                    alt={t('exhibitionsTradeShows.gallery.altTexts.professionalManager')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t('exhibitionsTradeShows.about.title')}
              </h2>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {t('exhibitionsTradeShows.about.description')}
              </p>

              {/* Services List */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    isDark ? "bg-purple-600" : "bg-purple-500"
                  }`}>
                    1
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {t('exhibitionsTradeShows.about.services.boothDesign.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('exhibitionsTradeShows.about.services.boothDesign.description')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    isDark ? "bg-purple-600" : "bg-purple-500"
                  }`}>
                    2
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {t('exhibitionsTradeShows.about.services.logistics.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('exhibitionsTradeShows.about.services.logistics.description')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    isDark ? "bg-purple-600" : "bg-purple-500"
                  }`}>
                    3
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {t('exhibitionsTradeShows.about.services.engagement.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('exhibitionsTradeShows.about.services.engagement.description')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.services.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.services.subtitle')}
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitionServices.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {service.title}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-4`}>
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {t('exhibitionsTradeShows.services.keyFeatures')}
                    </h4>
                    <ul className={`space-y-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                      {service.price}
                    </span>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      {t('exhibitionsTradeShows.services.bookNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.process.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.process.subtitle')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`relative mb-6 ${isDark ? "bg-gray-800" : "bg-white"} rounded-2xl p-8 shadow-lg`}>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className={`text-sm font-bold ${isDark ? "text-purple-400" : "text-purple-600"} mb-2`}>
                    STEP {step.step}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {step.title}
                  </h3>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.testimonials.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.testimonials.subtitle')}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-6 italic`}>
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Gallery Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.gallery.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('exhibitionsTradeShows.gallery.techExpo'), type: t('exhibitionsTradeShows.gallery.types.techExpo'), attendees: "5000+", image: "/images/gaming.jpg" },
              { title: t('exhibitionsTradeShows.gallery.healthcareConference'), type: t('exhibitionsTradeShows.gallery.types.healthcare'), attendees: "2000+", image: "/images/healthcare.jpg" },
              { title: t('exhibitionsTradeShows.gallery.marketingSummit'), type: t('exhibitionsTradeShows.gallery.types.marketing'), attendees: "1500+", image: "/images/Marketing Summit.jpg" },
              { title: t('exhibitionsTradeShows.gallery.designWorkshop'), type: t('exhibitionsTradeShows.gallery.types.design'), attendees: "800+", image: "/images/Design Workshop.jpeg" },
              { title: t('exhibitionsTradeShows.gallery.digitalForum'), type: t('exhibitionsTradeShows.gallery.types.digital'), attendees: "1200+", image: "/images/digital-marketing.jpg" },
              { title: t('exhibitionsTradeShows.gallery.techConference'), type: t('exhibitionsTradeShows.gallery.types.conference'), attendees: "3000+", image: "/images/Tech Conference.jpg" }
            ].map((event, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                      {event.type}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <p className="text-sm opacity-90">{event.attendees} {t('exhibitionsTradeShows.gallery.attendees')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.pricing.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('exhibitionsTradeShows.pricing.standard.name'),
                price: t('exhibitionsTradeShows.pricing.standard.price'),
                duration: t('exhibitionsTradeShows.pricing.standard.duration'),
                attendees: t('exhibitionsTradeShows.pricing.standard.attendees'),
                features: t('exhibitionsTradeShows.pricing.standard.features', { returnObjects: true }),
                popular: false
              },
              {
                name: t('exhibitionsTradeShows.pricing.premium.name'),
                price: t('exhibitionsTradeShows.pricing.premium.price'),
                duration: t('exhibitionsTradeShows.pricing.premium.duration'),
                attendees: t('exhibitionsTradeShows.pricing.premium.attendees'),
                features: t('exhibitionsTradeShows.pricing.premium.features', { returnObjects: true }),
                popular: true
              },
              {
                name: t('exhibitionsTradeShows.pricing.enterprise.name'),
                price: t('exhibitionsTradeShows.pricing.enterprise.price'),
                duration: t('exhibitionsTradeShows.pricing.enterprise.duration'),
                attendees: t('exhibitionsTradeShows.pricing.enterprise.attendees'),
                features: t('exhibitionsTradeShows.pricing.enterprise.features', { returnObjects: true }),
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
              } ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                    {t('exhibitionsTradeShows.pricing.premium.popular')}
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                    {pkg.price}
                  </div>
                  <div className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <p>{pkg.duration} • {pkg.attendees} attendees</p>
                  </div>
                  <ul className={`space-y-3 mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                      pkg.popular 
                        ? "bg-purple-600 hover:bg-purple-700 text-white" 
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    {t('exhibitionsTradeShows.pricing.getStarted')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.technology.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.technology.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📱", title: t('exhibitionsTradeShows.technology.eventApps.title'), description: t('exhibitionsTradeShows.technology.eventApps.description') },
              { icon: "📊", title: t('exhibitionsTradeShows.technology.analytics.title'), description: t('exhibitionsTradeShows.technology.analytics.description') },
              { icon: "🎤", title: t('exhibitionsTradeShows.technology.audioVisual.title'), description: t('exhibitionsTradeShows.technology.audioVisual.description') },
              { icon: "💡", title: t('exhibitionsTradeShows.technology.lighting.title'), description: t('exhibitionsTradeShows.technology.lighting.description') },
              { icon: "📸", title: t('exhibitionsTradeShows.technology.photography.title'), description: t('exhibitionsTradeShows.technology.photography.description') },
              { icon: "🔗", title: t('exhibitionsTradeShows.technology.networking.title'), description: t('exhibitionsTradeShows.technology.networking.description') },
              { icon: "🎮", title: t('exhibitionsTradeShows.technology.interactive.title'), description: t('exhibitionsTradeShows.technology.interactive.description') },
              { icon: "📺", title: t('exhibitionsTradeShows.technology.streaming.title'), description: t('exhibitionsTradeShows.technology.streaming.description') }
            ].map((tech, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {tech.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('exhibitionsTradeShows.successStories.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('exhibitionsTradeShows.successStories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: t('exhibitionsTradeShows.successStories.techExpo2024.company'),
                event: t('exhibitionsTradeShows.successStories.techExpo2024.event'),
                attendees: t('exhibitionsTradeShows.successStories.techExpo2024.attendees'),
                satisfaction: t('exhibitionsTradeShows.successStories.techExpo2024.satisfaction'),
                result: t('exhibitionsTradeShows.successStories.techExpo2024.result'),
                quote: t('exhibitionsTradeShows.successStories.techExpo2024.quote')
              },
              {
                company: t('exhibitionsTradeShows.successStories.healthcareSummit.company'),
                event: t('exhibitionsTradeShows.successStories.healthcareSummit.event'),
                attendees: t('exhibitionsTradeShows.successStories.healthcareSummit.attendees'),
                satisfaction: t('exhibitionsTradeShows.successStories.healthcareSummit.satisfaction'),
                result: t('exhibitionsTradeShows.successStories.healthcareSummit.result'),
                quote: t('exhibitionsTradeShows.successStories.healthcareSummit.quote')
              },
              {
                company: t('exhibitionsTradeShows.successStories.marketingForum.company'),
                event: t('exhibitionsTradeShows.successStories.marketingForum.event'),
                attendees: t('exhibitionsTradeShows.successStories.marketingForum.attendees'),
                satisfaction: t('exhibitionsTradeShows.successStories.marketingForum.satisfaction'),
                result: t('exhibitionsTradeShows.successStories.marketingForum.result'),
                quote: t('exhibitionsTradeShows.successStories.marketingForum.quote')
              },
              {
                company: t('exhibitionsTradeShows.successStories.designExpo.company'),
                event: t('exhibitionsTradeShows.successStories.designExpo.event'),
                attendees: t('exhibitionsTradeShows.successStories.designExpo.attendees'),
                satisfaction: t('exhibitionsTradeShows.successStories.designExpo.satisfaction'),
                result: t('exhibitionsTradeShows.successStories.designExpo.result'),
                quote: t('exhibitionsTradeShows.successStories.designExpo.quote')
              }
            ].map((story, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {story.company}
                  </h3>
                  <p className={`text-lg ${isDark ? "text-purple-400" : "text-purple-600"} font-semibold mb-4`}>
                    {story.event}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.attendees}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('exhibitionsTradeShows.successStories.attendees')}
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.satisfaction}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('exhibitionsTradeShows.successStories.satisfaction')}
                    </div>
                  </div>
                </div>

                <div className={`mb-4 p-4 rounded-lg ${isDark ? "bg-purple-900/30" : "bg-purple-50"}`}>
                  <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {t('exhibitionsTradeShows.successStories.keyResult')}
                  </h4>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {story.result}
                  </p>
                </div>

                <blockquote className={`italic ${isDark ? "text-gray-300" : "text-gray-600"} border-l-4 border-purple-500 pl-4`}>
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-black/10 relative overflow-hidden">
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
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {t('exhibitionsTradeShows.cta.title')}
            </h2>
            <p className="text-white/80 mb-6">
              {t('exhibitionsTradeShows.cta.description')}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('exhibitionsTradeShows.cta.features.0')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('exhibitionsTradeShows.cta.features.1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('exhibitionsTradeShows.cta.features.2')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('exhibitionsTradeShows.cta.features.3')}</span>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <button
              onClick={() => navigate('/contact')}
              className="btn-animate-strong inline-flex items-center justify-center rounded-lg bg-purple-500 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('exhibitionsTradeShows.cta.button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
