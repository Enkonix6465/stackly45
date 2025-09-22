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
      <section className="relative overflow-hidden h-screen text-white">
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
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto whitespace-nowrap"
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
              className={`text-lg max-w-3xl mx-auto whitespace-nowrap ${isDark ? 'text-white' : 'text-gray-600'}`}
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
        <div className={`absolute -top-24 -right-24 w-96 h-96 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-24 -left-24 w-72 h-72 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
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
              className={`text-lg max-w-3xl mx-auto whitespace-nowrap ${isDark ? 'text-white' : 'text-gray-600'}`}
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
                  icon: "📈", 
                  title: t('home2.platform.benefits.growth.title'), 
                  description: t('home2.platform.benefits.growth.description') 
                },
                { 
                  icon: "💰", 
                  title: t('home2.platform.benefits.cost.title'), 
                  description: t('home2.platform.benefits.cost.description') 
                },
                { 
                  icon: "⏱️", 
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
                  <div className="text-4xl mb-4">{benefit.icon}</div>
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
        <div className={`absolute -top-20 -right-20 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
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

      {/* CTA Section */}
      <section className="py-24 bg-white text-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home2.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('home2.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
            >
              {t('home2.cta.getStarted')}
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}
            >
              {t('home2.cta.scheduleDemo')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}