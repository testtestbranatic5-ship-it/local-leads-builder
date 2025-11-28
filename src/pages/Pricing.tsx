import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, X, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const websitePackages = [
    {
      name: "Basic",
      price: "$299",
      description: "Perfect for getting online fast",
      features: [
        { included: true, text: "5-page website" },
        { included: true, text: "Mobile responsive" },
        { included: true, text: "Contact form" },
        { included: true, text: "Image gallery" },
        { included: true, text: "Google Maps integration" },
        { included: true, text: "Basic SEO setup" },
        { included: false, text: "Logo design" },
        { included: false, text: "GMB optimization" },
      ],
      ideal: "Startups & small businesses on a budget",
    },
    {
      name: "Standard",
      price: "$499",
      description: "Our most popular package",
      popular: true,
      features: [
        { included: true, text: "10-page website" },
        { included: true, text: "Mobile responsive" },
        { included: true, text: "Contact form + booking" },
        { included: true, text: "Image galleries" },
        { included: true, text: "Google Maps + reviews widget" },
        { included: true, text: "Complete SEO setup" },
        { included: true, text: "Logo design (3 concepts)" },
        { included: true, text: "GMB optimization" },
      ],
      ideal: "Established businesses ready to grow",
    },
    {
      name: "Premium",
      price: "$799",
      description: "Complete digital package",
      features: [
        { included: true, text: "Unlimited pages" },
        { included: true, text: "Advanced features (booking, payments)" },
        { included: true, text: "Complete branding package" },
        { included: true, text: "Professional photography (up to 2 hours)" },
        { included: true, text: "Advanced SEO & analytics" },
        { included: true, text: "3 months SEO service included" },
        { included: true, text: "Priority support" },
        { included: true, text: "Social media setup" },
      ],
      ideal: "Businesses serious about dominating their market",
    },
  ];

  const seoPackages = [
    {
      name: "SEO Starter",
      price: "$199/mo",
      features: [
        "GMB optimization & monitoring",
        "10 local citations",
        "Basic keyword tracking",
        "Monthly performance report",
        "Review management guidance",
      ],
    },
    {
      name: "SEO Growth",
      price: "$399/mo",
      features: [
        "Everything in Starter",
        "20 local citations",
        "On-page SEO optimization",
        "Content creation (1 blog/month)",
        "Advanced keyword tracking",
        "Competitor analysis",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-background to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No surprises. Just results.
          </p>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Packages</h2>
            <p className="text-lg text-muted-foreground">One-time payment, lifetime ownership</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 ${
                  pkg.popular ? "border-2 border-primary shadow-xl relative" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {feature.included ? (
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 p-3 rounded-lg mb-6">
                  <p className="text-xs text-muted-foreground mb-1">Ideal for:</p>
                  <p className="text-sm font-medium">{pkg.ideal}</p>
                </div>
                <Link to="/contact">
                  <Button
                    variant={pkg.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Monthly SEO Services</h2>
            <p className="text-lg text-muted-foreground">Ongoing optimization to grow your business</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seoPackages.map((pkg, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Offer */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Websites for NGOs</h2>
            <p className="text-lg mb-8 opacity-90">
              We're offering 2-3 free websites to qualified non-profit organizations. In exchange, we ask for a testimonial and link from your site.
            </p>
            <Card className="p-8 bg-background text-foreground max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">What's Included (Valued at $499)</h3>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">10-page professional website</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Donation integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Volunteer sign-up forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Basic SEO setup</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="w-full">
                  Apply for Free Website
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Satisfaction Guarantee</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We stand behind our work. If you're not happy with your website within 30 days, we'll make it right or refund your money. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  View Our Work
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

export default Pricing;
