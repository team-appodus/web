"use client"

import { motion } from 'framer-motion';
import { Button } from '@3rdparty/ui/button';
import { Label } from '@3rdparty/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@3rdparty/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@3rdparty/ui/select';
import { RadioGroup, RadioGroupItem } from '@3rdparty/ui/radio-group';
import { useOnboardingStore } from '@stores/onboardingStore';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';

const budgetOptions = [
  { value: '5k-10k', label: '$5k - $10k', popular: false },
  { value: '10k-20k', label: '$10k - $20k', popular: true },
  { value: '20k-50k', label: '$20k - $50k', popular: true },
  { value: '50k-100k', label: '$50k - $100k', popular: false },
  { value: '100k+', label: '$100k+', popular: false },
  { value: 'custom', label: 'Custom Budget', popular: false },
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP', description: 'Rush delivery' },
  { value: '1-month', label: 'Within 1 month', description: 'Fast track' },
  { value: '2-3-months', label: '2-3 months', description: 'Standard timeline' },
  { value: '3-6-months', label: '3-6 months', description: 'Extended build' },
  { value: 'flexible', label: 'Flexible', description: 'No rush' },
];

export function TimelineStep() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.budgetRange && data.timeline) {
      nextStep();
    }
  };

  const isValid = data.budgetRange && data.timeline;

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
            <Clock className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Build Window Set
          </CardTitle>
          <p className="text-muted-foreground">
            Help us understand your budget and timeline so we can craft the perfect approach.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Budget Range</Label>
              <Select value={data.budgetRange} onValueChange={(value) => updateData({ budgetRange: value })}>
                <SelectTrigger className="w-full h-12 text-left">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center justify-between w-full">
                        <span>{option.label}</span>
                        {option.popular && (
                          <span className="ml-2 px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Timeline</Label>
              <RadioGroup
                value={data.timeline}
                onValueChange={(value) => updateData({ timeline: value })}
                className="grid grid-cols-1 gap-3"
              >
                {timelineOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Label
                      htmlFor={option.value}
                      className={`
                        flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${data.timeline === option.value 
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
                  disabled={!isValid}
                  className="cursor-pointer bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                >
                  Continue to Mission
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
          🚀 <span className="ml-2">Most founders choose 2-3 months for the perfect balance</span>
        </div>
      </motion.div>
    </motion.div>
  );
}