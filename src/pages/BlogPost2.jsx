import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function BlogPost2() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
    const [isDark, setIsDark] = useState(false) // <-- define state

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
    >       <Navbar user={user} />

      {/* Hero Section */}
      <section 
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/CorporateEvents.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm font-medium">{t('blogPost2.hero.category')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost2.hero.readTime')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost2.hero.date')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              {t('blogPost2.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {t('blogPost2.hero.subtitle')}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                EM
              </div>
              <div>
                <p className="font-semibold">{t('blogPost2.hero.author')}</p>
                <p className="text-white/80 text-sm">{t('blogPost2.hero.authorRole')}</p>
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
                  src="/images/CorporateEvents.jpg"
                  alt="Top 10 Afterparty Golden Rules"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {t('blogPost2.content.intro')}
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.whyMatter.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.whyMatter.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {t('blogPost2.content.whyMatter.benefits.title')}
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🎉</span>
                    <span>{t('blogPost2.content.whyMatter.benefits.engagement')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🤝</span>
                    <span>{t('blogPost2.content.whyMatter.benefits.networking')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">💬</span>
                    <span>{t('blogPost2.content.whyMatter.benefits.conversations')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">📸</span>
                    <span>{t('blogPost2.content.whyMatter.benefits.photos')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">⭐</span>
                    <span>{t('blogPost2.content.whyMatter.benefits.impression')}</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.goldenRules.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.goldenRules.description')}
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    🎯 {t('blogPost2.content.goldenRules.checklist.title')}
                  </h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• {t('blogPost2.content.goldenRules.checklist.timing')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.location')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.food')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.seating')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.entertainment')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.times')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.lighting')}</li>
                    <li>• {t('blogPost2.content.goldenRules.checklist.energy')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.rule1.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.rule1.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  ⏰ {t('blogPost2.content.rule1.bestPractices.title')}
                </h3>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">1️⃣</span>
                    <span><strong>{t('blogPost2.content.rule1.bestPractices.start')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">2️⃣</span>
                    <span><strong>{t('blogPost2.content.rule1.bestPractices.duration')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">3️⃣</span>
                    <span><strong>{t('blogPost2.content.rule1.bestPractices.end')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">4️⃣</span>
                    <span><strong>{t('blogPost2.content.rule1.bestPractices.communication')}</strong></span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.rule2.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.rule2.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🏢 {t('blogPost2.content.rule2.criteria.title')}
                </h3>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">📍</span>
                    <span><strong>{t('blogPost2.content.rule2.criteria.proximity')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🎵</span>
                    <span><strong>{t('blogPost2.content.rule2.criteria.acoustics')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🍽️</span>
                    <span><strong>{t('blogPost2.content.rule2.criteria.food')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🚗</span>
                    <span><strong>{t('blogPost2.content.rule2.criteria.parking')}</strong></span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.rule3.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.rule3.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🍕 {t('blogPost2.content.rule3.essentials.title')}
                </h3>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🍸</span>
                    <span><strong>{t('blogPost2.content.rule3.essentials.cocktails')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🍕</span>
                    <span><strong>{t('blogPost2.content.rule3.essentials.fingerFoods')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">☕</span>
                    <span><strong>{t('blogPost2.content.rule3.essentials.nonAlcoholic')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🌙</span>
                    <span><strong>{t('blogPost2.content.rule3.essentials.lateNight')}</strong></span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.rules4to10.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost2.content.rules4to10.description')}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">🎵 {t('blogPost2.content.rules4to10.rule4.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule4.description')}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                    <h4 className="font-bold text-lg mb-3 text-green-800 dark:text-green-200">💡 {t('blogPost2.content.rules4to10.rule5.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule5.description')}</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                    <h4 className="font-bold text-lg mb-3 text-purple-800 dark:text-purple-200">🪑 {t('blogPost2.content.rules4to10.rule6.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule6.description')}</p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                    <h4 className="font-bold text-lg mb-3 text-yellow-800 dark:text-yellow-200">📱 {t('blogPost2.content.rules4to10.rule7.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule7.description')}</p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h4 className="font-bold text-lg mb-3 text-red-800 dark:text-red-200">🎯 {t('blogPost2.content.rules4to10.rule8.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule8.description')}</p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                    <h4 className="font-bold text-lg mb-3 text-indigo-800 dark:text-indigo-200">🔄 {t('blogPost2.content.rules4to10.rule9.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule9.description')}</p>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                    <h4 className="font-bold text-lg mb-3 text-teal-800 dark:text-teal-200">🎁 {t('blogPost2.content.rules4to10.rule10.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{t('blogPost2.content.rules4to10.rule10.description')}</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost2.content.blueprint.title')}
                </h2>
                <p className="mb-8">
                  {t('blogPost2.content.blueprint.description')}
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    EM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">{t('blogPost2.author.name')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('blogPost2.author.bio')}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {t('blogPost2.author.tags', { returnObjects: true }).map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
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
                <h3 className="font-bold text-lg mb-4 text-blue-800 dark:text-blue-200">🎉 {t('blogPost2.relatedPosts.title')}</h3>
                <div className="space-y-4">
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                    onClick={() => navigate('/blog/1')}
                  >
                    <h4 className="font-semibold group-hover:text-pink-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎂 {t('blogPost2.relatedPosts.post1.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost2.relatedPosts.post1.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    onClick={() => navigate('/blog/2')}
                  >
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎪 {t('blogPost2.relatedPosts.post2.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost2.relatedPosts.post2.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    onClick={() => navigate('/blog/3')}
                  >
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors text-gray-800 dark:text-gray-200">
                      💒 {t('blogPost2.relatedPosts.post3.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost2.relatedPosts.post3.description')}
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
