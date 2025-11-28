import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Talk About Your Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a free call or send us a message. We typically respond within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a
                href="tel:+1234567890"
                className="text-primary hover:underline"
              >
                (123) 456-7890
              </a>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 9am-6pm EST</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a
                href="mailto:hello@lovabledigital.com"
                className="text-primary hover:underline"
              >
                hello@lovabledigital.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">Response within 2 hours</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground">US-Based Support</p>
              <p className="text-sm text-muted-foreground mt-2">Serving US & Canada</p>
            </Card>
          </div>

          {/* Main Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <Input placeholder="John Smith" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Name *</label>
                      <Input placeholder="Smith Electric" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="john@smithelectric.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Current Website</label>
                    <Input placeholder="www.yoursite.com (if you have one)" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Industry *</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background" required>
                      <option value="">Select your industry</option>
                      <option>Power Washing</option>
                      <option>Electrician</option>
                      <option>Plumbing</option>
                      <option>HVAC</option>
                      <option>Landscaping</option>
                      <option>Roofing</option>
                      <option>Painting</option>
                      <option>Cleaning Services</option>
                      <option>Non-Profit / NGO</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What are you looking for? *</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">New Website</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Website Redesign</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Local SEO</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Logo & Branding</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">GMB Optimization</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us about your business and goals
                    </label>
                    <Textarea
                      placeholder="We're a local electrician company looking to get more calls from our website..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 rounded" />
                      <span className="text-sm text-muted-foreground">
                        I'd like a free homepage mockup before committing to anything
                      </span>
                    </label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We'll respond within 2 hours during business hours (Mon-Fri, 9am-6pm EST)
                  </p>
                </form>
              </Card>
            </div>

            {/* Booking Calendar */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Book a Free Call</h2>
              <Card className="p-6">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 mb-6">
                  <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-center mb-2">
                    Schedule Your Free Consultation
                  </h3>
                  <p className="text-center text-muted-foreground mb-6">
                    15-minute call to discuss your project and see if we're a good fit
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open("https://calendly.com/", "_blank")}
                  >
                    View Available Times
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">What to expect on the call:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary-foreground font-bold">1</span>
                      </div>
                      <span>We'll learn about your business and goals</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary-foreground font-bold">2</span>
                      </div>
                      <span>Discuss which package fits your needs</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary-foreground font-bold">3</span>
                      </div>
                      <span>Answer any questions you have</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary-foreground font-bold">4</span>
                      </div>
                      <span>Provide transparent pricing and timeline</span>
                    </li>
                  </ul>

                  <div className="bg-slate-50 p-4 rounded-lg mt-6">
                    <p className="text-sm font-medium mb-2">No pressure. No commitment.</p>
                    <p className="text-sm text-muted-foreground">
                      This is a free consultation to see if we're the right fit. You'll leave with clarity on what you need and what it will cost.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Alternative Contact */}
              <Card className="p-6 mt-6 bg-primary text-primary-foreground">
                <h3 className="font-semibold text-lg mb-3">Prefer to message us?</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Phone className="h-5 w-5" />
                    <span>WhatsApp: +1 (234) 567-890</span>
                  </a>
                  <a
                    href="mailto:hello@lovabledigital.com"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Mail className="h-5 w-5" />
                    <span>hello@lovabledigital.com</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
