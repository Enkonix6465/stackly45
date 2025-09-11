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
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm font-medium">Wedding Planning</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">12 min read</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">December 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Wedding Venue Selection Guide
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              Your complete guide to choosing the perfect wedding venue that matches your vision, budget, and creates unforgettable memories for your special day!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                EM
              </div>
              <div>
                <p className="font-semibold">Event Management Team</p>
                <p className="text-white/80 text-sm">Wedding Planning Specialists</p>
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
                  Choosing the perfect wedding venue is one of the most important decisions you'll make during your wedding planning journey. The venue sets the tone for your entire celebration and influences everything from your guest count to your decor choices. This comprehensive guide will help you navigate the venue selection process with confidence and find the ideal location for your dream wedding.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Venue Selection Matters Most
                </h2>
                <p className="mb-6">
                  Your wedding venue is more than just a location—it's the foundation of your entire celebration. It determines your guest capacity, influences your decor style, affects your budget allocation, and sets the atmosphere for one of the most important days of your life.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Key Factors That Make Venue Selection Critical
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">💒</span>
                    <span>Sets the overall aesthetic and atmosphere for your wedding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">👥</span>
                    <span>Determines your maximum guest capacity and seating arrangements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">💰</span>
                    <span>Significantly impacts your overall wedding budget allocation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">📅</span>
                    <span>Influences your wedding date availability and seasonal considerations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-lg">🎨</span>
                    <span>Shapes your decor possibilities and vendor requirements</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Step-by-Step Venue Selection Process
                </h2>
                <p className="mb-6">
                  Follow this systematic approach to find your perfect wedding venue without the stress and overwhelm that often comes with this important decision.
                </p>

                <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-pink-800 dark:text-pink-200">
                    🎯 Venue Selection Timeline Checklist
                  </h4>
                  <ul className="space-y-2 text-pink-700 dark:text-pink-300">
                    <li>• Define your wedding vision and style (12-18 months before)</li>
                    <li>• Set your budget and guest count (10-12 months before)</li>
                    <li>• Research and create venue shortlist (8-10 months before)</li>
                    <li>• Schedule venue tours and tastings (6-8 months before)</li>
                    <li>• Compare packages and negotiate contracts (4-6 months before)</li>
                    <li>• Book your chosen venue and secure date (3-4 months before)</li>
                    <li>• Finalize details and vendor coordination (1-2 months before)</li>
                    <li>• Conduct final walkthrough and setup planning (2-4 weeks before)</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Essential Venue Considerations
                </h2>
                <p className="mb-6">
                  Before you start touring venues, it's crucial to understand what factors will impact your decision and how to evaluate each location effectively.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🏛️ Venue Type Categories
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 border border-pink-200 dark:border-pink-700 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                    <h4 className="font-semibold mb-2 text-pink-800 dark:text-pink-200">🏰 Historic & Elegant</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mansions, castles, historic buildings with character and timeless appeal.
                    </p>
                  </div>
                  <div className="p-4 border border-green-200 dark:border-green-700 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">🌿 Outdoor & Natural</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Gardens, vineyards, beaches, and scenic outdoor locations with natural beauty.
                    </p>
                  </div>
                  <div className="p-4 border border-blue-200 dark:border-blue-700 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">🏢 Modern & Contemporary</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hotels, event spaces, and modern venues with sleek, contemporary design.
                    </p>
                  </div>
                  <div className="p-4 border border-yellow-200 dark:border-yellow-700 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">🏡 Rustic & Charming</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Barns, farms, and countryside venues with rustic charm and character.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Budget Planning & Cost Considerations
                </h2>
                <p className="mb-6">
                  Understanding venue costs and how they fit into your overall wedding budget is essential for making informed decisions and avoiding financial stress.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  💰 Budget Allocation Guidelines
                </h3>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">📊</span>
                    <span><strong>Venue should be 40-50% of total budget</strong> - This includes rental fees, catering, and basic services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🍽️</span>
                    <span><strong>Consider all-inclusive vs. à la carte</strong> - Compare total costs including catering, bar, and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">📅</span>
                    <span><strong>Seasonal pricing variations</strong> - Peak season (summer/fall) vs. off-season discounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">🎨</span>
                    <span><strong>Decor and setup costs</strong> - Factor in additional decor needs for blank canvas venues</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Venue Tour Questions & Evaluation
                </h2>
                <p className="mb-6">
                  Come prepared to your venue tours with these essential questions that will help you make an informed decision and avoid surprises later.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    ❓ Essential Venue Tour Questions
                  </h4>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• What is included in the rental fee? (tables, chairs, linens, etc.)</li>
                    <li>• What are the catering options and restrictions?</li>
                    <li>• What is the capacity for both ceremony and reception?</li>
                    <li>• Are there noise restrictions or curfew times?</li>
                    <li>• What parking and transportation options are available?</li>
                    <li>• Are there preferred vendor lists or restrictions?</li>
                    <li>• What is the backup plan for outdoor ceremonies?</li>
                    <li>• What are the payment terms and cancellation policies?</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Venue-Specific Considerations
                </h2>
                <p className="mb-6">
                  Different types of venues come with unique advantages and challenges. Understanding these will help you choose the best fit for your wedding style and needs.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🏨 Hotel & Resort Venues
                </h3>
                <div className="mb-8 space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">✅ Advantages</h4>
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li>• Convenient accommodation for out-of-town guests</li>
                      <li>• Professional event coordination and catering services</li>
                      <li>• Multiple ceremony and reception space options</li>
                      <li>• Built-in backup plans for weather issues</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h4 className="font-bold text-lg mb-3 text-red-800 dark:text-red-200">⚠️ Considerations</h4>
                    <ul className="space-y-2 text-red-700 dark:text-red-300">
                      <li>• Higher costs due to service charges and fees</li>
                      <li>• Less flexibility in vendor selection</li>
                      <li>• Potential noise restrictions and time limitations</li>
                      <li>• May feel less personal or unique</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🌿 Outdoor & Garden Venues
                </h3>
                <div className="mb-8 space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                    <h4 className="font-bold text-lg mb-3 text-green-800 dark:text-green-200">✅ Advantages</h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300">
                      <li>• Natural beauty requires minimal decoration</li>
                      <li>• Unique and memorable setting for photos</li>
                      <li>• Often more affordable than indoor venues</li>
                      <li>• Flexible layout and space utilization</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                    <h4 className="font-bold text-lg mb-3 text-orange-800 dark:text-orange-200">⚠️ Considerations</h4>
                    <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                      <li>• Weather dependency requires backup plans</li>
                      <li>• Additional costs for tents, flooring, and facilities</li>
                      <li>• Limited accessibility for elderly or disabled guests</li>
                      <li>• Potential noise restrictions in residential areas</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Making Your Final Decision
                </h2>
                <p className="mb-6">
                  Once you've toured your top venue choices, use this systematic approach to make your final decision with confidence.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎯 Decision-Making Framework
                </h3>
                <ol className="mb-8 space-y-3 list-decimal list-inside">
                  <li>
                    <strong>Create a comparison chart:</strong> List all venues with key factors like cost, capacity, location, and included services
                  </li>
                  <li>
                    <strong>Consider your priorities:</strong> Rank what matters most - budget, location, aesthetics, or convenience
                  </li>
                  <li>
                    <strong>Visualize your wedding day:</strong> Imagine your ceremony and reception at each venue
                  </li>
                  <li>
                    <strong>Check availability:</strong> Ensure your preferred dates are available at your top choice
                  </li>
                  <li>
                    <strong>Review contracts carefully:</strong> Understand all terms, restrictions, and additional costs
                  </li>
                  <li>
                    <strong>Trust your instincts:</strong> Choose the venue that feels right for your vision and budget
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Post-Booking Next Steps
                </h2>
                <p className="mb-8">
                  Congratulations on booking your venue! Here's what you need to do next to ensure everything runs smoothly for your big day.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">
                    📋 Post-Booking Action Items
                  </h4>
                  <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                    <li>• Secure your wedding date with a signed contract and deposit</li>
                    <li>• Schedule vendor meetings and tastings with venue coordinators</li>
                    <li>• Create a detailed timeline and floor plan for your event</li>
                    <li>• Book additional vendors (photographer, florist, entertainment)</li>
                    <li>• Plan guest accommodations and transportation</li>
                    <li>• Schedule regular check-ins with venue coordinator</li>
                    <li>• Arrange final walkthrough 2-4 weeks before wedding</li>
                    <li>• Confirm all details and vendor requirements</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Creating Your Dream Wedding Experience
                </h2>
                <p className="mb-8">
                  Your wedding venue is the canvas for your love story. With careful planning, thorough research, and attention to detail, you'll find the perfect location that reflects your unique style and creates magical memories for you and your guests.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Remember, the best wedding venues are those where you can envision yourselves saying "I do" and celebrating with your loved ones. Trust your instincts, ask the right questions, and don't be afraid to negotiate terms that work for your budget and vision. Your perfect venue is out there waiting to host your dream wedding!
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
                      Our experienced wedding planners specialize in creating magical celebrations and helping couples find their perfect venue. With over 10 years of experience in wedding planning, we've helped hundreds of couples create unforgettable moments on their special day.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full">
                        Wedding Planning
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                        Venue Selection
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                        Event Coordination
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                        Vendor Management
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
