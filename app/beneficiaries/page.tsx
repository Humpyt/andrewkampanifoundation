import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function BeneficiariesPage() {
  const beneficiaries = [
    {
      name: "Magoba Proscovia",
      image: "/images/beneficiaries/MAGOBA PROSCOVIA 1.jpeg",
    },
    {
      name: "Babirye Harriet",
      image: "/images/beneficiaries/BABIRYE HARRIET.jpeg",
    },
    {
      name: "Babirye Jovia",
      image: "/images/beneficiaries/BABIRYE JOVIA 1.jpeg",
    },
    {
      name: "Emily Kutaze",
      image: "/images/beneficiaries/EMILY KUTAZE.jpeg",
    },
    {
      name: "Ereka Daphine",
      image: "/images/beneficiaries/EREKA DAPHINE 1.jpeg",
    },
    {
      name: "Evelyn Kawuda",
      image: "/images/beneficiaries/EVELYN KAWUDA 1.jpeg",
    },
    {
      name: "Evelyn Namukose",
      image: "/images/beneficiaries/EVELYN NAMUKOSE 1.jpeg",
    },
    {
      name: "Janet Modondo",
      image: "/images/beneficiaries/JANET MODONDO.jpeg",
    },
    {
      name: "Kampiya Christine",
      image: "/images/beneficiaries/KAMPIYA CHRISTINE.jpeg",
    },
    {
      name: "Kasubo Wyntte",
      image: "/images/beneficiaries/KASUBO WYNTTE 1.jpeg",
    },
    {
      name: "Mirembe Nsoli",
      image: "/images/beneficiaries/MIREMBE NSOLI 1.jpeg",
    },
    {
      name: "Mudondo Evelyn",
      image: "/images/beneficiaries/MUDONDO EVELYN 1.jpeg",
    },
    {
      name: "Nabirye Rihanna",
      image: "/images/beneficiaries/NABIRYE RIHANNA.jpeg",
    },
    {
      name: "Naigaga Evelyn",
      image: "/images/beneficiaries/NAIGAGA EVELYN.jpeg",
    },
    {
      name: "Scovia Namunefu",
      image: "/images/beneficiaries/SCOVIA NAMUNEFU 1.jpeg",
    },
    {
      name: "Sharon Nadego",
      image: "/images/beneficiaries/SHARON NADEGO.jpeg",
    },
    {
      name: "Stecia Namunafu",
      image: "/images/beneficiaries/STECIA NAMUNAFU.jpeg",
    },
    {
      name: "Susan Ntibiri",
      image: "/images/beneficiaries/SUSAN NTIBIRI 1.jpeg",
    },
    {
      name: "Tepercia Namuwaya",
      image: "/images/beneficiaries/TEPERCIA NAMUWAYA 1.jpeg",
    },
    {
      name: "Tibasiima Viola",
      image: "/images/beneficiaries/TIBASIIMA VIOLA 1.jpeg",
    },
    {
      name: "Tukusewaya Benita",
      image: "/images/beneficiaries/TUKUSEWAYA BENITA.jpeg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/header/m2.jpg')",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Beneficiaries
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Meet the incredible individuals whose lives have been transformed through our programs. Their stories
            inspire us to continue our mission of creating lasting change.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, number: "30+", label: "Girls Currently Sponsored", color: "text-purple-600" },
              { icon: Heart, number: "100%", label: "Commitment to Success", color: "text-pink-600" },
              { icon: Globe, number: "1", label: "District Served", color: "text-blue-600" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Stories of Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each person represents a story of hope, resilience, and positive change. These are the real faces and
              stories from our community in Luuka District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiaries.map((beneficiary, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={beneficiary.image || "/placeholder.svg"}
                    alt={beneficiary.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2">{beneficiary.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {beneficiary.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Impact Beyond Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our beneficiaries don't just receive support—they become leaders, entrepreneurs, and change-makers in
              their own communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Leadership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Many of our beneficiaries have gone on to become community leaders, advocating for women's rights,
                  healthcare access, and educational opportunities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Through our microfinance and skills training programs, beneficiaries have started successful
                  businesses, creating employment for others in their communities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Generational Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  The positive changes extend beyond individuals to their families and future generations, breaking
                  cycles of poverty and creating lasting transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="/images/eeq.jpg"
                alt="Community children"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Help Us Reach More Lives</h2>
          <p className="text-xl mb-8 text-purple-100">
            Every donation creates another success story. Join us in transforming more lives and building stronger
            communities in Luuka District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 text-lg"
            >
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
