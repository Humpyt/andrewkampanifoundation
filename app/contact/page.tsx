import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Users, Heart, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/school-compound.jpg')",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
            Ready to join our mission of empowering girls and women in Luuka District? We'd love to hear from you and
            explore how you can make a difference.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                details: ["Luuka District", "Eastern Uganda", "Community-Based Foundation"],
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: Phone,
                title: "Contact Founder",
                details: ["Orikiriza Stella", "+256 775 833 585", "Available for inquiries"],
                gradient: "from-pink-500 to-red-600",
              },
              {
                icon: Mail,
                title: "Get Information",
                details: ["Foundation inquiries", "Partnership opportunities", "Volunteer applications"],
                gradient: "from-orange-500 to-red-600",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="group text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Foundation Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in:</label>
                  <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Select your interest</option>
                    <option>Sponsoring a girl's education</option>
                    <option>Volunteering as a teacher</option>
                    <option>Partnership opportunities</option>
                    <option>Donating to programs</option>
                    <option>General information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." className="min-h-32 resize-none" />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Foundation Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Our Foundation</h2>

              <div className="space-y-8">
                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Foundation Details</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start">
                        <strong className="text-purple-600 mr-2">Full Name:</strong>
                        <span>Andrews Foundation for Child and Women Development – Luuka</span>
                      </div>
                      <div className="flex items-start">
                        <strong className="text-purple-600 mr-2">Also Known As:</strong>
                        <span>The Andrew Kampani Foundation</span>
                      </div>
                      <div className="flex items-start">
                        <strong className="text-purple-600 mr-2">Established:</strong>
                        <span>2025</span>
                      </div>
                      <div className="flex items-start">
                        <strong className="text-purple-600 mr-2">Founder:</strong>
                        <span>Orikiriza Stella</span>
                      </div>
                      <div className="flex items-start">
                        <strong className="text-purple-600 mr-2">Contact:</strong>
                        <span>+256 775 833 585</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To support the education and personal development of vulnerable girls and women through access to
                      quality education, mentorship, life skills training, and community empowerment initiatives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Current Impact</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">30+</div>
                        <div className="text-sm text-gray-600">Girls Sponsored</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">UGX 30K</div>
                        <div className="text-sm text-gray-600">Per Child Fee</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Ways to Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can support our mission to empower girls and women in Luuka District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Sponsor Education",
                description:
                  "Sponsor a girl's education for UGX 30,000 and help her stay in school to complete her studies.",
                contact: "Education Sponsorship",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: Users,
                title: "Volunteer Teaching",
                description:
                  "Join us as an English language instructor or literacy coach to improve educational outcomes.",
                contact: "Teaching Opportunities",
                gradient: "from-pink-500 to-red-600",
              },
              {
                icon: Heart,
                title: "Community Support",
                description:
                  "Support our community sensitization programs and help create awareness about girl-child education.",
                contact: "Community Programs",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((way, index) => (
              <Card
                key={index}
                className="group p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${way.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <way.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{way.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{way.description}</p>
                  <p className="text-purple-600 font-semibold">{way.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact us today to learn more about how you can support girls and women in Luuka District. Together, we can
            create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 text-lg"
            >
              Call +256 775 833 585
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
            >
              <Link href="/donate">Sponsor a Girl</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
