"use client";

import { useState, useEffect } from "react";
import { CVForm } from "@/components/cv/cv-form";
import { PDFRenderer } from "@/components/pdf/pdf-renderer";
import { useCVStore } from "@/store/cv-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Component to handle useSearchParams logic
function CVBuilderContent() {
  const searchParams = useSearchParams();
  const { setTemplate } = useCVStore();

  useEffect(() => {
    // Check for template parameter in URL
    const templateParam = searchParams.get("template");
    if (
      templateParam &&
      ["classic", "modern", "professional"].includes(templateParam)
    ) {
      setTemplate(templateParam as "classic" | "modern" | "professional");
    }
  }, [searchParams, setTemplate]);

  return null; // This component only handles side effects, no UI
}

// Main page component
export default function CVBuilderPage() {
  const [activeTab, setActiveTab] = useState("edit");
  const [isLoading, setIsLoading] = useState(true);
  const { cv, template } = useCVStore();

  useEffect(() => {
    // Simulate loading the CV data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Loading CV editor...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create Your CV</h1>

      {/* Add Suspense boundary for useSearchParams logic */}
      <Suspense fallback={null}>
        <CVBuilderContent />
      </Suspense>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
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
    </div>
  );
}
