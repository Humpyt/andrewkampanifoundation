import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Users, GraduationCap, Shield, Quote, Star, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Toned Down */}
      <section className="relative py-40 bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 text-white overflow-hidden">
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
            About Our Foundation
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8 animate-fade-in-up delay-300"></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            A community-based foundation dedicated to supporting underprivileged girls and empowering women in the Luuka
            District of Uganda, founded in loving memory of Andrew Kampani.
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
            <span className="text-gray-600 font-medium">Founded in Memory, Built for Hope</span>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transforming
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Loss into Legacy
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every great mission begins with a story. Ours started with love, loss, and the unwavering belief that every
            girl deserves a chance to shine.
          </p>
        </div>
      </div>

      {/* Founder's Story - Redesigned */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Side */}
            <div className="relative animate-fade-in-left">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img
                  src="/images/rural-homes.jpg"
                  alt="Community in Luuka District"
                  className="rounded-2xl w-full shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 shadow-xl">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-fade-in-right">
              <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Founder's
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-4 border-gradient-to-b from-blue-500 to-teal-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">The Beginning</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong className="text-blue-600">Orikiriza Stella</strong> established the Andrew Kampani
                    Foundation in 2025, born from profound personal loss and an unexpected awakening to the struggles of
                    rural Uganda.
                  </p>
                </div>

                <div className="relative pl-8 border-l-4 border-gradient-to-b from-teal-500 to-green-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">The Discovery</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Annual visits to Andrew's resting place in Luuka revealed a community where children couldn't
                    respond to simple greetings—a stark reminder of educational gaps that needed urgent attention.
                  </p>
                </div>

                <div className="relative pl-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">The Mission</h3>
                  <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-blue-300 pl-6 bg-blue-50/50 py-4 rounded-r-lg">
                    "His death, though painful, opened my heart to a new purpose. This foundation stands as a legacy to
                    Andrew's life and a commitment to ensure that no child goes unheard, no girl is left behind, and no
                    woman is unsupported."
                  </blockquote>
                </div>
              </div>

              {/* Contact Card */}
              <div className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl border border-blue-100 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">OS</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Orikiriza Stella</h4>
                    <p className="text-blue-600 font-medium">Founder & Director</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Ready to discuss partnerships, sponsorships, or volunteer opportunities?
                </p>
                <p className="text-blue-700 font-bold text-lg">📞 +256 775 833 585</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Enhanced */}
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
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Foundation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and clear vision, our foundation stands as a beacon of hope for girls and women in
              Luuka District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                content:
                  "To support the education and personal development of vulnerable girls and women through access to quality education, mentorship, life skills training, and community empowerment initiatives.",
                gradient: "from-blue-500 to-teal-600",
                delay: "0",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                content:
                  "To create a generation of educated, empowered, and self-reliant girls and women in Luuka District and beyond, breaking cycles of poverty through education.",
                gradient: "from-teal-500 to-green-600",
                delay: "200",
              },
              {
                icon: Heart,
                title: "Our Values",
                content:
                  "Compassion, Education for All, Integrity, Gender Equality, Empowerment, Community Service, and Transparency guide everything we do in our mission.",
                gradient: "from-green-500 to-emerald-600",
                delay: "400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 animate-fade-in-up bg-white"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.gradient}`}></div>

                <CardContent className="relative p-10 h-full flex flex-col">
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow text-center">{item.content}</p>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex justify-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact - Enhanced */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-teal-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Community Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the real faces and stories of the community we serve in Luuka District—the heart of our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "/images/classroom-student.jpg",
                title: "Education Focus",
                description:
                  "Dedicated students in our supported classrooms, focused on learning and building their futures through quality education.",
                stats: "30+ Students Supported",
              },
              {
                image: "/images/happy-children.jpg",
                title: "Community Children",
                description:
                  "The bright smiles of children who represent the hope and potential of our community in Luuka District.",
                stats: "100% Commitment",
              },
              {
                image: "/images/girls-window.jpg",
                title: "Curious Learners",
                description:
                  "Young girls eager to learn and explore new opportunities through education and mentorship programs.",
                stats: "Unlimited Potential",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-blue-600">{item.stats}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-500">Luuka District</span>
                    </div>
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Girls Sponsored", icon: GraduationCap },
              { number: "1", label: "District Served", icon: Globe },
              { number: "2025", label: "Foundation Year", icon: Star },
              { number: "∞", label: "Dreams Unlimited", icon: Heart },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Profile - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-teal-50/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-white shadow-lg rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Organization Profile</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency and accountability are at the heart of our operations. Learn more about our foundation's
              structure and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-10 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Foundation Details</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-700 block mb-1">Full Name:</strong>
                    <p className="text-gray-700">Andrew Kampani Foundation for Child and Women Development – Luuka</p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                    <strong className="text-teal-700 block mb-1">Also Known As:</strong>
                    <p className="text-gray-700">The Andrew Kampani Foundation</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <strong className="text-green-700 block mb-1">Year Established:</strong>
                    <p className="text-gray-700">2025</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                    <strong className="text-emerald-700 block mb-1">Registration Status:</strong>
                    <p className="text-gray-700">Community-Based Organization (CBO) in Luuka District</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-10 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Location & Contact</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <strong className="text-green-700 block mb-1">Headquarters:</strong>
                    <p className="text-gray-700">Luuka District, Eastern Uganda</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                    <strong className="text-emerald-700 block mb-1">Founder:</strong>
                    <p className="text-gray-700">Orikiriza Stella</p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                    <strong className="text-teal-700 block mb-1">Contact:</strong>
                    <p className="text-gray-700">📞 +256 775 833 585</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-700 block mb-1">Service Area:</strong>
                    <p className="text-gray-700">Luuka District and surrounding communities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives - Enhanced */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-teal-50/30"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Objectives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core objectives guide our work in empowering girls and women in Luuka District, creating sustainable
              change through focused action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Educational Support",
                description:
                  "Support girls from underprivileged backgrounds to access and stay in school through direct fee payments and academic support",
                gradient: "from-blue-500 to-teal-600",
                delay: "0",
              },
              {
                icon: Heart,
                title: "Life Skills Education",
                description:
                  "Provide comprehensive sex education and life skills to help girls make informed decisions about their futures",
                gradient: "from-teal-500 to-green-600",
                delay: "100",
              },
              {
                icon: Users,
                title: "Women Empowerment",
                description:
                  "Empower women through literacy programs, vocational training, and microenterprise support initiatives",
                gradient: "from-green-500 to-emerald-600",
                delay: "200",
              },
              {
                icon: Lightbulb,
                title: "Community Awareness",
                description: "Promote community awareness on the importance of girl-child education and women's rights",
                gradient: "from-emerald-500 to-cyan-600",
                delay: "300",
              },
              {
                icon: Shield,
                title: "Safe Spaces",
                description:
                  "Create safe spaces for girls to learn, grow, and be mentored without fear or discrimination",
                gradient: "from-cyan-500 to-blue-600",
                delay: "400",
              },
              {
                icon: Target,
                title: "Holistic Development",
                description:
                  "Provide comprehensive support for personal and professional growth through integrated programs",
                gradient: "from-blue-500 to-indigo-600",
                delay: "500",
              },
            ].map((objective, index) => (
              <Card
                key={index}
                className="group p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 animate-fade-in-up"
                style={{ animationDelay: `${objective.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${objective.gradient}`}></div>

                <CardContent className="relative p-0 text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${objective.gradient} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <objective.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>

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
            Join Andrew's
            <span className="block bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              Living Legacy
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-8"></div>

          <p className="text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Help us continue Andrew's legacy by empowering girls and women in Luuka District. Together, we can create
            lasting change that echoes through generations, transforming communities one life at a time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <GraduationCap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Sponsor Education</h3>
              <p className="text-sm text-gray-300">UGX 30,000 keeps a girl in school</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Volunteer</h3>
              <p className="text-sm text-gray-300">Share your skills and expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Spread Awareness</h3>
              <p className="text-sm text-gray-300">Share our mission with others</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <Link href="/donate" className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Support Our Mission</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Get in Touch</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
