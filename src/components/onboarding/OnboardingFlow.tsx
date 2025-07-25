"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useOnboardingStore } from '@stores/onboardingStore';
import { OnboardingProgress } from './OnboardingProgress';
import { ContactStep } from './steps/ContactStep';
import { TimelineStep } from './steps/TimelineStep';
import { MissionStep } from './steps/MissionStep';
import { BuildSpecsStep } from './steps/BuildSpecsStep';
import { StackStep } from './steps/StackStep';
import { ConfirmationStep } from './steps/ConfirmationStep';

const steps = {
  1: ContactStep,
  2: TimelineStep,
  3: MissionStep,
  4: BuildSpecsStep,
  5: StackStep,
  6: ConfirmationStep,
};

export function OnboardingFlow() {
  const { currentStep } = useOnboardingStore();
  const CurrentStepComponent = steps[currentStep as keyof typeof steps];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Build Mode <span className="text-primary">Activated</span>
          </h1>
          <p className="text-muted-foreground">
            Let&lsquo;s gather the details we need to build your perfect product
          </p>
        </motion.div>

        {/* Progress */}
        <OnboardingProgress />

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentStepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}