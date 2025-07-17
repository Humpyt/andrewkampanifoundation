"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Heart, Users, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Empowering the Girl Child",
    subtitle: "Through Education & Mentorship",
    description:
      "Supporting over 30 vulnerable girls in Luuka District with school fees, ensuring they stay in school and build brighter futures.",
    image: "/images/here/z101.jpg",
    cta: "Sponsor a Girl",
    ctaLink: "/donate",
    stats: { number: "30+", label: "Girls Sponsored" },
    gradient: "from-purple-900/90 via-purple-800/80 to-pink-900/90",
    accent: "purple",
  },
  {
    id: 2,
    title: "Building Stronger Communities",
    subtitle: "One Woman at a Time",
    description:
      "Providing vocational training, life skills, and microenterprise support to empower women in rural Uganda.",
    image: "/images/here/z20.jpg",
    cta: "Join Our Mission",
    ctaLink: "/programs",
    stats: { number: "100%", label: "Commitment to Change" },
    gradient: "from-pink-900/90 via-rose-800/80 to-orange-900/90",
    accent: "pink",
  },
  {
    id: 3,
    title: "Andrew's Living Legacy",
    subtitle: "Transforming Loss into Hope",
    description:
      "Founded in memory of Andrew Kampani, our foundation ensures no child goes unheard and no woman is left behind.",
    image: "/images/here/z30.jpg",
    cta: "Our Story",
    ctaLink: "/about",
    stats: { number: "2025", label: "Legacy Continues" },
    gradient: "from-blue-900/90 via-indigo-800/80 to-purple-900/90",
    accent: "blue",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : index === (currentSlide - 1 + slides.length) % slides.length
                ? "opacity-0 scale-105 -translate-x-full"
                : "opacity-0 scale-95 translate-x-full"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-white space-y-8">

                  {/* Main Content */}
                  <div className="space-y-6">
                    <div className="animate-fade-in-up delay-200">
                      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">{slide.title}</h1>
                      <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-6">{slide.subtitle}</h2>
                    </div>

                    <p className="text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
                      {slide.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-8 animate-fade-in-up delay-400">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">{slide.stats.number}</div>
                      <div className="text-sm text-white/70 font-medium">{slide.stats.label}</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">UGX 30K</div>
                      <div className="text-sm text-white/70 font-medium">Per Child Fee</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Link href={slide.ctaLink} className="flex items-center gap-2">
                        {slide.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        Get Involved
                        <Heart className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="hidden lg:block animate-fade-in-right delay-300">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                          <Users className="w-12 h-12 text-white mx-auto mb-4" />
                          <div className="text-2xl font-bold text-white">30+</div>
                          <div className="text-sm text-white/80">Girls Supported</div>
                        </div>
                        <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                          <GraduationCap className="w-12 h-12 text-white mx-auto mb-4" />
                          <div className="text-2xl font-bold text-white">100%</div>
                          <div className="text-sm text-white/80">Retention Goal</div>
                        </div>
                        <div className="col-span-2 text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                          <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                          <div className="text-lg font-semibold text-white">Luuka District, Uganda</div>
                          <div className="text-sm text-white/80">Our Community</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: isAutoPlaying ? "progress 6s linear infinite" : "none",
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
