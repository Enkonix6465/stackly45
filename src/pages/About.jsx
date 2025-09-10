import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function About() {
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
   const highlights = [
    t("about.aboutSection.highlights.verifiedFreelancers"),
    t("about.aboutSection.highlights.securePayments"),
    t("about.aboutSection.highlights.globalTalentPool"),
    t("about.aboutSection.highlights.support"),
  ];



  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar user={user} />
      {/* Showcase */}
<section
  id="showcase"
  className={`relative overflow-hidden h-screen flex items-center justify-center text-center ${isDark ? 'bg-black' : 'bg-white'}`}
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/About.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (black overlay for better readability) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
      <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
        {t('about.showcase.title')}
      </h1>
    </ScrollAnimation>
    
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
      <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
        {t('about.showcase.subtitle')}
      </p>
    </ScrollAnimation>
    
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
      <div className="mt-8 flex gap-4 justify-center">
        {/* Primary Button */}
        <a
          href="/about"
          className="btn-animate-strong rounded-lg px-8 py-4 font-bold text-lg transition-all duration-300 bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl"
        >
          {t('about.showcase.connectButton')}
        </a>

        
      </div>
    </ScrollAnimation>
  </div>
</section>




      {/* 2) Mission & Vision - Theme Aware Design */}
      <section
        id="mission"
        className={`relative ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-black'} overflow-hidden`}
      >
        {/* Background decorative elements */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200'}`}></div>
        <div className={`absolute -top-20 -right-20 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <div className={`inline-flex items-center gap-2 ${isDark ? 'text-purple-400' : 'text-purple-600'} text-sm font-medium mb-4`}>
                <div className={`w-2 h-2 ${isDark ? 'bg-purple-400' : 'bg-purple-600'} rounded-full`}></div>
                MISSION & VISION
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <h2 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('about.mission.title')}
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <p className={`text-xl ${isDark ? 'text-white/80' : 'text-black/70'} max-w-4xl mx-auto leading-relaxed`}>
                {t('about.mission.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
            {/* Left Column - Mission Statement */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-4`}>Our Mission</h3>
                <p className={`${isDark ? 'text-white/90' : 'text-black/80'} leading-relaxed text-lg`}>
                  {t('about.mission.missionStatement')}
                </p>
                <a 
                  href="#about" 
                  className={`inline-flex items-center gap-2 ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors font-medium`}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>

            {/* Center Column - Mission Image */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="relative flex justify-center">
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/Mission.jpg"
                    alt="Team Mission - Collaborative hands representing our mission and vision"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Vision Statement */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-4`}>Our Vision</h3>
                <p className={`${isDark ? 'text-white/90' : 'text-black/80'} leading-relaxed text-lg`}>
                  {t('about.mission.visionStatement')}
                </p>
                <a 
                  href="#about" 
                  className={`inline-flex items-center gap-2 ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors font-medium`}
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* Statistics Section */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { 
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path fill="#dce2e2" d="M505.751 492.072c0 8.011-6.494 14.506-14.506 14.506H20.754c-8.011 0-14.506-6.494-14.506-14.506V76.329c0-8.011 6.494-14.506 14.506-14.506h470.492c8.011 0 14.506 6.494 14.506 14.506v415.743z"></path><path fill="#0096d1" d="M505.751 260.413V74.777c0-7.154-6.494-12.954-14.506-12.954H20.754c-8.011 0-14.505 5.8-14.505 12.954v185.636z"></path><path fill="#fff" d="M131.004 107.585c0 12.637-10.244 22.881-22.881 22.881s-22.881-10.244-22.881-22.881s10.244-22.881 22.881-22.881s22.881 10.244 22.881 22.881m260.115-22.881c-12.637 0-22.881 10.244-22.881 22.881s10.244 22.881 22.881 22.881S414 120.222 414 107.585s-10.244-22.881-22.881-22.881"></path><path fill="#bfbfbb" d="M172.451 61.823h-22.214c0-19.108-15.546-34.655-34.654-34.655S80.928 42.715 80.928 61.823s15.546 34.655 34.655 34.655c6.134 0 11.107 4.973 11.107 11.107s-4.973 11.107-11.107 11.107c-31.357 0-56.869-25.511-56.869-56.869S84.226 4.955 115.583 4.955s56.868 25.511 56.868 56.868M414.64 6.795a57 57 0 0 0-14.396-1.84c-31.357 0-56.868 25.511-56.868 56.869s25.511 56.869 56.868 56.869c6.135 0 11.107-4.973 11.107-11.107s-4.973-11.107-11.107-11.107c-19.108 0-34.653-15.546-34.653-34.655s15.545-34.655 34.653-34.655c2.982 0 5.938.377 8.785 1.121c15.231 3.976 25.869 17.766 25.869 33.534h22.215c-.001-25.873-17.467-48.501-42.473-55.029"></path><path fill="#fff" d="M68.534 208.183h-16.88l-2.911 12.39H34.608l17.379-57.624h16.547l17.379 57.624H71.445zm-2.411-9.896l-6.07-25.444l-6.069 25.444zm67.349 3.16c0 11.641-7.484 20.539-22.534 20.539s-22.452-8.398-22.452-20.539v-38.499h13.637v37.917c0 7.401 2.66 10.976 8.814 10.976c6.236 0 8.897-3.575 8.897-10.976v-37.917h13.637v38.499zm54.125-32.844l-7.069 7.401c-3.742-3.16-6.902-4.573-11.558-4.573c-8.065 0-14.052 5.987-14.052 20.289c0 15.134 3.991 20.289 11.974 20.289c2.827 0 5.405-.582 7.816-1.913V197.04h-7.484l-1.331-9.645h22.036v28.521c-5.905 3.825-13.388 6.07-20.954 6.07c-17.379 0-26.193-10.561-26.193-30.267c0-19.54 12.223-30.184 27.523-30.184c8.316 0 14.553 2.91 19.292 7.068"></path><path fill="#505a60" d="M241.958 339.052c0 30.311-15.011 53.116-75.922 108.542h79.963l-4.619 34.93H114.363v-32.332c65.529-64.663 80.829-82.272 80.829-106.521c0-15.877-9.815-25.403-25.115-25.403c-14.145 0-23.96 6.351-35.218 20.207l-27.135-21.362c15.588-20.496 37.816-33.775 66.973-33.775c43.589 0 67.261 25.403 67.261 55.714m162.318 101.325h-21.939v42.147h-44.456l-.289-42.147H255.32v-30.311l55.426-127.594l38.682 14.434l-47.054 109.408h35.796l4.907-46.188h39.26v46.188h21.939z"></path></svg>,
                  number: t('about.mission.stats.projectsCompleted'),
                  label: t('about.mission.stats.projectsCompletedLabel')
                },
                { 
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"></path><path fill="#fff9bf" d="M12 4.826a11.8 11.8 0 0 1 10.994 7.517c0-.114.006-.228.006-.343a11 11 0 1 0-21.994.343A11.8 11.8 0 0 1 12 4.826"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" strokeWidth={1}></path><path stroke="#191919" d="M6.739 10.326a.24.24 0 0 1 0-.478m.001.478a.24.24 0 0 0 0-.478m10.52.478a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478" strokeWidth={1}></path><path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.705 15.348a.957.957 0 0 1 .927 1.194a4.782 4.782 0 0 1-9.264 0a.956.956 0 0 1 .927-1.194z" strokeWidth={1}></path></g></svg>,
                  number: t('about.mission.stats.happyClients'),
                  label: t('about.mission.stats.happyClientsLabel')
                },
                { 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32"><g fill="none"><path fill="#ffc83d" d="M11.406 6.156c-5.275-.65-7.156 2-8.062 3.219c-2.469 3.64-.985 7.64.812 9.563c0 0 10.094 9.828 10.375 10.093s.946 1.172 2.547.914c1.398-.225 1.797-1.914 1.797-1.914s1.032.842 2.516 0c1.156-.656 1.109-1.968 1.109-1.968s1.238.62 2.563-.5c1.192-1.01.453-2.782.453-2.782s1.07.176 1.828-.656c1.025-1.125.672-2.547 0-3.187L19.625 10.5l-.594-3.125z"></path><path fill="#d67d00" d="m26.707 22.593l-2.226-2.257a.5.5 0 1 0-.712.703l1.764 1.788l-.017-.046s.582.096 1.191-.188m-2.729 3.557l-2.31-2.563a.5.5 0 0 0-.743.67l1.66 1.841c.199.076.73.232 1.393.053m-3.402 2.2l-1.806-1.913a.5.5 0 1 0-.727.687l.904.957c.199.13.795.45 1.629.269m-2.173.703c-.759.202-2.167.265-3.137-.773l-.776.71l.041.04q.044.042.1.1c.328.34 1.01 1.046 2.447.814c.622-.1 1.046-.49 1.325-.892"></path><path fill="#f59f00" d="M6.375 6.813c-1.687 2.166-4.287 7.775.313 11.625L5.24 19.993l-1.084-1.055C2.36 17.016.875 13.016 3.344 9.375l.04-.055c.525-.706 1.366-1.839 2.95-2.567z"></path><path fill="#d67d00" d="M17.25 23.688c1.203 1.39-.3 3.162-1 3.906L5.669 16.584c1.974-2.002 3.278-2.203 4.16-1.334c.88.869.468 1.484.468 1.484s1.194-.678 2.453.563c1.26 1.241.39 2.187.39 2.187s1.3-.234 2.22.797c1.03 1.157.374 2.5.374 2.5s.79.068 1.516.907"></path><path fill="#ffc83d" d="M12.438 8c3.234-1.297 8.14-1.953 10.39-1.984c1.531 0 3.481.37 5.547 2.797c3.3 3.874.828 8.296-1.125 10.093V17.5s-7.506-6.536-7.75-6.766c-.45-.425-2.302-.296-2.5-.234c-.604.188-1.65.5-3 1c-1.098.407-1.969.078-2.328-.766c-.36-.843-.842-2.09.765-2.734"></path><path fill="#d67d00" d="M28.31 17.71a8.4 8.4 0 0 1-1.06 1.196c-2.76-2.406-8.378-7.325-8.828-7.75s-.974-.406-1.172-.344A79 79 0 0 0 13.75 12c-1.098.407-2.203-.422-2.562-1.266c-.33-.771-.356-1.879.87-2.556l.632-.277l.05-.019c-1.953 1.468-.228 3.262 1.385 3.056c.567-.073 1.5-.266 2.406-.5c.36-.094.713-.259 1.046-.414c.625-.293 1.18-.552 1.58-.243c1.5 1.165 5.976 4.968 9.154 7.929"></path><path fill="#ffc83d" d="M8.82 16.879a2.203 2.203 0 0 0-3.09-.398L3.812 18.1c-.883.735-1.112 2.11-.467 3.002c.584.808 1.48 1.142 2.303.908c-.365.835-.334 1.903.367 2.49c.655.547 1.464.922 2.275.669c-.078.535.08 1.121.63 1.705c.52.551 1.276.826 2.087.643c-.107.572.074 1.208.743 1.853c.819.79 2.08.858 3.265-.23l.772-.9c.62-.78 1.478-2.136.196-3.288c-.443-.398-.952-.619-1.481-.62c.287-.7.282-1.558-.55-2.38c-.52-.513-1.157-.736-1.86-.568c.38-.808.371-1.633-.39-2.385c-.691-.683-1.543-1.007-2.643-.39c.194-.596.148-1.228-.24-1.731"></path><path fill="#d67d00" d="M9.034 17.242L4.31 21.907c.418.186.873.229 1.31.112l3.469-3.426l-.029.016c.15-.459.156-.94-.026-1.367m3.212 2.584L6.96 25.085c.425.171.878.226 1.332.085l3.807-3.786l-.005.001c.245-.52.328-1.048.153-1.559m2.326 3.071l-4.918 4.498c.404.177.865.231 1.345.125l3.513-3.213c.17-.427.23-.912.06-1.41"></path></g></svg>,
                  number: t('about.mission.stats.freelancers'),
                  label: t('about.mission.stats.freelancersLabel')
                },
                { 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="#7cb342" d="M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4"></path><path fill="#0277bd" d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7"></path></svg>,
                  number: t('about.mission.stats.countries'),
                  label: t('about.mission.stats.countriesLabel')
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className={`w-12 h-12 ${isDark ? 'bg-purple-500/20 group-hover:bg-purple-500/30' : 'bg-purple-500/30 group-hover:bg-purple-500/40'} rounded-full flex items-center justify-center ${isDark ? 'text-purple-400' : 'text-purple-600'} transition-colors`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-1`}>{stat.number}</div>
                  <div className={`${isDark ? 'text-white/70' : 'text-black/60'} text-sm`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Brand Values */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-8">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{t('about.mission.values.title')}</h3>
              <p className={`${isDark ? 'text-white/70' : 'text-black/60'} max-w-2xl mx-auto`}>
                {t('about.mission.values.subtitle')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t('about.mission.values.innovation.title'),
                description: t('about.mission.values.innovation.description'),
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              },
              {
                title: t('about.mission.values.excellence.title'),
                description: t('about.mission.values.excellence.description'),
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              },
              {
                title: t('about.mission.values.integrity.title'),
                description: t('about.mission.values.integrity.description'),
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              },
              {
                title: t('about.mission.values.collaboration.title'),
                description: t('about.mission.values.collaboration.description'),
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.5-1.85 1.26L12.5 14H15v8h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V15h-.5v7h4z"/></svg>
              }
            ].map((value, index) => (
              <ScrollAnimation key={value.title} animation="fade-in" stagger={`scroll-stagger-${index + 9}`}>
                <div className={`group p-6 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-purple-500/30' : 'bg-white/80 hover:bg-white border-gray-200 hover:border-purple-500/50'} transition-all duration-300 border`}>
                  <div className={`${isDark ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-600 group-hover:text-purple-700'} mb-4 transition-colors`}>
                    {value.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${isDark ? 'text-white group-hover:text-purple-300' : 'text-black group-hover:text-purple-700'} mb-3 transition-colors`}>
                    {value.title}
                  </h4>
                  <p className={`${isDark ? 'text-white/70' : 'text-black/70'} leading-relaxed`}>
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* 3) Journey Timeline */}
      <section
        id="journey-timeline"
        className={`relative ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} overflow-hidden py-24`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('about.timeline.title')}
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-xl ${isDark ? 'text-white/70' : 'text-black/70'} max-w-4xl mx-auto leading-relaxed`}>
                {t('about.timeline.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* Arrow Timeline Container */}
          <div className="relative">
            {/* Timeline Steps */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
              {/* 2020 - Company Founded */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
                <div className="relative flex flex-col items-center">
                  {/* Icon above timeline */}
                  <div className={`w-16 h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center mb-4 relative z-10`}>
                    <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  
                  {/* Arrow segment */}
                  <div className="w-32 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 relative flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <span>2020</span>
                    {/* Arrow point */}
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-[32px] border-l-yellow-500 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent transform translate-x-full"></div>
                  </div>
                  
                  {/* Content below */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{t('about.timeline.milestones.2020.title')}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {t('about.timeline.milestones.2020.description')}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2021 - First Major Client */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
                <div className="relative flex flex-col items-center">
                  {/* Arrow segment */}
                  <div className="w-32 h-16 bg-gradient-to-r from-orange-400 to-orange-500 relative flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <span>2021</span>
                    {/* Arrow point */}
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-[32px] border-l-orange-500 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent transform translate-x-full"></div>
                  </div>
                  
                  {/* Icon below timeline */}
                  <div className={`w-16 h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center mt-4 relative z-10`}>
                    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  
                  {/* Content below */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{t('about.timeline.milestones.2021.title')}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {t('about.timeline.milestones.2021.description')}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2022 - Platform Expansion */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
                <div className="relative flex flex-col items-center">
                  {/* Icon above timeline */}
                  <div className={`w-16 h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center mb-4 relative z-10`}>
                    <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  
                  {/* Arrow segment */}
                  <div className="w-32 h-16 bg-gradient-to-r from-teal-400 to-teal-500 relative flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <span>2022</span>
                    {/* Arrow point */}
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-[32px] border-l-teal-500 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent transform translate-x-full"></div>
                  </div>
                  
                  {/* Content below */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{t('about.timeline.milestones.2022.title')}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {t('about.timeline.milestones.2022.description')}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2023 - Series A Funding */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
                <div className="relative flex flex-col items-center">
                  {/* Arrow segment */}
                  <div className="w-32 h-16 bg-gradient-to-r from-blue-400 to-blue-500 relative flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <span>2023</span>
                    {/* Arrow point */}
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-[32px] border-l-blue-500 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent transform translate-x-full"></div>
                  </div>
                  
                  {/* Icon below timeline */}
                  <div className={`w-16 h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center mt-4 relative z-10`}>
                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                  </div>
                  
                  {/* Content below */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{t('about.timeline.milestones.2023.title')}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {t('about.timeline.milestones.2023.description')}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2024 - Global Expansion */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
                <div className="relative flex flex-col items-center">
                  {/* Icon above timeline */}
                  <div className={`w-16 h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center mb-4 relative z-10`}>
                    <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  
                  {/* Arrow segment */}
                  <div className="w-32 h-16 bg-gradient-to-r from-purple-400 to-purple-500 relative flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <span>2024</span>
                    {/* Arrow point */}
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-[32px] border-l-purple-500 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent transform translate-x-full"></div>
                  </div>
                  
                  {/* Content below */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{t('about.timeline.milestones.2024.title')}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {t('about.timeline.milestones.2024.description')}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* 2025 - Future Vision */}
              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-8">
                <div className="relative flex flex-col items-center">
                  {/* Arrow segment */}
                  <div className="w-32 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 relative flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <span>2025</span>
                    {/* Arrow point */}
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-[32px] border-l-indigo-700 border-t-[32px] border-t-transparent border-b-[32px] border-b-transparent transform translate-x-full"></div>
                  </div>
                  
                  {/* Icon below timeline */}
                  <div className={`w-16 h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center mt-4 relative z-10`}>
                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  
                  {/* Content below */}
                  <div className="mt-4 text-center max-w-xs">
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{t('about.timeline.milestones.2025.title')}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                      {t('about.timeline.milestones.2025.description')}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>


        </div>
      </section>

      {/* 4) Event Management Team - Agents Section */}
      <section
        id="team"
        className={`relative ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-black'} overflow-hidden py-24`}
      >
        {/* Background decorative elements */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200'}`}></div>
        <div className={`absolute -top-20 -right-20 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <h2 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {t('about.team.title')}
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <p className={`text-xl ${isDark ? 'text-white/80' : 'text-black/70'} max-w-4xl mx-auto leading-relaxed`}>
                {t('about.team.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Agent 1 - Event Coordinator */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
              <div className="text-center group">
                {/* Profile Photo */}
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <div className={`w-full h-full rounded-full border-4 ${isDark ? 'border-white' : 'border-gray-300'} overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    <img
                      src="/images/Agent1.jpg"
                      alt="Sarah Johnson - Event Coordinator"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.coordinator.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.coordinator.name')}
                  </h4>
                  <p className={`${isDark ? 'text-white/70' : 'text-black/70'} text-sm leading-relaxed text-justify`}>
                    {t('about.team.members.coordinator.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Agent 2 - Venue Specialist */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
              <div className="text-center group">
                {/* Profile Photo */}
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <div className={`w-full h-full rounded-full border-4 ${isDark ? 'border-white' : 'border-gray-300'} overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    <img
                      src="/images/Agent2.jpg"
                      alt="Michael Chen - Venue Specialist"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.venue.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.venue.name')}
                  </h4>
                  <p className={`${isDark ? 'text-white/70' : 'text-black/70'} text-sm leading-relaxed text-justify`}>
                    {t('about.team.members.venue.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Agent 3 - Catering Manager */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-6">
              <div className="text-center group">
                {/* Profile Photo */}
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <div className={`w-full h-full rounded-full border-4 ${isDark ? 'border-white' : 'border-gray-300'} overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    <img
                      src="/images/Agent3.jpg"
                      alt="David Rodriguez - Catering Manager"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.catering.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.catering.name')}
                  </h4>
                  <p className={`${isDark ? 'text-white/70' : 'text-black/70'} text-sm leading-relaxed text-justify`}>
                    {t('about.team.members.catering.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Agent 4 - Technical Director */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-7">
              <div className="text-center group">
                {/* Profile Photo */}
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <div className={`w-full h-full rounded-full border-4 ${isDark ? 'border-white' : 'border-gray-300'} overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    <img
                      src="/images/Agent4.jpg"
                      alt="Emily Watson - Technical Director"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.technical.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.technical.name')}
                  </h4>
                  <p className={`${isDark ? 'text-white/70' : 'text-black/70'} text-sm leading-relaxed text-justify`}>
                    {t('about.team.members.technical.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Agent 5 - Marketing Specialist */}
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-8">
              <div className="text-center group">
                {/* Profile Photo */}
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <div className={`w-full h-full rounded-full border-4 ${isDark ? 'border-white' : 'border-gray-300'} overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    <img
                      src="/images/Agent5.jpg"
                      alt="Alex Thompson - Marketing Specialist"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.marketing.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.marketing.name')}
                  </h4>
                  <p className={`${isDark ? 'text-white/70' : 'text-black/70'} text-sm leading-relaxed text-justify`}>
                    {t('about.team.members.marketing.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </section>










      {/* 5) Call to Action Section */}
      <section
        id="cta"
        className={`relative ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} overflow-hidden py-24`}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Call to Action */}
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h3>
                <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                  {t('about.cta.subtitle')}
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    {t('about.cta.getStarted')}
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    {t('about.cta.viewServices')}
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}


