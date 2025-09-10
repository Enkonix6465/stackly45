import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'

export default function Home() {
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

  // Dummy data for events
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "March 15-17, 2024",
      location: "San Francisco, CA",
      attendees: 2500,
      price: "$299",
      image: "/images/Tech Conference.jpg",
      category: "Technology",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Marketing Summit",
      date: "April 22, 2024",
      location: "New York, NY",
      attendees: 1200,
      price: "$199",
      image: "/images/Marketing Summit.jpg",
      category: "Marketing",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Design Workshop",
      date: "May 8, 2024",
      location: "Los Angeles, CA",
      attendees: 150,
      price: "$99",
      image: "/images/Design Workshop.jpeg",
      category: "Design",
      status: "Upcoming"
    }
  ]

  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: t('home1.testimonials.testimonial1.name'),
      role: t('home1.testimonials.testimonial1.role'),
      company: t('home1.testimonials.testimonial1.company'),
      content: t('home1.testimonials.testimonial1.content'),
      rating: 5,
      avatar: "/images/Testimonal1.jpg"
    },
    {
      id: 2,
      name: t('home1.testimonials.testimonial2.name'),
      role: t('home1.testimonials.testimonial2.role'),
      company: t('home1.testimonials.testimonial2.company'),
      content: t('home1.testimonials.testimonial2.content'),
      rating: 5,
      avatar: "/images/Testimonal2.jpg"
    },
    {
      id: 3,
      name: t('home1.testimonials.testimonial3.name'),
      role: t('home1.testimonials.testimonial3.role'),
      company: t('home1.testimonials.testimonial3.company'),
      content: t('home1.testimonials.testimonial3.content'),
      rating: 5,
      avatar: "/images/Testimonal3.jpg"
    }
  ]

  // Dummy data for features
  const features = [
    {
      id: 1,
      title: t('home1.features.eventCreation.title'),
      description: t('home1.features.eventCreation.description'),
      icon: "🎯"
    },
    {
      id: 2,
      title: t('home1.features.registrationManagement.title'),
      description: t('home1.features.registrationManagement.description'),
      icon: "📝"
    },
    {
      id: 3,
      title: t('home1.features.realTimeAnalytics.title'),
      description: t('home1.features.realTimeAnalytics.description'),
      icon: "📊"
    },
    {
      id: 4,
      title: t('home1.features.mobileApp.title'),
      description: t('home1.features.mobileApp.description'),
      icon: "📱"
    },
    {
      id: 5,
      title: t('home1.features.liveStreaming.title'),
      description: t('home1.features.liveStreaming.description'),
      icon: "📺"
    },
    {
      id: 6,
      title: t('home1.features.networkingTools.title'),
      description: t('home1.features.networkingTools.description'),
      icon: "🤝"
    }
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
          <source src="/Home1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {t('home1.showcase.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              {t('home1.showcase.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
                {t('home1.showcase.startFreeTrial')}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                {t('home1.showcase.watchDemo')}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/Home1.jpg" 
                  alt="Golden Rangoli Events - Luxury Event Planning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern id="rangoli-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill={isDark ? "#D97706" : "#8B4513"} opacity="0.3"/>
                      <circle cx="5" cy="5" r="1" fill={isDark ? "#D97706" : "#8B4513"} opacity="0.2"/>
                      <circle cx="15" cy="15" r="1" fill={isDark ? "#D97706" : "#8B4513"} opacity="0.2"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#rangoli-pattern)"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className={`text-sm font-serif uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('home1.about.label')}
                  </h3>
                  <h2 className={`text-4xl md:text-5xl font-bold font-serif ${isDark ? 'text-white' : 'text-black'}`}>
                    {t('home1.about.title')}
                  </h2>
                </div>

                <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    {t('home1.about.description1')}
                  </p>
                  <p>
                    {t('home1.about.description2')}
                  </p>
                </div>

                <div className="mt-8">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {t('home1.about.learnMore')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('home1.features.title')}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home1.features.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.id} animation="fade-in" stagger={`scroll-stagger-${index + 3}`}>
                <div className={`p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>{feature.title}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('home1.featuredEvents.title')}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home1.featuredEvents.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <ScrollAnimation key={event.id} animation="fade-in" stagger={`scroll-stagger-${index + 3}`}>
                <div className={`border rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
                        {t('home1.featuredEvents.upcoming')}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{event.title}</h3>
                    </div>
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{event.date}</p>
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{event.location}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{event.attendees} {t('home1.featuredEvents.attendees')}</span>
                      <span className="text-lg font-bold text-purple-600">{event.price}</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                      {t('home1.featuredEvents.viewDetails')}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('home1.testimonials.title')}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home1.testimonials.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} animation="fade-in" stagger={`scroll-stagger-${index + 3}`}>
                <div className={`p-8 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className={`mb-6 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{testimonial.name}</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 text-white ${isDark ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-r from-purple-600 to-purple-800'}`}>
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('home1.cta.title')}
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-purple-100'}`}>
              {t('home1.cta.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-purple-600 hover:bg-purple-50'}`}>
                {t('home1.cta.startFreeTrial')}
              </button>
              <button className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white' : 'border-white text-white hover:bg-white hover:text-purple-600'}`}>
                {t('home1.cta.scheduleDemo')}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}