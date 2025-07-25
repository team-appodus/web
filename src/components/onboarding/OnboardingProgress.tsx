"use client"

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useOnboardingStore } from '@stores/onboardingStore';

const steps = [
  { id: 1, label: 'Contact', emoji: '🧠', description: 'Founder Identity' },
  { id: 2, label: 'Timeline', emoji: '⏳', description: 'Build Window' },
  { id: 3, label: 'Mission', emoji: '🚀', description: 'Mission Brief' },
  { id: 4, label: 'Build Specs', emoji: '🛠️', description: 'Core Architecture' },
  { id: 5, label: 'Stack', emoji: '🔌', description: 'Stack Expanded' },
  { id: 6, label: 'Complete', emoji: '✨', description: 'Ready to Build' },
];

export function OnboardingProgress() {
  const { currentStep } = useOnboardingStore();

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / 6) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>
        <div className="absolute right-0 -top-1 text-sm font-medium text-muted-foreground">
          {currentStep}/6
        </div>
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-6 gap-2 md:gap-4">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: step.id * 0.1 }}
          >
            <div className={`
              relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center mb-2
              transition-all duration-300
              ${step.id < currentStep 
                ? 'bg-primary border-primary text-primary-foreground' 
                : step.id === currentStep
                ? 'bg-accent border-accent text-accent-foreground animate-pulse'
                : 'bg-background border-muted text-muted-foreground'
              }
            `}>
              {step.id < currentStep ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <span className="text-lg">{step.emoji}</span>
              )}
            </div>
            <div className="text-center">
              <div className={`
                text-xs md:text-sm font-medium
                ${step.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'}
              `}>
                {step.label}
              </div>
              <div className="text-xs text-muted-foreground hidden md:block">
                {step.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}