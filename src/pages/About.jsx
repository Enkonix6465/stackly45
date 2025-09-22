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
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        {/* Primary Button */}
        <button 
          onClick={() => navigate('/contact')}
          className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
        >
          {t('about.showcase.connectButton')}
        </button>
        
        {/* Secondary Button */}
        <button 
          onClick={() => navigate('/services')}
          className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-white text-white hover:bg-white hover:text-purple-600 shadow-white/20'}`}
        >
          {t('about.showcase.exploreButton')}
        </button>
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
        <div className={`absolute -top-20 -right-20 w-80 h-80 ${isDark ? 'bg-gray-500/10' : 'bg-gray-500/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-gray-500/5' : 'bg-gray-500/10'} rounded-full blur-3xl`}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            
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
                <h3 className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-4`}>{t('about.mission.ourMission')}</h3>
                <p className={`${isDark ? 'text-white/90' : 'text-black/80'} leading-relaxed text-lg text-justify`}>
                  {t('about.mission.missionStatement')}
                </p>
                
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
                <h3 className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-4`}>{t('about.mission.ourVision')}</h3>
                <p className={`${isDark ? 'text-white/90' : 'text-black/80'} leading-relaxed text-lg text-justify`}>
                  {t('about.mission.visionStatement')}
                </p>
                
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
                    <div className={`w-12 h-12 ${isDark ? 'bg-gray-500/20 group-hover:bg-gray-500/30' : 'bg-gray-500/30 group-hover:bg-gray-500/40'} rounded-full flex items-center justify-center ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-colors`}>
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
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <ellipse cx={64} cy={116.87} fill="#424242" rx={12.09} ry={7.13}></ellipse>
                    <path fill="#ffd600" d="M64 4C42.92 4 25.82 19.67 25.82 38.99c0 5.04 1.52 10.43 3.75 15.18c3.13 6.68 6.54 11.62 7.54 13.44c2.78 5.06 2.38 10.39 3.15 13.73c1.45 6.24 5.79 8.5 23.73 8.5s21.8-2.15 23.41-7.9c1.1-3.91.03-8.18 2.8-13.23c1-1.82 5.07-7.85 8.21-14.54c2.23-4.75 3.75-10.14 3.75-15.18C102.18 19.67 85.08 4 64 4"></path>
                    <ellipse cx={64} cy={86.13} fill="#b26500" rx={21.94} ry={4.46}></ellipse>
                    <ellipse cx={64} cy={86.13} fill="#b26500" rx={21.94} ry={4.46}></ellipse>
                    <ellipse cx={64} cy={86.13} fill="#ffa000" rx={15.99} ry={2.06}></ellipse>
                    <g fill="none" strokeMiterlimit={10} strokeWidth={2}>
                      <path stroke="#b26500" d="M53.3 56.77c-.62 1.56-2.23 4.77-1.39 6.21c1.95 3.35 6.6 4.55 6.6 7.63c0 4.7-3.42 19.93-3.42 19.93m18.94-34.33s2.24 4.8 1.29 6.95c-.71 1.6-4.98 4.18-5.53 4.61c-2.55 2 .84 22.78.84 22.78"></path>
                      <path stroke="#fff" d="M53.3 56.77c3.44-6.8 5.21-22.32.84-21.53c-7.37 1.33 1.71 26.83 6.18 23.9s10.01-23.85 3.21-23.93s.46 26.66 5.08 23.69c3.65-2.35 12.56-23.66 5.24-23.66c-6.23 0 .19 20.97.19 20.97"></path>
                    </g>
                    <path fill="#82aec0" d="M85.89 87.06S80.13 89.84 64 89.84s-21.89-2.78-21.89-2.78s-.36 5.14.83 7.47c1.43 2.8 2.53 3.77 2.53 3.77l.6 2.85l-.24.75c-.31.98-.09 2.06.6 2.83l.52.58l.58 2.74l-.2.55c-.38 1.05-.12 2.22.66 3.02l.38.39l.47 2.24s2.38 5.08 15.16 5.08s15.16-5.08 15.16-5.08l.04-.19l.26-.26c.52-.51.69-1.27.44-1.95l-.15-.39l.62-2.96l1.09-1.15c.54-.57.66-1.41.31-2.11l-.5-.99l.63-2.97l.4-.31c.59-.65.6-1.63.34-2.3c-.2-.53-.04-1.13.37-1.52c.63-.6 1.44-1.51 2.04-2.64c1.23-2.29.84-7.45.84-7.45"></path>
                    <path fill="#2f7889" d="m45.47 98.3l.54 2.87c5.82-.03 13.59.26 28.5-2.11c2.69-.61 5.92-1.82 2.35-1.32c0-.01-13.69 1.3-31.39.56m2 9.77c6.44-.11 19.6-.75 33.74-3.82l.63-2.97c-14.79 3.36-28.7 3.96-34.95 4.04zm32.84.42c-13.09 2.84-25.34 3.57-31.97 3.73l.43 2.04s.21 6.33 15.16 6.33s15.16-6.33 15.16-6.33s-6.38 1.82-14.23.93a.63.63 0 0 1-.01-1.26c4.69-.62 10.29-1.54 14.84-2.48z"></path>
                    <path fill="none" stroke="#82aec0" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3.997} d="M42.18 87.06s6.46 2.78 21.76 2.78s21.88-2.78 21.88-2.78"></path>
                    <path fill="#ffff8d" d="M49.88 10.32c3.91-.96 8-.48 10.8 2.92c.79.96 1.4 2.1 1.54 3.34c.28 2.39-1.2 4.65-2.96 6.31c-5.02 4.74-12.15 7.04-15.39 13.58c-.76 1.53-1.36 3.18-2.52 4.43s-3.09 2.01-4.6 1.21c-.8-.42-1.35-1.21-1.8-2c-2.84-5.06-2.63-11.51-.13-16.75c2.75-5.74 8.78-11.5 15.06-13.04"></path>
                    <path fill="#ffd600" d="M46.45 91.93c-.88-.4-.53-1.72.43-1.65c3.22.25 8.7.56 15.95.56c7.64 0 14.36-.57 18.28-.99c.97-.1 1.34 1.23.45 1.64c-3.02 1.42-8.55 3.04-18.03 3.04c-9.25 0-14.35-1.37-17.08-2.6"></path>
                    <path fill="#94d1e0" d="M51.94 102.03c-.67.24-1.36.57-1.7 1.19c-.12.23-.19.49-.14.75c.08.38.43.65.78.82c.7.34 1.49.43 2.26.44c1.59.02 3.17-.28 4.74-.58c.47-.09.95-.18 1.37-.41s.78-.62.85-1.09c.1-.63-.35-1.24-.9-1.54c-1.9-1.05-5.34-.27-7.26.42m1.49 6.59c-.67.24-1.36.57-1.7 1.19c-.12.23-.19.49-.14.75c.08.38.43.65.78.82c.7.34 1.49.43 2.26.44c1.59.02 3.17-.28 4.74-.58c.47-.09.95-.18 1.37-.41s.78-.62.85-1.09c.1-.63-.35-1.24-.9-1.54c-1.9-1.04-5.35-.26-7.26.42"></path>
                    <path fill="#ffff8d" d="M50.01 84.2c.91.09 1.87.01 2.64-.48s1.26-1.49.95-2.35c-.16-.45-.51-.81-.85-1.15c-.75-.74-1.5-1.48-2.24-2.22c-.83-.83-1.66-1.65-2.56-2.4c-1.39-1.16-3.26-2.25-5.09-1.4c-1.56.72-1.93 2.14-1.24 3.63c1.47 3.13 4.89 6.01 8.39 6.37"></path>
                  </svg>
                )
              },
              {
                title: t('about.mission.values.excellence.title'),
                description: t('about.mission.values.excellence.description'),
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"></path>
                    <path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"></path>
                    <path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"></path>
                  </svg>
                )
              },
              {
                title: t('about.mission.values.integrity.title'),
                description: t('about.mission.values.integrity.description'),
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#b0bec5" d="M16.77 19.75c-1 0-1.7.8-1.7 1.8v.1c-1.5 25.91 3.03 59.27 24.01 83.52c12.1 14.7 23.91 18.53 24.51 18.73c0 0 .28.09.54.09s.57-.1.57-.1c.5-.2 12.48-4.02 24.49-18.72c19.91-24.21 24.01-58.82 24.01-83.52v-.1c0-1-.8-1.8-1.7-1.8c-.3 0-29.11-1-46.01-15.3c-.7-.6-1.7-.6-2.4 0c-17.11 14.2-46.02 15.2-46.32 15.3"></path>
                    <path fill="#84b0c1" d="M111.49 19.75c-.3 0-29.11-1-46.01-15.3c-.4-.35-.83-.45-1.24-.45h-.11v120c.27-.01.62-.11.62-.12c.6-.25 12.44-4 24.44-18.7c19.91-24.21 24.01-58.82 24.01-83.52v-.1c0-1.01-.8-1.81-1.71-1.81"></path>
                    <path fill="#2f7889" d="M26.33 28.31c-.82 0-1.02 1.02-1.02 1.74v.1c0 19.72 3.06 47.4 19 66.71c9.6 11.75 19 14.81 19.41 14.91l.41.1l.41-.1c.41-.1 9.81-3.17 19.41-14.91c15.94-19.31 19-46.89 19-66.71v-.1c0-.82-.41-1.43-1.23-1.43h.1c-.2 0-23.19-.82-36.67-12.16c-1.19-.98-1.94-.2-1.94-.2C49.63 27.6 26.64 28.31 26.33 28.31"></path>
                    <path fill="#c9e3e6" d="M29.18 30.07c-.76 0-.94.96-.94 1.64v.1c0 18.57 2.83 44.65 17.57 62.84c8.88 11.07 17.57 13.95 17.95 14.05l.38.1l.38-.1c.38-.1 9.07-2.98 17.95-14.05c14.73-18.19 17.57-44.17 17.57-62.84v-.1c0-.77-.38-1.35-1.13-1.35H99c-.19 0-21.44-.77-33.91-11.45c-.94-.95-1.79-.19-1.79-.19C50.72 29.4 29.47 30.07 29.18 30.07"></path>
                    <path fill="#b0bec5" d="M98.89 30.36h.09c-.19 0-21.44-.77-33.91-11.45c-.34-.34-.66-.46-.94-.47v90.35l.38-.1c.38-.1 9.07-2.98 17.95-14.05c14.73-18.19 17.57-44.17 17.57-62.84v-.1c-.01-.76-.38-1.34-1.14-1.34"></path>
                    <circle cx={70.63} cy={14.44} r={1.93} fill="#37474f"></circle>
                    <circle cx={82.21} cy={19.67} r={1.93} fill="#37474f"></circle>
                    <circle cx={95.01} cy={23.21} r={1.93} fill="#37474f"></circle>
                    <circle cx={108.15} cy={25.14} r={1.93} fill="#37474f"></circle>
                    <circle cx={108.57} cy={36.94} r={1.93} fill="#37474f"></circle>
                    <circle cx={107.02} cy={50.76} r={1.93} fill="#37474f"></circle>
                    <circle cx={64.08} cy={118.11} r={1.93} fill="#37474f"></circle>
                    <circle cx={75.4} cy={112.71} r={1.93} fill="#37474f"></circle>
                    <circle cx={85.74} cy={102.71} r={1.93} fill="#37474f"></circle>
                    <circle cx={93.81} cy={91.27} r={1.93} fill="#37474f"></circle>
                    <circle cx={99.67} cy={79} r={1.93} fill="#37474f"></circle>
                    <circle cx={104.27} cy={64.65} r={1.93} fill="#37474f"></circle>
                    <circle cx={70.15} cy={13.8} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={81.73} cy={19.03} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={94.53} cy={22.57} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={107.66} cy={24.5} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={108.09} cy={36.3} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={106.53} cy={50.12} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={63.6} cy={117.47} r={1.93} fill="#eee"></circle>
                    <circle cx={74.92} cy={112.07} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={85.26} cy={102.07} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={93.33} cy={90.63} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={99.19} cy={78.36} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={103.79} cy={64.01} r={1.93} fill="#b9e4ea"></circle>
                    <circle cx={57.97} cy={14.44} r={1.93} fill="#2f7889"></circle>
                    <circle cx={46.39} cy={19.67} r={1.93} fill="#2f7889"></circle>
                    <circle cx={33.59} cy={23.21} r={1.93} fill="#2f7889"></circle>
                    <circle cx={20.45} cy={25.14} r={1.93} fill="#2f7889"></circle>
                    <circle cx={20.02} cy={36.94} r={1.93} fill="#2f7889"></circle>
                    <circle cx={21.58} cy={50.76} r={1.93} fill="#2f7889"></circle>
                    <circle cx={53.19} cy={112.71} r={1.93} fill="#2f7889"></circle>
                    <circle cx={42.86} cy={102.71} r={1.93} fill="#2f7889"></circle>
                    <circle cx={34.79} cy={91.27} r={1.93} fill="#2f7889"></circle>
                    <circle cx={28.92} cy={79} r={1.93} fill="#2f7889"></circle>
                    <circle cx={24.33} cy={64.65} r={1.93} fill="#2f7889"></circle>
                    <circle cx={57.54} cy={13.8} r={1.93} fill="#eee"></circle>
                    <circle cx={45.95} cy={19.03} r={1.93} fill="#eee"></circle>
                    <circle cx={33.16} cy={22.57} r={1.93} fill="#eee"></circle>
                    <circle cx={20.02} cy={24.5} r={1.93} fill="#eee"></circle>
                    <circle cx={19.59} cy={36.3} r={1.93} fill="#eee"></circle>
                    <circle cx={21.15} cy={50.12} r={1.93} fill="#eee"></circle>
                    <circle cx={52.76} cy={112.07} r={1.93} fill="#eee"></circle>
                    <circle cx={42.42} cy={102.07} r={1.93} fill="#eee"></circle>
                    <circle cx={34.36} cy={90.63} r={1.93} fill="#eee"></circle>
                    <circle cx={28.49} cy={78.36} r={1.93} fill="#eee"></circle>
                    <circle cx={23.89} cy={64.01} r={1.93} fill="#eee"></circle>
                  </svg>
                )
              },
              {
                title: t('about.mission.values.collaboration.title'),
                description: t('about.mission.values.collaboration.description'),
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path fill="#84b0c1" d="M23.91 104.02c-6.5-6.63-6.5-17.21 0-23.84l18.74-18.74c2.04-2.04 4.72-3.57 7.52-4.33s5.74-.76 8.41-.13c2.8.76 5.48 2.17 7.65 4.21l.25.25c6.63 6.63 6.63 17.21 0 23.84l-18.74 18.74c-6.62 6.63-17.33 6.63-23.83 0m53.03-53.03c-12.36-12.36-32.63-12.36-45 0L13.33 69.73c-12.36 12.36-12.36 32.63 0 45s32.63 12.36 45 0l18.74-18.74c12.23-12.37 12.23-32.63-.13-45"></path>
                    <path fill="#2f7889" d="M66.86 48.48c3.36-1.69 6.57-.51 6.57-.51c-6.94-5.13-14.51-6.59-21.03-6.18c-.04.05-.07.1-.11.16c-2.86 4.39-3.5 10.19-1.72 15.07c2.68-.66 5.46-.64 8-.03c1.04.28 1.83.55 3.39 1.28c.01-.01-.54-7.05 4.9-9.79m-20.1 9.98c.13-.97.19-1.95.25-2.93c.28-4.22 1-8.42 2.14-12.49c.08-.29.16-.6.24-.91c-3.09.49-6.12 1.43-8.97 2.83c-4.44 5.73-2.98 13.15 2.23 16.49c1.19-1.19 2.59-2.2 4.11-2.99"></path>
                    <path fill="#84b0c1" d="M104.09 23.98c6.5 6.63 6.5 17.21 0 23.84L85.35 66.56c-2.04 2.04-4.72 3.57-7.52 4.33s-5.74.76-8.41.13c-2.8-.76-5.48-2.17-7.65-4.21l-.25-.25c-6.63-6.63-6.63-17.21 0-23.84l18.74-18.74c6.62-6.63 17.33-6.63 23.83 0M51.06 77.01c12.36 12.36 32.63 12.36 45 0l18.61-18.74c12.36-12.36 12.36-32.63 0-45s-32.63-12.36-45 0L50.94 32.01c-12.24 12.37-12.24 32.63.12 45"></path>
                    <path fill="#a8e3f0" d="M50.45 39.42c.04-.03.08-.07.12-.1c.53-.46 1.12-.9 1.81-1.02s1.5.19 1.74.85c.18.49.02 1.03-.15 1.52c-2.63 7.95-4.74 18.04-2.18 26.27c.25.8.49 1.83-.18 2.33c-.39.3-.97.25-1.4.02c-4.7-2.54-5.52-9.42-5.74-14.14c-.26-5.96 1.39-11.7 5.98-15.73"></path>
                    <path fill="#2f7889" d="M71.32 71.34c-.64-.08-1.32-.21-1.32-.21s-.1 4.27-3.51 7.81c-3.78 3.92-7.55 3.82-7.55 3.82c1.99 1.15 5.96 2.34 7.4 2.68l.15-.15c3.83-3.84 5.43-9 4.83-13.95m19.44-10.19l-5.33 5.33c1.33 5.94.97 12.18-1.09 17.94c2.59-.92 5.08-2.19 7.4-3.8c3.83-6.56 2.99-14.31-.98-19.47"></path>
                    <path fill="#a8e3f0" d="M79.89 70.01c-.63-1.59-1.86-3.2-3.4-3.05c-.96.09-2.45.99-2.35 3.74c.07 2.13.88 4.21-.28 7c-1.7 4.08-1.31 5.18-.9 5.83c.45.71 1.28 1.03 2.05 1.02c2.03-.01 3.71-1.87 4.63-3.91c1.49-3.26 1.58-7.29.25-10.63m-30.64 38.17c.64-.53 2.3-2.3 3.07-1.18c-.28 3.08-2.65 5.59-5.25 7.27c-3.2 2.07-6.99 3.29-10.8 3.18c-3.16-.09-8.4-1.37-10.24-4.3c-1.5-2.38 1.67-2.79 3.43-2.13c6.27 2.39 13.36 2.44 19.79-2.84"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <ScrollAnimation key={value.title} animation="fade-in" stagger={`scroll-stagger-${index + 9}`}>
                <div className={`group p-6 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-gray-500/30' : 'bg-white/80 hover:bg-white border-gray-200 hover:border-gray-500/50'} transition-all duration-300 border`}>
                  <div className={`${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'} mb-4 transition-colors`}>
                    {value.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${isDark ? 'text-white group-hover:text-gray-300' : 'text-black group-hover:text-gray-700'} mb-3 transition-colors`}>
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
        className={`relative ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} overflow-hidden py-24`}
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
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <g fill="none">
                        <path fill="#9b9b9b" d="M2 30h4.032l9.945-2.775L25.922 30H30V9.3A2.3 2.3 0 0 0 27.7 7H4.3A2.3 2.3 0 0 0 2 9.3z"></path>
                        <path fill="#83cbff" d="M27 14h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .56-.45 1-1 1m1 4v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1m0 5v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.44 1-1M7 22v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1M6 11H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1m0 5H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1"></path>
                        <path fill="#d3d3d3" d="M26 30h-7.013l-3.016-1.73L12.956 30H6V4.46C6 3.1 7.1 2 8.46 2h15.08C24.9 2 26 3.1 26 4.46z"></path>
                        <path fill="#1c1c1c" d="M19 30h-6v-3.75c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.26.56 1.26 1.26V30z"></path>
                        <path fill="#83cbff" d="M14.5 18h-3c-.27 0-.5-.22-.5-.5v-2.01c0-.27.22-.5.5-.5h3.01c.27 0 .5.22.5.5v2.01a.51.51 0 0 1-.51.5m6.5-.49V15.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6 5V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V20.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6-15V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V5.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m-6 5V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5m6 0V10.5c0-.27-.22-.5-.5-.5h-3c-.27 0-.5.22-.5.5v2.01c0 .27.22.5.5.5h3.01c.27-.01.49-.23.49-.5"></path>
                      </g>
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
                    <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                      <path fill="#ef9645" d="M16.428 30.331a2.31 2.31 0 0 0 3.217-.568a.8.8 0 0 0-.197-1.114l-1.85-1.949l4.222 2.955a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-3.596-3.305l5.375 3.763a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-4.766-4.073l5.864 4.105a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089L4.733 11.194l-3.467 5.521c-.389.6-.283 1.413.276 1.891l7.786 6.671q.533.456 1.107.859z"></path>
                      <path fill="#ffdc5d" d="M29.802 21.752L18.5 13.601l-.059-.08l.053-.08l.053-.053l.854.469c.958.62 3.147 1.536 4.806 1.536c1.135 0 1.815-.425 2.018-1.257a1.41 1.41 0 0 0-1.152-1.622a6.8 6.8 0 0 1-2.801-1.091l-.555-.373c-.624-.421-1.331-.898-1.853-1.206c-.65-.394-1.357-.585-2.163-.585c-1.196 0-2.411.422-3.585.83l-1.266.436a5.2 5.2 0 0 1-1.696.271c-1.544 0-3.055-.586-4.516-1.152l-.147-.058a1.39 1.39 0 0 0-1.674.56L1.35 15.669a1.36 1.36 0 0 0 .257 1.761l7.785 6.672c.352.301.722.588 1.1.852l6.165 4.316a2 2 0 0 0 2.786-.491a.803.803 0 0 0-.196-1.115l-1.833-1.283a.424.424 0 0 1-.082-.618a.42.42 0 0 1 .567-.075l3.979 2.785a1.4 1.4 0 0 0 1.606-2.294l-3.724-2.606a.424.424 0 0 1-.082-.618a.423.423 0 0 1 .567-.075l5.132 3.593a1.4 1.4 0 0 0 1.606-2.294l-4.868-3.407a.42.42 0 0 1-.081-.618a.377.377 0 0 1 .506-.066l5.656 3.959a1.4 1.4 0 0 0 1.606-2.295"></path>
                      <path fill="#ef9645" d="M16.536 27.929c-.07.267-.207.498-.389.681l-1.004.996a1.5 1.5 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.5 1.5 0 0 1 1.437-.396a1.5 1.5 0 0 1 1.072 1.831M5.992 23.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.495 1.495 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.5 1.5 0 0 0 1.673-.31m5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 23.94a1.5 1.5 0 1 0 2.122 2.118zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.49 1.49 0 0 0-1.173.44L9.323 25.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44zm16.555-4.137l.627-.542l-6.913-10.85l-12.27 1.985a1.507 1.507 0 0 0-1.235 1.737c.658 2.695 6.003.693 8.355-.601z"></path>
                      <path fill="#ffcc4d" d="M16.536 26.929c-.07.267-.207.498-.389.681l-1.004.996a1.5 1.5 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.5 1.5 0 0 1 1.437-.396a1.5 1.5 0 0 1 1.072 1.831M5.992 22.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.5 1.5 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.5 1.5 0 0 0 1.673-.31m5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 22.94a1.5 1.5 0 1 0 2.122 2.118zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.49 1.49 0 0 0-1.173.44L9.323 24.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44zm21.557-7.456a1.45 1.45 0 0 0 .269-1.885l-.003-.005l-3.467-6.521a1.49 1.49 0 0 0-1.794-.6c-1.992.771-4.174 1.657-6.292.937l-1.098-.377c-1.948-.675-4.066-1.466-6-.294c-.695.409-1.738 1.133-2.411 1.58a6.9 6.9 0 0 1-2.762 1.076a1.5 1.5 0 0 0-1.235 1.737c.613 2.512 5.3.908 7.838-.369a.97.97 0 0 1 1.002.081l11.584 8.416z"></path>
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
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
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
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="none">
                        <path fill="#ffdda1" d="M14.9 10.194a.5.5 0 0 0-.298-.1H9.41a.5.5 0 0 0-.298.1c-2.15 1.642-4.556 4.82-4.556 7.346C4.555 21.105 6.54 23 12 23s7.446-1.895 7.446-5.46c0-2.526-2.396-5.704-4.546-7.346"></path>
                        <path fill="#ffbc44" d="M12 18.451c-4.014 0-6.155-1.025-7-2.985a5.7 5.7 0 0 0-.445 2.071c0 3.565 1.985 5.46 7.445 5.46s7.446-1.895 7.446-5.46a5.7 5.7 0 0 0-.444-2.074c-.847 1.96-2.985 2.988-7.002 2.988"></path>
                        <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M8.526 8.106h6.95" strokeWidth={1}></path>
                        <path fill="#ffbc44" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.713 2.444a.497.497 0 0 0-.633-.695l-2.084.894l-.531-1.33a.496.496 0 0 0-.923 0l-.534 1.333l-2.084-.894a.496.496 0 0 0-.633.695c.58 1.004.988 2.1 1.204 3.239a.496.496 0 0 0 .497.435h4.035a.496.496 0 0 0 .497-.435a10.3 10.3 0 0 1 1.19-3.242z" strokeWidth={1}></path>
                        <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12.496 13.566v-.993m1.489.993h-2.014a1.333 1.333 0 0 0-.496 2.568l2.048.82a1.331 1.331 0 0 1-.497 2.569h-2.019m1.489.992v-.993" strokeWidth={1}></path>
                        <path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M14.9 10.194a.5.5 0 0 0-.298-.1H9.41a.5.5 0 0 0-.298.1c-2.15 1.642-4.556 4.82-4.556 7.346C4.555 21.105 6.54 23 12 23s7.446-1.895 7.446-5.46c0-2.526-2.396-5.704-4.546-7.346" strokeWidth={1}></path>
                      </g>
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
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#7cb342" d="M24 4C13 4 4 13 4 24s9 20 20 20s20-9 20-20S35 4 24 4"></path>
                      <path fill="#0277bd" d="M45 24c0 11.7-9.5 21-21 21S3 35.7 3 24S12.3 3 24 3s21 9.3 21 21m-21.2 9.7c0-.4-.2-.6-.6-.8c-1.3-.4-2.5-.4-3.6-1.5c-.2-.4-.2-.8-.4-1.3c-.4-.4-1.5-.6-2.1-.8h-4.2c-.6-.2-1.1-1.1-1.5-1.7c0-.2 0-.6-.4-.6c-.4-.2-.8.2-1.3 0c-.2-.2-.2-.4-.2-.6c0-.6.4-1.3.8-1.7c.6-.4 1.3.2 1.9.2c.2 0 .2 0 .4.2c.6.2.8 1 .8 1.7v.4c0 .2.2.2.4.2c.2-1.1.2-2.1.4-3.2c0-1.3 1.3-2.5 2.3-2.9c.4-.2.6.2 1.1 0c1.3-.4 4.4-1.7 3.8-3.4c-.4-1.5-1.7-2.9-3.4-2.7c-.4.2-.6.4-1 .6c-.6.4-1.9 1.7-2.5 1.7c-1.1-.2-1.1-1.7-.8-2.3c.2-.8 2.1-3.6 3.4-3.1l.8.8c.4.2 1.1.2 1.7.2c.2 0 .4 0 .6-.2s.2-.2.2-.4c0-.6-.6-1.3-1-1.7s-1.1-.8-1.7-1.1c-2.1-.6-5.5.2-7.1 1.7s-2.9 4-3.8 6.1c-.4 1.3-.8 2.9-1 4.4c-.2 1-.4 1.9.2 2.9c.6 1.3 1.9 2.5 3.2 3.4c.8.6 2.5.6 3.4 1.7c.6.8.4 1.9.4 2.9c0 1.3.8 2.3 1.3 3.4c.2.6.4 1.5.6 2.1c0 .2.2 1.5.2 1.7c1.3.6 2.3 1.3 3.8 1.7c.2 0 1-1.3 1-1.5c.6-.6 1.1-1.5 1.7-1.9c.4-.2.8-.4 1.3-.8c.4-.4.6-1.3.8-1.9c.1-.5.3-1.3.1-1.9m.4-19.4c.2 0 .4-.2.8-.4c.6-.4 1.3-1.1 1.9-1.5s1.3-1.1 1.7-1.5c.6-.4 1.1-1.3 1.3-1.9c.2-.4.8-1.3.6-1.9c-.2-.4-1.3-.6-1.7-.8c-1.7-.4-3.1-.6-4.8-.6c-.6 0-1.5.2-1.7.8c-.2 1.1.6.8 1.5 1.1c0 0 .2 1.7.2 1.9c.2 1-.4 1.7-.4 2.7c0 .6 0 1.7.4 2.1zM41.8 29c.2-.4.2-1.1.4-1.5c.2-1 .2-2.1.2-3.1c0-2.1-.2-4.2-.8-6.1c-.4-.6-.6-1.3-.8-1.9c-.4-1.1-1-2.1-1.9-2.9c-.8-1.1-1.9-4-3.8-3.1c-.6.2-1 1-1.5 1.5c-.4.6-.8 1.3-1.3 1.9c-.2.2-.4.6-.2.8c0 .2.2.2.4.2c.4.2.6.2 1 .4c.2 0 .4.2.2.4c0 0 0 .2-.2.2c-1 1.1-2.1 1.9-3.1 2.9c-.2.2-.4.6-.4.8s.2.2.2.4s-.2.2-.4.4c-.4.2-.8.4-1.1.6c-.2.4 0 1.1-.2 1.5c-.2 1.1-.8 1.9-1.3 2.9c-.4.6-.6 1.3-1 1.9c0 .8-.2 1.5.2 2.1c1 1.5 2.9.6 4.4 1.3c.4.2.8.2 1.1.6c.6.6.6 1.7.8 2.3c.2.8.4 1.7.8 2.5c.2 1 .6 2.1.8 2.9c1.9-1.5 3.6-3.1 4.8-5.2c1.5-1.3 2.1-3 2.7-4.7"></path>
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
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <g fill="none">
                        <path fill="#533566" d="M16 27c6.627 0 12-5.373 12-12S22.627 3 16 3S4 8.373 4 15s5.373 12 12 12"></path>
                        <path fill="#b4acbc" d="M24 24H8l-.921 4.18c-.333.897.433 1.82 1.512 1.82h14.822c1.078 0 1.834-.923 1.512-1.82z"></path>
                        <path fill="#fcd53f" d="M14.205 6.264a.5.5 0 0 1-.26-.261l-.38-.897a.19.19 0 0 0-.34 0l-.38.897a.48.48 0 0 1-.26.261l-.48.222a.192.192 0 0 0 0 .343l.48.221c.12.05.21.152.26.262l.38.897a.19.19 0 0 0 .34 0l.38-.897a.48.48 0 0 1 .26-.262l.48-.221a.192.192 0 0 0 0-.343zm9.915 4.54a.73.73 0 0 1-.36-.373l-.54-1.28a.274.274 0 0 0-.49 0l-.54 1.28a.73.73 0 0 1-.36.373l-.68.312c-.2.1-.2.393 0 .494l.68.312c.16.07.29.211.36.373l.54 1.28c.1.2.39.2.49 0l.54-1.28a.72.72 0 0 1 .36-.373l.68-.312c.2-.101.2-.393 0-.494zM12.586 14.03c.139.352.398.636.73.792l1.379.655c.407.215.407.83 0 1.046l-1.378.655c-.324.156-.592.44-.73.792l-1.092 2.707a.54.54 0 0 1-.99 0L9.414 17.97a1.46 1.46 0 0 0-.73-.792l-1.379-.655c-.407-.215-.407-.83 0-1.046l1.378-.655c.324-.156.592-.44.73-.792l1.092-2.707a.54.54 0 0 1 .99 0z"></path>
                      </g>
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
        className={`relative ${isDark ? 'bg-black text-white' : 'bg-purple-50 text-black'} overflow-hidden py-24`}
      >
        {/* Background decorative elements */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-indigo-950' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-20 -right-20 w-80 h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        
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
                <div className="space-y-3">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.coordinator.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.coordinator.name')}
                  </h4>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
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
                <div className="space-y-3">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.venue.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.venue.name')}
                  </h4>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
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
                <div className="space-y-3">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.catering.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.catering.name')}
                  </h4>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
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
                <div className="space-y-3">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.technical.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.technical.name')}
                  </h4>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
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
                <div className="space-y-3">
                  <h3 className={`${isDark ? 'text-purple-400' : 'text-purple-600'} font-semibold text-sm uppercase tracking-wide`}>
                    {t('about.team.members.marketing.role')}
                  </h3>
                  <h4 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                    {t('about.team.members.marketing.name')}
                  </h4>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </section>










      {/* 5) Call to Action Section */}
      <section
        id="cta"
        className={`relative ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} overflow-hidden py-24`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${isDark ? '' : ''}`}>
              {/* Left: Subscribe panel */}
              <div className={`rounded-2xl ${isDark ? 'bg-white text-black' : 'bg-white'} p-8 flex flex-col justify-center`}>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">All-in-One Event Management</h3>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  From conferences to corporate meets, manage registrations, schedules, and engagement in one powerful platform.
                </p>
                <div>
                  <button
                    onClick={() => navigate('/contact')}
                    className="h-12 px-8 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Reach Out Now
                  </button>
                </div>
              </div>

              {/* Right: Video */}
              <div className="rounded-2xl overflow-hidden min-h-[280px] lg:min-h-0 relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                  className="w-full h-full object-cover"
                  style={{
                    pointerEvents: 'none',
                    WebkitMediaControls: 'none',
                    WebkitMediaControlsOverlayPlayButton: 'none'
                  }}
                >
                  <source src="/CTA.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <style jsx>{`
                  video::-webkit-media-controls {
                    display: none !important;
                  }
                  video::-webkit-media-controls-enclosure {
                    display: none !important;
                  }
                  video::-webkit-media-controls-panel {
                    display: none !important;
                  }
                  video::-webkit-media-controls-play-button {
                    display: none !important;
                  }
                  video::-webkit-media-controls-timeline {
                    display: none !important;
                  }
                  video::-webkit-media-controls-current-time-display {
                    display: none !important;
                  }
                  video::-webkit-media-controls-time-remaining-display {
                    display: none !important;
                  }
                  video::-webkit-media-controls-mute-button {
                    display: none !important;
                  }
                  video::-webkit-media-controls-volume-slider {
                    display: none !important;
                  }
                  video::-webkit-media-controls-fullscreen-button {
                    display: none !important;
                  }
                `}</style>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}


