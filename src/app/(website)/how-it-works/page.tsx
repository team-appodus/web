import { Button } from "@3rdparty/ui/button";
import { Card, CardContent } from "@3rdparty/ui/card";
import { ROUTES } from "@lib/routes";
import { 
  MessageSquare, 
  FileText, 
  Code, 
  TestTube,
  Rocket, 
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Zap
} from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  const process = [
    {
      phase: "Discovery & Planning",
      icon: MessageSquare,
      duration: "1-2 weeks",
      steps: [
        "Initial consultation and requirement gathering",
        "Technical architecture planning",
        "UI/UX wireframe creation",
        "Project timeline and milestone definition",
        "Technology stack selection"
      ],
      deliverables: ["Technical specification", "Project roadmap", "Design wireframes"]
    },
    {
      phase: "Design & Prototyping",
      icon: FileText,
      duration: "1-2 weeks",
      steps: [
        "User interface design creation",
        "Interactive prototype development",
        "User experience optimization",
        "Design system establishment",
        "Client review and iteration"
      ],
      deliverables: ["High-fidelity designs", "Interactive prototype", "Design system"]
    },
    {
      phase: "Development",
      icon: Code,
      duration: "4-8 weeks",
      steps: [
        "Frontend development with React/Next.js",
        "Backend API development",
        "Database design and implementation",
        "Third-party integrations",
        "Weekly demo sessions"
      ],
      deliverables: ["Working application", "Code repository", "Technical documentation"]
    },
    {
      phase: "Testing & QA",
      icon: TestTube,
      duration: "1-2 weeks",
      steps: [
        "Comprehensive testing across devices",
        "Performance optimization",
        "Security audit and implementation",
        "User acceptance testing",
        "Bug fixes and refinements"
      ],
      deliverables: ["Test reports", "Performance metrics", "Security assessment"]
    },
    {
      phase: "Launch",
      icon: Rocket,
      duration: "1 week",
      steps: [
        "Production environment setup",
        "Deployment and monitoring configuration",
        "DNS and domain configuration",
        "Go-live support and monitoring",
        "Team training and handover"
      ],
      deliverables: ["Live application", "Deployment documentation", "Training materials"]
    },
    {
      phase: "Scale & Support",
      icon: TrendingUp,
      duration: "Ongoing",
      steps: [
        "Performance monitoring and optimization",
        "Feature enhancements and updates",
        "User feedback implementation",
        "Infrastructure scaling",
        "Ongoing technical support"
      ],
      deliverables: ["Performance reports", "Feature updates", "Support documentation"]
    }
  ];

  const tools = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "AWS/Vercel",
    "Figma",
    "Git & GitHub"
  ];

  const timeline = [
    { milestone: "Project Kickoff", week: "Week 1" },
    { milestone: "Design Approval", week: "Week 2-3" },
    { milestone: "MVP Development", week: "Week 4-7" },
    { milestone: "Testing & Refinement", week: "Week 8-9" },
    { milestone: "Production Launch", week: "Week 10" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">How We Work</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our proven process takes you from idea to launch in 8-12 weeks. 
            Transparent, efficient, and designed for startup speed.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>8-12 week delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Weekly demos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Fixed-price projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six phases designed to minimize risk and maximize speed to market
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="card-soft-shadow border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <phase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{phase.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {phase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent-strong mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <span 
                          key={delIndex}
                          className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Typical Project Timeline</h2>
            <p className="text-xl text-muted-foreground">
              From kick-off to launch, here&lsquo;s what you can expect
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-sm font-medium text-primary">{item.week}</span>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <span className="font-semibold">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-spacing bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Tools & Technologies</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We use modern, proven technologies to build scalable applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-muted rounded-lg p-4 text-center font-medium hover:bg-accent transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Indicators */}
      <section className="section-spacing bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Built for Speed</h2>
            <p className="text-xl text-muted-foreground">
              How we deliver faster than traditional agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 text-center">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">70%</h3>
                <p className="text-muted-foreground">Faster delivery than traditional agencies</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Weekly</h3>
                <p className="text-muted-foreground">Demo sessions for continuous feedback</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Fixed</h3>
                <p className="text-muted-foreground">Pricing with no surprise costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to get started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let&lsquo;s discuss your project and create a custom roadmap for success.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link href={ROUTES.START_YOUR_BUILD}>
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;