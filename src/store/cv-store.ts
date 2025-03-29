import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import {
  CV,
  Education,
  WorkExperience,
  Skill,
  Language,
  Project,
  CVTemplate,
  PersonalInfo,
} from "@/types/cv";
import { supabase } from "@/lib/supabase";
import { Json } from "@/types/database";

interface CVState {
  cv: CV;
  template: CVTemplate;
  title: string;

  // Actions
  setPersonalInfo: (personalInfo: PersonalInfo) => void;

  // Education
  addEducation: () => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;

  // Work Experience
  addWorkExperience: () => void;
  updateWorkExperience: (
    id: string,
    experience: Partial<WorkExperience>
  ) => void;
  removeWorkExperience: (id: string) => void;

  // Skills
  addSkill: () => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;

  // Languages
  addLanguage: () => void;
  updateLanguage: (id: string, language: Partial<Language>) => void;
  removeLanguage: (id: string) => void;

  // Projects
  addProject: () => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;

  // Summary
  setSummary: (summary: string) => void;

  // Template
  setTemplate: (template: CVTemplate) => void;

  // CV Title
  setTitle: (title: string) => void;

  // Save/Load
  saveCV: () => Promise<string | null>;
  loadCV: (id: string) => Promise<void>;
  resetCV: () => void;
}

const defaultCV: CV = {
  personalInfo: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
  },
  education: [],
  workExperience: [],
  skills: [],
  languages: [],
  projects: [],
  summary: "",
};

export const useCVStore = create<CVState>()(
  persist(
    (set, get) => ({
      cv: { ...defaultCV },
      template: "modern",
      title: "My CV",

      setPersonalInfo: (personalInfo) =>
        set((state) => ({ cv: { ...state.cv, personalInfo } })),

      // Education
      addEducation: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            education: [
              ...state.cv.education,
              {
                id: uuidv4(),
                institution: "",
                degree: "",
                startDate: "",
                endDate: "",
                description: "",
              },
            ],
          },
        })),

      updateEducation: (id, education) =>
        set((state) => ({
          cv: {
            ...state.cv,
            education: state.cv.education.map((edu) =>
              edu.id === id ? { ...edu, ...education } : edu
            ),
          },
        })),

      removeEducation: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            education: state.cv.education.filter((edu) => edu.id !== id),
          },
        })),

      // Work Experience
      addWorkExperience: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            workExperience: [
              ...state.cv.workExperience,
              {
                id: uuidv4(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                description: "",
              },
            ],
          },
        })),

      updateWorkExperience: (id, experience) =>
        set((state) => ({
          cv: {
            ...state.cv,
            workExperience: state.cv.workExperience.map((exp) =>
              exp.id === id ? { ...exp, ...experience } : exp
            ),
          },
        })),

      removeWorkExperience: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            workExperience: state.cv.workExperience.filter(
              (exp) => exp.id !== id
            ),
          },
        })),

      // Skills
      addSkill: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            skills: [
              ...state.cv.skills,
              {
                id: uuidv4(),
                name: "",
                level: 3,
              },
            ],
          },
        })),

      updateSkill: (id, skill) =>
        set((state) => ({
          cv: {
            ...state.cv,
            skills: state.cv.skills.map((s) =>
              s.id === id ? { ...s, ...skill } : s
            ),
          },
        })),

      removeSkill: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            skills: state.cv.skills.filter((s) => s.id !== id),
          },
        })),

      // Languages
      addLanguage: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            languages: [
              ...state.cv.languages,
              {
                id: uuidv4(),
                name: "",
                level: "Intermediate",
              },
            ],
          },
        })),

      updateLanguage: (id, language) =>
        set((state) => ({
          cv: {
            ...state.cv,
            languages: state.cv.languages.map((lang) =>
              lang.id === id ? { ...lang, ...language } : lang
            ),
          },
        })),

      removeLanguage: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            languages: state.cv.languages.filter((lang) => lang.id !== id),
          },
        })),

      // Projects
      addProject: () =>
        set((state) => ({
          cv: {
            ...state.cv,
            projects: [
              ...state.cv.projects,
              {
                id: uuidv4(),
                title: "",
                description: "",
                link: "",
              },
            ],
          },
        })),

      updateProject: (id, project) =>
        set((state) => ({
          cv: {
            ...state.cv,
            projects: state.cv.projects.map((p) =>
              p.id === id ? { ...p, ...project } : p
            ),
          },
        })),

      removeProject: (id) =>
        set((state) => ({
          cv: {
            ...state.cv,
            projects: state.cv.projects.filter((p) => p.id !== id),
          },
        })),

      // Summary
      setSummary: (summary) =>
        set((state) => ({
          cv: { ...state.cv, summary },
        })),

      // Template
      setTemplate: (template) => set({ template }),

      // CV Title
      setTitle: (title) => set({ title }),

      // Save/Load
      saveCV: async () => {
        const user = (await supabase.auth.getUser()).data.user;
        if (!user) return null;

        const { cv, template, title } = get();

        // Convert CV to a JSON-compatible format
        const cvData = JSON.parse(JSON.stringify(cv)) as Json;

        const { data, error } = await supabase
          .from("cvs")
          .insert({
            user_id: user.id,
            title,
            data: cvData,
            template,
          })
          .select("id")
          .single();

        if (error) {
          console.error("Error saving CV:", error);
          return null;
        }

        return data.id;
      },

      loadCV: async (id: string) => {
        const { data, error } = await supabase
          .from("cvs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error loading CV:", error);
          return;
        }

        // Ensure proper type casting
        const cvData = data.data as unknown as CV;

        set({
          cv: cvData,
          template: data.template as CVTemplate,
          title: data.title,
        });
      },

      resetCV: () =>
        set({
          cv: { ...defaultCV },
          template: "modern",
          title: "My CV",
        }),
    }),
    {
      name: "cv-storage",
    }
  )
);
