import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../../utils/auth'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

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
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('birthdayParties.hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('birthdayParties.hero.description')}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => navigate('/contact')}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-white text-purple-600 hover:bg-purple-50 shadow-white/20'}`}
            >
              {t('birthdayParties.hero.getQuote')}
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-white text-white hover:bg-white hover:text-purple-600 shadow-white/20'}`}
            >
              {t('birthdayParties.hero.viewServices')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Birthday Parties Section */}
      <section 
        className={`relative ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'} overflow-hidden py-20`}
      >
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Images */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/B1.jpg"
                  alt="Birthday Party Setup"
                  className="w-full h-[500px] object-cover"
                />
                {/* Circular Overlay Image */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/B2.jpeg"
                    alt="Professional Party Planner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div 
              className={`${isDark ? "text-white" : "text-black"}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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

            </motion.div>
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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('birthdayParties.services.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('birthdayParties.services.subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayServices.map((service, index) => (
              <motion.div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section 
        className={`relative ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'} overflow-hidden py-20`}
      >
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
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
              { title: t('birthdayParties.gallery.princessTheme'), type: "Kids Party", guests: "20+", image: "/images/Kids Party.jpg" },
              { title: t('birthdayParties.gallery.superheroTheme'), type: "Kids Party", guests: "25+", image: "/images/Superhero Theme Party.jpg" },
              { title: t('birthdayParties.gallery.elegantDinner'), type: "Adult Party", guests: "50+", image: "/images/Adult Party.jpg" },
              { title: t('birthdayParties.gallery.gardenParty'), type: "Outdoor Party", guests: "30+", image: "/images/Garden Party.jpeg" },
              { title: t('birthdayParties.gallery.anniversaryCelebration'), type: "Anniversary", guests: "40+", image: "/images/Anniversary Celebration.jpg" },
              { title: t('birthdayParties.gallery.graduationParty'), type: "Graduation", guests: "60+", image: "/images/Graduation Party.jpg" }
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
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('birthdayParties.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('birthdayParties.cta.description')}
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => navigate('/contact')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-white text-purple-600 hover:bg-purple-50 shadow-white/20'}`}
              >
                {t('birthdayParties.cta.button')}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
