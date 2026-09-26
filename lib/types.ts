export type ServiceType =
  | "starlink"
  | "cctv-gate"
  | "networking"
  | "hardware-support";

export interface SurveyPayload {
  name: string;
  phone: string;
  location: string;
  service: ServiceType | "";
  scope: string;
}

export interface SurveyResponse {
  success: boolean;
  message: string;
}

export const SERVICE_OPTIONS: { value: ServiceType; label: string }[] = [
  { value: "starlink", label: "Starlink Setup" },
  { value: "cctv-gate", label: "CCTV & Gate Automation" },
  { value: "networking", label: "Corporate Networking" },
  { value: "hardware-support", label: "Hardware / Support" },
];
