"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PDFRenderer } from "@/components/pdf/pdf-renderer";
import { useLoading } from "@/components/layout/loading-provider";
import { CVTemplate, CV } from "@/types/cv";

// Sample CV data for preview only
const SAMPLE_CV: CV = {
  personalInfo: {
    fullName: "გიორგი მაისურაძე",
    jobTitle: "პროგრამული უზრუნველყოფის ინჟინერი",
    email: "giorgi.maisuradze@example.com",
    phone: "+995 555 12 34 56",
    address: "თბილისი, საქართველო",
  },
  summary:
    "გამოცდილი პროგრამული უზრუნველყოფის ინჟინერი 5+ წლიანი გამოცდილებით ვებ აპლიკაციების განვითარებაში. ექსპერტი JavaScript და React-ში, მუშაობის გამოცდილებით საწარმოო გარემოში.",
  workExperience: [
    {
      id: "exp1",
      position: "Senior Frontend Engineer",
      company: "Tech Solutions Georgia",
      startDate: "2021",
      endDate: "დღემდე",
      description:
        "პასუხისმგებელი ვარ კომპანიის ძირითადი პროდუქტის ფრონტენდ ნაწილის განვითარებაზე, React, TypeScript და GraphQL-ის გამოყენებით.",
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
    {
      id: "edu2",
      degree: "კომპიუტერული მეცნიერების ბაკალავრი",
      institution: "თბილისის სახელმწიფო უნივერსიტეტი",
      startDate: "2012",
      endDate: "2016",
      description:
        "საფუძვლიანი განათლება ალგორითმებში, მონაცემთა სტრუქტურებში და პროგრამულ ინჟინერიაში.",
    },
  ],
  skills: [
    { id: "skill1", name: "JavaScript", level: 5 },
    { id: "skill2", name: "React", level: 5 },
    { id: "skill3", name: "TypeScript", level: 4 },
    { id: "skill4", name: "Node.js", level: 3 },
    { id: "skill5", name: "GraphQL", level: 4 },
    { id: "skill6", name: "HTML/CSS", level: 5 },
  ],
  languages: [
    { id: "lang1", name: "ქართული", level: "Native" },
    { id: "lang2", name: "ინგლისური", level: "Fluent" },
    { id: "lang3", name: "რუსული", level: "Intermediate" },
  ],
  projects: [
    {
      id: "proj1",
      title: "E-Commerce Platform",
      description:
        "MERN Stack აპლიკაცია სრული ელექტრონული კომერციის ფუნქციონალით",
      link: "github.com/giorgi/ecommerce",
    },
    {
      id: "proj2",
      title: "Task Management App",
      description:
        "React & Firebase-ზე დაფუძნებული პროექტების მართვის აპლიკაცია",
      link: "taskapp.example.com",
    },
  ],
};

interface TemplatePreviewProps {
  templateId: string;
}

export default function TemplatePreview({ templateId }: TemplatePreviewProps) {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();
  const [mounted, setMounted] = useState(false);
  const loadingHandled = useRef(false);

  useEffect(() => {
    setMounted(true);

    // Only run loading logic once per component mount
    if (!loadingHandled.current) {
      startLoading();

      const timer = setTimeout(() => {
        stopLoading();
        loadingHandled.current = true;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array to run only once on mount

  const handleUseTemplate = () => {
    startLoading();
    router.push(`/cv-builder?template=${templateId}`);
  };

  if (!mounted) {
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
        <h1 className="text-2xl font-bold mb-6 text-center">
          {templateId === "classic" && "კლასიკური შაბლონი"}
          {templateId === "modern" && "თანამედროვე შაბლონი"}
          {templateId === "professional" && "პროფესიული შაბლონი"}
          {templateId === "creative" && "კრეატიული შაბლონი"}
          {templateId === "minimal" && "მინიმალისტური შაბლონი"}
          {templateId === "executive" && "ხელმძღვანელის შაბლონი"}
        </h1>

        <div className="w-full" style={{ height: "70vh" }}>
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
