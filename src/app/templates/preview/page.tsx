"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PDFRenderer } from "@/components/pdf/pdf-renderer";
import { useLoading } from "@/components/layout/loading-provider";
import { CVTemplate } from "@/types/cv";

// Sample CV data for preview
const SAMPLE_CV = {
  personalInfo: {
    fullName: "გიორგი მაისურაძე",
    jobTitle: "პროგრამული უზრუნველყოფის ინჟინერი",
    email: "giorgi.maisuradze@example.com",
    phone: "+995 555 12 34 56",
    address: "თბილისი, საქართველო",
  },
  summary:
    "გამოცდილი პროგრამული უზრუნველყოფის ინჟინერი 5+ წლიანი გამოცდილებით ვებ აპლიკაციების განვითარებაში.",
  workExperience: [
    {
      id: "exp1",
      position: "Senior Frontend Engineer",
      company: "Tech Solutions Georgia",
      startDate: "2021",
      endDate: "დღემდე",
      description:
        "პასუხისმგებელი ვარ კომპანიის ძირითადი პროდუქტის ფრონტენდ ნაწილის განვითარებაზე.",
    },
    {
      id: "exp2",
      position: "Frontend Developer",
      company: "Digital Agency Georgia",
      startDate: "2018",
      endDate: "2021",
      description:
        "ვმუშაობდი სხვადასხვა კლიენტის პროექტებზე JavaScript, React და Vue.js ტექნოლოგიების გამოყენებით.",
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "კომპიუტერული მეცნიერების მაგისტრი",
      institution: "საქართველოს ტექნიკური უნივერსიტეტი",
      startDate: "2016",
      endDate: "2018",
      description: "სპეციალიზაცია პროგრამულ ინჟინერიაში. GPA: 3.8/4.0",
    },
  ],
  skills: [
    { id: "skill1", name: "JavaScript", level: 5 },
    { id: "skill2", name: "React", level: 5 },
    { id: "skill3", name: "TypeScript", level: 4 },
  ],
  languages: [
    { id: "lang1", name: "ქართული", level: "Native" },
    { id: "lang2", name: "ინგლისური", level: "Fluent" },
  ],
  projects: [
    {
      id: "proj1",
      title: "E-Commerce Platform",
      description: "MERN Stack აპლიკაცია",
    },
  ],
};

export default function TemplatePreviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { startLoading, stopLoading } = useLoading();
  const [isClient, setIsClient] = useState(false);

  // Get template ID from query parameter instead of path param
  const templateId = searchParams.get("id") || "classic";

  useEffect(() => {
    setIsClient(true);
    startLoading();

    const timer = setTimeout(() => {
      stopLoading();
    }, 1000);

    return () => clearTimeout(timer);
  }, [startLoading, stopLoading]);

  const templateNames: Record<string, string> = {
    classic: "კლასიკური შაბლონი",
    modern: "თანამედროვე შაბლონი",
    professional: "პროფესიული შაბლონი",
    creative: "კრეატიული შაბლონი",
    minimal: "მინიმალისტური შაბლონი",
    executive: "ხელმძღვანელის შაბლონი",
  };

  const templateName = templateNames[templateId] || "CV შაბლონი";

  const handleUseTemplate = () => {
    startLoading();
    router.push(`/cv-builder?template=${templateId}`);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => router.push("/templates")}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          უკან დაბრუნება
        </Button>

        <Button onClick={handleUseTemplate}>ამ შაბლონის გამოყენება</Button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">{templateName}</h1>

        <div className="aspect-[1/1.414] max-h-[80vh]">
          <PDFRenderer
            cv={SAMPLE_CV}
            template={templateId as CVTemplate}
            fileName={`cv-${templateId}-template.pdf`}
          />
        </div>
      </div>
    </div>
  );
}
