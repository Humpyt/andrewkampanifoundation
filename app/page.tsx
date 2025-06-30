import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  GraduationCap,
  Award,
  Heart,
  Star,
  BookOpen,
  Quote,
  CheckCircle,
  Globe,
  Target,
} from "lucide-react"
import Image from "next/image"
import HeroSlider from "@/components/hero-slider"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Elegant Separator */}
      <div className="relative py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-pink-50/30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center space-x-2 bg-white shadow-lg rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Transforming Lives Since 2025</span>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Every Girl Deserves a
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Bright Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Through education sponsorships, mentorship programs, and community empowerment initiatives, we're creating
            lasting change in Luuka District, one girl at a time.
          </p>
        </div>
      </div>

      {/* Impact Statistics - Elegant Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "30+",
                label: "Girls Sponsored",
                description: "Currently supporting education",
                color: "purple",
                delay: "0",
              },
              {
                icon: GraduationCap,
                number: "100%",
                label: "School Retention Goal",
                description: "Committed to keeping girls in school",
                color: "pink",
                delay: "200",
              },
              {
                icon: Award,
                number: "2025",
                label: "Foundation Established",
                description: "Beginning of our journey",
                color: "blue",
                delay: "400",
              },
              {
                icon: Heart,
                number: "1",
                label: "District Served",
                description: "Focused impact in Luuka",
                color: "green",
                delay: "600",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    stat.color === "purple"
                      ? "from-purple-500 to-purple-600"
                      : stat.color === "pink"
                        ? "from-pink-500 to-pink-600"
                        : stat.color === "blue"
                          ? "from-blue-500 to-blue-600"
                          : "from-green-500 to-green-600"
                  }`}
                ></div>

                <CardContent className="relative p-8 text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${
                        stat.color === "purple"
                          ? "from-purple-500 to-purple-600"
                          : stat.color === "pink"
                            ? "from-pink-500 to-pink-600"
                            : stat.color === "blue"
                              ? "from-blue-500 to-blue-600"
                              : "from-green-500 to-green-600"
                      } flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs - Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/20 to-pink-50/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-white shadow-lg rounded-2xl mb-6">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to empower girls and women through education, skills development, and
              community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Sponsorships",
                description:
                  "Supporting over 30 vulnerable girls by paying their school fees (UGX 30,000 each), ensuring they stay in school and complete their education.",
                image: "/images/here/z101.jpg",
                gradient: "from-purple-600 to-purple-700",
                features: ["Direct fee payments", "Academic monitoring", "Mentorship support"],
                delay: "0",
              },
              {
                title: "Skills Training & Mentorship",
                description:
                  "Providing practical skills like tailoring, crafts, and small-scale enterprise training, along with mentorship and life skills development.",
                image: "/images/here/z20.jpg",
                gradient: "from-pink-600 to-rose-700",
                features: ["Vocational training", "Life skills coaching", "Business mentorship"],
                delay: "200",
              },
              {
                title: "Community Sensitization",
                description:
                  "Organizing school retention sessions, health education, and comprehensive sexual education to combat early school dropout.",
                image: "/images/here/z30.jpg",
                gradient: "from-blue-600 to-indigo-700",
                features: ["Health education", "Community workshops", "Awareness campaigns"],
                delay: "400",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 animate-fade-in-up bg-white"
                style={{ animationDelay: `${program.delay}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <Link href="/programs" className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-pink-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Community</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the children and families we serve in Luuka District, Uganda. Their stories inspire our mission every
              day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/here/x1.jpg",
                title: "Curious Minds",
                description: "Young girls eager to learn and explore new opportunities through education.",
              },
              {
                image: "/images/here/x2.jpg",
                title: "Rural Communities",
                description: "Children in rural areas who need support to access quality education.",
              },
              {
                image: "/images/here/x3.jpg",
                title: "Village Life",
                description: "Families in Luuka District working together to build better futures.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-pink-50/30"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-6">
              <Quote className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Words from Our Founder</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <Quote className="w-12 h-12 text-purple-500 mb-4" />
                  <blockquote className="text-2xl text-gray-700 leading-relaxed font-light italic">
                    "His death, though painful, opened my heart to a new purpose. This foundation stands as a legacy to
                    Andrew's life and a commitment to ensure that no child goes unheard, no girl is left behind, and no
                    woman is unsupported."
                  </blockquote>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">OS</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">Orikiriza Stella</h4>
                        <p className="text-gray-600">Founder & Director</p>
                        <p className="text-purple-600 font-medium">📞 +256 775 833 585</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto">
                        <Image
                          src="/logo.png"
                          alt="Andrew Kampani Foundation Logo"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Andrew Kampani Foundation</h3>
                      <p className="text-gray-600">Empowering Girls & Women Development</p>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">Established 2025</p>
                        <p className="text-sm text-purple-600 font-medium">Luuka District, Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/90 to-pink-900/90 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-6">
          <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Globe className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Mission of
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Empowerment
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>

          <p className="text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Help us empower the next generation of girls and women in Luuka District. Every contribution, every
            volunteer hour, and every shared story creates ripples of positive change that extend far beyond what we can
            imagine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Sponsor a Girl</h3>
              <p className="text-sm text-gray-300">UGX 30,000 keeps a girl in school</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Volunteer</h3>
              <p className="text-sm text-gray-300">Share your skills and expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Spread Awareness</h3>
              <p className="text-sm text-gray-300">Share our mission with others</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <Link href="/donate" className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Sponsor a Girl Today</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <Link href="/volunteer" className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Become a Volunteer</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
