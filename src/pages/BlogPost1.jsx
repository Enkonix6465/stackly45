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
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>

  <div className="relative mx-auto max-w-6xl px-4 py-16">
    <div className="max-w-4xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm font-medium">Birthday Parties</span>
        <span className="text-white/80">•</span>
        <span className="text-white/80">8 min read</span>
        <span className="text-white/80">•</span>
        <span className="text-white/80">December 2024</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
        Best Kids' Birthday Party Ideas
      </h1>
      <p className="text-xl text-white/90 mb-6 max-w-3xl">
        Create magical memories with these creative and fun birthday party themes that will make your child's special day unforgettable!
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          EM
        </div>
        <div>
          <p className="font-semibold">Event Management Team</p>
          <p className="text-white/80 text-sm">Party Planning Specialists</p>
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
                  Planning the perfect birthday party for your child can be both exciting and overwhelming. With so many themes, activities, and details to consider, it's easy to feel lost in the planning process. This comprehensive guide will help you create magical memories that your child will treasure forever.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Theme-Based Parties Work Best
                </h2>
                <p className="mb-6">
                  A well-chosen theme provides a cohesive framework for decorations, activities, food, and entertainment. It helps create an immersive experience that captivates children and makes the party memorable for all guests.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Benefits of Themed Birthday Parties
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎉</span>
                    <span>Creates excitement and anticipation for the birthday child</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎨</span>
                    <span>Makes decoration planning easier and more organized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎯</span>
                    <span>Provides clear direction for activities and games</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">📸</span>
                    <span>Creates amazing photo opportunities and memories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">👥</span>
                    <span>Helps guests feel more engaged and involved</span>
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
                    🎂 Essential Party Planning Checklist
                  </h4>
                  <ul className="space-y-2 text-pink-700 dark:text-pink-300">
                    <li>• Choose a theme that matches your child's interests</li>
                    <li>• Set a budget and guest list (2-3 months before)</li>
                    <li>• Book venue or prepare home space (6-8 weeks before)</li>
                    <li>• Send out invitations (4-6 weeks before)</li>
                    <li>• Plan activities and entertainment (3-4 weeks before)</li>
                    <li>• Order decorations and supplies (2-3 weeks before)</li>
                    <li>• Plan the menu and order cake (1-2 weeks before)</li>
                    <li>• Prepare party favors and goodie bags (1 week before)</li>
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
                    <h4 className="font-semibold mb-2 text-pink-800 dark:text-pink-200">🌟 Princess & Superhero</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Perfect for ages 3-8. Includes dress-up, photo booths, and themed activities.
                    </p>
                  </div>
                  <div className="p-4 border border-blue-200 dark:border-blue-700 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">🚀 Space & Adventure</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Great for ages 5-12. Features rocket ships, alien crafts, and cosmic decorations.
                    </p>
                  </div>
                  <div className="p-4 border border-green-200 dark:border-green-700 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">🐾 Animal & Nature</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ideal for ages 2-10. Includes zoo animals, safari themes, and outdoor activities.
                    </p>
                  </div>
                  <div className="p-4 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">🎪 Circus & Carnival</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fun for all ages. Features games, cotton candy, and circus entertainment.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Party Activities & Entertainment
                </h2>
                <p className="mb-6">
                  Keep your little guests engaged and entertained with these fun activities that complement your chosen theme and create lasting memories.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎮 Essential Party Activities
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>Photo Booth Station:</strong> Set up a themed backdrop with props for memorable photos
                  </li>
                  <li>
                    <strong>Arts & Crafts Corner:</strong> Provide themed coloring pages, stickers, and simple crafts
                  </li>
                  <li>
                    <strong>Interactive Games:</strong> Musical chairs, pin the tail, treasure hunts, or themed bingo
                  </li>
                  <li>
                    <strong>Face Painting:</strong> Hire a professional or set up a DIY station with safe paints
                  </li>
                  <li>
                    <strong>Balloon Animals:</strong> A balloon artist or DIY balloon twisting station
                  </li>
                  <li>
                    <strong>Story Time:</strong> Themed story reading or puppet shows for younger guests
                  </li>
                  <li>
                    <strong>Dance Party:</strong> Create a playlist of kid-friendly songs and have a dance-off
                  </li>
                  <li>
                    <strong>Party Games:</strong> Relay races, obstacle courses, or themed scavenger hunts
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Food & Treats Ideas
                </h2>
                <p className="mb-6">
                  No birthday party is complete without delicious food and treats! Here are some creative ideas that will delight both kids and parents.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
                    🍰 Themed Food & Treat Ideas
                  </h4>
                  <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                    <li>• Themed cupcakes with matching toppers and colors</li>
                    <li>• Character-shaped sandwiches and fruit skewers</li>
                    <li>• DIY decorating stations (cookies, cupcakes, or pretzels)</li>
                    <li>• Themed drinks with colorful straws and umbrellas</li>
                    <li>• Healthy snack options (veggie platters, fruit cups)</li>
                    <li>• Popcorn bar with different seasonings and toppings</li>
                    <li>• Ice cream sundae station with various toppings</li>
                    <li>• Themed cake pops or mini desserts</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Budget-Friendly Party Tips
                </h2>
                <p className="mb-6">
                  Creating an amazing birthday party doesn't have to break the bank. Here are practical tips to plan a memorable celebration within your budget.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  💰 Smart Budgeting Strategies
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">💡</span>
                    <span><strong>DIY Decorations:</strong> Create your own banners, centerpieces, and photo backdrops using craft supplies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🎁</span>
                    <span><strong>Simple Party Favors:</strong> Use themed stickers, small toys, or homemade treats as take-home gifts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🏠</span>
                    <span><strong>Home Venue:</strong> Host at home or in a local park to save on venue costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">👥</span>
                    <span><strong>Potluck Style:</strong> Ask parents to bring a dish or snack to share</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">📅</span>
                    <span><strong>Off-Peak Timing:</strong> Consider morning or afternoon parties instead of evening events</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Safety & Logistics
                </h2>
                <p className="mb-6">
                  Ensuring a safe and well-organized party is crucial for both children and parents. Here are essential considerations for a successful celebration.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    🛡️ Safety First Checklist
                  </h4>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li>• Check for allergies and dietary restrictions before planning food</li>
                    <li>• Ensure adequate adult supervision (1 adult per 4-5 children)</li>
                    <li>• Childproof the party area and remove potential hazards</li>
                    <li>• Have a first aid kit readily available</li>
                    <li>• Plan for weather contingencies if hosting outdoors</li>
                    <li>• Keep emergency contact information handy</li>
                    <li>• Set clear boundaries for play areas</li>
                    <li>• Consider age-appropriate activities and games</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Making Memories That Last
                </h2>
                <p className="mb-8">
                  The most important aspect of any birthday party is creating joyful memories that your child will cherish for years to come. Focus on what makes your child happy and unique, and don't stress about perfection.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Remember, the best birthday parties are those where children feel loved, celebrated, and surrounded by friends and family. With these ideas and tips, you're well on your way to planning an unforgettable celebration that will bring smiles to everyone's faces!
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    EM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-pink-800 dark:text-pink-200">Event Management Team</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Our experienced event planners specialize in creating magical birthday celebrations and memorable family events. With over 5 years of experience in party planning, we've helped hundreds of families create unforgettable moments.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full">
                        Birthday Parties
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                        Event Planning
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                        Theme Design
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                        Family Events
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              

              {/* Related Posts */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4 text-pink-800 dark:text-pink-200">🎉 Related Event Planning Posts</h3>
                <div className="space-y-4">
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                    onClick={() => navigate('/blog/1')}
                  >
                    <h4 className="font-semibold group-hover:text-pink-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎂 Best Kids' Birthday Party Ideas
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Creative themes and activities for unforgettable children's birthday celebrations.
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    onClick={() => navigate('/blog/2')}
                  >
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors text-gray-800 dark:text-gray-200">
                      🎪 Top 10 Afterparty Golden Rules
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Master the art of afterparty planning with these essential golden rules for unforgettable celebrations.
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    onClick={() => navigate('/blog/3')}
                  >
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors text-gray-800 dark:text-gray-200">
                      💒 Wedding Venue Selection Guide
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete guide to choosing the perfect wedding venue that matches your vision and budget.
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
