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
  const ctaImages = [
    '/images/CorporateEvents.jpg',
    '/images/Marketing Summit.jpg',
    '/images/Garden Wedding.jpg',
    '/images/Concerts.jpg',
    '/images/Tech Conference.jpg',
    '/images/Summer.jpg',
    '/images/B1.jpg'
  ]
  const [ctaIndex, setCtaIndex] = useState(0)

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

  // Auto-rotate CTA images every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCtaIndex(prev => (prev + 1) % ctaImages.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [ctaImages.length])

  const user = getCurrentUser()

  //  data for events
  const featuredEvents = [
    {
      id: 1,
      title: t('home1.featuredEvents.events.techConference.title'),
      date: t('home1.featuredEvents.events.techConference.date'),
      location: t('home1.featuredEvents.events.techConference.location'),
      attendees: 2500,
      price: t('home1.featuredEvents.events.techConference.price'),
      image: "/images/Tech Conference.jpg",
      category: t('home1.featuredEvents.events.techConference.category'),
      status: "Upcoming"
    },
    {
      id: 2,
      title: t('home1.featuredEvents.events.marketingSummit.title'),
      date: t('home1.featuredEvents.events.marketingSummit.date'),
      location: t('home1.featuredEvents.events.marketingSummit.location'),
      attendees: 1200,
      price: t('home1.featuredEvents.events.marketingSummit.price'),
      image: "/images/Marketing Summit.jpg",
      category: t('home1.featuredEvents.events.marketingSummit.category'),
      status: "Upcoming"
    },
    {
      id: 3,
      title: t('home1.featuredEvents.events.designWorkshop.title'),
      date: t('home1.featuredEvents.events.designWorkshop.date'),
      location: t('home1.featuredEvents.events.designWorkshop.location'),
      attendees: 150,
      price: t('home1.featuredEvents.events.designWorkshop.price'),
      image: "/images/Design Workshop.jpg",
      category: t('home1.featuredEvents.events.designWorkshop.category'),
      status: "Upcoming"
    }
  ]

  // data for testimonials
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

  //  data for features
  const features = [
    {
      id: 1,
      title: t('home1.features.eventCreation.title'),
      description: t('home1.features.eventCreation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 50 50">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path stroke="#344054" d="m31.25 18.75l-5.208 5.208zm0-6.25v6.25h6.25l6.25-6.25H37.5V6.25z"></path>
            <path stroke="#306cfe" d="M25.688 6.25H25A18.75 18.75 0 1 0 43.75 25v-.687"></path>
            <path stroke="#306cfe" d="M35.208 27.083a10.417 10.417 0 1 1-12.291-12.291"></path>
          </g>
        </svg>
      )
    },
    {
      id: 2,
      title: t('home1.features.registrationManagement.title'),
      description: t('home1.features.registrationManagement.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 64 64">
          <g fill="#f4ae7f">
            <path d="M52.11 58.32c0 3.056-2.289 5.531-5.116 5.531H14.379c-2.824 0-5.114-2.476-5.114-5.531V8.447c0-3.059 2.291-5.534 5.114-5.534h32.615c2.827 0 5.116 2.475 5.116 5.534z"></path>
            <path d="M30.899 10.509c0 .581-1.158 1.051-2.58 1.051H11.848c-1.426 0-2.582-.47-2.582-1.051v-9.46C9.266.47 10.421 0 11.848 0h16.471c1.422 0 2.58.47 2.58 1.049z"></path>
          </g>
          <path fill="#d0d2d3" d="M54.662 56c0 2.593-2.312 4.69-5.167 4.69H16.536c-2.851 0-5.167-2.098-5.167-4.69V13.73c0-2.591 2.316-4.69 5.167-4.69h32.959c2.855 0 5.167 2.1 5.167 4.69z"></path>
          <path fill="#fff" d="M54.662 52.694c0 2.593-2.312 4.69-5.167 4.69H16.536c-2.851 0-5.167-2.098-5.167-4.69v-42.27c0-2.591 2.316-4.688 5.167-4.688h32.959c2.855 0 5.167 2.098 5.167 4.688z"></path>
          <path fill="#d0d2d3" d="M43.1 8.28c0 .312-1.538.566-3.43.566h-21.9c-1.896 0-3.434-.254-3.434-.566V3.185c0-.315 1.538-.566 3.434-.566h21.9c1.892 0 3.43.251 3.43.566z"></path>
          <path fill="#35494d" d="M20.07 18.03h28.562c1.922 0 1.922-2.7 0-2.7H20.07c-1.915 0-1.915 2.7 0 2.7m0 5.485h28.562c1.922 0 1.922-2.698 0-2.698H20.07c-1.915 0-1.915 2.698 0 2.698m0 5.605h28.562c1.922 0 1.922-2.7 0-2.7H20.07c-1.915 0-1.915 2.7 0 2.7m0 5.48h28.562c1.922 0 1.922-2.698 0-2.698H20.07c-1.915 0-1.915 2.698 0 2.698m0 10.58h13.148c1.916 0 1.916-2.699 0-2.699H20.07c-1.915-.001-1.915 2.699 0 2.699"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: t('home1.features.realTimeAnalytics.title'),
      description: t('home1.features.realTimeAnalytics.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24">
          <g fill="none">
            <path fill="#66e1ff" d="M9.136 17.288a8.136 8.136 0 1 0 0-16.272a8.136 8.136 0 0 0 0 16.272"></path>
            <path fill="#c2f3ff" d="m10.767 6.96l2.477 2.474a.956.956 0 0 0 1.352 0l2.39-2.391a8.128 8.128 0 0 0-15.715.05a8.13 8.13 0 0 0 1.24 6.772L9.42 6.96a.956.956 0 0 1 1.348 0"></path>
            <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M1.496 11.94a8.13 8.13 0 0 1 14.368-7.35m-.982 10.313l2.232 2.23" strokeWidth={1}></path>
            <path fill="#c77f67" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M22.522 20.518a1.435 1.435 0 1 1-2.029 2.028l-3.72-3.72a.957.957 0 0 1 0-1.352l.677-.676a.957.957 0 0 1 1.352 0z" strokeWidth={1}></path>
            <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="m1.002 15.371l8.417-8.41a.957.957 0 0 1 1.352 0l2.473 2.474a.956.956 0 0 0 1.353 0L23 1.025" strokeWidth={1}></path>
            <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M20.13 1.025H23v2.87m-5.75 5.757a8.13 8.13 0 0 1-13.316 5.755" strokeWidth={1}></path>
          </g>
        </svg>
      )
    },
    {
      id: 4,
      title: t('home1.features.mobileApp.title'),
      description: t('home1.features.mobileApp.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 64 64">
          <path fill="#5c6d6d" d="M50 4.1c0-2-2.1-4.1-4.3-4.1H18.3C16.1 0 14 2.1 14 4.1v55.7c0 2.1 2.1 4.1 4.3 4.1h27.5c2.1 0 4.3-2.1 4.3-4.1V4.1z"></path>
          <path fill="#212528" d="M49 59c0 2-2 4-4 4H19c-2 0-4-2-4-4V5c0-2 2-4 4-4h26c2 0 4 2 4 4z"></path>
          <g fill="#94989b">
            <circle cx={43.5} cy={4.5} r={1}></circle>
            <path d="M35 4.5c0 .3-.1.5-.3.5h-5.4c-.2 0-.3-.2-.3-.5c0-.2.1-.5.3-.5h5.4c.2 0 .3.3.3.5"></path>
          </g>
          <path fill="#3e4347" d="M17 8h30v48H17z"></path>
          <path fill="#94989b" d="M35.8 60.2c0 .4-.3.8-.8.8h-6c-.4 0-.8-.3-.8-.8v-1.5c0-.4.3-.8.8-.8h6c.4 0 .8.3.8.8z"></path>
          <path fill="#42ade2" d="M24 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c7e755" d="M31 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#f2b200" d="M38 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#42ade2" d="M45 14.7c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c7e755" d="M24 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#ff435e" d="M31 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#42ade2" d="M38 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c28fef" d="M45 53.2c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c7e755" d="M24 33.9c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c28fef" d="M31 33.9c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#42ade2" d="M38 33.9c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#ff435e" d="M24 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#f2b200" d="M31 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c7e755" d="M38 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#f2b200" d="M45 27.5c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c28fef" d="M24 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#42ade2" d="M31 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#ff435e" d="M38 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
          <path fill="#c28fef" d="M45 21.1c0 .5-.4.8-.8.8h-3.3c-.5 0-.8-.4-.8-.8v-3.3c0-.5.4-.8.8-.8h3.3c.5 0 .8.4.8.8z"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: t('home1.features.liveStreaming.title'),
      description: t('home1.features.liveStreaming.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 48 48">
          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
            <path fill="#2f88ff" stroke="#000" d="M42 12H6C4.89543 12 4 12.8954 4 14V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V14C44 12.8954 43.1046 12 42 12Z"></path>
            <path fill="#43ccf8" stroke="#fff" d="M31 19H11V35H31V19Z"></path>
            <path stroke="#000" strokeLinecap="round" d="M14 4.5L23.0909 12L34 2"></path>
            <path stroke="#fff" strokeLinecap="round" d="M38 18V19"></path>
            <path stroke="#fff" strokeLinecap="round" d="M38 25V26"></path>
          </g>
        </svg>
      )
    },
    {
      id: 6,
      title: t('home1.features.networkingTools.title'),
      description: t('home1.features.networkingTools.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 32 32">
          <g fill="none">
            <path fill="#ffc83d" d="M11.406 6.156c-5.275-.65-7.156 2-8.062 3.219c-2.469 3.64-.985 7.64.812 9.563c0 0 10.094 9.828 10.375 10.093s.946 1.172 2.547.914c1.398-.225 1.797-1.914 1.797-1.914s1.032.842 2.516 0c1.156-.656 1.109-1.968 1.109-1.968s1.238.62 2.563-.5c1.192-1.01.453-2.782.453-2.782s1.07.176 1.828-.656c1.025-1.125.672-2.547 0-3.187L19.625 10.5l-.594-3.125z"></path>
            <path fill="#d67d00" d="m26.707 22.593l-2.226-2.257a.5.5 0 1 0-.712.703l1.764 1.788l-.017-.046s.582.096 1.191-.188m-2.729 3.557l-2.31-2.563a.5.5 0 0 0-.743.67l1.66 1.841c.199.076.73.232 1.393.053m-3.402 2.2l-1.806-1.913a.5.5 0 1 0-.727.687l.904.957c.199.13.795.45 1.629.269m-2.173.703c-.759.202-2.167.265-3.137-.773l-.776.71l.041.04q.044.042.1.1c.328.34 1.01 1.046 2.447.814c.622-.1 1.046-.49 1.325-.892"></path>
            <path fill="#f59f00" d="M6.375 6.813c-1.687 2.166-4.287 7.775.313 11.625L5.24 19.993l-1.084-1.055C2.36 17.016.875 13.016 3.344 9.375l.04-.055c.525-.706 1.366-1.839 2.95-2.567z"></path>
            <path fill="#d67d00" d="M17.25 23.688c1.203 1.39-.3 3.162-1 3.906L5.669 16.584c1.974-2.002 3.278-2.203 4.16-1.334c.88.869.468 1.484.468 1.484s1.194-.678 2.453.563c1.26 1.241.39 2.187.39 2.187s1.3-.234 2.22.797c1.03 1.157.374 2.5.374 2.5s.79.068 1.516.907"></path>
            <path fill="#ffc83d" d="M12.438 8c3.234-1.297 8.14-1.953 10.39-1.984c1.531 0 3.481.37 5.547 2.797c3.3 3.874.828 8.296-1.125 10.093V17.5s-7.506-6.536-7.75-6.766c-.45-.425-2.302-.296-2.5-.234c-.604.188-1.65.5-3 1c-1.098.407-1.969.078-2.328-.766c-.36-.843-.842-2.09.765-2.734"></path>
            <path fill="#d67d00" d="M28.31 17.71a8.4 8.4 0 0 1-1.06 1.196c-2.76-2.406-8.378-7.325-8.828-7.75s-.974-.406-1.172-.344A79 79 0 0 0 13.75 12c-1.098.407-2.203-.422-2.562-1.266c-.33-.771-.356-1.879.87-2.556l.632-.277l.05-.019c-1.953 1.468-.228 3.262 1.385 3.056c.567-.073 1.5-.266 2.406-.5c.36-.094.713-.259 1.046-.414c.625-.293 1.18-.552 1.58-.243c1.5 1.165 5.976 4.968 9.154 7.929"></path>
            <path fill="#ffc83d" d="M8.82 16.879a2.203 2.203 0 0 0-3.09-.398L3.812 18.1c-.883.735-1.112 2.11-.467 3.002c.584.808 1.48 1.142 2.303.908c-.365.835-.334 1.903.367 2.49c.655.547 1.464.922 2.275.669c-.078.535.08 1.121.63 1.705c.52.551 1.276.826 2.087.643c-.107.572.074 1.208.743 1.853c.819.79 2.08.858 3.265-.23l.772-.9c.62-.78 1.478-2.136.196-3.288c-.443-.398-.952-.619-1.481-.62c.287-.7.282-1.558-.55-2.38c-.52-.513-1.157-.736-1.86-.568c.38-.808.371-1.633-.39-2.385c-.691-.683-1.543-1.007-2.643-.39c.194-.596.148-1.228-.24-1.731"></path>
            <path fill="#d67d00" d="M9.034 17.242L4.31 21.907c.418.186.873.229 1.31.112l3.469-3.426l-.029.016c.15-.459.156-.94-.026-1.367m3.212 2.584L6.96 25.085c.425.171.878.226 1.332.085l3.807-3.786l-.005.001c.245-.52.328-1.048.153-1.559m2.326 3.071l-4.918 4.498c.404.177.865.231 1.345.125l3.513-3.213c.17-.427.23-.912.06-1.41"></path>
          </g>
        </svg>
      )
    }
  ]

  return (
    <div className={`transition-colors duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar user={user} />

      {/* Showcase Section */}
      <section className="relative overflow-hidden h-[100vh] min-h-[600px] flex items-center justify-center text-center">
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
          <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-6 text-white leading-tight lg:whitespace-nowrap">
              {t('home1.showcase.mainTitle')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-2">
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              {t('home1.showcase.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" stagger="scroll-stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
              >
                {t('home1.showcase.startFreeTrial')}
              </button>
              <button 
                onClick={() => navigate('/services')}
                className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}
              >
                {t('home1.showcase.exploreButton')}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className={`relative ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'} overflow-hidden py-20`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <ScrollAnimation animation="fade-right" stagger="scroll-stagger-1">
              <div>
                <div className="mb-5">
                  <span className={`inline-flex items-center gap-2 text-xs tracking-wider uppercase px-3 py-1 rounded-full ${isDark ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                    {t('home1.about.label')}
                  </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('home1.about.title')}
                </h2>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                  {t('home1.about.description1')}
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  {t('home1.about.description2')}
                </p>


                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/about')}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
                  >
                    {t('home1.about.knowMoreButton')}
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}
                  >
                    {t('home1.showcase.exploreButton')}
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>500+</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t('home1.about.stats.eventsManaged')}</div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>98%</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t('home1.about.stats.clientSatisfaction')}</div>
                  </div>
                  <div>
                    <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>20+</div>
                    <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t('home1.about.stats.citiesCovered')}</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Visual */}
            <ScrollAnimation animation="fade-left" stagger="scroll-stagger-2">
              <div className="relative">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[480px]">
                  <div className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'ring-1 ring-white/10' : 'ring-1 ring-black/10'}`}>
                    <img
                      src="/images/Home1.jpg"
                      alt="Event planning hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-3 sm:-bottom-8 sm:-right-6 w-20 h-20 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/images/CorporateEvents.jpg"
                      alt="Corporate event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/images/Garden Wedding.jpg"
                      alt="Wedding event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute -z-10 blur-3xl ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/20'} w-[60%] h-[60%] -bottom-10 -left-10 rounded-full`}></div>
                    <div className={`absolute -z-10 blur-3xl ${isDark ? 'bg-fuchsia-500/20' : 'bg-fuchsia-400/20'} w-[40%] h-[40%] -top-6 -right-6 rounded-full`}></div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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
              <p className={`text-xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home1.features.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.id} animation="fade-in" stagger={`scroll-stagger-${index + 3}`}>
                <div className={`group p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:ring-2 hover:ring-purple-400/40 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
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
                    <button 
                      onClick={() => navigate('/services')}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                    >
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
      <section className={`relative ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'} overflow-hidden py-20`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-96 sm:h-96 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-12 -left-12 sm:-bottom-24 sm:-left-24 w-36 h-36 sm:w-72 sm:h-72 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl animate-pulse`}></div>
        <div className="relative z-10 container mx-auto px-6">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
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
                <div className={`p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-out ring-1 ring-transparent hover:ring-purple-400/40 will-change-transform ${isDark ? 'bg-gray-800/90 hover:bg-gray-800/95 backdrop-blur-sm' : 'bg-white/90 hover:bg-white backdrop-blur-sm'}`}>
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
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <img src={ctaImages[ctaIndex]} alt="Event background" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/30"></div>
        <div className="relative z-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl text-left text-white">
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  {t('home1.cta.title')}
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  {t('home1.cta.subtitle')}
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/services')}
                    className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25"
                  >
                    {t('home1.cta.primaryButton')}
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25"
                  >
                    {t('home1.cta.secondaryButton')}
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-2 px-6">
          {ctaImages.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCtaIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${ctaIndex === idx ? 'w-6 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}