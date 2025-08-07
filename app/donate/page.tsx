'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Heart, Users, GraduationCap, Home, Utensils, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function DonatePage() {
  const donationNeeds = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Sponsorship",
      description: "School fees for girls in Luuka District - UGX 30,000 per child for primary education",
      urgency: "High",
      amount: "UGX 30,000 per child/term"
    }
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "info@andrewkampanifoundation.com",
      secondary: "",
      description: "Send us your sponsorship inquiry or questions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+256 775 833 585",
      secondary: "",
      description: "Speak directly with our program coordinators"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Programs",
      primary: "Luuka District, Uganda",
      secondary: "Program visits: By appointment",
      description: "See our education programs in action"
    }
  ]

  const paymentMethods = [
    "Mobile Money (MTN Mobile Money, Airtel Money)",
    "Bank Transfer (Ugandan Banks)",
    "Cash Donations (Local Collection)",
    "In-Kind Donations (School Supplies, Books)",
    "International Wire Transfer",
    "Online Payment Platforms"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/CorePrograms/Andrews02.jpg')",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6 animate-fade-in-up">
            <div className="relative w-20 h-20 mx-auto">
              <Image
                src="/images/logo/andrew-kampani-logo.png"
                alt="Andrew Kampani Foundation Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent animate-fade-in-up delay-200">
            Empower Through Education
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-teal-300 mx-auto rounded-full mb-6 animate-fade-in-up delay-300"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Join us in transforming lives through education sponsorships and community empowerment in Luuka District, Uganda.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in-up delay-500">
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Girls Currently Sponsored</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in-up delay-600">
              <div className="text-3xl font-bold mb-2">UGX 30K</div>
              <div className="text-blue-100">Per Child School Fees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in-up delay-700">
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-blue-100">District Served (Luuka)</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Donation Needs Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Lives Through Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation directly supports our mission to empower girls and women in Luuka District. 
            Here's how your contribution creates lasting change:
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="max-w-md w-full">
          {donationNeeds.map((need, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {need.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{need.title}</CardTitle>
                      <Badge 
                        variant={need.urgency === 'Critical' ? 'destructive' : need.urgency === 'High' ? 'default' : 'secondary'}
                        className="mt-1"
                      >
                        {need.urgency} Priority
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{need.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Typical Donation Range:</div>
                  <div className="font-semibold text-lg text-blue-600">{need.amount}</div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Sponsor a Girl's Education?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Contact us through any of the methods below to discuss education sponsorship 
              opportunities and learn more about our programs in Luuka District.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-white/20 rounded-lg w-fit mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <div className="font-semibold text-lg">{method.primary}</div>
                    <div className="opacity-80">{method.secondary}</div>
                  </div>
                  <p className="text-sm opacity-75">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl mb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              How to Support Our Programs
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Multiple convenient ways to sponsor a girl's education or support our community programs in Luuka District
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-800 text-center">{method}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsorship Impact</h3>
              <p className="text-gray-600">
                UGX 30,000 sponsors one girl's education for a full term. Your contribution goes directly to school fees, 
                ensuring girls in Luuka District can complete their education and build brighter futures.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Impact in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how previous donations have transformed lives in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Grace's Education Journey</h3>
              <p className="text-gray-600 mb-4">
                With UGX 30,000 sponsorship, Grace from Luuka District completed her primary education 
                and is now pursuing her dream of becoming a nurse.
              </p>
              <Badge className="bg-green-100 text-green-800">Success Story</Badge>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <Users className="w-16 h-16 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Women's Skills Program</h3>
              <p className="text-gray-600 mb-4">
                Our vocational training programs have equipped 50+ women with tailoring, 
                farming, and entrepreneurship skills in Luuka District.
              </p>
              <Badge className="bg-blue-100 text-blue-800">Community Impact</Badge>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Heart className="w-16 h-16 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Health & Wellness</h3>
              <p className="text-gray-600 mb-4">
                Community health programs have reached 200+ families, providing health education 
                and support services in rural Luuka District.
              </p>
              <Badge className="bg-red-100 text-red-800">Life-Changing</Badge>
            </CardContent>
          </Card>
        </div>



        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            <strong>Note:</strong> All donations are used directly for program implementation. 
            We maintain full transparency and will provide regular updates on how your contribution is making an impact.
          </p>
        </div>
      </div>
    </div>
  )
}
