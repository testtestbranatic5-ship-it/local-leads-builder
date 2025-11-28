import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolioPowerWashing from "@/assets/portfolio-powerwashing.jpg";
import portfolioElectrician from "@/assets/portfolio-electrician.jpg";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Power Clean Co.",
      industry: "Power Washing",
      location: "Austin, TX",
      image: portfolioPowerWashing,
      challenge: "Local power washing company had no online presence and relied solely on word-of-mouth referrals. Missing out on 80% of local searches.",
      solution: "Built modern, mobile-responsive website with before/after galleries, online booking, and optimized Google Business Profile with regular posts and review management.",
      results: [
        "30% increase in monthly calls within 2 months",
        "Ranked #2 for 'power washing Austin' in 6 weeks",
        "15 new 5-star Google reviews in first quarter",
        "Average 3.5 calls per day from website",
      ],
      testimonial: "Lovable Digital transformed our business. We went from relying on referrals to getting 3-4 calls a day from our website. Best investment we've made!",
      client: "Raj Patel, Owner",
      metrics: [
        { value: "30%", label: "More Calls" },
        { value: "#2", label: "Google Rank" },
        { value: "15", label: "New Reviews" },
      ],
    },
    {
      title: "Bright Spark Electric",
      industry: "Electrician",
      location: "Denver, CO",
      image: portfolioElectrician,
      challenge: "Outdated website from 2015 wasn't mobile-friendly. Lost trust with potential customers. Competitors dominating local search results.",
      solution: "Complete rebrand with new logo, modern website showcasing licensed electricians and certifications, GMB optimization, and local citation building across 20+ directories.",
      results: [
        "45% increase in online booking conversions",
        "Jumped from page 3 to page 1 for key terms",
        "Website traffic increased by 120%",
        "Reduced cost-per-lead by 35%",
      ],
      testimonial: "The team at Lovable Digital didn't just build us a website, they gave us a complete digital presence. Our booking rate has never been higher.",
      client: "Mike Johnson, Owner",
      metrics: [
        { value: "45%", label: "More Bookings" },
        { value: "120%", label: "Traffic Growth" },
        { value: "35%", label: "Lower Cost/Lead" },
      ],
    },
    {
      title: "Clean Water Initiative",
      industry: "Non-Profit",
      location: "Seattle, WA",
      image: null,
      challenge: "Small NGO focused on clean water access needed online presence to attract donors and volunteers but had zero budget for website development.",
      solution: "Provided free professional website as part of our NGO program. Integrated donation platform, volunteer sign-up forms, project galleries, and compelling storytelling.",
      results: [
        "$50,000 in online donations in first quarter",
        "150+ new volunteer sign-ups",
        "Featured in local news increasing awareness",
        "Secured 3 major corporate partnerships",
      ],
      testimonial: "We never imagined we could afford a professional website. Lovable Digital gave us one for free and it helped us raise $50K in just 3 months!",
      client: "Sarah Mitchell, Director",
      metrics: [
        { value: "$50K", label: "Donations" },
        { value: "150+", label: "Volunteers" },
        { value: "3", label: "Partnerships" },
      ],
    },
    {
      title: "Green Lawn Masters",
      industry: "Landscaping",
      location: "Phoenix, AZ",
      image: null,
      challenge: "Seasonal business struggling with inconsistent lead flow. No way to showcase portfolio of work. Losing jobs to competitors with better online presence.",
      solution: "Built portfolio-focused website with extensive photo galleries, seasonal service pages, online quote requests, and year-round SEO maintenance.",
      results: [
        "Booked solid 3 months in advance (first time ever)",
        "70% of new clients found them through website",
        "Average project value increased 25%",
        "Successfully expanded to commercial clients",
      ],
      testimonial: "Finally have a website that shows off our work properly. We're booking jobs months in advance now. Game changer for our business!",
      client: "Carlos Rodriguez, Owner",
      metrics: [
        { value: "3mo", label: "Booked Out" },
        { value: "70%", label: "Web Leads" },
        { value: "25%", label: "Higher Value" },
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
            Real Results for Real Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped local service businesses grow with better websites and SEO
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span>•</span>
                    <span>{study.location}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{study.title}</h2>
                </div>

                {/* Image */}
                {study.image ? (
                  <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={study.image}
                      alt={`${study.title} website`}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-64 flex items-center justify-center">
                    <Star className="h-20 w-20 text-primary opacity-30" />
                  </div>
                )}

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric, i) => (
                    <Card key={i} className="p-4 text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </Card>
                  ))}
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <Card className="p-6 bg-slate-50">
                  <h3 className="font-semibold text-lg mb-4">Results</h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="bg-primary rounded-full p-1 mt-0.5">
                          <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 12 12">
                            <path
                              fill="currentColor"
                              d="M10.3 3.3L5 8.6 2.7 6.3l-.7.7L5 10l6-6z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="border-t pt-4">
                    <p className="text-muted-foreground italic mb-2">{study.testimonial}</p>
                    <p className="font-semibold">{study.client}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's create a success story for your business too
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Book Free Call
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
