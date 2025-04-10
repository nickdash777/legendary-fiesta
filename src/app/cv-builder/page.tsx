"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CVForm } from "@/components/cv/cv-form";
import { PDFRenderer } from "@/components/pdf/pdf-renderer";
import { useCVStore } from "@/store/cv-store";
import { CVTemplate } from "@/types/cv";

export default function CVBuilderPage() {
  const searchParams = useSearchParams();
  const templateParam = searchParams.get("template");
  const { cv, template, setTemplate } = useCVStore(); // Get template from store

  // Apply the template selection when the component mounts or template param changes
  useEffect(() => {
    if (templateParam) {
      const validTemplates: CVTemplate[] = [
        "classic",
        "modern",
        "professional",
        "creative",
        "minimal",
        "executive",
      ];

      if (validTemplates.includes(templateParam as CVTemplate)) {
        setTemplate(templateParam as CVTemplate);
        console.log(`Template set to: ${templateParam}`);
      }
    }
  }, [templateParam, setTemplate]);

  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="edit" className="space-y-6">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="mt-6">
          <CVForm />
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          <PDFRenderer
            cv={cv}
            template={template} // Use the template from the store
            fileName={`${cv.personalInfo.fullName || "My"}_CV.pdf`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
