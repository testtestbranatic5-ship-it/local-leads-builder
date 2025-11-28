import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, TrendingUp, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Professional, mobile-responsive websites that turn visitors into customers",
      benefits: [
        "Custom design tailored to your industry",
        "Mobile-first responsive design",
        "Fast loading speeds",
        "Contact forms and calls-to-action",
        "Easy content management",
        "SEO-friendly structure",
      ],
      deliverables: "5-10 pages, contact forms, image galleries, Google Maps integration",
      timeline: "7-10 business days",
      startingPrice: "$299",
      ideal: "Perfect for electricians, power washers, plumbers, and service businesses",
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Get found by customers searching for your services in your area",
      benefits: [
        "Google Business Profile optimization",
        "Local keyword research and targeting",
        "Citation building across directories",
        "Review generation strategies",
        "On-page SEO optimization",
        "Monthly performance reports",
      ],
      deliverables: "GMB optimization, 20+ citations, monthly reporting, keyword tracking",
      timeline: "Ongoing monthly service",
      startingPrice: "$199/mo",
      ideal: "Essential for any local service business wanting more calls",
    },
    {
      icon: Award,
      title: "Logo & Branding",
      description: "Professional brand identity that makes you stand out from competitors",
      benefits: [
        "Custom logo design (3 concepts)",
        "Color palette selection",
        "Typography guidelines",
        "Business card design",
        "Social media graphics",
        "Brand style guide",
      ],
      deliverables: "Logo files (all formats), brand guidelines, business card design",
      timeline: "5-7 business days",
      startingPrice: "$199",
      ideal: "Great for new businesses or rebrands",
    },
    {
      icon: Users,
      title: "GMB Optimization",
      description: "Maximize your Google Business Profile to get more local visibility",
      benefits: [
        "Complete profile setup/audit",
        "Category optimization",
        "Photo uploads and optimization",
        "Post scheduling (monthly)",
        "Review response management",
        "Q&A monitoring",
      ],
      deliverables: "Optimized GMB profile, weekly posts, review management",
      timeline: "Initial setup in 3-5 days",
      startingPrice: "$149/mo",
      ideal: "Must-have for every local service business",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed in 7-10 business days. More complex projects may take 2-3 weeks.",
    },
    {
      question: "How many revisions do I get?",
      answer: "We include 2 rounds of revisions with all packages. Additional revisions available at $50/hour.",
    },
    {
      question: "Do you offer guarantees?",
      answer: "Yes! We offer a 30-day satisfaction guarantee. If you're not happy, we'll make it right or refund your money.",
    },
    {
      question: "Who owns the website when it's done?",
      answer: "You do! You own 100% of your website, logo, and all content. No strings attached.",
    },
    {
      question: "What if I need changes later?",
      answer: "We offer ongoing support packages starting at $99/month, or one-time updates at $75/hour.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we have a 30-day money-back guarantee if you're not satisfied with our work.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Digital Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything your local business needs to get more calls and grow online
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="bg-slate-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Ideal for:</p>
                      <p className="font-medium">{service.ideal}</p>
                    </div>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-bold text-primary">{service.startingPrice}</span>
                      <span className="text-muted-foreground">starting price</span>
                    </div>
                    <Link to="/contact">
                      <Button variant="hero" size="lg">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <Card className={`p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                    <ul className="space-y-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4 space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">Deliverables</p>
                        <p className="text-sm">{service.deliverables}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">Timeline</p>
                        <p className="text-sm">{service.timeline}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">Book a free call and let's discuss your project</p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Book Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
