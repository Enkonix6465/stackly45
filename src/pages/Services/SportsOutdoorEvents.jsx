import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../../utils/auth'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'

export default function SportsOutdoorEvents() {
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

  const sportsServices = [
    {
      title: t('sportsOutdoorEvents.services.tournaments.title'),
      description: t('sportsOutdoorEvents.services.tournaments.description'),
      features: t('sportsOutdoorEvents.services.tournaments.features', { returnObjects: true }),
      price: t('sportsOutdoorEvents.services.tournaments.price')
    },
    {
      title: t('sportsOutdoorEvents.services.marathons.title'),
      description: t('sportsOutdoorEvents.services.marathons.description'),
      features: t('sportsOutdoorEvents.services.marathons.features', { returnObjects: true }),
      price: t('sportsOutdoorEvents.services.marathons.price')
    },
    {
      title: t('sportsOutdoorEvents.services.outdoorFestivals.title'),
      description: t('sportsOutdoorEvents.services.outdoorFestivals.description'),
      features: t('sportsOutdoorEvents.services.outdoorFestivals.features', { returnObjects: true }),
      price: t('sportsOutdoorEvents.services.outdoorFestivals.price')
    },
    {
      title: t('sportsOutdoorEvents.services.adventureRaces.title'),
      description: t('sportsOutdoorEvents.services.adventureRaces.description'),
      features: t('sportsOutdoorEvents.services.adventureRaces.features', { returnObjects: true }),
      price: t('sportsOutdoorEvents.services.adventureRaces.price')
    },
    {
      title: t('sportsOutdoorEvents.services.teamBuilding.title'),
      description: t('sportsOutdoorEvents.services.teamBuilding.description'),
      features: t('sportsOutdoorEvents.services.teamBuilding.features', { returnObjects: true }),
      price: t('sportsOutdoorEvents.services.teamBuilding.price')
    },
    {
      title: t('sportsOutdoorEvents.services.charityEvents.title'),
      description: t('sportsOutdoorEvents.services.charityEvents.description'),
      features: t('sportsOutdoorEvents.services.charityEvents.features', { returnObjects: true }),
      price: t('sportsOutdoorEvents.services.charityEvents.price')
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: t('sportsOutdoorEvents.process.consultation.title'),
      description: t('sportsOutdoorEvents.process.consultation.description'),
      icon: "🏃"
    },
    {
      step: "02", 
      title: t('sportsOutdoorEvents.process.venue.title'),
      description: t('sportsOutdoorEvents.process.venue.description'),
      icon: "🏟️"
    },
    {
      step: "03",
      title: t('sportsOutdoorEvents.process.logistics.title'),
      description: t('sportsOutdoorEvents.process.logistics.description'),
      icon: "🚚"
    },
    {
      step: "04",
      title: t('sportsOutdoorEvents.process.execution.title'),
      description: t('sportsOutdoorEvents.process.execution.description'),
      icon: "🏆"
    }
  ]

  const testimonials = [
    {
      name: t('sportsOutdoorEvents.testimonials.sarah.name'),
      company: t('sportsOutdoorEvents.testimonials.sarah.company'),
      role: t('sportsOutdoorEvents.testimonials.sarah.role'),
      content: t('sportsOutdoorEvents.testimonials.sarah.content'),
      rating: 5
    },
    {
      name: t('sportsOutdoorEvents.testimonials.michael.name'),
      company: t('sportsOutdoorEvents.testimonials.michael.company'),
      role: t('sportsOutdoorEvents.testimonials.michael.role'),
      content: t('sportsOutdoorEvents.testimonials.michael.content'),
      rating: 5
    },
    {
      name: t('sportsOutdoorEvents.testimonials.emily.name'),
      company: t('sportsOutdoorEvents.testimonials.emily.company'),
      role: t('sportsOutdoorEvents.testimonials.emily.role'),
      content: t('sportsOutdoorEvents.testimonials.emily.content'),
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
            {t('sportsOutdoorEvents.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t('sportsOutdoorEvents.hero.description')}
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('sportsOutdoorEvents.hero.getQuote')}
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-xl"
            >
              {t('sportsOutdoorEvents.hero.viewServices')}
            </button>
          </div>
        </div>
      </section>

      {/* About Sports & Outdoor Events Section */}
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
                  src="/images/Sports & Outdoor Events.jpg"
                  alt="Sports Event Setup"
                  className="w-full h-[500px] object-cover"
                />
                {/* Circular Overlay Image */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/Agent4.jpg"
                    alt="Professional Sports Event Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t('sportsOutdoorEvents.about.title')}
              </h2>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {t('sportsOutdoorEvents.about.description')}
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
                      {t('sportsOutdoorEvents.about.services.venue.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('sportsOutdoorEvents.about.services.venue.description')}
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
                      {t('sportsOutdoorEvents.about.services.equipment.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('sportsOutdoorEvents.about.services.equipment.description')}
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
                      {t('sportsOutdoorEvents.about.services.safety.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('sportsOutdoorEvents.about.services.safety.description')}
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
              {t('sportsOutdoorEvents.services.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.services.subtitle')}
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsServices.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🏃</span>
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
                      {t('sportsOutdoorEvents.services.keyFeatures')}
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
                      {t('sportsOutdoorEvents.services.bookNow')}
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
              {t('sportsOutdoorEvents.process.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.process.subtitle')}
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
              {t('sportsOutdoorEvents.testimonials.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.testimonials.subtitle')}
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
              {t('sportsOutdoorEvents.gallery.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('sportsOutdoorEvents.gallery.marathon'), type: "Marathon", participants: "5000+", image: "/images/Sports & Outdoor Events.jpg" },
              { title: t('sportsOutdoorEvents.gallery.basketballTournament'), type: "Tournament", participants: "200+", image: "/images/Sports & Outdoor Events.jpg" },
              { title: t('sportsOutdoorEvents.gallery.outdoorFestival'), type: "Festival", participants: "3000+", image: "/images/Sports & Outdoor Events.jpg" },
              { title: t('sportsOutdoorEvents.gallery.adventureRace'), type: "Adventure Race", participants: "150+", image: "/images/Sports & Outdoor Events.jpg" },
              { title: t('sportsOutdoorEvents.gallery.charityWalk'), type: "Charity Event", participants: "1000+", image: "/images/Sports & Outdoor Events.jpg" },
              { title: t('sportsOutdoorEvents.gallery.teamBuilding'), type: "Team Building", participants: "50+", image: "/images/Sports & Outdoor Events.jpg" }
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
                    <p className="text-sm opacity-90">{event.participants} {t('sportsOutdoorEvents.gallery.participants')}</p>
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
              {t('sportsOutdoorEvents.pricing.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('sportsOutdoorEvents.pricing.basic.name'),
                price: t('sportsOutdoorEvents.pricing.basic.price'),
                duration: t('sportsOutdoorEvents.pricing.basic.duration'),
                participants: t('sportsOutdoorEvents.pricing.basic.participants'),
                features: t('sportsOutdoorEvents.pricing.basic.features', { returnObjects: true }),
                popular: false
              },
              {
                name: t('sportsOutdoorEvents.pricing.premium.name'),
                price: t('sportsOutdoorEvents.pricing.premium.price'),
                duration: t('sportsOutdoorEvents.pricing.premium.duration'),
                participants: t('sportsOutdoorEvents.pricing.premium.participants'),
                features: t('sportsOutdoorEvents.pricing.premium.features', { returnObjects: true }),
                popular: true
              },
              {
                name: t('sportsOutdoorEvents.pricing.luxury.name'),
                price: t('sportsOutdoorEvents.pricing.luxury.price'),
                duration: t('sportsOutdoorEvents.pricing.luxury.duration'),
                participants: t('sportsOutdoorEvents.pricing.luxury.participants'),
                features: t('sportsOutdoorEvents.pricing.luxury.features', { returnObjects: true }),
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
              } ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                    {t('sportsOutdoorEvents.pricing.premium.popular')}
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
                    <p>{pkg.duration} • {pkg.participants} participants</p>
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
                    {t('sportsOutdoorEvents.pricing.getStarted')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('sportsOutdoorEvents.equipment.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.equipment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🏃", title: t('sportsOutdoorEvents.equipment.timing.title'), description: t('sportsOutdoorEvents.equipment.timing.description') },
              { icon: "📊", title: t('sportsOutdoorEvents.equipment.scoring.title'), description: t('sportsOutdoorEvents.equipment.scoring.description') },
              { icon: "📡", title: t('sportsOutdoorEvents.equipment.communication.title'), description: t('sportsOutdoorEvents.equipment.communication.description') },
              { icon: "🏟️", title: t('sportsOutdoorEvents.equipment.venueSetup.title'), description: t('sportsOutdoorEvents.equipment.venueSetup.description') },
              { icon: "🚨", title: t('sportsOutdoorEvents.equipment.safety.title'), description: t('sportsOutdoorEvents.equipment.safety.description') },
              { icon: "📱", title: t('sportsOutdoorEvents.equipment.mobileApps.title'), description: t('sportsOutdoorEvents.equipment.mobileApps.description') },
              { icon: "📺", title: t('sportsOutdoorEvents.equipment.liveStreaming.title'), description: t('sportsOutdoorEvents.equipment.liveStreaming.description') },
              { icon: "🎵", title: t('sportsOutdoorEvents.equipment.audio.title'), description: t('sportsOutdoorEvents.equipment.audio.description') }
            ].map((equipment, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="text-4xl mb-4">{equipment.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {equipment.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {equipment.description}
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
              {t('sportsOutdoorEvents.successStories.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('sportsOutdoorEvents.successStories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                organization: t('sportsOutdoorEvents.successStories.cityMarathon.organization'),
                event: t('sportsOutdoorEvents.successStories.cityMarathon.event'),
                participants: t('sportsOutdoorEvents.successStories.cityMarathon.participants'),
                satisfaction: t('sportsOutdoorEvents.successStories.cityMarathon.satisfaction'),
                result: t('sportsOutdoorEvents.successStories.cityMarathon.result'),
                quote: t('sportsOutdoorEvents.successStories.cityMarathon.quote')
              },
              {
                organization: t('sportsOutdoorEvents.successStories.basketballLeague.organization'),
                event: t('sportsOutdoorEvents.successStories.basketballLeague.event'),
                participants: t('sportsOutdoorEvents.successStories.basketballLeague.participants'),
                satisfaction: t('sportsOutdoorEvents.successStories.basketballLeague.satisfaction'),
                result: t('sportsOutdoorEvents.successStories.basketballLeague.result'),
                quote: t('sportsOutdoorEvents.successStories.basketballLeague.quote')
              },
              {
                organization: t('sportsOutdoorEvents.successStories.charityWalk.organization'),
                event: t('sportsOutdoorEvents.successStories.charityWalk.event'),
                participants: t('sportsOutdoorEvents.successStories.charityWalk.participants'),
                satisfaction: t('sportsOutdoorEvents.successStories.charityWalk.satisfaction'),
                result: t('sportsOutdoorEvents.successStories.charityWalk.result'),
                quote: t('sportsOutdoorEvents.successStories.charityWalk.quote')
              },
              {
                organization: t('sportsOutdoorEvents.successStories.adventureRace.organization'),
                event: t('sportsOutdoorEvents.successStories.adventureRace.event'),
                participants: t('sportsOutdoorEvents.successStories.adventureRace.participants'),
                satisfaction: t('sportsOutdoorEvents.successStories.adventureRace.satisfaction'),
                result: t('sportsOutdoorEvents.successStories.adventureRace.result'),
                quote: t('sportsOutdoorEvents.successStories.adventureRace.quote')
              }
            ].map((story, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {story.organization}
                  </h3>
                  <p className={`text-lg ${isDark ? "text-purple-400" : "text-purple-600"} font-semibold mb-4`}>
                    {story.event}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.participants}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('sportsOutdoorEvents.successStories.participants')}
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.satisfaction}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('sportsOutdoorEvents.successStories.satisfaction')}
                    </div>
                  </div>
                </div>

                <div className={`mb-4 p-4 rounded-lg ${isDark ? "bg-purple-900/30" : "bg-purple-50"}`}>
                  <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {t('sportsOutdoorEvents.successStories.keyResult')}
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
              {t('sportsOutdoorEvents.cta.title')}
            </h2>
            <p className="text-white/80 mb-6">
              {t('sportsOutdoorEvents.cta.description')}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('sportsOutdoorEvents.cta.features.0')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('sportsOutdoorEvents.cta.features.1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('sportsOutdoorEvents.cta.features.2')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('sportsOutdoorEvents.cta.features.3')}</span>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <button
              onClick={() => navigate('/contact')}
              className="btn-animate-strong inline-flex items-center justify-center rounded-lg bg-purple-500 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('sportsOutdoorEvents.cta.button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
