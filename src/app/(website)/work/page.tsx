import { Button } from "@3rdparty/ui/button";
import { Card, CardContent } from "@3rdparty/ui/card";
import { Badge } from "@3rdparty/ui/badge";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Work = () => {
  const projects = [
    {
      name: "TechFlow Analytics",
      category: "Web App",
      description: "Real-time analytics dashboard for SaaS businesses to track user engagement, conversion funnels, and revenue metrics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Stripe API"],
      results: [
        "40% increase in user engagement",
        "60% faster data processing",
        "25% improvement in conversion tracking"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
      timeline: "8 weeks",
      client: "TechFlow (YC S22)"
    },
    {
      name: "DataPulse Mobile",
      category: "Mobile App",
      description: "Native iOS application for data visualization and business intelligence with offline capabilities and real-time sync.",
      technologies: ["React Native", "Redux", "SQLite", "AWS", "D3.js"],
      results: [
        "50K+ downloads in first month",
        "4.8★ App Store rating",
        "90% user retention rate"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      timeline: "10 weeks",
      client: "DataPulse Inc."
    },
    {
      name: "GrowthLabs Platform",
      category: "Web App",
      description: "Marketing automation platform helping startups create, manage, and optimize their growth campaigns across multiple channels.",
      technologies: ["Next.js", "Prisma", "Vercel", "Sendgrid", "Segment"],
      results: [
        "$2M+ in user revenue generated",
        "300% increase in campaign efficiency",
        "15+ enterprise clients onboarded"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      timeline: "12 weeks",
      client: "GrowthLabs"
    },
    {
      name: "FinTrack Dashboard",
      category: "Internal Tool",
      description: "Financial operations dashboard for tracking expenses, revenue, and financial KPIs with automated reporting features.",
      technologies: ["Vue.js", "Express", "MongoDB", "Plaid API", "QuickBooks API"],
      results: [
        "80% reduction in manual reporting",
        "Real-time financial insights",
        "Automated compliance reporting"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
      timeline: "6 weeks",
      client: "FinTech Startup"
    },
    {
      name: "EcoMarket Landing",
      category: "Landing Page",
      description: "High-converting landing page for sustainable marketplace startup with integrated payment processing and vendor onboarding.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful", "Stripe"],
      results: [
        "35% conversion rate",
        "500+ vendors signed up",
        "Featured in Product Hunt top 5"
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      timeline: "4 weeks",
      client: "EcoMarket"
    },
    {
      name: "TeamSync Mobile",
      category: "Mobile App",
      description: "Team communication and project management app designed for remote teams with video calling and file sharing capabilities.",
      technologies: ["Flutter", "Firebase", "WebRTC", "Cloud Storage", "Push Notifications"],
      results: [
        "20K+ active users",
        "95% uptime reliability",
        "Integration with 15+ tools"
      ],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      timeline: "14 weeks",
      client: "TeamSync Inc."
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      metric: "50+",
      label: "Projects Delivered",
      description: "Successfully launched products for startups"
    },
    {
      icon: Users,
      metric: "30+",
      label: "Happy Clients",
      description: "Founders who trust us with their vision"
    },
    {
      icon: Zap,
      metric: "95%",
      label: "On-Time Delivery",
      description: "Projects delivered on schedule"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Real products, real results. See how we&lsquo;ve helped startups build and scale their ideas into successful businesses.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 text-center card-soft-shadow">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-spacing bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed look at how we&lsquo;ve helped startups overcome challenges and achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 overflow-hidden card-soft-shadow hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.timeline}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent-strong rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Client:</span> {project.client}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="section-spacing bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Why Our Projects Succeed</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Every successful project starts with understanding the problem and thinking like a founder
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">User-Centered Design</h3>
              <p className="text-muted-foreground text-sm">We design for your users, not just features</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Performance First</h3>
              <p className="text-muted-foreground text-sm">Fast, scalable solutions built for growth</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Business Impact</h3>
              <p className="text-muted-foreground text-sm">Every line of code drives business value</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to build something amazing?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let&lsquo;s discuss your project and create something that your users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/how-it-works">See Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;