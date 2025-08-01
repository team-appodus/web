import { Button } from "@3rdparty/ui/button";
import { Card, CardContent } from "@3rdparty/ui/card";
import { 
  Zap, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle,
  Lightbulb
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Speed with Purpose",
      description: "We move fast, but every decision is strategic. Speed without direction is just chaos."
    },
    {
      icon: Users,
      title: "Founder-First Mindset",
      description: "We think like founders because we are founders. We understand the urgency and the vision."
    },
    {
      icon: Lightbulb,
      title: "Product Thinking",
      description: "We don&lsquo;t just write code. We build products that solve real problems for real people."
    },
    {
      icon: Heart,
      title: "Partnership, Not Just Service",
      description: "Your success is our success. We&lsquo;re invested in your journey, not just the project."
    }
  ];

  const team = [
    {
      name: "Kingsley Ezenwere",
      role: "Co-Founder & Technical Lead",
      bio: "Former engineering lead at two Y Combinator startups. Built and scaled products from 0 to millions of users.",
      image: "/assets/team/kingsley-ezenwere-appodus-founder.png",
      expertise: ["Full-Stack Development", "System Architecture", "Team Leadership"]
    },
    {
      name: "Sarah Rodriguez",
      role: "Co-Founder & Product Lead",
      bio: "Product manager turned founder with 8+ years building user-centric applications for high-growth startups.",
      image: "/assets/team/kingsley-ezenwere-appodus-founder.png",
      expertise: ["Product Strategy", "UX Design", "Growth Optimization"]
    },
    {
      name: "Marcus Thompson",
      role: "Senior Developer",
      bio: "Full-stack engineer with expertise in modern web technologies and a passion for clean, scalable code.",
      image: "/assets/team/kingsley-ezenwere-appodus-founder.png",
      expertise: ["React/Next.js", "Node.js", "Cloud Infrastructure"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Founders" },
    { number: "2019", label: "Founded" },
    { number: "95%", label: "Client Retention" }
  ];

  const principles = [
    "Quality code that scales with your business",
    "Transparent communication throughout the process",
    "Fixed pricing with no hidden costs",
    "Weekly demos and continuous feedback",
    "Post-launch support and optimization",
    "Knowledge transfer and team training"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">About appodus</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We&lsquo;re founders who became developers, then became the strategic tech partner 
            we wish we had when we were building our first startups.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Building with startup urgency and product depth. We exist to help founders 
                turn their ideas into reality without the typical agency overhead or 
                corporate slowness.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Having been through the startup journey ourselves, we know that time is 
                your most valuable resource. That&lsquo;s why we&lsquo;ve built a process that 
                delivers working software fast, without sacrificing quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/team/appodus-team-members.png"
                alt="Team collaboration"
                width={1920}
                height={1080}
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from how we write code to how we communicate with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 card-soft-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced founders and developers who&lsquo;ve been in your shoes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 card-soft-shadow text-center">
                <CardContent className="p-8">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-spacing bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              Our principles ensure you get the best product, delivered on time and on budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent-strong mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="section-spacing bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Why We Started appodus</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              After building and exiting two startups, we experienced firsthand the 
              frustration of working with development agencies that didn&lsquo;t understand 
              startup urgency or product thinking.
            </p>
            <p>
              Traditional agencies move too slowly. Freelancers lack the strategic depth. 
              In-house teams are expensive and hard to scale. We created appodus to be 
              the strategic tech partner we wished we had.
            </p>
            <p>
              Today, we help founders build products that users love, investors fund, 
              and teams can scale. Because when you&lsquo;re changing the world, you need 
              technology that keeps up.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-primary-foreground">Ready to work together?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let&lsquo;s build something amazing together. We&lsquo;re excited to hear about your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/work">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;