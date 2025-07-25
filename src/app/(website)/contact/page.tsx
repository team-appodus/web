'use client'

import { useState } from "react";
import { Button } from "@3rdparty/ui/button";
import { Input } from "@3rdparty/ui/input";
import { Textarea } from "@3rdparty/ui/textarea";
import { Card, CardContent } from "@3rdparty/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@3rdparty/ui/select";
import { useToast } from "@hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Zap,
  CheckCircle
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@components/3rdparty/ui/accordion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We&lsquo;ll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      project: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@appodus.com",
      description: "Send us your project details"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Call us for urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA",
      description: "Remote-first with global reach"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const process = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We discuss your project, goals, and timeline"
    },
    {
      icon: Zap,
      title: "Proposal & Planning",
      description: "Detailed proposal with timeline and fixed pricing"
    },
    {
      icon: CheckCircle,
      title: "Project Kickoff",
      description: "Start building your product with weekly updates"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Tell us about your project</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to build something amazing? Let&lsquo;s discuss your vision and create a roadmap for success.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 card-soft-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Get a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company / Startup Name
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Type *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("project", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="mobile-app">Mobile App</SelectItem>
                          <SelectItem value="dashboard">Dashboard</SelectItem>
                          <SelectItem value="internal-tool">Internal Tool</SelectItem>
                          <SelectItem value="landing-page">Landing Page</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-25k">Under $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-plus">$100K+</SelectItem>
                            <SelectItem value="not-sure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Timeline
                        </label>
                        <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="2-3-months">2-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Send Project Details
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 card-soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{info.title}</div>
                          <div className="text-muted-foreground">{info.content}</div>
                          <div className="text-sm text-muted-foreground">{info.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 card-soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6">What Happens Next?</h3>
                  <div className="space-y-4">
                    {process.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{step.title}</div>
                          <div className="text-sm text-muted-foreground">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 card-soft-shadow bg-accent">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-strong" />
                      Free initial consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-strong" />
                      Fixed-price projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-strong" />
                      24-hour response time
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-strong" />
                      NDA protection available
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions from founders considering working with us
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:cursor-pointer hover:no-underline">How long does a typical project take?</AccordionTrigger>
              <AccordionContent>
                Most projects take 8-12 weeks from kickoff to launch. We provide detailed timelines during the proposal phase and keep you updated with weekly progress reports.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:cursor-pointer hover:no-underline">Do you work with early-stage startups?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We specialize in helping early-stage startups build their MVP and scale from there. We understand the unique challenges of startups and work with founder-friendly timelines and budgets.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:cursor-pointer hover:no-underline">What&lsquo;s your pricing model?</AccordionTrigger>
              <AccordionContent>
                We offer fixed-price projects based on scope and complexity. No hourly billing or surprise costs. You&lsquo;ll know exactly what you&lsquo;re paying upfront, which helps with budgeting and planning.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:cursor-pointer hover:no-underline">Do you provide ongoing support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer post-launch support and can help you scale your product as your business grows. This includes bug fixes, feature additions, and technical guidance as you evolve your product.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:cursor-pointer hover:no-underline">What technologies do you work with?</AccordionTrigger>
              <AccordionContent>
                We work with modern, scalable technologies including React, Next.js, Node.js, Python, React Native, and various cloud platforms. We choose the best tech stack for your specific needs and growth plans.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="hover:cursor-pointer hover:no-underline">Can you sign an NDA?</AccordionTrigger>
              <AccordionContent>
                Yes, we&lsquo;re happy to sign NDAs and other confidentiality agreements. We understand that your ideas and business information are sensitive and treat them with the utmost care and discretion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;