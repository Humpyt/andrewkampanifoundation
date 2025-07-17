import Link from "next/link"
import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src="/Andrew Kampani Foundation3.png"
                  alt="Andrew Kampani Foundation Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering girls and women in Luuka District, Uganda through education, mentorship, and life skills
              training. Founded in memory of Andrew Kampani to create lasting change in our community.
            </p>
            <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-purple-300 font-semibold mb-1">Contact Founder:</p>
              <p className="text-white font-medium">Orikiriza Stella</p>
              <div className="flex items-center space-x-2 mt-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">+256 775 833 585</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600" },
                { Icon: Twitter, color: "hover:bg-sky-500" },
                { Icon: Instagram, color: "hover:bg-pink-600" },
                { Icon: Linkedin, color: "hover:bg-blue-700" },
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Programs", href: "/programs" },
                { name: "Beneficiaries", href: "/beneficiaries" },
                { name: "Volunteer", href: "/volunteer" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full transition-all duration-300 group-hover:bg-pink-500"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Foundation Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Foundation Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors duration-300" />
                <div className="text-gray-300">
                  <p className="font-medium">Luuka District</p>
                  <p>Eastern Uganda</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300" />
                <span className="text-gray-300">Foundation Inquiries</span>
              </div>
              <div className="text-gray-300 space-y-2">
                <div>
                  <p className="font-semibold text-purple-300">Also Known As:</p>
                  <p>The Andrew Kampani Foundation</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-300">Established:</p>
                  <p>2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Andrew Kampani Foundation. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Heart className="w-4 h-4 text-red-400" />
              <p className="text-gray-400 text-sm">In loving memory of Andrew Kampani</p>
            </div>
            <div className="mt-4 text-center md:text-right">
              <p className="text-gray-400 text-sm">Developed by <a href="https://cavemotions.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-pink-300">Cave Motions</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
