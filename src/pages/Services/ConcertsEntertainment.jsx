import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../../utils/auth'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'

export default function ConcertsEntertainment() {
  const navigate = useNavigate()
  const { t } = useTranslation()
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

  const concertServices = [
    {
      title: t('concertsEntertainment.services.liveConcerts.title'),
      description: t('concertsEntertainment.services.liveConcerts.description'),
      features: t('concertsEntertainment.services.liveConcerts.features', { returnObjects: true }),
      price: t('concertsEntertainment.services.liveConcerts.price')
    },
    {
      title: t('concertsEntertainment.services.musicFestivals.title'),
      description: t('concertsEntertainment.services.musicFestivals.description'),
      features: t('concertsEntertainment.services.musicFestivals.features', { returnObjects: true }),
      price: t('concertsEntertainment.services.musicFestivals.price')
    },
    {
      title: t('concertsEntertainment.services.theaterShows.title'),
      description: t('concertsEntertainment.services.theaterShows.description'),
      features: t('concertsEntertainment.services.theaterShows.features', { returnObjects: true }),
      price: t('concertsEntertainment.services.theaterShows.price')
    },
    {
      title: t('concertsEntertainment.services.comedyShows.title'),
      description: t('concertsEntertainment.services.comedyShows.description'),
      features: t('concertsEntertainment.services.comedyShows.features', { returnObjects: true }),
      price: t('concertsEntertainment.services.comedyShows.price')
    },
    {
      title: t('concertsEntertainment.services.dancePerformances.title'),
      description: t('concertsEntertainment.services.dancePerformances.description'),
      features: t('concertsEntertainment.services.dancePerformances.features', { returnObjects: true }),
      price: t('concertsEntertainment.services.dancePerformances.price')
    },
    {
      title: t('concertsEntertainment.services.culturalEvents.title'),
      description: t('concertsEntertainment.services.culturalEvents.description'),
      features: t('concertsEntertainment.services.culturalEvents.features', { returnObjects: true }),
      price: t('concertsEntertainment.services.culturalEvents.price')
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: t('concertsEntertainment.process.consultation.title'),
      description: t('concertsEntertainment.process.consultation.description'),
      icon: "🎵"
    },
    {
      step: "02", 
      title: t('concertsEntertainment.process.venue.title'),
      description: t('concertsEntertainment.process.venue.description'),
      icon: "🏟️"
    },
    {
      step: "03",
      title: t('concertsEntertainment.process.production.title'),
      description: t('concertsEntertainment.process.production.description'),
      icon: "🎭"
    },
    {
      step: "04",
      title: t('concertsEntertainment.process.execution.title'),
      description: t('concertsEntertainment.process.execution.description'),
      icon: "🎪"
    }
  ]

  const testimonials = [
    {
      name: t('concertsEntertainment.testimonials.sarah.name'),
      company: t('concertsEntertainment.testimonials.sarah.company'),
      role: t('concertsEntertainment.testimonials.sarah.role'),
      content: t('concertsEntertainment.testimonials.sarah.content'),
      rating: 5
    },
    {
      name: t('concertsEntertainment.testimonials.michael.name'),
      company: t('concertsEntertainment.testimonials.michael.company'),
      role: t('concertsEntertainment.testimonials.michael.role'),
      content: t('concertsEntertainment.testimonials.michael.content'),
      rating: 5
    },
    {
      name: t('concertsEntertainment.testimonials.emily.name'),
      company: t('concertsEntertainment.testimonials.emily.company'),
      role: t('concertsEntertainment.testimonials.emily.role'),
      content: t('concertsEntertainment.testimonials.emily.content'),
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
          <source src="/Services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            {t('concertsEntertainment.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t('concertsEntertainment.hero.description')}
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('concertsEntertainment.hero.getQuote')}
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-xl"
            >
              {t('concertsEntertainment.hero.viewServices')}
            </button>
          </div>
        </div>
      </section>

      {/* About Concerts & Entertainment Section */}
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
                  src="/images/Concerts.jpg"
                  alt="Concert Setup"
                  className="w-full h-[500px] object-cover"
                />
                {/* Circular Overlay Image */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/Agent3.jpg"
                    alt="Professional Event Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t('concertsEntertainment.about.title')}
              </h2>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {t('concertsEntertainment.about.description')}
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
                      {t('concertsEntertainment.about.services.production.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('concertsEntertainment.about.services.production.description')}
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
                      {t('concertsEntertainment.about.services.technical.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('concertsEntertainment.about.services.technical.description')}
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
                      {t('concertsEntertainment.about.services.marketing.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('concertsEntertainment.about.services.marketing.description')}
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
              {t('concertsEntertainment.services.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.services.subtitle')}
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concertServices.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎵</span>
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
                      {t('concertsEntertainment.services.keyFeatures')}
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
                      {t('concertsEntertainment.services.bookNow')}
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
              {t('concertsEntertainment.process.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.process.subtitle')}
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
              {t('concertsEntertainment.testimonials.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.testimonials.subtitle')}
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
              {t('concertsEntertainment.gallery.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('concertsEntertainment.gallery.rockConcert'), type: "Rock Concert", attendees: "5000+", image: "/images/Concerts.jpg" },
              { title: t('concertsEntertainment.gallery.jazzFestival'), type: "Jazz Festival", attendees: "3000+", image: "/images/Concerts.jpg" },
              { title: t('concertsEntertainment.gallery.broadwayShow'), type: "Broadway Show", attendees: "1500+", image: "/images/Concerts.jpg" },
              { title: t('concertsEntertainment.gallery.comedyNight'), type: "Comedy Night", attendees: "800+", image: "/images/Concerts.jpg" },
              { title: t('concertsEntertainment.gallery.danceShow'), type: "Dance Show", attendees: "1200+", image: "/images/Concerts.jpg" },
              { title: t('concertsEntertainment.gallery.culturalFestival'), type: "Cultural Festival", attendees: "2000+", image: "/images/Concerts.jpg" }
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
                    <p className="text-sm opacity-90">{event.attendees} {t('concertsEntertainment.gallery.attendees')}</p>
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
              {t('concertsEntertainment.pricing.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('concertsEntertainment.pricing.basic.name'),
                price: t('concertsEntertainment.pricing.basic.price'),
                duration: t('concertsEntertainment.pricing.basic.duration'),
                attendees: t('concertsEntertainment.pricing.basic.attendees'),
                features: t('concertsEntertainment.pricing.basic.features', { returnObjects: true }),
                popular: false
              },
              {
                name: t('concertsEntertainment.pricing.premium.name'),
                price: t('concertsEntertainment.pricing.premium.price'),
                duration: t('concertsEntertainment.pricing.premium.duration'),
                attendees: t('concertsEntertainment.pricing.premium.attendees'),
                features: t('concertsEntertainment.pricing.premium.features', { returnObjects: true }),
                popular: true
              },
              {
                name: t('concertsEntertainment.pricing.luxury.name'),
                price: t('concertsEntertainment.pricing.luxury.price'),
                duration: t('concertsEntertainment.pricing.luxury.duration'),
                attendees: t('concertsEntertainment.pricing.luxury.attendees'),
                features: t('concertsEntertainment.pricing.luxury.features', { returnObjects: true }),
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
              } ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                    {t('concertsEntertainment.pricing.premium.popular')}
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
                    {t('concertsEntertainment.pricing.getStarted')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('concertsEntertainment.technology.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.technology.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎤", title: t('concertsEntertainment.technology.soundSystems.title'), description: t('concertsEntertainment.technology.soundSystems.description') },
              { icon: "💡", title: t('concertsEntertainment.technology.lighting.title'), description: t('concertsEntertainment.technology.lighting.description') },
              { icon: "📺", title: t('concertsEntertainment.technology.videoProduction.title'), description: t('concertsEntertainment.technology.videoProduction.description') },
              { icon: "🎛️", title: t('concertsEntertainment.technology.mixingBoards.title'), description: t('concertsEntertainment.technology.mixingBoards.description') },
              { icon: "📡", title: t('concertsEntertainment.technology.liveStreaming.title'), description: t('concertsEntertainment.technology.liveStreaming.description') },
              { icon: "🎪", title: t('concertsEntertainment.technology.stageSetup.title'), description: t('concertsEntertainment.technology.stageSetup.description') },
              { icon: "🔊", title: t('concertsEntertainment.technology.monitoring.title'), description: t('concertsEntertainment.technology.monitoring.description') },
              { icon: "📱", title: t('concertsEntertainment.technology.interactiveTech.title'), description: t('concertsEntertainment.technology.interactiveTech.description') }
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
              {t('concertsEntertainment.successStories.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('concertsEntertainment.successStories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                venue: t('concertsEntertainment.successStories.musicHall.venue'),
                event: t('concertsEntertainment.successStories.musicHall.event'),
                attendees: t('concertsEntertainment.successStories.musicHall.attendees'),
                satisfaction: t('concertsEntertainment.successStories.musicHall.satisfaction'),
                result: t('concertsEntertainment.successStories.musicHall.result'),
                quote: t('concertsEntertainment.successStories.musicHall.quote')
              },
              {
                venue: t('concertsEntertainment.successStories.theaterDistrict.venue'),
                event: t('concertsEntertainment.successStories.theaterDistrict.event'),
                attendees: t('concertsEntertainment.successStories.theaterDistrict.attendees'),
                satisfaction: t('concertsEntertainment.successStories.theaterDistrict.satisfaction'),
                result: t('concertsEntertainment.successStories.theaterDistrict.result'),
                quote: t('concertsEntertainment.successStories.theaterDistrict.quote')
              },
              {
                venue: t('concertsEntertainment.successStories.festivalGrounds.venue'),
                event: t('concertsEntertainment.successStories.festivalGrounds.event'),
                attendees: t('concertsEntertainment.successStories.festivalGrounds.attendees'),
                satisfaction: t('concertsEntertainment.successStories.festivalGrounds.satisfaction'),
                result: t('concertsEntertainment.successStories.festivalGrounds.result'),
                quote: t('concertsEntertainment.successStories.festivalGrounds.quote')
              },
              {
                venue: t('concertsEntertainment.successStories.comedyClub.venue'),
                event: t('concertsEntertainment.successStories.comedyClub.event'),
                attendees: t('concertsEntertainment.successStories.comedyClub.attendees'),
                satisfaction: t('concertsEntertainment.successStories.comedyClub.satisfaction'),
                result: t('concertsEntertainment.successStories.comedyClub.result'),
                quote: t('concertsEntertainment.successStories.comedyClub.quote')
              }
            ].map((story, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {story.venue}
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
                      {t('concertsEntertainment.successStories.attendees')}
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.satisfaction}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('concertsEntertainment.successStories.satisfaction')}
                    </div>
                  </div>
                </div>

                <div className={`mb-4 p-4 rounded-lg ${isDark ? "bg-purple-900/30" : "bg-purple-50"}`}>
                  <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {t('concertsEntertainment.successStories.keyResult')}
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
              {t('concertsEntertainment.cta.title')}
            </h2>
            <p className="text-white/80 mb-6">
              {t('concertsEntertainment.cta.description')}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('concertsEntertainment.cta.features.0')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('concertsEntertainment.cta.features.1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('concertsEntertainment.cta.features.2')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('concertsEntertainment.cta.features.3')}</span>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <button
              onClick={() => navigate('/contact')}
              className="btn-animate-strong inline-flex items-center justify-center rounded-lg bg-purple-500 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('concertsEntertainment.cta.button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
