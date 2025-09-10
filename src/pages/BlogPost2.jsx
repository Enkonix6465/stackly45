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
              <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm font-medium">Afterparty Planning</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">10 min read</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">December 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Top 10 Afterparty Golden Rules
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              Master the art of afterparty planning with these essential golden rules that will ensure your post-event celebration is unforgettable and runs smoothly!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                EM
              </div>
              <div>
                <p className="font-semibold">Event Management Team</p>
                <p className="text-white/80 text-sm">Afterparty Specialists</p>
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
                  The afterparty is where the real magic happens! It's the perfect opportunity to extend the celebration, network with guests, and create lasting memories. However, planning a successful afterparty requires careful consideration of timing, atmosphere, and guest expectations. These golden rules will help you create an unforgettable post-event experience.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Afterparties Matter for Event Success
                </h2>
                <p className="mb-6">
                  Afterparties serve as the perfect bridge between formal events and casual celebration. They provide guests with additional networking opportunities, allow for more relaxed interactions, and extend the overall event experience, making your event more memorable and impactful.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Key Benefits of Well-Planned Afterparties
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🎉</span>
                    <span>Extends the celebration and maximizes guest engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🤝</span>
                    <span>Provides relaxed networking opportunities for business connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">💬</span>
                    <span>Allows for more personal conversations and relationship building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">📸</span>
                    <span>Creates additional photo opportunities and social media content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">⭐</span>
                    <span>Leaves a lasting positive impression on attendees</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  The 10 Golden Rules for Perfect Afterparties
                </h2>
                <p className="mb-6">
                  These essential rules have been refined through years of event management experience and will ensure your afterparty is a resounding success that guests will remember for years to come.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    🎯 Quick Afterparty Success Checklist
                  </h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• Plan timing to flow naturally from main event</li>
                    <li>• Choose venue within 10-15 minutes of main event</li>
                    <li>• Prepare diverse food and beverage options</li>
                    <li>• Create comfortable seating and mingling areas</li>
                    <li>• Plan entertainment that encourages interaction</li>
                    <li>• Have clear start and end times communicated</li>
                    <li>• Ensure adequate lighting and atmosphere</li>
                    <li>• Prepare for different guest energy levels</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Golden Rule #1: Perfect Timing is Everything
                </h2>
                <p className="mb-6">
                  The timing of your afterparty can make or break the experience. Start too early and guests feel rushed; start too late and you'll lose momentum and energy from the main event.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  ⏰ Timing Best Practices
                </h3>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">1️⃣</span>
                    <span><strong>Start 30-45 minutes after main event ends</strong> - Allows for natural transition and guest regrouping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">2️⃣</span>
                    <span><strong>Keep it to 2-3 hours maximum</strong> - Prevents guest fatigue and maintains energy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">3️⃣</span>
                    <span><strong>End by 11 PM on weekdays, 1 AM on weekends</strong> - Respects guest schedules and commitments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">4️⃣</span>
                    <span><strong>Communicate timing clearly in advance</strong> - Include in invitations and event materials</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Golden Rule #2: Location, Location, Location
                </h2>
                <p className="mb-6">
                  The venue sets the entire tone for your afterparty. Choose wisely to create the perfect atmosphere that complements your main event while offering a distinct experience.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🏢 Venue Selection Criteria
                </h3>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">📍</span>
                    <span><strong>Proximity matters</strong> - Within 10-15 minutes of main event venue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🎵</span>
                    <span><strong>Acoustics and sound system</strong> - Good for music and conversation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🍽️</span>
                    <span><strong>Food and beverage capabilities</strong> - Kitchen access or catering options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🚗</span>
                    <span><strong>Parking and accessibility</strong> - Easy for guests to find and access</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Golden Rule #3: Food & Beverage Strategy
                </h2>
                <p className="mb-6">
                  Afterparty food and drinks should be different from the main event - more casual, shareable, and designed to encourage mingling and conversation.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🍕 Food & Drink Essentials
                </h3>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🍸</span>
                    <span><strong>Signature cocktails</strong> - Create 2-3 themed drinks that reflect your event</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🍕</span>
                    <span><strong>Finger foods and small plates</strong> - Easy to eat while standing and mingling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">☕</span>
                    <span><strong>Non-alcoholic options</strong> - Coffee, tea, and specialty mocktails for all guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">🌙</span>
                    <span><strong>Late-night snacks</strong> - Comfort food that guests crave after a long evening</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Golden Rules #4-10: The Complete Afterparty Formula
                </h2>
                <p className="mb-6">
                  Here are the remaining essential rules that will elevate your afterparty from good to absolutely unforgettable.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">🎵 Rule #4: Perfect Music & Entertainment</h4>
                    <p className="text-gray-700 dark:text-gray-300">Create a playlist that starts mellow and builds energy. Consider live music, DJ, or interactive entertainment that gets guests involved.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                    <h4 className="font-bold text-lg mb-3 text-green-800 dark:text-green-200">💡 Rule #5: Lighting Sets the Mood</h4>
                    <p className="text-gray-700 dark:text-gray-300">Use warm, dim lighting to create intimacy. String lights, candles, and colored lighting can transform any space into a magical afterparty venue.</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                    <h4 className="font-bold text-lg mb-3 text-purple-800 dark:text-purple-200">🪑 Rule #6: Seating & Space Design</h4>
                    <p className="text-gray-700 dark:text-gray-300">Create multiple conversation areas with comfortable seating. Mix high tables for standing, cozy corners for intimate chats, and open spaces for dancing.</p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                    <h4 className="font-bold text-lg mb-3 text-yellow-800 dark:text-yellow-200">📱 Rule #7: Social Media Integration</h4>
                    <p className="text-gray-700 dark:text-gray-300">Create a unique hashtag, set up a photo booth, or design Instagram-worthy moments that encourage guests to share their experience.</p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h4 className="font-bold text-lg mb-3 text-red-800 dark:text-red-200">🎯 Rule #8: Guest Experience Focus</h4>
                    <p className="text-gray-700 dark:text-gray-300">Every detail should enhance guest comfort and enjoyment. From welcome drinks to farewell gifts, make each guest feel special and valued.</p>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                    <h4 className="font-bold text-lg mb-3 text-indigo-800 dark:text-indigo-200">🔄 Rule #9: Smooth Transitions</h4>
                    <p className="text-gray-700 dark:text-gray-300">Ensure seamless flow from main event to afterparty. Have clear signage, staff guidance, and transportation options ready for guests.</p>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                    <h4 className="font-bold text-lg mb-3 text-teal-800 dark:text-teal-200">🎁 Rule #10: Memorable Send-off</h4>
                    <p className="text-gray-700 dark:text-gray-300">End on a high note with a special moment - group photo, toast, or surprise element that leaves guests talking about your event for weeks.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Your Afterparty Success Blueprint
                </h2>
                <p className="mb-8">
                  Master these 10 golden rules, and you'll create afterparties that not only extend your main event but become the highlight of the entire experience. Remember, the best afterparties feel effortless to guests while requiring careful planning behind the scenes.
                </p>
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    EM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-200">Event Management Team</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Our expert event planners specialize in creating seamless afterparty experiences that extend the magic of your main event. With over 8 years of experience in corporate and social event management, we've mastered the art of post-event celebrations.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        Afterparty Planning
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                        Corporate Events
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                        Venue Management
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                        Guest Experience
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
                <h3 className="font-bold text-lg mb-4 text-blue-800 dark:text-blue-200">🎉 Related Event Planning Posts</h3>
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
                    className="cursor-pointer group p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    onClick={() => navigate('/blog/3')}
                  >
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors text-gray-800 dark:text-gray-200">
                      💒 Wedding Planning Essentials
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete guide to planning the perfect wedding day with timeline and vendor tips.
                    </p>
                  </div>
                  <div 
                    className="cursor-pointer group p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                    onClick={() => navigate('/blog/4')}
                  >
                    <h4 className="font-semibold group-hover:text-green-600 transition-colors text-gray-800 dark:text-gray-200">
                      🏆 Sports & Outdoor Event Management
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Planning outdoor events, sports tournaments, and recreational activities for all ages.
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
