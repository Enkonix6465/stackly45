import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function BlogPost3() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [isDark, setIsDark] = useState(false)

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

  return (
    <div
      className={`transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar user={user} />

      {/* Hero Section */}
      <section 
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/Wedding Planning.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/80"></div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm font-medium">{t('blogPost3.hero.category')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost3.hero.readTime')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost3.hero.date')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              {t('blogPost3.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {t('blogPost3.hero.subtitle')}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                EM
              </div>
              <div>
                <p className="font-semibold">{t('blogPost3.hero.author')}</p>
                <p className="text-white/80 text-sm">{t('blogPost3.hero.authorRole')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <img
                  src="/images/Wedding Planning.jpg"
                  alt="Wedding Venue Selection Guide"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {t('blogPost3.content.intro')}
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.whyMatters.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.whyMatters.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost3.content.whyMatters.factors.title')}
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">💒</span>
                    <span>{t('blogPost3.content.whyMatters.factors.aesthetic')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">👥</span>
                    <span>{t('blogPost3.content.whyMatters.factors.capacity')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">💰</span>
                    <span>{t('blogPost3.content.whyMatters.factors.budget')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">📅</span>
                    <span>{t('blogPost3.content.whyMatters.factors.date')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎨</span>
                    <span>{t('blogPost3.content.whyMatters.factors.decor')}</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.process.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.process.description')}
                </p>

                <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-pink-800 dark:text-pink-200">
                    🎯 {t('blogPost3.content.process.timeline.title')}
                  </h4>
                  <ul className="space-y-2 text-pink-700 dark:text-pink-300">
                    <li>• {t('blogPost3.content.process.timeline.vision')}</li>
                    <li>• {t('blogPost3.content.process.timeline.budget')}</li>
                    <li>• {t('blogPost3.content.process.timeline.research')}</li>
                    <li>• {t('blogPost3.content.process.timeline.tours')}</li>
                    <li>• {t('blogPost3.content.process.timeline.compare')}</li>
                    <li>• {t('blogPost3.content.process.timeline.book')}</li>
                    <li>• {t('blogPost3.content.process.timeline.details')}</li>
                    <li>• {t('blogPost3.content.process.timeline.walkthrough')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.considerations.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.considerations.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🏛️ {t('blogPost3.content.considerations.categories.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-pink-200 dark:border-pink-700 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                    <h4 className="font-semibold mb-2 text-pink-800 dark:text-pink-200">🏰 {t('blogPost3.content.considerations.categories.historic.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.content.considerations.categories.historic.description')}
                    </p>
                  </div>
                  <div className="p-4 border border-green-200 dark:border-green-700 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">🌿 {t('blogPost3.content.considerations.categories.outdoor.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.content.considerations.categories.outdoor.description')}
                    </p>
                  </div>
                  <div className="p-4 border border-blue-200 dark:border-blue-700 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">🏢 {t('blogPost3.content.considerations.categories.modern.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.content.considerations.categories.modern.description')}
                    </p>
                  </div>
                  <div className="p-4 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">🏡 {t('blogPost3.content.considerations.categories.rustic.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.content.considerations.categories.rustic.description')}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.budget.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.budget.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  💰 {t('blogPost3.content.budget.guidelines.title')}
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">📊</span>
                    <span><strong>{t('blogPost3.content.budget.guidelines.percentage')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🍽️</span>
                    <span><strong>{t('blogPost3.content.budget.guidelines.inclusive')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">📅</span>
                    <span><strong>{t('blogPost3.content.budget.guidelines.seasonal')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🎨</span>
                    <span><strong>{t('blogPost3.content.budget.guidelines.decor')}</strong></span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.tourQuestions.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.tourQuestions.description')}
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    ❓ {t('blogPost3.content.tourQuestions.questions.title')}
                  </h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• {t('blogPost3.content.tourQuestions.questions.included')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.catering')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.capacity')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.noise')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.parking')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.vendors')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.backup')}</li>
                    <li>• {t('blogPost3.content.tourQuestions.questions.payment')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.venueTypes.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.venueTypes.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🏨 {t('blogPost3.content.venueTypes.hotel.title')}
                </h3>
                <div className="mb-8 space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">✅ {t('blogPost3.content.venueTypes.hotel.advantages.title')}</h4>
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li>• {t('blogPost3.content.venueTypes.hotel.advantages.accommodation')}</li>
                      <li>• {t('blogPost3.content.venueTypes.hotel.advantages.coordination')}</li>
                      <li>• {t('blogPost3.content.venueTypes.hotel.advantages.spaces')}</li>
                      <li>• {t('blogPost3.content.venueTypes.hotel.advantages.backup')}</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h4 className="font-bold text-lg mb-3 text-red-800 dark:text-red-200">⚠️ {t('blogPost3.content.venueTypes.hotel.considerations.title')}</h4>
                    <ul className="space-y-2 text-red-700 dark:text-red-300">
                      <li>• {t('blogPost3.content.venueTypes.hotel.considerations.costs')}</li>
                      <li>• {t('blogPost3.content.venueTypes.hotel.considerations.flexibility')}</li>
                      <li>• {t('blogPost3.content.venueTypes.hotel.considerations.restrictions')}</li>
                      <li>• {t('blogPost3.content.venueTypes.hotel.considerations.personal')}</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🌿 {t('blogPost3.content.venueTypes.outdoor.title')}
                </h3>
                <div className="mb-8 space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                    <h4 className="font-bold text-lg mb-3 text-green-800 dark:text-green-200">✅ {t('blogPost3.content.venueTypes.outdoor.advantages.title')}</h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300">
                      <li>• {t('blogPost3.content.venueTypes.outdoor.advantages.beauty')}</li>
                      <li>• {t('blogPost3.content.venueTypes.outdoor.advantages.photos')}</li>
                      <li>• {t('blogPost3.content.venueTypes.outdoor.advantages.affordable')}</li>
                      <li>• {t('blogPost3.content.venueTypes.outdoor.advantages.flexible')}</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                    <h4 className="font-bold text-lg mb-3 text-orange-800 dark:text-orange-200">⚠️ {t('blogPost3.content.venueTypes.outdoor.considerations.title')}</h4>
                    <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                      <li>• {t('blogPost3.content.venueTypes.outdoor.considerations.weather')}</li>
                      <li>• {t('blogPost3.content.venueTypes.outdoor.considerations.costs')}</li>
                      <li>• {t('blogPost3.content.venueTypes.outdoor.considerations.accessibility')}</li>
                      <li>• {t('blogPost3.content.venueTypes.outdoor.considerations.noise')}</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.decision.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost3.content.decision.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎯 {t('blogPost3.content.decision.framework.title')}
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>{t('blogPost3.content.decision.framework.chart')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost3.content.decision.framework.priorities')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost3.content.decision.framework.visualize')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost3.content.decision.framework.availability')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost3.content.decision.framework.contracts')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost3.content.decision.framework.instincts')}</strong>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.postBooking.title')}
                </h2>
                <p className="mb-8">
                  {t('blogPost3.content.postBooking.description')}
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">
                    📋 {t('blogPost3.content.postBooking.actionItems.title')}
                  </h4>
                  <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                    <li>• {t('blogPost3.content.postBooking.actionItems.contract')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.meetings')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.timeline')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.vendors')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.accommodation')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.checkins')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.walkthrough')}</li>
                    <li>• {t('blogPost3.content.postBooking.actionItems.confirm')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost3.content.dreamExperience.title')}
                </h2>
                <p className="mb-8">
                  {t('blogPost3.content.dreamExperience.description')}
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {t('blogPost3.content.dreamExperience.conclusion')}
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    EM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-pink-800 dark:text-pink-200">{t('blogPost3.author.name')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('blogPost3.author.bio')}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {t('blogPost3.author.tags', { returnObjects: true }).map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4 text-pink-800 dark:text-pink-200">🎉 {t('blogPost3.relatedPosts.title')}</h3>
                <div className="space-y-4">
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                    onClick={() => navigate('/blog/1')}
                  >
                    <h4 className="font-semibold group-hover:text-pink-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎂 {t('blogPost3.relatedPosts.post1.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.relatedPosts.post1.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    onClick={() => navigate('/blog/2')}
                  >
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎪 {t('blogPost3.relatedPosts.post2.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.relatedPosts.post2.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    onClick={() => navigate('/blog/3')}
                  >
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors text-gray-800 dark:text-gray-200">
                      💒 {t('blogPost3.relatedPosts.post3.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost3.relatedPosts.post3.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
