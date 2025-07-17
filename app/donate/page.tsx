import { Button } from "@/components/ui/button"
import { sendEmail } from "@/lib/email"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Shield, Award, CreditCard, Smartphone, Building } from "lucide-react"
import { DonationType } from "@/components/donation-type"

export default function DonatePage() {
  const donationAmounts = [30000, 60000, 150000, 300000, 600000, 900000] // UGX amounts

  const impactLevels = [
    {
      amount: "UGX 30,000",
      impact: "Sponsors one girl's school fees for a full term",
      icon: "📚",
    },
    {
      amount: "UGX 60,000",
      impact: "Supports two girls' education for one term",
      icon: "👭",
    },
    {
      amount: "UGX 150,000",
      impact: "Provides school fees for 5 girls for one term",
      icon: "🎓",
    },
    {
      amount: "UGX 300,000",
      impact: "Sponsors 10 girls' education for one term",
      icon: "🏫",
    },
    {
      amount: "UGX 600,000",
      impact: "Supports 20 girls' education for one term",
      icon: "👩‍🎓",
    },
    {
      amount: "UGX 900,000",
      impact: "Funds education for 30 girls for one term",
      icon: "🌟",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/classroom-scene.jpg')",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Sponsor a Girl's Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Your donation directly pays school fees for vulnerable girls in Luuka District. At just UGX 30,000 per
            child, you can keep a girl in school and change her future forever.
          </p>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Your Impact in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how your donation creates meaningful change in the lives of girls in Luuka District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactLevels.map((level, index) => (
              <Card
                key={index}
                className="group p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-4">{level.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{level.amount}</h3>
                  <p className="text-gray-600 leading-relaxed">{level.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Make Your Donation</h2>
            <p className="text-xl text-gray-600">
              Choose an amount or enter a custom donation. Every Ugandan Shilling makes a difference.
            </p>
          </div>

          <Card className="p-8 border-0 shadow-2xl">
            <CardContent className="p-0">
              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Donation Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DonationType />
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Amount (UGX)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="h-16 text-lg font-bold border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <input type="hidden" name="amount" value={amount} />
                      {amount.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium text-gray-700">UGX</span>
                  <Input name="amount" placeholder="Enter custom amount" className="h-12 text-lg" type="number" required />
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input name="firstName" placeholder="Enter your first name" className="h-12" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input name="lastName" placeholder="Enter your last name" className="h-12" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input name="email" type="email" placeholder="Enter your email" className="h-12" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input name="phone" type="tel" placeholder="Enter your phone" className="h-12" required />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-16 text-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  >
                    <input type="hidden" name="method" value="mobile-money" />
                    <CreditCard className="w-6 h-6 mr-2" />
                    Mobile Money
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 text-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  >
                    <input type="hidden" name="method" value="bank-transfer" />
                    <Building className="w-6 h-6 mr-2" />
                    Bank Transfer
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 text-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  >
                    <input type="hidden" name="method" value="airtel-mtn" />
                    <Smartphone className="w-6 h-6 mr-2" />
                    Airtel/MTN Money
                  </Button>
                </div>
              </div>

              {/* Donation Button */}
              <Button
                size="lg"
                className="w-full h-16 text-xl bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
              >
                <Heart className="w-6 h-6 mr-2" />
                Complete Donation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Your Trust Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to transparency and ensuring every donation directly supports girls' education in Luuka
              District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Direct Impact",
                description:
                  "100% of education sponsorship donations go directly to paying school fees for girls in Luuka District. No administrative fees are deducted.",
                features: ["Direct school fee payments", "Transparent tracking", "Regular updates"],
              },
              {
                icon: Award,
                title: "Community-Based",
                description:
                  "As a community-based organization, we work directly with local schools and families to ensure maximum impact and accountability.",
                features: ["Local partnerships", "Community oversight", "Regular monitoring"],
              },
              {
                icon: Heart,
                title: "Personal Connection",
                description:
                  "Founded by Orikiriza Stella in memory of her son Andrew, this foundation operates with deep personal commitment and care.",
                features: ["Personal dedication", "Community trust", "Legacy commitment"],
              },
            ].map((trust, index) => (
              <Card
                key={index}
                className="group p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <trust.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{trust.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{trust.description}</p>
                  <ul className="space-y-2">
                    {trust.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Other Ways to Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't donate right now? There are many other meaningful ways to support our mission in Luuka District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Volunteer Teaching",
                description: "Share your English language skills to help improve literacy in our community",
                action: "Become a Teacher",
                gradient: "from-blue-500 to-teal-600",
              },
              {
                title: "Spread Awareness",
                description: "Share our mission and help raise awareness about girl-child education",
                action: "Share Our Story",
                gradient: "from-teal-500 to-green-600",
              },
              {
                title: "Skills Training",
                description: "Teach vocational skills like tailoring, crafts, or small business management",
                action: "Offer Skills",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Community Support",
                description: "Help with sensitization programs and community outreach initiatives",
                action: "Join Community Work",
                gradient: "from-emerald-500 to-cyan-600",
              },
            ].map((way, index) => (
              <Card
                key={index}
                className="group p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${way.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{way.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${way.gradient} hover:opacity-90`}>{way.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Every Donation Changes a Life</h2>
          <p className="text-xl mb-8 text-gray-200">
            Your donation today becomes tomorrow's success story. Join us in empowering girls and women in Luuka
            District through the power of education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              Sponsor a Girl Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-800 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              Contact Orikiriza Stella
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
