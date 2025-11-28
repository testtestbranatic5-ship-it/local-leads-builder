import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Globe, TrendingUp, Zap, Award, Users, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import portfolioPowerWashing from "@/assets/portfolio-powerwashing.jpg";
import portfolioElectrician from "@/assets/portfolio-electrician.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle2 className="h-4 w-4" />
                US-Based Support • Fast Delivery
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Websites & SEO that put your phone ringing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Affordable websites, local SEO, and logos for small service businesses — built to convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Free Call
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                    See Packages
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="Professional small business owner with service van"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Calls & Jobs</h3>
              <p className="text-muted-foreground">
                Professional websites designed to turn visitors into paying customers fast.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local SEO That Works</h3>
              <p className="text-muted-foreground">
                Get found on Google when customers search for your services in your area.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground">
                Most sites live in 7-10 days. No long waits, no hassle. Just results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground">Complete digital solutions for local businesses</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Website Design</h3>
              <p className="text-sm text-muted-foreground">Mobile-friendly sites that convert</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Local SEO</h3>
              <p className="text-sm text-muted-foreground">Rank higher in local searches</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Logo & Branding</h3>
              <p className="text-sm text-muted-foreground">Professional brand identity</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GMB Optimization</h3>
              <p className="text-sm text-muted-foreground">Get more Google reviews</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">Simple, straightforward process</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Audit", desc: "We analyze your current online presence" },
              { step: "02", title: "Sample Homepage", desc: "See a mockup before you commit" },
              { step: "03", title: "Build & Launch", desc: "We build your site in 7-10 days" },
              { step: "04", title: "Ongoing Support", desc: "Optional SEO and maintenance" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Honest Pricing</h2>
            <p className="text-lg text-muted-foreground">No hidden fees. No surprises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="text-4xl font-bold text-primary mb-4">$299</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>5-page website</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Contact form</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 border-2 border-primary hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <div className="text-4xl font-bold text-primary mb-4">$499</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>10-page website</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Logo design included</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>GMB optimization</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold text-primary mb-4">$799</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Advanced features</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Complete branding</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>3 months SEO included</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="text-center">
            <Link to="/pricing">
              <Button variant="hero" size="lg">
                View Full Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-lg text-muted-foreground">Real results for real businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img src={portfolioPowerWashing} alt="Power washing website" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Power Clean Co.</h3>
                <p className="text-sm text-muted-foreground mb-3">Power Washing • Austin, TX</p>
                <p className="text-sm mb-4">New website + local SEO resulted in 30% more calls in 2 months</p>
                <Link to="/portfolio">
                  <Button variant="outline" size="sm">View Case Study</Button>
                </Link>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img src={portfolioElectrician} alt="Electrician website" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bright Spark Electric</h3>
                <p className="text-sm text-muted-foreground mb-3">Electrician • Denver, CO</p>
                <p className="text-sm mb-4">Complete rebrand and site led to 45% increase in online bookings</p>
                <Link to="/portfolio">
                  <Button variant="outline" size="sm">View Case Study</Button>
                </Link>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-full h-48 flex items-center justify-center">
                <Users className="h-20 w-20 text-primary opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Clean Water NGO</h3>
                <p className="text-sm text-muted-foreground mb-3">Non-Profit • Seattle, WA</p>
                <p className="text-sm mb-4">Free website helped secure $50K in donations in first quarter</p>
                <Link to="/portfolio">
                  <Button variant="outline" size="sm">View Case Study</Button>
                </Link>
              </div>
            </Card>
          </div>
          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real feedback from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Lovable Digital built us a new website and optimized our GMB. We got 30% more calls in 2 months!",
                name: "Raj Patel",
                business: "Power Clean Co., Austin, TX",
              },
              {
                quote: "Fast turnaround, great communication, and the site looks amazing. Worth every penny.",
                name: "Mike Johnson",
                business: "Bright Spark Electric, Denver, CO",
              },
              {
                quote: "They gave us a free website and it helped us raise $50K in donations. Incredible team!",
                name: "Sarah Mitchell",
                business: "Clean Water NGO, Seattle, WA",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-secondary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Homepage Mockup</h2>
            <p className="text-lg mb-8 opacity-90">See what your new website could look like — no commitment required</p>
            <Card className="p-8 bg-background text-foreground">
              <form className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background" />
                <Input placeholder="Business Name" className="bg-background" />
                <Input type="email" placeholder="Email Address" className="bg-background" />
                <Input type="tel" placeholder="Phone Number" className="bg-background" />
                <Input placeholder="Current Website (if any)" className="bg-background md:col-span-2" />
                <div className="md:col-span-2">
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Select Your Industry</option>
                    <option>Power Washing</option>
                    <option>Electrician</option>
                    <option>Plumbing</option>
                    <option>HVAC</option>
                    <option>Landscaping</option>
                    <option>Non-Profit / NGO</option>
                    <option>Other</option>
                  </select>
                </div>
                <Textarea placeholder="Tell us about your business and goals" className="md:col-span-2 bg-background" />
                <Button type="submit" variant="hero" size="lg" className="md:col-span-2">
                  Get Free Mockup
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
