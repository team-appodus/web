"use client"

import { motion } from 'framer-motion';
import { Button } from '@3rdparty/ui/button';
import { Label } from '@3rdparty/ui/label';
import { Textarea } from '@3rdparty/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@3rdparty/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@3rdparty/ui/select';
import { useOnboardingStore } from '@stores/onboardingStore';
import { ArrowRight, ArrowLeft, Rocket } from 'lucide-react';

const countries = [
  { value: 'us', label: '🇺🇸 United States', flag: '🇺🇸' },
  { value: 'ca', label: '🇨🇦 Canada', flag: '🇨🇦' },
  { value: 'uk', label: '🇬🇧 United Kingdom', flag: '🇬🇧' },
  { value: 'de', label: '🇩🇪 Germany', flag: '🇩🇪' },
  { value: 'fr', label: '🇫🇷 France', flag: '🇫🇷' },
  { value: 'ng', label: '🇳🇬 Nigeria', flag: '🇳🇬' },
  { value: 'za', label: '🇿🇦 South Africa', flag: '🇿🇦' },
  { value: 'ke', label: '🇰🇪 Kenya', flag: '🇰🇪' },
  { value: 'gh', label: '🇬🇭 Ghana', flag: '🇬🇭' },
  { value: 'au', label: '🇦🇺 Australia', flag: '🇦🇺' },
  { value: 'sg', label: '🇸🇬 Singapore', flag: '🇸🇬' },
  { value: 'jp', label: '🇯🇵 Japan', flag: '🇯🇵' },
  { value: 'in', label: '🇮🇳 India', flag: '🇮🇳' },
  { value: 'br', label: '🇧🇷 Brazil', flag: '🇧🇷' },
  { value: 'mx', label: '🇲🇽 Mexico', flag: '🇲🇽' },
  { value: 'other', label: '🌍 Other', flag: '🌍' },
];

export function MissionStep() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.whatBuilding && data.customerLocation) {
      nextStep();
    }
  };

  const isValid = data.whatBuilding && data.customerLocation;

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
            <Rocket className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mission Defined
          </CardTitle>
          <p className="text-muted-foreground">
            Help us understand your vision and target market. The clearer the mission, the better we can build.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="whatBuilding" className="text-lg font-semibold">
                What you&lsquo;re building *
              </Label>
              <Textarea
                id="whatBuilding"
                placeholder="e.g., We&lsquo;re building a marketplace for local chefs to connect with foodies. Think Airbnb but for home-cooked meals..."
                value={data.whatBuilding}
                onChange={(e) => updateData({ whatBuilding: e.target.value })}
                className="min-h-[120px] resize-none transition-all duration-200 focus:scale-[1.02]"
                required
              />
              <p className="text-xs text-muted-foreground">
                Be specific about your core idea, target users, and main value proposition.
              </p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="whatNotBuilding" className="text-lg font-semibold">
                What you&lsquo;re NOT building (optional but helpful)
              </Label>
              <Textarea
                id="whatNotBuilding"
                placeholder="e.g., We don&lsquo;t need payments or delivery built-in right now. We&lsquo;re focusing on discovery and booking first..."
                value={data.whatNotBuilding}
                onChange={(e) => updateData({ whatNotBuilding: e.target.value })}
                className="min-h-[100px] resize-none transition-all duration-200 focus:scale-[1.02]"
              />
              <p className="text-xs text-muted-foreground">
                This helps us focus on what matters most for your MVP.
              </p>
            </div>

            <div className="space-y-3">
              <Label className="text-lg font-semibold">Customer Primary Location *</Label>
              <Select value={data.customerLocation} onValueChange={(value) => updateData({ customerLocation: value })}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Select primary customer location" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                This helps us consider timezone, regulations, and local preferences.
              </p>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={prevStep}
                className="cursor-pointer  group"
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
                  Continue to Build Specs
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
          💡 <span className="ml-2">Great founders define what they DON&lsquo;T want as clearly as what they do</span>
        </div>
      </motion.div>
    </motion.div>
  );
}