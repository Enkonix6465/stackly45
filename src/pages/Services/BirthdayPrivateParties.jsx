import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../../utils/auth'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'

export default function BirthdayPrivateParties() {
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

  const birthdayServices = [
    {
      title: t('birthdayParties.services.kidsBirthday.title'),
      description: t('birthdayParties.services.kidsBirthday.description'),
      features: t('birthdayParties.services.kidsBirthday.features', { returnObjects: true }),
      price: t('birthdayParties.services.kidsBirthday.price')
    },
    {
      title: t('birthdayParties.services.adultBirthday.title'),
      description: t('birthdayParties.services.adultBirthday.description'),
      features: t('birthdayParties.services.adultBirthday.features', { returnObjects: true }),
      price: t('birthdayParties.services.adultBirthday.price')
    },
    {
      title: t('birthdayParties.services.anniversary.title'),
      description: t('birthdayParties.services.anniversary.description'),
      features: t('birthdayParties.services.anniversary.features', { returnObjects: true }),
      price: t('birthdayParties.services.anniversary.price')
    },
    {
      title: t('birthdayParties.services.graduation.title'),
      description: t('birthdayParties.services.graduation.description'),
      features: t('birthdayParties.services.graduation.features', { returnObjects: true }),
      price: t('birthdayParties.services.graduation.price')
    },
    {
      title: t('birthdayParties.services.retirement.title'),
      description: t('birthdayParties.services.retirement.description'),
      features: t('birthdayParties.services.retirement.features', { returnObjects: true }),
      price: t('birthdayParties.services.retirement.price')
    },
    {
      title: t('birthdayParties.services.housewarming.title'),
      description: t('birthdayParties.services.housewarming.description'),
      features: t('birthdayParties.services.housewarming.features', { returnObjects: true }),
      price: t('birthdayParties.services.housewarming.price')
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: t('birthdayParties.process.consultation.title'),
      description: t('birthdayParties.process.consultation.description'),
      icon: "🎉"
    },
    {
      step: "02", 
      title: t('birthdayParties.process.theme.title'),
      description: t('birthdayParties.process.theme.description'),
      icon: "🎨"
    },
    {
      step: "03",
      title: t('birthdayParties.process.coordination.title'),
      description: t('birthdayParties.process.coordination.description'),
      icon: "🎪"
    },
    {
      step: "04",
      title: t('birthdayParties.process.execution.title'),
      description: t('birthdayParties.process.execution.description'),
      icon: "🎊"
    }
  ]

  const testimonials = [
    {
      name: t('birthdayParties.testimonials.sarah.name'),
      company: t('birthdayParties.testimonials.sarah.company'),
      role: t('birthdayParties.testimonials.sarah.role'),
      content: t('birthdayParties.testimonials.sarah.content'),
      rating: 5
    },
    {
      name: t('birthdayParties.testimonials.michael.name'),
      company: t('birthdayParties.testimonials.michael.company'),
      role: t('birthdayParties.testimonials.michael.role'),
      content: t('birthdayParties.testimonials.michael.content'),
      rating: 5
    },
    {
      name: t('birthdayParties.testimonials.emily.name'),
      company: t('birthdayParties.testimonials.emily.company'),
      role: t('birthdayParties.testimonials.emily.role'),
      content: t('birthdayParties.testimonials.emily.content'),
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
          <source src="/S3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            {t('birthdayParties.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t('birthdayParties.hero.description')}
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('birthdayParties.hero.getQuote')}
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-xl"
            >
              {t('birthdayParties.hero.viewServices')}
            </button>
          </div>
        </div>
      </section>

      {/* About Birthday Parties Section */}
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
                  src="/images/Birthday & Private Parties.jpg"
                  alt="Birthday Party Setup"
                  className="w-full h-[500px] object-cover"
                />
                {/* Circular Overlay Image */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/Agent2.jpg"
                    alt="Professional Party Planner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t('birthdayParties.about.title')}
              </h2>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {t('birthdayParties.about.description')}
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
                      {t('birthdayParties.about.services.theme.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('birthdayParties.about.services.theme.description')}
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
                      {t('birthdayParties.about.services.entertainment.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('birthdayParties.about.services.entertainment.description')}
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
                      {t('birthdayParties.about.services.catering.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('birthdayParties.about.services.catering.description')}
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
              {t('birthdayParties.services.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.services.subtitle')}
            </p>
            <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayServices.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎂</span>
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
                      {t('birthdayParties.services.keyFeatures')}
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
                      {t('birthdayParties.services.bookNow')}
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
              {t('birthdayParties.process.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.process.subtitle')}
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
              {t('birthdayParties.testimonials.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.testimonials.subtitle')}
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

      {/* Party Themes Gallery Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('birthdayParties.gallery.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('birthdayParties.gallery.princessTheme'), type: "Kids Party", guests: "20+", image: "/images/Birthday & Private Parties.jpg" },
              { title: t('birthdayParties.gallery.superheroTheme'), type: "Kids Party", guests: "25+", image: "/images/Birthday & Private Parties.jpg" },
              { title: t('birthdayParties.gallery.elegantDinner'), type: "Adult Party", guests: "50+", image: "/images/Birthday & Private Parties.jpg" },
              { title: t('birthdayParties.gallery.gardenParty'), type: "Outdoor Party", guests: "30+", image: "/images/Birthday & Private Parties.jpg" },
              { title: t('birthdayParties.gallery.anniversaryCelebration'), type: "Anniversary", guests: "40+", image: "/images/Birthday & Private Parties.jpg" },
              { title: t('birthdayParties.gallery.graduationParty'), type: "Graduation", guests: "60+", image: "/images/Birthday & Private Parties.jpg" }
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
                    <p className="text-sm opacity-90">{event.guests} {t('birthdayParties.gallery.guests')}</p>
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
              {t('birthdayParties.pricing.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('birthdayParties.pricing.basic.name'),
                price: t('birthdayParties.pricing.basic.price'),
                duration: t('birthdayParties.pricing.basic.duration'),
                guests: t('birthdayParties.pricing.basic.guests'),
                features: t('birthdayParties.pricing.basic.features', { returnObjects: true }),
                popular: false
              },
              {
                name: t('birthdayParties.pricing.premium.name'),
                price: t('birthdayParties.pricing.premium.price'),
                duration: t('birthdayParties.pricing.premium.duration'),
                guests: t('birthdayParties.pricing.premium.guests'),
                features: t('birthdayParties.pricing.premium.features', { returnObjects: true }),
                popular: true
              },
              {
                name: t('birthdayParties.pricing.luxury.name'),
                price: t('birthdayParties.pricing.luxury.price'),
                duration: t('birthdayParties.pricing.luxury.duration'),
                guests: t('birthdayParties.pricing.luxury.guests'),
                features: t('birthdayParties.pricing.luxury.features', { returnObjects: true }),
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
              } ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                    {t('birthdayParties.pricing.premium.popular')}
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
                    <p>{pkg.duration} • {pkg.guests} guests</p>
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
                    {t('birthdayParties.pricing.getStarted')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment & Activities Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('birthdayParties.entertainment.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.entertainment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎭", title: t('birthdayParties.entertainment.magicians.title'), description: t('birthdayParties.entertainment.magicians.description') },
              { icon: "🎨", title: t('birthdayParties.entertainment.facePainting.title'), description: t('birthdayParties.entertainment.facePainting.description') },
              { icon: "🎪", title: t('birthdayParties.entertainment.clowns.title'), description: t('birthdayParties.entertainment.clowns.description') },
              { icon: "🎵", title: t('birthdayParties.entertainment.dj.title'), description: t('birthdayParties.entertainment.dj.description') },
              { icon: "🎮", title: t('birthdayParties.entertainment.games.title'), description: t('birthdayParties.entertainment.games.description') },
              { icon: "🎈", title: t('birthdayParties.entertainment.balloonArt.title'), description: t('birthdayParties.entertainment.balloonArt.description') },
              { icon: "📸", title: t('birthdayParties.entertainment.photoBooth.title'), description: t('birthdayParties.entertainment.photoBooth.description') },
              { icon: "🎂", title: t('birthdayParties.entertainment.cakeDecorating.title'), description: t('birthdayParties.entertainment.cakeDecorating.description') }
            ].map((entertainment, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="text-4xl mb-4">{entertainment.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {entertainment.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {entertainment.description}
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
              {t('birthdayParties.successStories.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.successStories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                family: t('birthdayParties.successStories.johnsonFamily.family'),
                event: t('birthdayParties.successStories.johnsonFamily.event'),
                guests: t('birthdayParties.successStories.johnsonFamily.guests'),
                satisfaction: t('birthdayParties.successStories.johnsonFamily.satisfaction'),
                result: t('birthdayParties.successStories.johnsonFamily.result'),
                quote: t('birthdayParties.successStories.johnsonFamily.quote')
              },
              {
                family: t('birthdayParties.successStories.smithFamily.family'),
                event: t('birthdayParties.successStories.smithFamily.event'),
                guests: t('birthdayParties.successStories.smithFamily.guests'),
                satisfaction: t('birthdayParties.successStories.smithFamily.satisfaction'),
                result: t('birthdayParties.successStories.smithFamily.result'),
                quote: t('birthdayParties.successStories.smithFamily.quote')
              },
              {
                family: t('birthdayParties.successStories.davisFamily.family'),
                event: t('birthdayParties.successStories.davisFamily.event'),
                guests: t('birthdayParties.successStories.davisFamily.guests'),
                satisfaction: t('birthdayParties.successStories.davisFamily.satisfaction'),
                result: t('birthdayParties.successStories.davisFamily.result'),
                quote: t('birthdayParties.successStories.davisFamily.quote')
              },
              {
                family: t('birthdayParties.successStories.wilsonFamily.family'),
                event: t('birthdayParties.successStories.wilsonFamily.event'),
                guests: t('birthdayParties.successStories.wilsonFamily.guests'),
                satisfaction: t('birthdayParties.successStories.wilsonFamily.satisfaction'),
                result: t('birthdayParties.successStories.wilsonFamily.result'),
                quote: t('birthdayParties.successStories.wilsonFamily.quote')
              }
            ].map((story, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
              }`}>
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {story.family}
                  </h3>
                  <p className={`text-lg ${isDark ? "text-purple-400" : "text-purple-600"} font-semibold mb-4`}>
                    {story.event}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.guests}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('birthdayParties.successStories.guests')}
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {story.satisfaction}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('birthdayParties.successStories.satisfaction')}
                    </div>
                  </div>
                </div>

                <div className={`mb-4 p-4 rounded-lg ${isDark ? "bg-purple-900/30" : "bg-purple-50"}`}>
                  <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {t('birthdayParties.successStories.keyResult')}
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
              {t('birthdayParties.cta.title')}
            </h2>
            <p className="text-white/80 mb-6">
              {t('birthdayParties.cta.description')}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('birthdayParties.cta.features.0')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('birthdayParties.cta.features.1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('birthdayParties.cta.features.2')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-white/90">{t('birthdayParties.cta.features.3')}</span>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <button
              onClick={() => navigate('/contact')}
              className="btn-animate-strong inline-flex items-center justify-center rounded-lg bg-purple-500 px-8 py-4 font-bold text-lg text-white transition-all duration-300 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              {t('birthdayParties.cta.button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
