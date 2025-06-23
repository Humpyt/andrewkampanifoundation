import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Users, BookOpen, Briefcase, Globe, CheckCircle, Star, Award, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Sponsorships",
      description:
        "Supporting over 30 vulnerable girls by paying their school fees (UGX 30,000 each), ensuring they stay in school and complete their education. This program is the cornerstone of our foundation's work.",
      image: "/images/classroom-scene.jpg",
      gradient: "from-blue-500 to-teal-600",
      stats: ["30+ Girls Sponsored", "UGX 30,000 per child", "100% School Retention Goal"],
      features: [
        "Direct school fee payments",
        "Educational materials support",
        "Regular progress monitoring",
        "Parent and community engagement",
        "Academic mentorship programs",
      ],
      delay: "0",
    },
    {
      icon: BookOpen,
      title: "English Language Instruction",
      description:
        "Recruiting qualified English language instructors and literacy coaches to improve communication skills and educational outcomes for girls and women in our community.",
      image: "/images/school-uniforms.jpg",
      gradient: "from-teal-500 to-green-600",
      stats: ["Teacher Recruitment Active", "Literacy Focus", "Communication Skills"],
      features: [
        "Qualified English teachers recruitment",
        "Basic literacy programs",
        "Conversational English classes",
        "Reading and writing skills",
        "Language confidence building",
      ],
      delay: "200",
    },
    {
      icon: Heart,
      title: "Community Sensitization",
      description:
        "Organizing comprehensive education sessions on school retention, health awareness, and sexual education to combat early school dropout and empower informed decision-making.",
      image: "/images/happy-children.jpg",
      gradient: "from-green-500 to-emerald-600",
      stats: ["Community Workshops", "Health Education", "Dropout Prevention"],
      features: [
        "School retention awareness campaigns",
        "Comprehensive sexual education",
        "Health and hygiene education",
        "Parent and community workshops",
        "Early marriage prevention programs",
      ],
      delay: "400",
    },
    {
      icon: Briefcase,
      title: "Skills Training & Vocational Development",
      description:
        "Offering practical skills training including tailoring, crafts, and small-scale enterprise development to provide income-generating opportunities for women and older girls.",
      image: "/images/women-community.jpg",
      gradient: "from-emerald-500 to-cyan-600",
      stats: ["Tailoring Classes", "Craft Training", "Enterprise Support"],
      features: [
        "Tailoring and sewing skills",
        "Traditional crafts training",
        "Small business development",
        "Microenterprise support",
        "Market linkage programs",
      ],
      delay: "600",
    },
    {
      icon: Users,
      title: "Mentorship & Life Skills",
      description:
        "Providing comprehensive mentorship programs and life skills training to help girls and women develop confidence, leadership abilities, and make informed life decisions.",
      image: "/images/girls-window.jpg",
      gradient: "from-cyan-500 to-blue-600",
      stats: ["Personal Mentorship", "Leadership Training", "Life Skills"],
      features: [
        "One-on-one mentorship programs",
        "Leadership development workshops",
        "Decision-making skills training",
        "Self-confidence building",
        "Career guidance and counseling",
      ],
      delay: "800",
    },
    {
      icon: Globe,
      title: "Annual Legacy Visit",
      description:
        "Community gathering and outreach program inspired by the memory of Andrew Kampani, bringing together beneficiaries, supporters, and community members to celebrate progress and plan for the future.",
      image: "/images/school-compound.jpg",
      gradient: "from-blue-500 to-indigo-600",
      stats: ["Annual Event", "Community Gathering", "Legacy Celebration"],
      features: [
        "Annual community celebration",
        "Progress showcase and recognition",
        "Community planning sessions",
        "Beneficiary testimonials",
        "Memorial tribute to Andrew Kampani",
      ],
      delay: "1000",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Toned Down */}
      <section className="relative py-40 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('/images/school-compound.jpg')",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in-up">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Andrew Kampani Foundation Logo"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            <div className="text-lg font-medium text-white/90">Andrew Kampani Foundation</div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-slate-200 bg-clip-text text-transparent animate-fade-in-up delay-200">
            Our Programs
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8 animate-fade-in-up delay-300"></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Comprehensive programs designed to empower girls and women in Luuka District through education, skills
            development, and community support initiatives that create lasting transformation.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Separator */}
      <div className="relative py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-teal-50/30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center space-x-2 bg-white shadow-lg rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Empowering Through Action</span>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Creating
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Lasting Change
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our integrated approach addresses education, skills development, and community empowerment to create
            sustainable transformation in the lives of girls and women.
          </p>
        </div>
      </div>

      {/* Programs Overview - Enhanced */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Core Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six comprehensive programs working together to create holistic empowerment and sustainable change in our
              community.
            </p>
          </div>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${program.delay}ms` }}
              >
                {/* Image Side */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="rounded-2xl w-full shadow-xl"
                      />
                      <div
                        className={`absolute -bottom-6 -right-6 bg-gradient-to-r ${program.gradient} rounded-2xl p-6 shadow-xl`}
                      >
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl mb-6">
                    <program.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {program.title.split(" ").slice(0, -1).join(" ")}
                    <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {program.title.split(" ").slice(-1)}
                    </span>
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{program.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {program.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-2xl shadow-lg text-center border border-gray-100"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-sm">{statIndex + 1}</span>
                        </div>
                        <p className="font-bold text-gray-900 text-sm">{stat}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      Program Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {program.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    Support This Program
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Needs - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-teal-50/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-white shadow-lg rounded-2xl mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Current Needs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us expand our impact by supporting these critical needs in our programs. Your contribution directly
              addresses these priority areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "English Teachers",
                description: "Qualified English language instructors to improve literacy and communication skills",
                urgency: "High Priority",
                color: "from-red-500 to-orange-600",
                icon: BookOpen,
                delay: "0",
              },
              {
                title: "School Fee Support",
                description: "Funding to sponsor more girls at UGX 30,000 per child for school fees",
                urgency: "Ongoing Need",
                color: "from-blue-500 to-teal-600",
                icon: GraduationCap,
                delay: "100",
              },
              {
                title: "Vocational Equipment",
                description: "Sewing machines and craft materials for skills training programs",
                urgency: "Medium Priority",
                color: "from-green-500 to-emerald-600",
                icon: Briefcase,
                delay: "200",
              },
              {
                title: "Community Facilitators",
                description: "Local facilitators for sensitization and awareness programs",
                urgency: "High Priority",
                color: "from-teal-500 to-cyan-600",
                icon: Users,
                delay: "300",
              },
              {
                title: "Educational Materials",
                description: "Books, stationery, and learning materials for sponsored students",
                urgency: "Ongoing Need",
                color: "from-cyan-500 to-blue-600",
                icon: Heart,
                delay: "400",
              },
              {
                title: "Transportation Support",
                description: "Transport assistance for girls traveling long distances to school",
                urgency: "Medium Priority",
                color: "from-indigo-500 to-purple-600",
                icon: Globe,
                delay: "500",
              },
            ].map((need, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 animate-fade-in-up"
                style={{ animationDelay: `${need.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${need.color}`}></div>

                <CardContent className="relative p-8">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${need.color} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <need.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {need.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{need.description}</p>

                  <div className="text-center">
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${need.color} text-white shadow-lg`}
                    >
                      {need.urgency}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Enhanced */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-teal-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measuring success through the lives we touch and the futures we help create in Luuka District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "30+",
                label: "Girls Currently Sponsored",
                color: "from-blue-500 to-teal-600",
                icon: GraduationCap,
                description: "Direct education support",
              },
              {
                number: "1",
                label: "District Served",
                color: "from-teal-500 to-green-600",
                icon: Globe,
                description: "Focused community impact",
              },
              {
                number: "2025",
                label: "Foundation Established",
                color: "from-green-500 to-emerald-600",
                icon: Star,
                description: "Beginning of our journey",
              },
              {
                number: "100%",
                label: "Commitment to Success",
                color: "from-emerald-500 to-cyan-600",
                icon: Heart,
                description: "Unwavering dedication",
              },
            ].map((metric, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${metric.color}`}></div>

                <CardContent className="relative p-8">
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-500`}
                    >
                      <metric.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{metric.number}</h3>
                  <p className="text-gray-700 font-semibold mb-2">{metric.label}</p>
                  <p className="text-sm text-gray-500">{metric.description}</p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-teal-900/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-6">
          <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Support Our
            <span className="block bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8"></div>

          <p className="text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your contribution directly funds these life-changing programs. Help us empower more girls and women in Luuka
            District through education, skills development, and community empowerment initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <GraduationCap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Sponsor Education</h3>
              <p className="text-sm text-gray-300">UGX 30,000 keeps a girl in school</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <BookOpen className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Teach English</h3>
              <p className="text-sm text-gray-300">Share your language skills</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Briefcase className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Skills Training</h3>
              <p className="text-sm text-gray-300">Support vocational programs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <Link href="/donate" className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Sponsor a Girl</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <Link href="/volunteer" className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Become a Teacher</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
