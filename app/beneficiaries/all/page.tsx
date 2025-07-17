import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AllBeneficiariesPage() {
  const allBeneficiaries = [
    "Kayanga Ruth",
    "Nabirye Florence", 
    "Naigaga Jackline",
    "Kako Vanisa",
    "Tereka Daphine",
    "Babirye Harriet",
    "Naigaga Evelyn",
    "Nandego Sharon",
    "Kisakye Namabanda",
    "Emily Kutaze",
    "Tibasiima Viola",
    "Nabirye Zelesi",
    "Nabirye Veronica",
    "Magoba Proscovia",
    "Mutesi Esther",
    "Aliko Precious",
    "Naguti Sharita",
    "Babirye Gladys",
    "Nangobi Shanifa",
    "Wotali Christine",
    "Nakanda Ruth Peace",
    "Mpaokibona Lakeri",
    "Naiwumbwe Florence",
    "Mukyala Kolostika",
    "Mpindi Eseza",
    "Namubiru Patience",
    "Mukisa Ruth",
    "Mpayenda Joan",
    "Akilino Brenda",
    "Namuganza Judith",
    "Stecia Namunafu",
    "Nawudho Mercy",
    "Mukyala Resty",
    "Akalimwiine Bety",
    "Mudondo Everine"
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
            All Beneficiaries
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Complete list of all our beneficiaries
          </p>
        </div>
      </section>

      {/* Names List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allBeneficiaries.map((name, index) => (
              <Card
                key={index}
                className="p-4 border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-medium text-gray-800">
                    {name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg"
          >
            <Link href="/beneficiaries">Back to Beneficiaries</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}