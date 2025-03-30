"use client";

import { useState, useEffect } from "react";
import { useCVStore } from "@/store/cv-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfoForm } from "./form-sections/personal-info-form";
import { EducationForm } from "./form-sections/education-form";
import { WorkExperienceForm } from "./form-sections/work-experience-form";
import { SkillsForm } from "./form-sections/skills-form";
import { LanguagesForm } from "./form-sections/languages-form";
import { ProjectsForm } from "./form-sections/projects-form";
import { SummaryForm } from "./form-sections/summary-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function CVForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isSaving, setIsSaving] = useState(false);
  const { saveCV, cv } = useCVStore();

  // Force re-render when CV data changes
  useEffect(() => {
    // This useEffect will run whenever cv changes
  }, [cv]);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const cvId = await saveCV();
      if (cvId) {
        toast.success("CV Saved", {
          description: "Your CV has been saved successfully.",
        });
      }
    } catch {
      toast.error("Error", {
        description: `Failed to save your CV. Please try again `,
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-7 w-full">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="pt-4">
          <PersonalInfoForm />
        </TabsContent>

        <TabsContent value="education" className="pt-4">
          <EducationForm key={`education-${cv.education.length}`} />
        </TabsContent>

        <TabsContent value="experience" className="pt-4">
          <WorkExperienceForm key={`experience-${cv.workExperience.length}`} />
        </TabsContent>

        <TabsContent value="skills" className="pt-4">
          <SkillsForm key={`skills-${cv.skills.length}`} />
        </TabsContent>

        <TabsContent value="languages" className="pt-4">
          <LanguagesForm key={`languages-${cv.languages.length}`} />
        </TabsContent>

        <TabsContent value="projects" className="pt-4">
          <ProjectsForm key={`projects-${cv.projects.length}`} />
        </TabsContent>

        <TabsContent value="summary" className="pt-4">
          <SummaryForm />
        </TabsContent>
      </Tabs>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button
          onClick={() => {
            const tabs = [
              "personal",
              "education",
              "experience",
              "skills",
              "languages",
              "projects",
              "summary",
            ];
            const currentIndex = tabs.indexOf(activeTab);
            if (currentIndex > 0) {
              setActiveTab(tabs[currentIndex - 1]);
            }
          }}
          disabled={activeTab === "personal" || isSaving}
          variant="outline"
          className="order-2 sm:order-1"
        >
          Previous
        </Button>

        <div className="flex gap-2 order-1 sm:order-2">
          <Button onClick={handleSave} disabled={isSaving} variant="secondary">
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save CV"
            )}
          </Button>

          {activeTab !== "summary" ? (
            <Button
              onClick={() => {
                const tabs = [
                  "personal",
                  "education",
                  "experience",
                  "skills",
                  "languages",
                  "projects",
                  "summary",
                ];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex < tabs.length - 1) {
                  setActiveTab(tabs[currentIndex + 1]);
                }
              }}
              disabled={isSaving}
            >
              Next
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
