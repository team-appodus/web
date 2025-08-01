import { UpsertProjectStagingDto } from '@components/project/staging/models';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// export interface UpsertProjectStagingDto {
//   // Step 1: Contact
//   fullname: string;
//   email: string;
//   phone: string;
//   company_name: string;
  
//   // Step 2: Budget & Timeline
//   budget_range: string;
//   timeline: string;
  
//   // Step 3: Founder Mode
//   what_building: string;
//   what_not_building: string;
//   build_summary: string;
//   customer_location: string;
  
//   // Step 4: Core Build Specs
//   build_type: string;
//   platform: string;
//   core_product_types: string[];
  
//   // Step 5: Stack & Integrations
//   payments: string[];
//   escrow_support: boolean;
//   messaging_apis: string[];
//   ai_model_apis: string[];
//   social_logins: string[];
//   other_social_logins: string;
//   file_stores: string[];
//   other_file_stores: string;
//   marketing_tools: string;
//   other_third_party_apis: string;
//   post_production_support: -1;
// }

interface OnboardingStore {
  currentStep: number;
  data: UpsertProjectStagingDto;
  setCurrentStep: (step: number) => void;
  updateData: (updates: Partial<UpsertProjectStagingDto>) => void;
  resetData: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

const initialData: UpsertProjectStagingDto = {
  fullname: '',
  email: '',
  phone: '',
  company_name: '',
  budget_range: '',
  timeline: '',
  what_building: '',
  what_not_building: '',
  build_summary: '',
  customer_location: '',
  build_type: '',
  platform: '',
  product_types: [],
  payments: [],
  escrow_support: false,
  messaging_apis: [],
  ai_model_apis: [],
  social_logins: [],
  other_social_logins: '',
  file_stores: [],
  other_file_stores: '',
  crm_tools: '',
  other_third_party_apis: '',
  post_production_support: '',
  staging_id: '',
};

export const useOnboardingStore = create(
  persist<OnboardingStore>(
    (set) => ({
      currentStep: 1,
      data: initialData,
      setCurrentStep: (step) => set({ currentStep: step }),
      updateData: (updates) =>
        set((state) => ({
          data: { ...state.data, ...updates },
        })),
      resetData: () => set({ data: initialData, currentStep: 1 }),
      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 6),
        })),
      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),
    }),
    {
      name: 'project_onboarding-storage', // localStorage key
      // optionally whitelist or blacklist parts of state
      partialize: (state: OnboardingStore) => ({
        currentStep: state.currentStep,
        data: state.data,
      }),
    }
  )
);
