import { create } from 'zustand';

export interface OnboardingData {
  // Step 1: Contact
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  
  // Step 2: Budget & Timeline
  budgetRange: string;
  timeline: string;
  
  // Step 3: Founder Mode
  whatBuilding: string;
  whatNotBuilding: string;
  customerLocation: string;
  
  // Step 4: Core Build Specs
  buildType: string;
  platform: string;
  productTypes: string[];
  
  // Step 5: Stack & Integrations
  payments: string[];
  escrow: boolean;
  messaging: string[];
  aiModels: string[];
  socialLogin: string[];
  socialLoginOther: string;
  fileStorage: string[];
  fileStorageOther: string;
  crmTools: string;
  otherApis: string;
  postProductionSupport: string;
}

interface OnboardingStore {
  currentStep: number;
  data: OnboardingData;
  setCurrentStep: (step: number) => void;
  updateData: (updates: Partial<OnboardingData>) => void;
  resetData: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

const initialData: OnboardingData = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  budgetRange: '',
  timeline: '',
  whatBuilding: '',
  whatNotBuilding: '',
  customerLocation: '',
  buildType: '',
  platform: '',
  productTypes: [],
  payments: [],
  escrow: false,
  messaging: [],
  aiModels: [],
  socialLogin: [],
  socialLoginOther: '',
  fileStorage: [],
  fileStorageOther: '',
  crmTools: '',
  otherApis: '',
  postProductionSupport: '',
};

export const useOnboardingStore = create<OnboardingStore>((
  set, 
  // get
) => ({
  currentStep: 1,
  data: initialData,
  setCurrentStep: (step) => set({ currentStep: step }),
  updateData: (updates) => set(state => ({ 
    data: { ...state.data, ...updates } 
  })),
  resetData: () => set({ data: initialData, currentStep: 1 }),
  nextStep: () => set(state => ({ 
    currentStep: Math.min(state.currentStep + 1, 6) 
  })),
  prevStep: () => set(state => ({ 
    currentStep: Math.max(state.currentStep - 1, 1) 
  })),
}));
