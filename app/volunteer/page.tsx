import { Button } from "@/components/ui/button"
import { sendEmail } from "@/lib/email"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Globe, Heart, Clock, Award, CheckCircle } from "lucide-react"

export default function VolunteerPage() {
  const opportunities = [
    {
      title: "Field Volunteer",
      location: "Various Countries",
      duration: "6-12 months",
      description: "Work directly with communities on education, healthcare, and development projects",
      requirements: ["Bachelor's degree", "2+ years experience", "Language skills preferred"],
      gradient: "from-blue-500 to-teal-600",
    },
    {
      title: "Remote Support",
      location: "Work from Home",
      duration: "Flexible",
      description: "Provide virtual assistance in marketing, research, grant writing, and administration",
      requirements: ["Relevant skills", "10+ hours/week", "Reliable internet"],
      gradient: "from-teal-500 to-green-600",
    },
    {
      title: "Skills-Based Volunteer",
      location: "Various",
      duration: "Project-based",
      description: "Share your professional expertise in areas like IT, finance, legal, or healthcare",
      requirements: ["Professional experience", "Specific expertise", "Flexible schedule"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Event Support",
      location: "Local Events",
      duration: "1-3 days",
      description: "Help with fundraising events, awareness campaigns, and community outreach",
      requirements: ["Enthusiasm", "Team player", "Weekend availability"],
      gradient: "from-emerald-500 to-cyan-600",
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
            backgroundImage: "url('/images/headerImage/z101.jpg')",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Volunteer With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Join a global community of changemakers. Use your skills, passion, and time to create lasting impact in
            communities that need it most.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with our organization offers unique opportunities for personal growth, professional
              development, and meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Work on projects that reach communities across 25 countries, creating change on a truly global scale.",
                stats: "25 Countries • 50,000+ Lives Impacted",
              },
              {
                icon: Award,
                title: "Professional Growth",
                description:
                  "Develop new skills, gain international experience, and build a network of like-minded professionals.",
                stats: "95% Report Skill Development",
              },
              {
                icon: Heart,
                title: "Personal Fulfillment",
                description:
                  "Experience the deep satisfaction that comes from making a real difference in people's lives.",
                stats: "98% Would Recommend",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <p className="text-blue-600 font-semibold">{benefit.stats}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect volunteer opportunity that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="group p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${opportunity.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Globe className="w-4 h-4 mr-1" />
                        <span className="mr-4">{opportunity.location}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{opportunity.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{opportunity.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${opportunity.gradient} hover:opacity-90`}>
                    Apply for This Position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Apply to Volunteer</h2>
            <p className="text-xl text-gray-600">
              Ready to make a difference? Fill out our application form and we'll get back to you soon.
            </p>
          </div>

          <Card className="p-8 border-0 shadow-2xl">
            <CardContent className="p-0">
              <form action={async (formData) => {
                'use server'
                const firstName = formData.get('firstName')
                const lastName = formData.get('lastName')
                const email = formData.get('email')
                const phone = formData.get('phone')
                const location = formData.get('location')
                const opportunity = formData.get('opportunity')
                const availability = formData.get('availability')
                const experience = formData.get('experience')
                const skills = formData.get('skills')
                const motivation = formData.get('motivation')
                
                const emailContent = `
                  New Volunteer Application:
                  Name: ${firstName} ${lastName}
                  Email: ${email}
                  Phone: ${phone}
                  Location: ${location}
                  Preferred Opportunity: ${opportunity}
                  Availability: ${availability}
                  
                  Experience:
                  ${experience}
                  
                  Skills:
                  ${skills}
                  
                  Motivation:
                  ${motivation}
                `
                
                await sendEmail(
                  'ansmaris@yahoo.com',
                  'New Volunteer Application',
                  emailContent
                )
              }} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h3>
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

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Input name="location" placeholder="City, Country" className="h-12" required />
                  </div>
                </div>

                {/* Volunteer Preferences */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Opportunity</label>
                      <select name="opportunity" className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option>Select an opportunity</option>
                        <option>Field Volunteer</option>
                        <option>Remote Support</option>
                        <option>Skills-Based Volunteer</option>
                        <option>Event Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                      <select name="availability" className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option>Select availability</option>
                        <option>Full-time (40+ hours/week)</option>
                        <option>Part-time (20-40 hours/week)</option>
                        <option>Flexible (10-20 hours/week)</option>
                        <option>Weekend only</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Experience & Skills */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience & Skills</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
                      <Textarea
                        name="experience"
                        placeholder="Describe your relevant work, volunteer, or educational experience..."
                        className="min-h-32 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Expertise</label>
                      <Textarea
                        name="skills"
                        placeholder="List your key skills, languages, technical abilities, etc..."
                        className="min-h-32 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to volunteer with us?
                      </label>
                      <Textarea
                        name="motivation"
                        placeholder="Tell us about your motivation and what you hope to achieve..."
                        className="min-h-32 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full h-16 text-xl bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700"
                >
                  <Heart className="w-6 h-6 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Change Lives?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Your journey as a volunteer starts with a single step. Join our community of changemakers and discover the
            impact you can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-800 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
