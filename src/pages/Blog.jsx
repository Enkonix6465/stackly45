import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTranslation } from 'react-i18next'

export default function Blog() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [isDark, setIsDark] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' 

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])


  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const user = getCurrentUser()

  const blogPosts = [
    {
      id: 1,
      title: t('blogPage.blogPosts.birthdayEvent.title'),
      excerpt: t('blogPage.blogPosts.birthdayEvent.excerpt'),
      image: "/images/Birthday & Private Parties.jpg",
      category: t('blogPage.blogPosts.birthdayEvent.category'),
      author: t('blogPage.blogPosts.birthdayEvent.author'),
      date: t('blogPage.blogPosts.birthdayEvent.date'),
      readTime: t('blogPage.blogPosts.birthdayEvent.readTime'),
      featured: true,
      eventType: "BIRTHDAY EVENT"
    },
    {
      id: 2,
      title: t('blogPage.blogPosts.corporateEvent.title'),
      excerpt: t('blogPage.blogPosts.corporateEvent.excerpt'),
      image: "/images/CorporateEvents.jpg",
      category: t('blogPage.blogPosts.corporateEvent.category'),
      author: t('blogPage.blogPosts.corporateEvent.author'),
      date: t('blogPage.blogPosts.corporateEvent.date'),
      readTime: t('blogPage.blogPosts.corporateEvent.readTime'),
      featured: true,
      eventType: "CORPORATE EVENT"
    },
    {
      id: 3,
      title: t('blogPage.blogPosts.weddingEvent.title'),
      excerpt: t('blogPage.blogPosts.weddingEvent.excerpt'),
      image: "/images/Wedding Planning.jpg",
      category: t('blogPage.blogPosts.weddingEvent.category'),
      author: t('blogPage.blogPosts.weddingEvent.author'),
      date: t('blogPage.blogPosts.weddingEvent.date'),
      readTime: t('blogPage.blogPosts.weddingEvent.readTime'),
      featured: true,
      eventType: "WEDDING EVENT"
    }
  ]

  const categories = [
    { name: 'all', label: t('blogPage.categories.all'), count: 3 },
    { name: 'freelancing', label: t('blogPage.categories.freelancing'), count: 1 },
    { name: 'client-acquisition', label: t('blogPage.categories.clientAcquisition'), count: 1 },
    { name: 'productivity', label: t('blogPage.categories.productivity'), count: 1 }
  ]

  const trendingTopics = t('blogPage.trendingTopics.topics', { returnObjects: true })

  // Latest Posts Data
  const latestPosts = [
    {
      id: 1,
      title: t('blogPage.latestPosts.posts.eventPlanning.title'),
      excerpt: t('blogPage.latestPosts.posts.eventPlanning.excerpt'),
      image: "/images/Eventplaning.jpg",
      category: t('blogPage.latestPosts.posts.eventPlanning.category'),
      author: t('blogPage.latestPosts.posts.eventPlanning.author'),
      date: t('blogPage.latestPosts.posts.eventPlanning.date'),
      readTime: t('blogPage.latestPosts.posts.eventPlanning.readTime'),
    },
    {
      id: 2,
      title: t('blogPage.latestPosts.posts.corporateEvents.title'),
      excerpt: t('blogPage.latestPosts.posts.corporateEvents.excerpt'),
      image: "/images/Corporate Events2.jpg",
      category: t('blogPage.latestPosts.posts.corporateEvents.category'),
      author: t('blogPage.latestPosts.posts.corporateEvents.author'),
      date: t('blogPage.latestPosts.posts.corporateEvents.date'),
      readTime: t('blogPage.latestPosts.posts.corporateEvents.readTime'),
    },
    {
      id: 3,
      title: t('blogPage.latestPosts.posts.weddingPlanning.title'),
      excerpt: t('blogPage.latestPosts.posts.weddingPlanning.excerpt'),
      image: "/images/wedding planing.jpg",
      category: t('blogPage.latestPosts.posts.weddingPlanning.category'),
      author: t('blogPage.latestPosts.posts.weddingPlanning.author'),
      date: t('blogPage.latestPosts.posts.weddingPlanning.date'),
      readTime: t('blogPage.latestPosts.posts.weddingPlanning.readTime'),
    }
  ]

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
  }

  const scrollToFeaturedArticles = () => {
    const featuredSection = document.getElementById('featured-articles')
    if (featuredSection) {
      featuredSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
<div
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >      <Navbar user={user} />

{/* Showcase */}
<section
  id="showcase"
  className="relative overflow-hidden h-screen flex items-center justify-center text-center"
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/blog.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay (darken video for readability) */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-4xl">
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
        {t('blogPage.showcase.title')}
      </h1>
    </ScrollAnimation>
    
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
      <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
        {t('blogPage.showcase.subtitle')}
      </p>
    </ScrollAnimation>
    
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        {/* Primary Button */}
        <a
          href="/contact"
          className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}
        >
          {t('blogPage.showcase.subscribeButton')}
        </a>
        
        {/* Secondary Button */}
        <a
          href="/services"
          className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${isDark ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-purple-400/25' : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25'}`}
        >
          View
        </a>
      </div>
    </ScrollAnimation>
  </div>
</section>





      

      {/* Section 1: Featured Blog Posts */}
      <section id="featured-articles" className={`relative overflow-hidden py-20 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-purple-50 text-black"
      }`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>{t('blogPage.featuredArticles.title')}</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t('blogPage.featuredArticles.subtitle')}</p>
            </ScrollAnimation>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              // Create staggered delays for each blog card
              const staggerClasses = ['scroll-stagger-3', 'scroll-stagger-4', 'scroll-stagger-5'];
              const staggerClass = staggerClasses[index] || 'scroll-stagger-3';
              
              return (
              <ScrollAnimation key={post.id} animation="fade-in" stagger={staggerClass}>
                <article 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleBlogClick(post.id)}
                >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Event Type Label */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded">
                      {post.eventType}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-white">{post.title}</h3>
                </div>
                </article>
              </ScrollAnimation>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      {/* Section 2: Event Management Hero Section */}
      <section className={`py-20 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8 h-full flex flex-col justify-between">
              <div className="space-y-8">
                <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
                  <div className="space-y-6">
                    <p className="text-sm font-bold text-purple-500 tracking-wider uppercase">
                      {t('blogPage.organizeTheBestEvent.tagline')}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{color: isDark ? 'white' : '#111827'}}>
                      {t('blogPage.organizeTheBestEvent.title')}
                    </h2>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
                  <div className="space-y-4">
                    <p className="text-justify" style={{color: isDark ? 'white' : '#4B5563'}}>
                      {t('blogPage.organizeTheBestEvent.description')}
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg relative">
                    <div className="absolute left-4 top-4 text-6xl text-gray-300 dark:text-gray-600 font-serif">"</div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 italic pl-8">
                      "{t('blogPage.organizeTheBestEvent.quote')}"
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-in" stagger="scroll-stagger-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold" style={{color: isDark ? 'white' : '#111827'}}>{t('blogPage.organizeTheBestEvent.finalThoughtsTitle')}</h3>
                    <p className="text-justify" style={{color: isDark ? 'white' : '#4B5563'}}>
                      {t('blogPage.organizeTheBestEvent.finalThoughtsDescription')}
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation animation="fade-in" stagger="scroll-stagger-5">
                <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25'}`}>
                  {t('blogPage.organizeTheBestEvent.discoverButton')}
                </button>
              </ScrollAnimation>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="relative space-y-6 h-full">
              
              {/* Top Image - Organize the best event */}
              <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-3">
                <div className="relative">
                  <img
                    src="/images/Organize the best event.jpg"
                    alt="Organize the best event"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </ScrollAnimation>

              {/* Middle Image - Conference Audience */}
              <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Conference audience"
                    className="w-full h-56 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </ScrollAnimation>

              {/* Bottom Image - Large Event Audience */}
              <ScrollAnimation animation="slide-in-right" stagger="scroll-stagger-5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Large event audience"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  
                  {/* Decorative Dots Pattern */}
                  <div className="absolute -bottom-2 -right-2 w-32 h-32 opacity-30">
                    <div className="grid grid-cols-4 gap-2 h-full">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Latest Posts */}
      <section className={`py-20 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {t('blogPage.latestPosts.title')}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('blogPage.latestPosts.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  {t('blogPage.latestPosts.viewToggle.grid')}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  {t('blogPage.latestPosts.viewToggle.list')}
                </button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Posts Grid/List */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}>
            {latestPosts.map((post, index) => {
              const staggerClasses = ['scroll-stagger-3', 'scroll-stagger-4', 'scroll-stagger-5'];
              const staggerClass = staggerClasses[index] || 'scroll-stagger-3';
              
              return (
                <ScrollAnimation key={post.id} animation="fade-in" stagger={staggerClass}>
                  <article 
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className={`${
                      viewMode === 'list' 
                        ? 'w-1/3 h-48' 
                        : 'aspect-video'
                    } overflow-hidden`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 line-clamp-1 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className={`text-gray-600 dark:text-gray-400 mb-4 ${
                        viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'
                      }`}>
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {post.date}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>
                      
                      {/* Read More Button */}
                      <div className="mt-4">
                        <span 
                          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-sm transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            scrollToFeaturedArticles()
                          }}
                        >
                          {t('blogPage.latestPosts.readMore')}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>




      



      {/* Section 5: Awesome Team */}
      <section className={`relative overflow-hidden py-20 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-purple-50 text-black"
      }`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-950 via-black to-purple-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200'}`}></div>
        <div className={`absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-80 sm:h-80 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-30 h-30 sm:w-60 sm:h-60 ${isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
        <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                {t('blogPage.awesomeAuthors.title')}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
              <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {t('blogPage.awesomeAuthors.subtitle')}
              </p>
            </ScrollAnimation>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: t('blogPage.awesomeAuthors.authors.brandon.name'),
                role: t('blogPage.awesomeAuthors.authors.brandon.role'),
                bio: t('blogPage.awesomeAuthors.authors.brandon.bio'),
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: t('blogPage.awesomeAuthors.authors.christina.name'),
                role: t('blogPage.awesomeAuthors.authors.christina.role'),
                bio: t('blogPage.awesomeAuthors.authors.christina.bio'),
                image: "/images/A3.jpg"
              },
              {
                name: t('blogPage.awesomeAuthors.authors.martinDave.name'),
                role: t('blogPage.awesomeAuthors.authors.martinDave.role'),
                bio: t('blogPage.awesomeAuthors.authors.martinDave.bio'),
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: t('blogPage.awesomeAuthors.authors.juliaSmith.name'),
                role: t('blogPage.awesomeAuthors.authors.juliaSmith.role'),
                bio: t('blogPage.awesomeAuthors.authors.juliaSmith.bio'),
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => {
              const staggerClasses = ['scroll-stagger-2', 'scroll-stagger-3', 'scroll-stagger-4', 'scroll-stagger-5'];
              const staggerClass = staggerClasses[index] || 'scroll-stagger-2';

              return (
                <ScrollAnimation key={index} animation="fade-in" stagger={staggerClass}>
                  <div className="text-center">
                    {/* Profile Image */}
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                      />
                    </div>
                    
                    {/* Name */}
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                      {member.name}
                    </h3>
                    
                    {/* Separator Line */}
                    <div className={`w-12 h-0.5 mx-auto mb-3 ${isDark ? "bg-gray-400" : "bg-gray-300"}`}></div>
                    
                    {/* Role Tag */}
                    <div className="mb-4">
                      <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    
                    {/* Bio */}
                    <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {member.bio}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      {/* Section 6: Call to Action */}
<section className="relative py-24 bg-fixed bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: "url('/images/CTAB.jpg')"}}>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative mx-auto max-w-4xl px-6 text-center">
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-1">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        {t('blogPage.cta.title')}
      </h2>
    </ScrollAnimation>
    
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-2">
      <p className="text-lg md:text-xl text-gray-300 mb-10">
        {t('blogPage.cta.description')}
      </p>
    </ScrollAnimation>

    {/* CTA Buttons */}
    <ScrollAnimation animation="fade-in" stagger="scroll-stagger-3">
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <a
          href="/contact"
          className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/25"
        >
          {t('blogPage.cta.startFreelancingButton')}
        </a>
        <a
          href="/contact"
          className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-purple-400/25"
        >
          {t('blogPage.cta.learnMoreButton')}
        </a>
      </div>
    </ScrollAnimation>
  </div>
</section>





      <Footer />
    </div>
  )
}
