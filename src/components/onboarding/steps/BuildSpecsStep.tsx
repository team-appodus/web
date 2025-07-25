"use client"

import { motion } from 'framer-motion';
import { Button } from '@3rdparty/ui/button';
import { Label } from '@3rdparty/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@3rdparty/ui/card';
import { RadioGroup, RadioGroupItem } from '@3rdparty/ui/radio-group';
import { Checkbox } from '@3rdparty/ui/checkbox';
import { useOnboardingStore } from '@stores/onboardingStore';
import { ArrowRight, ArrowLeft, Settings, Smartphone, Globe, Monitor, HelpCircle } from 'lucide-react';

const buildTypes = [
  { value: 'new', label: 'New Implementation', description: 'Starting from scratch' },
  { value: 'overhaul', label: 'Overhaul of Existing Build', description: 'Rebuilding current solution' },
  { value: 'extension', label: 'Feature Add / Extension', description: 'Adding to existing product' },
];

const platforms = [
  { value: 'web', label: 'Web App', icon: Globe, description: 'Browser-based application' },
  { value: 'mobile', label: 'Mobile App', icon: Smartphone, description: 'iOS/Android native app' },
  { value: 'both', label: 'Both', icon: Monitor, description: 'Web + Mobile experience' },
  { value: 'unsure', label: 'Not Sure Yet', icon: HelpCircle, description: 'Help me decide' },
];

const productTypes = [
  {
    category: 'Core Product Types',
    items: [
      { id: 'saas', label: 'SaaS Platform', popular: true },
      { id: 'marketplace', label: 'Marketplace', popular: true },
      { id: 'internal-tool', label: 'Internal Tool / Admin Dashboard', popular: false },
      { id: 'mobile-app', label: 'Mobile App', popular: true },
      { id: 'pwa', label: 'Progressive Web App', popular: false },
      { id: 'enterprise', label: 'Enterprise Web Solution', popular: false },
    ]
  },
  {
    category: 'Web Presence',
    items: [
      { id: 'company-website', label: 'Company Website', popular: true },
      { id: 'landing-page', label: 'Landing Page', popular: true },
      { id: 'waitlist', label: 'Waitlist Page', popular: false },
      { id: 'product-launch', label: 'Product Launch Page', popular: false },
      { id: 'investor-deck', label: 'Investor/Deck Microsite', popular: false },
      { id: 'careers', label: 'Careers Page', popular: false },
    ]
  },
  {
    category: 'Growth & Sales',
    items: [
      { id: 'customer-portal', label: 'Customer Portal', popular: false },
      { id: 'affiliate', label: 'Affiliate / Referral System', popular: false },
      { id: 'pricing-checkout', label: 'Pricing Page + Checkout Flow', popular: true },
      { id: 'lead-capture', label: 'Lead Capture Forms', popular: true },
      { id: 'newsletter', label: 'Newsletter / Blog', popular: false },
      { id: 'viral-loop', label: 'Waitlist + Viral Loop', popular: false },
    ]
  },
  {
    category: 'Community & Engagement',
    items: [
      { id: 'forum', label: 'Forum / Community Hub', popular: false },
      { id: 'feedback-board', label: 'Feedback/Feature Board', popular: false },
      { id: 'chatbot', label: 'Chatbot Interface', popular: false },
      { id: 'resource-library', label: 'Resource Library / Help Center', popular: false },
    ]
  },
  {
    category: 'Learning & Onboarding',
    items: [
      { id: 'onboarding-flow', label: 'Onboarding Flow', popular: true },
      { id: 'interactive-demo', label: 'Interactive Demo / Sandbox', popular: false },
      { id: 'docs-site', label: 'Docs Site / Knowledge Base', popular: false },
    ]
  },
];

export function BuildSpecsStep() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.buildType && data.platform && data.productTypes.length > 0) {
      nextStep();
    }
  };

  const handleProductTypeChange = (productId: string, checked: boolean) => {
    const currentTypes = data.productTypes || [];
    if (checked) {
      updateData({ productTypes: [...currentTypes, productId] });
    } else {
      updateData({ productTypes: currentTypes.filter(id => id !== productId) });
    }
  };

  const isValid = data.buildType && data.platform && data.productTypes.length > 0;

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
            <Settings className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Core Architecture Loaded
          </CardTitle>
          <p className="text-muted-foreground">
            Let&lsquo;s define the technical foundation and core features of your build.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Build Type */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Type of Build</Label>
              <RadioGroup
                value={data.buildType}
                onValueChange={(value) => updateData({ buildType: value })}
                className="grid grid-cols-1 gap-3"
              >
                {buildTypes.map((type) => (
                  <motion.div
                    key={type.value}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Label
                      htmlFor={type.value}
                      className={`
                        flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${data.buildType === type.value 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <RadioGroupItem value={type.value} id={type.value} />
                      <div className="flex-1">
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </div>

            {/* Platform */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Platform</Label>
              <RadioGroup
                value={data.platform}
                onValueChange={(value) => updateData({ platform: value })}
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
              >
                {platforms.map((platform) => (
                  <motion.div
                    key={platform.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Label
                      htmlFor={platform.value}
                      className={`
                        flex flex-col items-center space-y-2 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 h-full
                        ${data.platform === platform.value 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted hover:border-primary/50'
                        }
                      `}
                    >
                      <RadioGroupItem value={platform.value} id={platform.value} className="sr-only" />
                      <platform.icon className="w-8 h-8 text-primary" />
                      <div className="text-center">
                        <div className="font-medium text-sm">{platform.label}</div>
                        <div className="text-xs text-muted-foreground mt-1">{platform.description}</div>
                      </div>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </div>

            {/* Product Types */}
            <div className="space-y-6">
              <Label className="text-lg font-semibold">Product Type (Select all that apply)</Label>
              <div className="space-y-6">
                {productTypes.map((category) => (
                  <div key={category.category} className="space-y-3">
                    <h4 className="font-medium text-primary">{category.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.items.map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Label
                            htmlFor={item.id}
                            className={`
                              flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-200
                              ${data.productTypes.includes(item.id)
                                ? 'border-primary bg-primary/5'
                                : 'border-muted hover:border-primary/50'
                              }
                            `}
                          >
                            <Checkbox
                              id={item.id}
                              checked={data.productTypes.includes(item.id)}
                              onCheckedChange={(checked) => handleProductTypeChange(item.id, checked as boolean)}
                            />
                            <div className="flex-1">
                              <div className="font-medium text-sm">{item.label}</div>
                              {item.popular && (
                                <span className="text-xs text-accent font-medium">Popular</span>
                              )}
                            </div>
                          </Label>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                  disabled={!isValid}
                  className="cursor-pointer bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                >
                  Continue to Stack
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
          🛠️ <span className="ml-2">Building a SaaS? You might also want pricing + onboarding flow</span>
        </div>
      </motion.div>
    </motion.div>
  );
}