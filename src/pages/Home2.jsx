import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Home2() {
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







  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar user={user} />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-[100vh] min-h-[600px] text-white">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Home2.mp4" type="video/mp4" />
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('home2.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('home2.hero.subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => navigate('/contact')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
              >
                {t('home2.hero.createEvent')}
              </button>
              <button 
                onClick={() => navigate('/services')}
                className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}
              >
                {t('home2.hero.browseEvents')}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('home2.showcase.title')}
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-white' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('home2.showcase.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`p-8 rounded-2xl shadow-xl h-full ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="space-y-8">
                <div className={`p-6 rounded-xl shadow-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold mb-3">{t('home2.showcase.features.comprehensive.title')}</h3>
                  <p className={isDark ? 'text-white' : 'text-gray-600'}>{t('home2.showcase.features.comprehensive.description')}</p>
                </div>
                
                <div className={`p-6 rounded-xl shadow-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold mb-3">{t('home2.showcase.features.integration.title')}</h3>
                  <p className={isDark ? 'text-white' : 'text-gray-600'}>{t('home2.showcase.features.integration.description')}</p>
                </div>
                
                <div className={`p-6 rounded-xl shadow-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold mb-3">{t('home2.showcase.features.scalability.title')}</h3>
                  <p className={isDark ? 'text-white' : 'text-gray-600'}>{t('home2.showcase.features.scalability.description')}</p>
                </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`p-8 rounded-2xl shadow-xl h-full ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <h3 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-black'}`}>{t('home2.showcase.highlights.title')}</h3>
                <div className="space-y-4">
                  {[
                    t('home2.showcase.highlights.precision'),
                    t('home2.showcase.highlights.speed'),
                    t('home2.showcase.highlights.security'),
                    t('home2.showcase.highlights.analytics'),
                    t('home2.showcase.highlights.global'),
                    t('home2.showcase.highlights.innovation'),
                    t('home2.platform.features.reliability.title'),
                    t('home2.platform.features.customization.title'),
                    t('home2.platform.features.mobile.title')
                  ].map((text, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className={`mt-2 w-2.5 h-2.5 rounded-full ${isDark ? 'bg-purple-400' : 'bg-purple-600'} ring-4 ${isDark ? 'ring-purple-400/10' : 'ring-purple-600/10'}`}></span>
                      <span className={isDark ? 'text-white' : 'text-gray-700'}>{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          
        </div>
      </section>


      {/* Event Management Platform Section */}
      <section className={`relative overflow-hidden py-24 ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'}`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-96 sm:h-96 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-12 -left-12 sm:-bottom-24 sm:-left-24 w-36 h-36 sm:w-72 sm:h-72 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('home2.platform.title')}
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-white' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('home2.platform.subtitle')}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t('home2.platform.comprehensive.title')}</h3>
              <p className={`mb-6 ${isDark ? 'text-white' : 'text-gray-600'}`}>{t('home2.platform.comprehensive.description')}</p>
              
              <div className="space-y-4">
                {[
                  t('home2.platform.comprehensive.features.eventPlanning'),
                  t('home2.platform.comprehensive.features.analytics'),
                  t('home2.platform.comprehensive.features.security'),
                  t('home2.platform.comprehensive.features.integration')
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className={`mt-2 w-2.5 h-2.5 rounded-full ${isDark ? 'bg-purple-400' : 'bg-purple-600'} ring-4 ${isDark ? 'ring-purple-400/10' : 'ring-purple-600/10'}`}></span>
                    <span className={isDark ? 'text-white' : 'text-gray-700'}>{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`p-8 rounded-2xl shadow-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: t('home2.platform.features.mobile.title'), desc: t('home2.platform.features.mobile.desc') },
                    { title: t('home2.platform.features.speed.title'), desc: t('home2.platform.features.speed.desc') },
                    { title: t('home2.platform.features.reliability.title'), desc: t('home2.platform.features.reliability.desc') },
                    { title: t('home2.platform.features.customization.title'), desc: t('home2.platform.features.customization.desc') }
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mx-auto mb-3 w-2.5 h-2.5 rounded-full bg-purple-600/80 dark:bg-purple-400/80 ring-4 ring-purple-600/10 dark:ring-purple-400/10"></div>
                      <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>{feature.title}</h4>
                      <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-600'}`}>{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Platform Benefits */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>{t('home2.platform.benefits.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
                      <g fill="none" strokeWidth={3}>
                        <path fill="#fff" d="M42.377 11.323c.664-3.235.657-6.087.601-7.43a.9.9 0 0 0-.869-.87a31.7 31.7 0 0 0-7.43.601c-.753.154-1.002 1.075-.46 1.618l6.54 6.54c.544.543 1.464.293 1.618-.459"></path>
                        <path fill="#8fbffa" d="M5.267 44.96c-1.128-.037-1.992-.719-2.106-1.841C3.07 42.239 3 40.932 3 39s.072-3.24.16-4.119c.115-1.122.979-1.804 2.107-1.842C5.934 33.017 6.827 33 8 33s2.066.017 2.733.04c1.128.037 1.992.719 2.106 1.841c.09.88.161 2.187.161 4.119s-.072 3.24-.16 4.119c-.115 1.122-.979 1.804-2.107 1.842c-.668.022-1.56.039-2.733.039s-2.066-.017-2.733-.04m32.29-.026c-1.3-.08-2.203-1.018-2.297-2.317C35.132 40.856 35 37.667 35 32s.132-8.856.26-10.617c.094-1.299.997-2.238 2.297-2.317C38.187 19.027 38.99 19 40 19s1.813.027 2.443.066c1.3.08 2.203 1.018 2.297 2.317c.128 1.761.26 4.95.26 10.617s-.132 8.856-.26 10.617c-.094 1.299-.997 2.238-2.297 2.317c-.63.039-1.432.066-2.443.066c-1.01 0-1.813-.027-2.443-.066m-16.057.018c-1.264-.055-2.187-.9-2.293-2.16C19.098 41.494 19 39.386 19 36s.098-5.494.207-6.792c.106-1.26 1.029-2.105 2.292-2.16A57 57 0 0 1 24 27c1.042 0 1.862.02 2.5.048c1.264.055 2.187.9 2.293 2.16c.109 1.298.207 3.406.207 6.792s-.098 5.494-.207 6.792c-.106 1.26-1.029 2.105-2.292 2.16c-.639.028-1.459.048-2.501.048a58 58 0 0 1-2.5-.048"></path>
                        <path stroke="#2859c5" strokeLinecap="round" strokeLinejoin="round" d="M5 26c5.86-6.959 11.184-10.966 13.613-12.612c.794-.539 1.841-.363 2.444.383a95 95 0 0 1 3.31 4.377c.808 1.132 2.513 1.168 3.408.104C31.911 13.34 37.501 8.5 37.501 8.5"></path>
                        <path stroke="#2859c5" strokeLinecap="round" strokeLinejoin="round" d="M42.376 11.323c.664-3.235.657-6.087.601-7.43a.9.9 0 0 0-.869-.87a31.7 31.7 0 0 0-7.43.601c-.753.154-1.002 1.075-.46 1.618l6.54 6.54c.544.543 1.464.293 1.618-.459M5.267 44.96c-1.128-.037-1.992-.719-2.106-1.841C3.07 42.239 3 40.932 3 39s.072-3.24.16-4.119c.115-1.122.979-1.804 2.107-1.842C5.934 33.017 6.827 33 8 33s2.066.017 2.733.04c1.128.037 1.992.719 2.106 1.841c.09.88.161 2.187.161 4.119s-.072 3.24-.16 4.119c-.115 1.122-.979 1.804-2.107 1.842c-.668.022-1.56.039-2.733.039s-2.066-.017-2.733-.04m32.29-.026c-1.3-.08-2.203-1.018-2.297-2.317C35.132 40.856 35 37.667 35 32s.132-8.856.26-10.617c.094-1.299.997-2.238 2.297-2.317C38.187 19.027 38.99 19 40 19s1.813.027 2.443.066c1.3.08 2.203 1.018 2.297 2.317c.128 1.761.26 4.95.26 10.617s-.132 8.856-.26 10.617c-.094 1.299-.997 2.238-2.297 2.317c-.63.039-1.432.066-2.443.066c-1.01 0-1.813-.027-2.443-.066m-16.057.018c-1.264-.055-2.187-.9-2.293-2.16C19.098 41.494 19 39.386 19 36s.098-5.494.207-6.792c.106-1.26 1.029-2.105 2.292-2.16A57 57 0 0 1 24 27c1.042 0 1.862.02 2.5.048c1.264.055 2.187.9 2.293 2.16c.109 1.298.207 3.406.207 6.792s-.098 5.494-.207 6.792c-.106 1.26-1.029 2.105-2.292 2.16c-.639.028-1.459.048-2.501.048a58 58 0 0 1-2.5-.048"></path>
                      </g>
                    </svg>
                  ), 
                  title: t('home2.platform.benefits.growth.title'), 
                  description: t('home2.platform.benefits.growth.description') 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 128 128">
                      <path fill="#ffca28" d="M93.46 39.45c6.71-1.49 15.45-8.15 16.78-11.43c.78-1.92-3.11-4.92-4.15-6.13c-2.38-2.76-1.42-4.12-.5-7.41c1.05-3.74-1.44-7.87-4.97-9.49s-7.75-1.11-11.3.47s-6.58 4.12-9.55 6.62c-2.17-1.37-5.63-7.42-11.23-3.49c-3.87 2.71-4.22 8.61-3.72 13.32c1.17 10.87 3.85 16.51 8.9 18.03c6.38 1.92 13.44.91 19.74-.49"></path>
                      <path fill="#e2a610" d="M104.36 8.18c-.85 14.65-15.14 24.37-21.92 28.65l4.4 3.78s2.79.06 6.61-1.16c6.55-2.08 16.12-7.96 16.78-11.43c.97-5.05-4.21-3.95-5.38-7.94c-.61-2.11 2.97-6.1-.49-11.9m-24.58 3.91s-2.55-2.61-4.44-3.8c-.94 1.77-1.61 3.69-1.94 5.67c-.59 3.48 0 8.42 1.39 12.1c.22.57 1.04.48 1.13-.12c1.2-7.91 3.86-13.85 3.86-13.85"></path>
                      <path fill="#ffca28" d="M61.96 38.16S30.77 41.53 16.7 68.61s-2.11 43.5 10.55 49.48s44.56 8.09 65.31 3.17s25.94-15.12 24.97-24.97c-1.41-14.38-14.77-23.22-14.77-23.22s.53-17.76-13.25-29.29c-12.23-10.24-27.55-5.62-27.55-5.62"></path>
                      <path fill="#6b4b46" d="M74.76 83.73c-6.69-8.44-14.59-9.57-17.12-12.6c-1.38-1.65-2.19-3.32-1.88-5.39c.33-2.2 2.88-3.72 4.86-4.09c2.31-.44 7.82-.21 12.45 4.2c1.1 1.04.7 2.66.67 4.11c-.08 3.11 4.37 6.13 7.97 3.53c3.61-2.61.84-8.42-1.49-11.24c-1.76-2.13-8.14-6.82-16.07-7.56c-2.23-.21-11.2-1.54-16.38 8.31c-1.49 2.83-2.04 9.67 5.76 15.45c1.63 1.21 10.09 5.51 12.44 8.3c4.07 4.83 1.28 9.08-1.9 9.64c-8.67 1.52-13.58-3.17-14.49-5.74c-.65-1.83.03-3.81-.81-5.53c-.86-1.77-2.62-2.47-4.48-1.88c-6.1 1.94-4.16 8.61-1.46 12.28c2.89 3.93 6.44 6.3 10.43 7.6c14.89 4.85 22.05-2.81 23.3-8.42c.92-4.11.82-7.67-1.8-10.97"></path>
                      <path fill="none" stroke="#6b4b46" strokeMiterlimit={10} strokeWidth={5} d="M71.16 48.99c-12.67 27.06-14.85 61.23-14.85 61.23"></path>
                      <path fill="#6d4c41" d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47"></path>
                      <path fill="#6b4b46" d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47"></path>
                      <path fill="#e2a610" d="M96.49 58.86c1.06-.73 4.62.53 5.62 7.5c.49 3.41.64 6.71.64 6.71s-4.2-3.77-5.59-6.42c-1.75-3.35-2.43-6.59-.67-7.79"></path>
                    </svg>
                  ), 
                  title: t('home2.platform.benefits.cost.title'), 
                  description: t('home2.platform.benefits.cost.description') 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 128 128">
                      <path fill="#82aec0" d="M32.04 123.67a3.12 3.12 0 0 1-1.55-3.8l4.02-11.77l7.87 5.31l-6.36 9.24a3.13 3.13 0 0 1-3.98 1.02m63.32 0c1.39-.7 2.06-2.32 1.55-3.8l-4.07-11.91l-8.29 4.77l6.83 9.92a3.13 3.13 0 0 0 3.98 1.02"></path>
                      <path fill="#2f7889" d="m34.51 108.1l-2.05 6c1.27-.73 2.93-.66 4.25-.01s2.33 1.79 3.1 3.05l2.33-3.38c0-.14-7.63-5.66-7.63-5.66m58.36-.15l2.22 6.6c-1.27-.73-2.79-.71-4.12-.06c-1.32.65-2.33 1.79-3.1 3.05l-3.05-4.43z"></path>
                      <circle cx={63.7} cy={73.93} r={42.01} fill="#ffefa1"></circle>
                      <circle cx={63.7} cy={70.22} r={49.36} fill="#cc2929"></circle>
                      <circle cx={63.7} cy={72.7} r={46.4} fill="#ff4638"></circle>
                      <circle cx={63.7} cy={72.7} r={40.03} fill="#fafafa"></circle>
                      <circle cx={64} cy={72.7} r={4.45} fill="#563428"></circle>
                      <path fill="#b2947c" d="M63.7 42.57c-.81 0-1.47-.66-1.47-1.47v-4.4c0-.81.66-1.47 1.47-1.47s1.47.66 1.47 1.47v4.4c0 .81-.66 1.47-1.47 1.47m0 67.59c-.81 0-1.47-.66-1.47-1.47v-4.4c0-.81.66-1.47 1.47-1.47s1.47.66 1.47 1.47v4.4c0 .81-.66 1.47-1.47 1.47m35.99-36h-4.4c-.81 0-1.47-.66-1.47-1.47s.66-1.47 1.47-1.47h4.4c.81 0 1.47.66 1.47 1.47c0 .82-.66 1.47-1.47 1.47m-67.58 0h-4.4c-.81 0-1.47-.66-1.47-1.47s.66-1.47 1.47-1.47h4.4c.81 0 1.47.66 1.47 1.47c0 .82-.66 1.47-1.47 1.47"></path>
                      <path fill="#b2947c" d="M63.7 42.57c-.81 0-1.47-.66-1.47-1.47v-4.4c0-.81.66-1.47 1.47-1.47s1.47.66 1.47 1.47v4.4c0 .81-.66 1.47-1.47 1.47m0 67.59c-.81 0-1.47-.66-1.47-1.47v-4.4c0-.81.66-1.47 1.47-1.47s1.47.66 1.47 1.47v4.4c0 .81-.66 1.47-1.47 1.47M46.63 46.07l-2.2-3.81c-.41-.7-.17-1.6.54-2.01c.7-.41 1.6-.17 2.01.54l2.2 3.81c.41.7.17 1.6-.54 2.01c-.7.4-1.6.16-2.01-.54m33.8 58.53l-2.2-3.81c-.41-.7-.16-1.6.54-2.01s1.6-.16 2.01.54l2.2 3.81c.41.7.16 1.6-.54 2.01c-.71.4-1.61.16-2.01-.54"></path>
                      <path fill="#b2947c" d="m46.63 46.07l-2.2-3.81c-.41-.7-.17-1.6.54-2.01c.7-.41 1.6-.17 2.01.54l2.2 3.81c.41.7.17 1.6-.54 2.01c-.7.4-1.6.16-2.01-.54m33.8 58.53l-2.2-3.81c-.41-.7-.16-1.6.54-2.01s1.6-.16 2.01.54l2.2 3.81c.41.7.16 1.6-.54 2.01c-.71.4-1.61.16-2.01-.54M35.61 58.17l-3.81-2.2c-.7-.41-.94-1.3-.54-2.01c.41-.7 1.3-.94 2.01-.54l3.81 2.2c.7.41.94 1.3.54 2.01c-.41.71-1.31.95-2.01.54m58.53 33.79l-3.81-2.2c-.7-.41-.94-1.3-.54-2.01c.41-.7 1.3-.94 2.01-.54l3.81 2.2c.7.41.94 1.3.54 2.01c-.41.71-1.31.95-2.01.54M78.76 46.61c-.7-.41-.94-1.3-.54-2.01l2.2-3.81c.41-.7 1.3-.94 2.01-.54c.7.41.94 1.3.54 2.01l-2.2 3.81c-.41.7-1.3.94-2.01.54m-33.79 58.53c-.7-.41-.94-1.3-.54-2.01l2.2-3.81c.41-.7 1.3-.94 2.01-.54c.7.41.94 1.3.54 2.01l-2.2 3.81c-.41.7-1.31.94-2.01.54m44.82-47.51c-.41-.7-.17-1.6.54-2.01l3.81-2.2c.7-.41 1.6-.16 2.01.54s.16 1.6-.54 2.01l-3.81 2.2c-.71.41-1.61.17-2.01-.54m-58.53 33.8c-.41-.7-.16-1.6.54-2.01l3.81-2.2c.7-.41 1.6-.16 2.01.54s.16 1.6-.54 2.01l-3.81 2.2c-.71.4-1.61.16-2.01-.54"></path>
                      <path fill="none" stroke="#563428" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={5} d="M47.49 63.49L63.7 72.7"></path>
                      <path fill="none" stroke="#563428" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3.5} d="M86.87 59.41L64.44 72.7"></path>
                      <path fill="#82aec0" d="m91.99 32.49l-4.14-2.71l14.09-24.96l4.3 2.43z"></path>
                      <path fill="#cc2929" d="M111.17 35.21c1.23.36 2.55-.32 2.93-1.54c3.24-10.35-.96-21.61-11.12-26.84c-10.23-5.27-21.34-1.81-27.81 7.02c-.73.99-.56 2.38.36 3.19c2.09 1.85 6.73 5.33 15.98 10.01c9.77 4.94 16.47 7.22 19.66 8.16"></path>
                      <path fill="#82aec0" d="M105.85 10.3s2.61-3.33-1.18-5.44c-2.95-1.64-4.82 1.95-4.82 1.95c-.65 1.19 5.55 4.31 6 3.49M35.63 32.52L21.36 7.25l4.31-2.43l13.86 24.56z"></path>
                      <path fill="#cc2929" d="M16.83 35.21c-1.23.36-2.55-.32-2.93-1.54c-3.24-10.35.96-21.61 11.12-26.84c10.23-5.27 21.34-1.81 27.81 7.02c.73.99.56 2.38-.36 3.19c-2.09 1.85-6.73 5.33-15.98 10.01c-9.77 4.94-16.47 7.22-19.66 8.16"></path>
                      <path fill="#82aec0" d="M22.15 10.3s-2.61-3.33 1.18-5.44c2.95-1.64 4.82 1.95 4.82 1.95c.65 1.19-5.55 4.31-6 3.49"></path>
                      <path fill="none" stroke="#82aec0" strokeMiterlimit={10} strokeWidth={3.706} d="M63.7 23.22V9.5"></path>
                      <path fill="#82aec0" d="M63.76 14.38c-3.92 0-7.85-1.5-7.85-1.5V9.91s3.65-1.63 8.04-1.63s7.65 1.63 7.65 1.63v2.97c.01.01-3.91 1.5-7.84 1.5"></path>
                      <path fill="#94d1e0" d="M56.9 9.79c-.43.16-.47.75-.07.98c.58.33 1.27.67 1.51.63c3.3-.51 8.09-.26 11.4.24c.23.04.89-.52 1.36-.94c.26-.24.2-.65-.12-.8c-1.04-.47-3.39-1.31-7.03-1.31c-3.36 0-5.79.71-7.05 1.2"></path>
                      <path fill="#ff4638" d="M95.06 7.9c.31 1.06-.83 1.93-1.75 2.54a15.76 15.76 0 0 0-5.4 6.22c-.58 1.2-1.23 2.67-2.56 2.86c-.53.07-1.05-.09-1.55-.27c-.77-.28-1.52-.6-2.25-.97c-.87-.44-1.76-1-2.16-1.89c-.52-1.17-.03-2.55.67-3.63c1.67-2.55 4.39-4.13 7.19-5.17c1.69-.63 6.97-2.56 7.81.31m-68.93 8.43c.65 1.35 1.38 2.66 2.19 3.92c.99 1.54 2.14 3.26 1.72 5.04c-.49 2.04-2.75 3.02-4.74 3.7c-1.02.35-2.03.7-3.05 1.05c-.54.19-1.11.38-1.68.35c-.9-.04-1.71-.61-2.22-1.34c-.52-.73-.78-1.61-.98-2.48c-.75-3.35-.6-6.9.43-10.18c.6-1.88 1.54-3.86 3.67-4.01c2.59-.18 3.69 1.93 4.66 3.95"></path>
                    </svg>
                  ), 
                  title: t('home2.platform.benefits.time.title'), 
                  description: t('home2.platform.benefits.time.description') 
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className={`p-6 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{benefit.title}</h4>
                  <p className={isDark ? 'text-white' : 'text-gray-600'}>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={`relative overflow-hidden py-24 ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'}`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{t('home2.statistics.title')}</h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('home2.statistics.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: t('home2.statistics.eventsCreated') },
              { number: "2M+", label: t('home2.statistics.ticketsSold') },
              { number: "100K+", label: t('home2.statistics.activeUsers') },
              { number: "99.9%", label: t('home2.statistics.uptime') }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                  <Counter target={parseInt(stat.number.replace(/[^\d]/g, ''))} suffix={stat.number.replace(/\d/g, '')} />
                </div>
                <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Alternate Template) */}
      <section className={`relative overflow-hidden py-24 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50 text-black'}`}>
        {/* Skewed band */}
        <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 -skew-y-3 ${isDark ? 'bg-purple-500/5' : 'bg-purple-200/20'}`}></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy + Buttons + Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t('home2.cta.title')}</h2>
              <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('home2.cta.subtitle')}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
                >
                  {t('home2.cta.getStarted')}
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border backdrop-blur-sm hover:-translate-y-1 hover:scale-105 ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400/10' : 'border-purple-400 text-purple-600 hover:bg-purple-50'}`}
                >
                  {t('home2.cta.scheduleDemo')}
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-white/10 text-white/80' : 'bg-purple-100 text-purple-700'}`}>No credit card required</span>
                <span className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-white/10 text-white/80' : 'bg-purple-100 text-purple-700'}`}>Free onboarding</span>
                <span className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-white/10 text-white/80' : 'bg-purple-100 text-purple-700'}`}>24/7 support</span>
              </div>
            </motion.div>

            {/* Right: Image Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${isDark ? 'ring-1 ring-white/10 bg-white/5' : 'ring-1 ring-black/5 bg-white'}`}>
                <img
                  src="/images/hero.jpg"
                  alt="Event showcase"
                  className="w-full h-full object-cover max-h-[360px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}