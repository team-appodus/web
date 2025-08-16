"use client"

import { motion } from 'framer-motion';
import { Button } from '@3rdparty/ui/button';
import { Input } from '@3rdparty/ui/input';
import { Label } from '@3rdparty/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@3rdparty/ui/card';
import { useOnboardingStore } from '@stores/onboardingStore';
import { ArrowRight, Brain } from 'lucide-react';
import { httpClient } from 'containers';
import { ProjectStagingService } from '@components/project/staging/service';
import { SuccessResponse } from 'types/models';
import { QueryProjectStagingDto } from '@components/project/staging/models';

export function ContactStep() {
  const { data, updateData, nextStep } = useOnboardingStore();
  const projectStagingService = new ProjectStagingService(httpClient)

  const isValid = data.fullname && data.email && data.company_name;
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const server_response: SuccessResponse<QueryProjectStagingDto> = await projectStagingService.upsertProjectStaging(data)
      updateData({ staging_id: server_response.data?.id })
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Founder Identity Confirmed
          </CardTitle>
          <p className="text-muted-foreground">
            Let&lsquo;s start with the basics. Tell us who you are and what you&lsquo;re building.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={data.fullname}
                  onChange={(e) => updateData({ fullname: e.target.value })}
                  className="transition-all duration-200 focus:scale-[1.02]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@startup.com"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className="transition-all duration-200 focus:scale-[1.02]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={data.phone}
                onChange={(e) => updateData({ phone: e.target.value })}
                className="transition-all duration-200 focus:scale-[1.02]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium">
                Company / Startup Name *
              </Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Appodus Technologies LLC."
                value={data.company_name}
                onChange={(e) => updateData({ company_name: e.target.value })}
                className="transition-all duration-200 focus:scale-[1.02]"
                required
              />
            </div>

            <motion.div 
              className="flex justify-end pt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                size="lg"
                disabled={!isValid}
                className="cursor-pointer bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
              >
                Continue to Timeline
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>

      {/* Pro tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center"
      >
        <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent-foreground">
          💡 <span className="ml-2">Pro tip: Clarity is power</span>
        </div>
      </motion.div>
    </motion.div>
  );
}