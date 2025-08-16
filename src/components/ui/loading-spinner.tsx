'use client';

import { motion } from "framer-motion";
import { cn } from "@lib/utils";
import { useEffect, useState, useTransition } from "react";
import { useNavigationEvents } from "@hooks/use-navigation-events";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function LoadingSpinner({ 
  size = "md", 
  className,
  text = "Loading..."
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12", 
    lg: "h-16 w-16"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <motion.div
        aria-label="Loading"
        className={cn(
          "rounded-full border-2 border-primary/20 border-t-primary",
          sizeClasses[size]
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

export function FullPageLoading({ text = "Loading..." }: { text?: string }) {
    const [isPending] = useTransition()
    const [spin, setSpin] = useState(false)

  useNavigationEvents({
    onStart: (to, from) => {
        setSpin(true)
      console.log('Navigation started:', from, '→', to)
    },
    onComplete: (to, from) => {
        setSpin(false)
      console.log('Navigation completed:', from, '→', to)
    },
  })

  console.log("spin: ", spin)

  if(spin){
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <LoadingSpinner size="lg" text={text} />
      </motion.div>
    </div>
  );
}
}
