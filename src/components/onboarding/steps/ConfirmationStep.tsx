"use client"

import { motion } from 'framer-motion';
import { Button } from '@3rdparty/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@3rdparty/ui/card';
import { Badge } from '@3rdparty/ui/badge';
import { useOnboardingStore } from '@stores/onboardingStore';
import { ArrowLeft, Rocket, CheckCircle, Calendar, Mail, Phone } from 'lucide-react';
import { useToast } from '@hooks/use-toast';
import { ProjectService } from '@components/project/service';
import { httpClient } from 'containers';
import { CreateProjectDto } from '@components/project/models';

export function ConfirmationStep() {
  const { data, prevStep, resetData } = useOnboardingStore();
  const { toast } = useToast();
    const projectService = new ProjectService(httpClient)

  const handleSubmit = async() => {
    // Here you would typically send the data to your backend
    console.log('Onboarding data:', data);
    
    const projectDto = data as CreateProjectDto;
    await projectService.createProject(projectDto)
    resetData()
    
    toast({
      title: "🚀 You're ready to build!",
      description: "We'll review your requirements and get back to you within 24 hours.",
    });

    // Reset the form or redirect
    resetData();
    // You could redirect to a thank you page or back to home
    window.location.href = '/';
  };

  const handleBookCall = () => {
    // This would open Calendly or similar booking system
    toast({
      title: "Booking system opening...",
      description: "We'll connect you with our scheduling system",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="text-center mb-8"
      >
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
          <Rocket className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          You&lsquo;re Ready to Build! 🚀
        </h1>
        <p className="text-lg text-muted-foreground">
          Thanks for completing your build profile. Here&lsquo;s what we captured:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Contact & Timeline */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Contact & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{data.fullname}</span>
              <span className="text-muted-foreground">({data.email})</span>
            </div>
            {data.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{data.phone}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Company:</span>
              <span>{data.company_name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>{data.timeline}</span>
            </div>
            <div className="pt-2">
              <Badge variant="secondary">{data.budget_range}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Project Mission */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Project Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="font-medium text-sm">What you&lsquo;re building:</span>
              <p className="text-sm text-muted-foreground mt-1">{data.what_building}</p>
            </div>
            {data.what_not_building && (
              <div>
                <span className="font-medium text-sm">What you&lsquo;re NOT building:</span>
                <p className="text-sm text-muted-foreground mt-1">{data.what_not_building}</p>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm pt-2">
              <span className="font-medium">Target Market:</span>
              <Badge variant="outline">{data.customer_location}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Build Specifications */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Build Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge>{data.build_type}</Badge>
              <Badge>{data.platform}</Badge>
            </div>
            <div>
              <span className="font-medium text-sm">Product Types:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {data.product_types?.map((type) => (
                  <Badge key={type} variant="outline" className="text-xs">
                    {type.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Tech Stack & Integrations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {(data.messaging_apis??[]).length > 0 && (
              <div>
                <span className="font-medium text-sm">Payments:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {data.payments?.map((payment) => (
                    <Badge key={payment} variant="outline" className="text-xs">
                      {payment}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {(data.messaging_apis??[]).length > 0 && (
              <div>
                <span className="font-medium text-sm">Messaging:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {data.messaging_apis?.map((msg) => (
                    <Badge key={msg} variant="outline" className="text-xs">
                      {msg}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {data.post_production_support && (
              <div>
                <span className="font-medium text-sm">Support:</span>
                <Badge variant="outline" className="ml-2 text-xs">
                  {data.post_production_support}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">What happens next?</h3>
            <p className="text-muted-foreground">
              We&lsquo;ll review your requirements and create a custom proposal with timeline, tech stack recommendations, and pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleSubmit}
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
              >
                Submit & Review
                <Rocket className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleBookCall}
                variant="outline"
                size="lg"
                className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book Kickoff Call
              </Button>
            </motion.div>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={prevStep}
              className="cursor-pointer group text-muted-foreground"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to make changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Final encouragement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary">
          ✨ <span className="ml-2 font-medium">Get ready to turn your idea into reality</span>
        </div>
      </motion.div>
    </motion.div>
  );
}