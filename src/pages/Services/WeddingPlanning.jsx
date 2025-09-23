import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../../utils/auth'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function WeddingPlanning() {
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

  const weddingServices = [
    {
      title: t('weddingPlanning.services.fullPlanning.title'),
      description: t('weddingPlanning.services.fullPlanning.description'),
      features: t('weddingPlanning.services.fullPlanning.features', { returnObjects: true }),
      price: t('weddingPlanning.services.fullPlanning.price')
    },
    {
      title: t('weddingPlanning.services.dayCoordination.title'),
      description: t('weddingPlanning.services.dayCoordination.description'),
      features: t('weddingPlanning.services.dayCoordination.features', { returnObjects: true }),
      price: t('weddingPlanning.services.dayCoordination.price')
    },
    {
      title: t('weddingPlanning.services.destinationWedding.title'),
      description: t('weddingPlanning.services.destinationWedding.description'),
      features: t('weddingPlanning.services.destinationWedding.features', { returnObjects: true }),
      price: t('weddingPlanning.services.destinationWedding.price')
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: t('weddingPlanning.process.consultation.title'),
      description: t('weddingPlanning.process.consultation.description'),
      icon: "💕"
    },
    {
      step: "02", 
      title: t('weddingPlanning.process.design.title'),
      description: t('weddingPlanning.process.design.description'),
      icon: "🎨"
    },
    {
      step: "03",
      title: t('weddingPlanning.process.coordination.title'),
      description: t('weddingPlanning.process.coordination.description'),
      icon: "🤝"
    },
    {
      step: "04",
      title: t('weddingPlanning.process.execution.title'),
      description: t('weddingPlanning.process.execution.description'),
      icon: "💒"
    }
  ]

  const testimonials = [
    {
      name: t('weddingPlanning.testimonials.sarah.name'),
      company: t('weddingPlanning.testimonials.sarah.company'),
      role: t('weddingPlanning.testimonials.sarah.role'),
      content: t('weddingPlanning.testimonials.sarah.content'),
      rating: 5
    },
    {
      name: t('weddingPlanning.testimonials.michael.name'),
      company: t('weddingPlanning.testimonials.michael.company'),
      role: t('weddingPlanning.testimonials.michael.role'),
      content: t('weddingPlanning.testimonials.michael.content'),
      rating: 5
    },
    {
      name: t('weddingPlanning.testimonials.emily.name'),
      company: t('weddingPlanning.testimonials.emily.company'),
      role: t('weddingPlanning.testimonials.emily.role'),
      content: t('weddingPlanning.testimonials.emily.content'),
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
          <source src="/S1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('weddingPlanning.hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('weddingPlanning.hero.description')}
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
              {t('weddingPlanning.hero.getQuote')}
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-white text-white hover:bg-white hover:text-purple-600 shadow-white/20'}`}
            >
              {t('weddingPlanning.hero.viewServices')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Wedding Planning Section */}
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
                  src="/images/Wedding Planning.jpg"
                  alt="Wedding Planning Setup"
                  className="w-full h-[500px] object-cover"
                />
                {/* Circular Overlay Image */}
                <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/images/Ss1.jpg"
                    alt="Professional Wedding Planner"
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
                {t('weddingPlanning.about.title')}
              </h2>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {t('weddingPlanning.about.description')}
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
                      {t('weddingPlanning.about.services.venue.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('weddingPlanning.about.services.venue.description')}
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
                      {t('weddingPlanning.about.services.vendors.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('weddingPlanning.about.services.vendors.description')}
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
                      {t('weddingPlanning.about.services.coordination.title')}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {t('weddingPlanning.about.services.coordination.description')}
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
              {t('weddingPlanning.services.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('weddingPlanning.services.subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingServices.map((service, index) => (
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
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 72 72">
                        <path fill="#92d3f5" d="M38 61v-3.3c0-3.7 3.7-6.7 7.4-6.7c4.4 3.7 8.8 3.7 13.3 0c3.7 0 7.4 3 7.4 6.7V61M6 61v-3.3C6 54 9.7 51 13.4 51c4.4 3.7 8.8 3.7 13.3 0c3.7 0 7.4 3 7.4 6.7V61"></path>
                        <path fill="#ea5a47" d="M36 11.7c1.1-2.4 4-3.4 6.3-2.2s3.3 4 2.2 6.4c-.1.3-.3.5-.4.7L36 27l-8.1-10.4c-.2-.2-.3-.5-.4-.7c-1.1-2.4-.1-5.2 2.2-6.4s5.2-.2 6.3 2.2"></path>
                        <path fill="#a57939" d="M41.5 52.1c1.2-.7 2.5-1.1 3.9-1.1c4.4 3.7 8.8 3.7 13.3 0c1.4 0 2.8.4 4 1.2c.9-.6 1.7-1.3 2.3-2.2c1.5-2 2-6.7.7-9.8c-1.8-4.2-2.3-4.2-2.6-9.6c-.1-3.1-2.5-5.7-5.6-6c0 0-1.9-2.3-6-2.3c-4.8 0-9.2 2.6-10.3 6.7c-1.2 4.2.2 5.9-1 9.1c-1.4 3.6-3.6 8.4-1.4 11.9c.4.6 1.3 1.4 2.7 2.1M9.1 31.4c.6-8.7 7.2-8.8 10.5-8.3c.3.1 1.2 0 1.5 0c6-.8 9 6 9 9c0 1.1 0 3.8-1.5 5.3c0 0-3.4-4.2-3.6-6.6c0 0-11.4 4.3-12.2.6c0 0-.8 3-1.5 3.8v3s-2.5-3-2.2-6.8"></path>
                        <path fill="#fcea2b" d="M43.7 37.3c0 6 3.8 10.5 8.3 10.5s8.3-4.5 8.3-10.5c0-3.8-1.5-6-4.5-9c-3 3-12 6.8-12 8.3zM25 30.8s-11.4 4.3-12.2.6c0 0-.8 3-1.5 3.8v3c.6 5.5 4.2 9.8 8.6 9.8c4.6 0 8.4-4.7 8.7-10.6c-.3-.4-3.4-4.3-3.6-6.6"></path>
                        <path fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} d="M28.6 36.1v.7c0 6.2-3.9 11.3-8.7 11.3s-8.7-5.1-8.7-11.3v-.7"></path>
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.1 31.4c.6-8.7 7.2-8.8 10.5-8.3c.3.1 1.2 0 1.5 0c6-.8 9 6 9 9c0 1.1 0 3.8-1.5 5.3c0 0-3.4-4.2-3.6-6.6c0 0-11.4 4.3-12.2.6c0 0-.8 3-1.5 3.8v3s-2.5-3-2.2-6.8M36 11.7c1.1-2.4 4-3.4 6.3-2.2s3.3 4 2.2 6.4c-.1.3-.3.5-.4.7L36 27l-8.1-10.4c-.2-.2-.3-.5-.4-.7c-1.1-2.4-.1-5.2 2.2-6.4s5.2-.2 6.3 2.2m3.4 37.7c-3-4.5-.6-7.7.8-11.3c1.2-3.2-.2-4.9 1-9.1c1.1-4.1 5.5-6.7 10.3-6.7c4.1 0 6 2.3 6 2.3c3.1.3 5.5 2.9 5.6 6c.3 5.4.8 5.4 2.6 9.6c1.3 3.1.8 6.6-1.4 9.1"></path>
                        <path fill="none" stroke="#000" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} d="M43.7 37.5c0 6 3.8 10.5 8.3 10.5s8.3-4.5 8.3-10.5c0-3.8-1.5-6-4.5-9c-3 3-12 6.8-12 8.3z"></path>
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M38 60v-2.3c0-3.7 3.7-6.7 7.4-6.7c4.4 3.7 8.8 3.7 13.3 0c3.7 0 7.4 3 7.4 6.7V60M6 60v-2.3C6 54 9.7 51 13.4 51c4.4 3.7 8.8 3.7 13.3 0c3.7 0 7.4 3 7.4 6.7V60"></path>
                        <path d="M56.2 37.2c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.6 1.4 1.4m-5.6 0c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.6 1.4 1.4"></path>
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M49.9 42.9c1.3.7 2.9.7 4.2 0"></path>
                        <path d="M24.2 37.4c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.7 1.4 1.4m-5.6 0c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4s1.4.7 1.4 1.4"></path>
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.9 43.2c1.3.7 2.9.7 4.2 0"></path>
                      </svg>
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
                      {t('weddingPlanning.services.keyFeatures')}
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
                      {t('weddingPlanning.services.bookNow')}
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
              {t('weddingPlanning.testimonials.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('weddingPlanning.testimonials.subtitle')}
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

      {/* Wedding Gallery Section */}
      <section 
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {t('weddingPlanning.gallery.title')}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t('weddingPlanning.gallery.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('weddingPlanning.gallery.gardenWedding'), type: "Garden Wedding", guests: "150", image: "/images/Garden Wedding.jpg" },
              { title: t('weddingPlanning.gallery.beachWedding'), type: "Beach Wedding", guests: "80", image: "/images/Beach Wedding.jpg" },
              { title: t('weddingPlanning.gallery.ballroomWedding'), type: "Ballroom Wedding", guests: "200", image: "/images/Ballroom Wedding.jpg" },
              { title: t('weddingPlanning.gallery.intimateWedding'), type: "Intimate Wedding", guests: "50", image: "/images/Intimate Wedding.jpg" },
              { title: t('weddingPlanning.gallery.destinationWedding'), type: "Destination Wedding", guests: "120", image: "/images/Destination Wedding.jpg" },
              { title: t('weddingPlanning.gallery.culturalWedding'), type: "Cultural Wedding", guests: "300", image: "/images/Cultural Wedding.jpg" }
            ].map((wedding, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={wedding.image} alt={wedding.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                      {wedding.type}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{wedding.title}</h3>
                    <p className="text-sm opacity-90">{wedding.guests} {t('weddingPlanning.gallery.guests')}</p>
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
              {t('weddingPlanning.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('weddingPlanning.cta.description')}
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
                {t('weddingPlanning.cta.button')}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
