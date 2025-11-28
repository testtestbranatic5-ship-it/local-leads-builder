import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Zap, Target, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Speed",
      description: "We move fast so you can start getting results quickly. Most projects done in 7-10 days.",
    },
    {
      icon: Heart,
      title: "Honest Pricing",
      description: "No hidden fees, no surprises. What we quote is what you pay.",
    },
    {
      icon: Target,
      title: "Real Results",
      description: "We focus on what matters: more calls, more customers, more revenue for your business.",
    },
  ];

  const team = [
    {
      role: "Founder & Lead Developer",
      description: "Full-stack developer with 8+ years experience building websites and digital solutions for small businesses.",
      location: "Based in India",
    },
    {
      role: "US Account Manager",
      description: "Your main point of contact. Handles all calls, contracts, and communication with US clients.",
      location: "Based in United States",
    },
    {
      role: "Design Team",
      description: "Expert designers creating beautiful, conversion-focused websites and branding.",
      location: "Remote",
    },
    {
      role: "SEO Specialists",
      description: "Local SEO experts who know how to get your business found on Google.",
      location: "Remote",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Help Small Businesses Win Online
            </h1>
            <p className="text-xl text-muted-foreground">
              A small, talented team building websites and SEO solutions for local service businesses across the US
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Lovable Digital started when our founder noticed a pattern: talented electricians, power washers, plumbers, and other service pros were losing business simply because they didn't have a good online presence.
              </p>
              <p>
                These hardworking business owners didn't need complex enterprise solutions. They needed fast, affordable websites that actually brought in customers.
              </p>
              <p>
                We partnered with a US-based account manager to bridge the time zone and cultural gap, ensuring smooth communication with our American clients. Today, we're a small remote team building websites, brands, and SEO solutions that help local businesses grow.
              </p>
              <p className="font-semibold text-foreground">
                We're not a big agency with overhead. We're a lean team that delivers quality work at prices small businesses can actually afford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Small team. Big results. Made in India with US support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{member.role}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{member.description}</p>
                    <p className="text-xs text-primary font-medium">{member.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* US Partner Callout */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              US-Based Support You Can Trust
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Our US account manager handles all client calls, contracts, and communication during US business hours. You get the quality of overseas development at affordable prices, with the convenience of working with someone in your time zone who understands your market.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm">US business hours availability</span>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm">Phone and video calls welcome</span>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm">Understands US market needs</span>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm">US-based contracts & invoicing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NGO Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Giving Back</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe in using our skills for good. That's why we offer 2-3 free professional websites to qualified non-profit organizations each year. If your NGO is doing important work but can't afford a website, we want to help.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Apply for Free NGO Website
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-50 to-background">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to grow your business with a better online presence? Book a free call and let's chat about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Book Free Call
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  See Our Work
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
