"use client";

import { useState } from "react";
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

export function CVForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const { saveCV } = useCVStore();

  const handleSave = async () => {
    try {
      const cvId = await saveCV();
      if (cvId) {
        toast.success("CV Saved", {
          description: "Your CV has been saved successfully.",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: `Failed to save your CV. Please try again - ${error}.`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-7 w-full">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <PersonalInfoForm />
        </TabsContent>

        <TabsContent value="education">
          <EducationForm />
        </TabsContent>

        <TabsContent value="experience">
          <WorkExperienceForm />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsForm />
        </TabsContent>

        <TabsContent value="languages">
          <LanguagesForm />
        </TabsContent>

        <TabsContent value="projects">
          <ProjectsForm />
        </TabsContent>

        <TabsContent value="summary">
          <SummaryForm />
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
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
          disabled={activeTab === "personal"}
        >
          Previous
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
          >
            Next
          </Button>
        ) : (
          <Button onClick={handleSave}>Save CV</Button>
        )}
      </div>
    </div>
  );
}
