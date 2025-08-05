"use client"

import { Button } from "@/components/ui/button"
import { Home, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-800 to-slate-700 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[200px] font-bold text-white/10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              404
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Oops! It looks like this page has gone missing, just like some of the 
          girls we're trying to help find their way back to education.
        </p>

        {/* Impact Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-400 mr-3" />
            <span className="text-2xl font-bold text-white">Every Child Matters</span>
          </div>
          <p className="text-gray-200">
            While you're here, remember that with just <span className="text-yellow-400 font-bold">UGX 30,000</span>, 
            you can sponsor a girl's education for an entire term.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-6 text-lg"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg"
          >
            <Link href="/donate">
              <Heart className="w-5 h-5 mr-2" />
              Sponsor a Girl
            </Link>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Footer Message */}
        <p className="text-gray-400 mt-8 text-sm">
          "Education is the most powerful weapon which you can use to change the world." 
          <br />- Nelson Mandela
        </p>
      </div>
    </div>
  )
}