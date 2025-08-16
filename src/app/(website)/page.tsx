import { Button } from "@3rdparty/ui/button";
import { Card, CardContent } from "@3rdparty/ui/card";
import { 
  Smartphone, 
  Monitor, 
  BarChart3, 
  Settings, 
  Layout,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Rocket,
  TrendingUp,
  Star,
  Shield,
  Layers
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@lib/routes";

const Home = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Apps",
      description: "Modern, responsive web applications built with the latest technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Data-driven dashboards and analytics tools that provide actionable insights."
    },
    {
      icon: Settings,
      title: "Internal Tools",
      description: "Custom internal tools and admin panels to streamline your business operations."
    },
    {
      icon: Layout,
      title: "Landing Pages",
      description: "High-converting landing pages designed to turn visitors into customers."
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Founder-Minded",
      description: "We think like founders. Every decision is made with your business goals and growth trajectory in mind."
    },
    {
      icon: Zap,
      title: "Speed with Strategy",
      description: "Fast execution without cutting corners. We move quickly while maintaining quality and strategic thinking."
    },
    {
      icon: Layers,
      title: "Full-Cycle Execution",
      description: "From initial concept to post-launch support. We handle every aspect of your product development."
    },
    {
      icon: Lightbulb,
      title: "Product Thinking",
      description: "Beyond just coding. We contribute product insights and strategic recommendations throughout the process."
    },
    {
      icon: Shield,
      title: "Reliable Tech Partner",
      description: "Consistent communication, on-time delivery, and long-term partnership. Your success is our success."
    },
    {
      icon: CheckCircle,
      title: "Full Access",
      description: "You have full access to all project assets and resources (Figma, GitHub, etc.) from day-1."
    }
  ];

  const process = [
    {
      icon: Lightbulb,
      title: "Idea",
      description: "We understand your vision and validate the technical approach"
    },
    {
      icon: Settings,
      title: "Build",
      description: "Rapid development with weekly demos and continuous feedback"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploy to production with monitoring and support"
    },
    {
      icon: TrendingUp,
      title: "Scale",
      description: "Optimize and expand as your user base grows"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Founder at TechFlow",
      photo: "/assets/testimonies/marcus-rodriguez.png",
      quote: "appodus didn&lsquo;t just build our product, they became true strategic partners. Their founder-minded approach helped us make critical decisions that accelerated our growth by 300%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "CEO at DataPulse",
      photo: "/assets/testimonies/marcus-rodriguez.png",
      quote: "The speed and quality exceeded our expectations. They delivered our MVP in 6 weeks and we&lsquo;ve been iterating together ever since. Couldn&lsquo;t ask for a better tech partner.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      title: "Founder at GrowthLabs",
      photo: "/assets/testimonies/emily-thompson.png",
      quote: "What sets appodus apart is their product thinking. They don&lsquo;t just code, they contribute insights that make our product better. It&lsquo;s like having a co-founder who codes.",
      rating: 5
    }
  ];

  const featuredWork = [
    {
      name: "TechFlow Dashboard",
      description: "Real-time analytics platform for SaaS businesses",
      result: "40% increase in user engagement",
      image: "/assets/featured-work/techflow-dashboard.png"
    },
    {
      name: "DataPulse Mobile",
      description: "Native iOS app for data visualization",
      result: "50K+ downloads in first month",
      image: "/assets/featured-work/datapulse-mobile.png"
    },
    {
      name: "GrowthLabs Platform",
      description: "Marketing automation web application",
      result: "$2M+ in user revenue generated",
      image: "/assets/featured-work/growthlabs-platform.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-spacing relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="mb-6">
                Build Fast. <span className="text-primary">Scale Smart.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We help founders turn ideas into fast-moving products. From MVP to scale, 
                we&lsquo;re your strategic tech partner for building what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link href={ROUTES.START_YOUR_BUILD}>
                    Start Your Build
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href={ROUTES.HOW_IT_WORKS}>See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={"/assets/appodus-hero-bg.jpg"} 
                alt="Our workstation"
                width={1920}
                height={1080}
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">What We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-stack solutions tailored for startups who need to move fast and scale smart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-soft-shadow border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-accent-strong" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why appodus Section */}
      <section className="section-spacing bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Why appodus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&lsquo;re not just developers. We&lsquo;re founders who&lsquo;ve built and scaled products ourselves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real products, real results. See how we&lsquo;ve helped startups succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <Card key={index} className="card-soft-shadow border-0 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="text-accent-strong font-semibold">{project.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href={ROUTES.FEATURED_WORK}>
                View More Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From idea to launch in weeks, not months. Our proven process delivers results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <step.icon className="h-10 w-10 text-accent-strong" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 transform translate-x-8 w-16 h-0.5 bg-accent-strong/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">What Founders Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&lsquo;t just take our word for it. Here&lsquo;s what our clients say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-soft-shadow border-0">
                <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                  <div className="flex items-center mb-6">
                    <Image 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                  &lsquo;{testimonial.quote}&lsquo;
                </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to build your product?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join the founders who chose speed and quality. Let&lsquo;s turn your idea into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link href="https://calendly.com/appodus/30min" target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href={ROUTES.START_YOUR_BUILD}>Start Your Build</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;