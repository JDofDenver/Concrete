"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Star, Calendar, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-2 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 bg-white rounded p-1">
            <Image
              src="/images/Luna Concrete Logo.png"
              alt="Luna Concrete Logo"
              width={48}
              height={48}
              className="object-contain h-12 w-auto"/>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="hover:text-orange-500 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:3038809483">
                (303) 880-9483
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-5 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-orange-500" />
                <span className="text-orange-500 font-semibold">Trusted Since 1994</span>
              </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-xl mx-auto">
              {/* Main background image */}
              <Image
                src="/images/Patio.jpeg"
                alt="Main project photo"
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
                priority
              />
              {/* Logo banner overlay */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full bg-white rounded-b-lg shadow-lg flex justify-center items-center py-2">
                <Image
                  src="/images/Luna Concrete Logo.png"
                  alt="Luna Concrete Logo"
                  width={100} // Adjust as needed
                  height={60} // Adjust as needed
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Luna Concrete
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Over 30 years of delivering exceptional concrete solutions across the Denver metro area. From driveways
                to patios, we build to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:3038809483">
                    Get Free Quote
                  </a>
                </Button>
                <Link href="#gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <span>Free Estimates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Concrete Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Denver and surrounding areas with quality concrete work that stands the test of time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flatwork",
                description: "Professional concrete flatwork including driveways, sidewalks, and more",
                icon: "🏗️",
              },
              {
                title: "Driveways",
                description: "Durable concrete driveways designed to handle Denver's weather conditions",
                icon: "🚗",
              },
              {
                title: "Sidewalks",
                description: "Safe and attractive concrete sidewalks for residential and commercial properties",
                icon: "🚶",
              },
              {
                title: "Patios",
                description: "Beautiful outdoor living spaces and entertainment areas",
                icon: "🏡",
              },
              {
                title: "Retaining Walls",
                description: "Strong concrete retaining walls for landscaping and erosion control",
                icon: "🧱",
              },
              {
                title: "Repairs & Restoration",
                description: "Expert concrete repair services to restore and extend the life of existing structures",
                icon: "🔧",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
            <p className="text-xl text-gray-600">See the quality and craftsmanship that sets us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place">

            {/* Placeholder for additional gallery images */}
            {[{
    'src': "/images/Patio.jpeg",
    'alt': "Beautiful concrete patio in Denver",
    'title': "Residential Patio",
    'description': "Custom concrete patio with decorative finish",
  }, {
    'src': "/images/TransitoDeck.jpeg",
    'alt': "Concrete deck project",
    'title': "Deck Installation",
    'description': "Stylish and durable concrete deck",
  }, {
    'src': "/images/transitoPattern.jpeg",
    'alt': "Concrete pattern project",
    'title': "Patterned Concrete",
    'description': "Unique and stylish patterned concrete",
  }, {
    'src': "/images/TransitoPatio.jpeg",
    'alt': "Concrete patio project",
    'title': "Patio Installation",
    'description': "Beautiful and functional concrete patio",
  },{
    'src': "/images/TransitoStairs.jpeg",
    'alt': "Concrete stairs project in Denver",
    'title': "Staircase Project",
    'description': "Durable and safe concrete stairs",
  },{
    'src': "/images/TransitoRentalJob.jpg",
    'alt': "Refreshed concrete patio",
    'title': "Rental House Project",
    'description': "Solid concrete work for rental properties",
  }].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={item.src || "/images/Patio.jpeg"}
                  alt={item.alt || `Concrete project - Denver area`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold mb-2">Quality Project</h3>
                    <p className="text-sm">Professional concrete work</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free estimate today. We serve Denver and all surrounding areas with professional concrete
                services.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <a href="tel:3038809483" className="text-lg hover:underline">
                    (303) 880-9483
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <a href="mailto:lunaconcretejt@yahoo.com" className="text-lg hover:underline">
                    <span>lunaconcretejt@yahoo.com</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>Serving Denver Metro Area</span>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ 30+ years of experience in Denver</li>
                  <li>✓ Licensed and fully insured</li>
                  <li>✓ Free estimates and consultations</li>
                  <li>✓ Quality materials and workmanship</li>
                  <li>✓ Competitive pricing</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
                  <form
                    className="space-y-4"
                    action="https://formsubmit.co/johndawson.inbox@gmail.com"
                    method="POST"
                  >
            {/* Control inputs for form submission */}
                    <input type="hidden" name="_autoresponse" value="Thank you for your submission!, We'll get back to you ASAP"></input>
                    <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
                    <input type="hidden" name="_subject" value="New Quote Request to Luna Concrete"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_honeypot" value="honeypot" ></input>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" name="firstName" type="text" required placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" name="lastName" type="text" required placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" name="phone" type="tel" required placeholder="(303) 555-0123" />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select a service</option>
                        <option value="driveway">Driveway</option>
                        <option value="patio">Patio</option>
                        <option value="walkway">Walkway</option>
                        <option value="foundation">Foundation</option>
                        <option value="repair">Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                      Get My Free Quote
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      We'll respond within 24 hours with your personalized quote
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 bg-white rounded p-1">
                <Image
                  src="/images/Luna Concrete Logo.png"
                  alt="Luna Concrete Logo"
                  width={48}
                  height={48}
                  className="object-contain h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Serving the Denver metro area with professional concrete services for over 30 years.
              </p>
              <div className="text-sm text-gray-400">Licensed & Insured • Free Estimates</div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Concrete Flatwork</li>
                <li>Driveways</li>
                <li>Sidewalks</li>
                <li>Patios</li>
                <li>Retaining Walls</li>
                <li>Concrete Repairs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Denver</li>
                <li>Aurora</li>
                <li>Lakewood</li>
                <li>Westminster</li>
                <li>Thornton</li>
                <li>Arvada</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Luna Concrete. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
