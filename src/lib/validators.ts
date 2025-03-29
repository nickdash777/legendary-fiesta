import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  photoUrl: z.string().url().optional(),
  website: z.string().url().optional().or(z.string().length(0)),
  linkedin: z.string().url().optional().or(z.string().length(0)),
});

export const educationSchema = z.object({
  id: z.string(),
  institution: z.string().min(1, "Institution is required"),
  degree: z.string().min(1, "Degree is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().optional(),
});

export const workExperienceSchema = z.object({
  id: z.string(),
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().min(1, "Description is required"),
});

export const skillSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Skill name is required"),
  level: z.number().min(1).max(5),
});

export const languageSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Language name is required"),
  level: z.enum(["Beginner", "Intermediate", "Advanced", "Fluent", "Native"]),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Description is required"),
  link: z.string().url().optional().or(z.string().length(0)),
});

export const cvSchema = z.object({
  personalInfo: personalInfoSchema,
  education: z.array(educationSchema),
  workExperience: z.array(workExperienceSchema),
  skills: z.array(skillSchema),
  languages: z.array(languageSchema),
  projects: z.array(projectSchema),
  summary: z.string().optional(),
});

export const savedCvSchema = z.object({
  title: z.string().min(1, "CV title is required"),
  template: z.enum(["classic", "modern", "professional"]),
});
