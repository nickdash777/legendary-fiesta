"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CVForm } from "@/components/cv/cv-form";
import { PDFRenderer } from "@/components/pdf/pdf-renderer";
import { useCVStore } from "@/store/cv-store";
import { CVTemplate } from "@/types/cv";

interface ClientCVBuilderProps {
  initialTemplate: string; // Passed from server
}

export default function ClientCVBuilder({
  initialTemplate,
}: ClientCVBuilderProps) {
  const searchParams = useSearchParams();
  const templateParam = searchParams.get("template");
  const { cv, template, setTemplate } = useCVStore();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure client-side logic only runs after mount
  useEffect(() => {
    setIsMounted(true);

    // Sync template from URL or initial prop
    const paramToUse = templateParam || initialTemplate;
    if (paramToUse) {
      const validTemplates: CVTemplate[] = [
        "classic",
        "modern",
        "professional",
        "creative",
        "minimal",
        "executive",
      ];

      if (validTemplates.includes(paramToUse as CVTemplate)) {
        setTemplate(paramToUse as CVTemplate);
        console.log(`Template set to: ${paramToUse}`);
      }
    }
  }, [templateParam, initialTemplate, setTemplate]);

  if (!isMounted) {
    return <div>Loading CV Builder...</div>; // Placeholder during SSR
  }

  return (
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
          template={template}
          fileName={`${cv.personalInfo.fullName || "My"}_CV.pdf`}
        />
      </TabsContent>
    </Tabs>
  );
}
