import { BaseQueryDto } from "types/models";

export interface ProjectStagingBaseDto {
  fullname: string;
  email: string;
  phone: string;
  company_name: string;

  budget_range?: string;
  timeline?: string;

  what_building?: string;
  what_not_building?: string;
  build_summary?: string;
  customer_location?: string;

  build_type?: string;
  platform?: string;
  product_types?: string[];

  payments?: string[];
  escrow_support?: boolean;
  messaging_apis?: string[];
  ai_model_apis?: string[];
  social_logins?: string[];
  other_social_logins?: string;
  file_stores?: string[];
  other_file_stores?: string;
  crm_tools?: string;
  other_third_party_apis?: string;
  post_production_support?: string;
}

export interface UpsertProjectStagingDto extends ProjectStagingBaseDto{
    staging_id?: string;
}

export interface QueryProjectStagingDto extends BaseQueryDto, UpsertProjectStagingDto {}