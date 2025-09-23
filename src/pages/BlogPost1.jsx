import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated } from '../utils/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

export default function BlogPost1() {
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
    >      <Navbar user={user} />

      {/* Hero Section */}
<section 
  className="relative text-white"
  style={{
    backgroundImage: "url('/images/Birthday & Private Parties.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative mx-auto max-w-6xl px-4 py-16">
    <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm font-medium">{t('blogPost1.hero.category')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost1.hero.readTime')}</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">{t('blogPost1.hero.date')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              {t('blogPost1.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {t('blogPost1.hero.subtitle')}
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/images/B1T.jpg"
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{t('blogPost1.hero.author')}</p>
                <p className="text-white/80 text-sm">{t('blogPost1.hero.authorRole')}</p>
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
                  src="/images/Birthday & Private Parties.jpg"
                  alt="Best Kids' Birthday Party Ideas"
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {t('blogPost1.content.intro')}
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost1.content.whyThemeBased.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost1.content.whyThemeBased.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {t('blogPost1.content.whyThemeBased.benefits.title')}
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎉</span>
                    <span>{t('blogPost1.content.whyThemeBased.benefits.excitement')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎨</span>
                    <span>{t('blogPost1.content.whyThemeBased.benefits.decoration')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎯</span>
                    <span>{t('blogPost1.content.whyThemeBased.benefits.activities')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">📸</span>
                    <span>{t('blogPost1.content.whyThemeBased.benefits.photos')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">👥</span>
                    <span>{t('blogPost1.content.whyThemeBased.benefits.engagement')}</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Top 10 Birthday Party Themes for Kids
                </h2>
                <p className="mb-6">
                  Here are the most popular and creative birthday party themes that have proven to be hits with children of all ages. Each theme includes specific ideas for decorations, activities, and food.
                </p>

                <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-pink-800 dark:text-pink-200">
                    🎂 {t('blogPost1.content.topThemes.checklist.title')}
                  </h4>
                  <ul className="space-y-2 text-pink-700 dark:text-pink-300">
                    <li>• {t('blogPost1.content.topThemes.checklist.theme')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.budget')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.venue')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.invitations')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.activities')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.decorations')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.menu')}</li>
                    <li>• {t('blogPost1.content.topThemes.checklist.favors')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Popular Birthday Party Themes
                </h2>
                <p className="mb-6">
                  From classic favorites to trending themes, here are the most beloved birthday party ideas that will make your child's celebration unforgettable.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎨 Creative Theme Categories
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-pink-200 dark:border-pink-700 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                    <h4 className="font-semibold mb-2 text-pink-800 dark:text-pink-200">🌟 {t('blogPost1.content.popularThemes.categories.princess.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.content.popularThemes.categories.princess.description')}
                    </p>
                  </div>
                  <div className="p-4 border border-blue-200 dark:border-blue-700 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">🚀 {t('blogPost1.content.popularThemes.categories.space.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.content.popularThemes.categories.space.description')}
                    </p>
                  </div>
                  <div className="p-4 border border-green-200 dark:border-green-700 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">🐾 {t('blogPost1.content.popularThemes.categories.animal.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.content.popularThemes.categories.animal.description')}
                    </p>
                  </div>
                  <div className="p-4 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">🎪 {t('blogPost1.content.popularThemes.categories.circus.title')}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.content.popularThemes.categories.circus.description')}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost1.content.activities.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost1.content.activities.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎮 {t('blogPost1.content.activities.essentialActivities.title')}
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.photoBooth')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.artsCrafts')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.games')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.facePainting')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.balloonAnimals')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.storyTime')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.danceParty')}</strong>
                  </li>
                  <li>
                    <strong>{t('blogPost1.content.activities.essentialActivities.partyGames')}</strong>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost1.content.foodTreats.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost1.content.foodTreats.description')}
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                    🍰 {t('blogPost1.content.foodTreats.themedFood.title')}
                  </h4>
                  <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                    <li>• {t('blogPost1.content.foodTreats.themedFood.cupcakes')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.sandwiches')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.decorating')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.drinks')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.healthy')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.popcorn')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.iceCream')}</li>
                    <li>• {t('blogPost1.content.foodTreats.themedFood.cakePops')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost1.content.budgetTips.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost1.content.budgetTips.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  💰 {t('blogPost1.content.budgetTips.strategies.title')}
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">💡</span>
                    <span><strong>{t('blogPost1.content.budgetTips.strategies.diy')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🎁</span>
                    <span><strong>{t('blogPost1.content.budgetTips.strategies.favors')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🏠</span>
                    <span><strong>{t('blogPost1.content.budgetTips.strategies.home')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">👥</span>
                    <span><strong>{t('blogPost1.content.budgetTips.strategies.potluck')}</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">📅</span>
                    <span><strong>{t('blogPost1.content.budgetTips.strategies.timing')}</strong></span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost1.content.safety.title')}
                </h2>
                <p className="mb-6">
                  {t('blogPost1.content.safety.description')}
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    🛡️ {t('blogPost1.content.safety.checklist.title')}
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• {t('blogPost1.content.safety.checklist.allergies')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.supervision')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.childproof')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.firstAid')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.weather')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.emergency')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.boundaries')}</li>
                    <li>• {t('blogPost1.content.safety.checklist.ageAppropriate')}</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('blogPost1.content.memories.title')}
                </h2>
                <p className="mb-8">
                  {t('blogPost1.content.memories.description')}
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {t('blogPost1.content.memories.conclusion')}
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/B1T.jpg"
                    alt="Author"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-pink-800 dark:text-pink-200">{t('blogPost1.author.name')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {t('blogPost1.author.bio')}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {t('blogPost1.author.tags', { returnObjects: true }).map((tag, index) => (
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
                <h3 className="font-bold text-lg mb-4 text-pink-800 dark:text-pink-200">🎉 {t('blogPost1.relatedPosts.title')}</h3>
                <div className="space-y-4">
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                    onClick={() => navigate('/blog/1')}
                  >
                    <h4 className="font-semibold group-hover:text-pink-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎂 {t('blogPost1.relatedPosts.post1.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.relatedPosts.post1.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    onClick={() => navigate('/blog/2')}
                  >
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎪 {t('blogPost1.relatedPosts.post2.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.relatedPosts.post2.description')}
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    onClick={() => navigate('/blog/3')}
                  >
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors text-gray-800 dark:text-gray-200">
                      💒 {t('blogPost1.relatedPosts.post3.title')}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('blogPost1.relatedPosts.post3.description')}
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
