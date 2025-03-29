export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  photoUrl?: string;
  website?: string;
  linkedin?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
}

export interface Language {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Fluent" | "Native";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
}

export interface CV {
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  summary?: string;
}

export type CVTemplate = "classic" | "modern" | "professional";

export interface SavedCV {
  id: string;
  title: string;
  data: CV;
  template: CVTemplate;
  createdAt: string;
  updatedAt: string;
}
