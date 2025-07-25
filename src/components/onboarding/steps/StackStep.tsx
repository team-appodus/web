"use client"

import { motion } from 'framer-motion';
import { Button } from '@3rdparty/ui/button';
import { Label } from '@3rdparty/ui/label';
import { Input } from '@3rdparty/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@3rdparty/ui/card';
import { Checkbox } from '@3rdparty/ui/checkbox';
import { Switch } from '@3rdparty/ui/switch';
import { RadioGroup, RadioGroupItem } from '@3rdparty/ui/radio-group';
import { useOnboardingStore } from '@stores/onboardingStore';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';

const paymentOptions = [
  { id: 'paystack', label: 'Paystack' },
  { id: 'flutterwave', label: 'Flutterwave' },
  { id: 'stripe', label: 'Stripe' },
  { id: 'not-sure-payments', label: 'Not Sure Yet' },
];

const messagingOptions = [
  { id: 'email', label: 'Email' },
  { id: 'sms', label: 'SMS' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'live-chat', label: 'Live Chat (Intercom, Crisp)' },
  { id: 'not-sure-messaging', label: 'Not Sure Yet' },
];

const aiModelOptions = [
  { id: 'openai', label: 'OpenAI' },
  { id: 'deepseek', label: 'DeepSeek' },
  { id: 'custom-model', label: 'Custom Model (via API or hosted)' },
  { id: 'not-sure-ai', label: 'Not Sure Yet' },
];

const socialLoginOptions = [
  { id: 'google', label: 'Google' },
  { id: 'apple', label: 'Apple' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'not-sure-social', label: 'Not Sure Yet' },
];

const fileStorageOptions = [
  { id: 'aws-s3', label: 'AWS S3' },
  { id: 'firebase', label: 'Firebase Storage' },
  { id: 'cloudinary', label: 'Cloudinary' },
  { id: 'not-sure-storage', label: 'Not Sure Yet' },
];

const supportOptions = [
  { value: 'yes', label: 'Yes — Ongoing Maintenance & Support', description: 'We handle updates, bug fixes, and improvements' },
  { value: 'no', label: 'No — One-Time Build Only', description: 'Just the initial build and handoff' },
  { value: 'not-sure', label: 'Not Sure Yet', description: 'Let\'s discuss options' },
];

export function StackStep() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleMultiSelectChange = (category: keyof Pick<typeof data, 'payments' | 'messaging' | 'aiModels' | 'socialLogin' | 'fileStorage'>, optionId: string, checked: boolean) => {
    const currentOptions = data[category] || [];
    if (checked) {
      updateData({ [category]: [...currentOptions, optionId] });
    } else {
      updateData({ [category]: currentOptions.filter(id => id !== optionId) });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stack Expanded
          </CardTitle>
          <p className="text-muted-foreground">
            Let&lsquo;s configure the integrations and technical stack that will power your product.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Payments */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Payments</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {paymentOptions.map((option) => (
                  <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor={option.id}
                      className={`
                        flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200
                        ${data.payments.includes(option.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <Checkbox
                        id={option.id}
                        checked={data.payments.includes(option.id)}
                        onCheckedChange={(checked) => handleMultiSelectChange('payments', option.id, checked as boolean)}
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </Label>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-center space-x-3 mt-3">
                <Label htmlFor="escrow" className="text-sm font-medium">Escrow Support</Label>
                <Switch
                  id="escrow"
                  checked={data.escrow}
                  onCheckedChange={(checked) => updateData({ escrow: checked })}
                />
              </div>
            </div>

            {/* Messaging */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Messaging</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {messagingOptions.map((option) => (
                  <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor={option.id}
                      className={`
                        flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200
                        ${data.messaging.includes(option.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <Checkbox
                        id={option.id}
                        checked={data.messaging.includes(option.id)}
                        onCheckedChange={(checked) => handleMultiSelectChange('messaging', option.id, checked as boolean)}
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </Label>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Models */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">AI Models</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {aiModelOptions.map((option) => (
                  <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor={option.id}
                      className={`
                        flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200
                        ${data.aiModels.includes(option.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <Checkbox
                        id={option.id}
                        checked={data.aiModels.includes(option.id)}
                        onCheckedChange={(checked) => handleMultiSelectChange('aiModels', option.id, checked as boolean)}
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </Label>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Social Login</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {socialLoginOptions.map((option) => (
                  <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor={option.id}
                      className={`
                        flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200
                        ${data.socialLogin.includes(option.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <Checkbox
                        id={option.id}
                        checked={data.socialLogin.includes(option.id)}
                        onCheckedChange={(checked) => handleMultiSelectChange('socialLogin', option.id, checked as boolean)}
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </Label>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="socialLoginOther" className="text-sm font-medium">Others (specify)</Label>
                <Input
                  id="socialLoginOther"
                  placeholder="Facebook, Twitter, etc."
                  value={data.socialLoginOther}
                  onChange={(e) => updateData({ socialLoginOther: e.target.value })}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* File Storage */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">File Storage</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {fileStorageOptions.map((option) => (
                  <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor={option.id}
                      className={`
                        flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200
                        ${data.fileStorage.includes(option.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <Checkbox
                        id={option.id}
                        checked={data.fileStorage.includes(option.id)}
                        onCheckedChange={(checked) => handleMultiSelectChange('fileStorage', option.id, checked as boolean)}
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </Label>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fileStorageOther" className="text-sm font-medium">Others (specify)</Label>
                <Input
                  id="fileStorageOther"
                  placeholder="DigitalOcean Spaces, etc."
                  value={data.fileStorageOther}
                  onChange={(e) => updateData({ fileStorageOther: e.target.value })}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </div>

            {/* CRM / Marketing Tools */}
            <div className="space-y-2">
              <Label htmlFor="crmTools" className="text-lg font-semibold">CRM / Marketing Tools</Label>
              <Input
                id="crmTools"
                placeholder="HubSpot, Salesforce, Mailchimp, etc."
                value={data.crmTools}
                onChange={(e) => updateData({ crmTools: e.target.value })}
                className="transition-all duration-200 focus:scale-[1.02]"
              />
            </div>

            {/* Other APIs */}
            <div className="space-y-2">
              <Label htmlFor="otherApis" className="text-lg font-semibold">Other Third-party APIs</Label>
              <Input
                id="otherApis"
                placeholder="Maps, Analytics, Social media APIs, etc."
                value={data.otherApis}
                onChange={(e) => updateData({ otherApis: e.target.value })}
                className="transition-all duration-200 focus:scale-[1.02]"
              />
            </div>

            {/* Post-Production Support */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Post-Production Support</Label>
              <RadioGroup
                value={data.postProductionSupport}
                onValueChange={(value) => updateData({ postProductionSupport: value })}
                className="space-y-3"
              >
                {supportOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Label
                      htmlFor={option.value}
                      className={`
                        flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${data.postProductionSupport === option.value 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <div className="flex-1">
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.description}</div>
                      </div>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={prevStep}
                className="cursor-pointer group"
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back
              </Button>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                >
                  Review & Submit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
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
          🔌 <span className="ml-2">Don&lsquo;t worry if you&lsquo;re not sure about integrations — we can help you decide</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
