"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useLoading } from "@/components/layout/loading-provider";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { CVDocument } from "@/components/pdf/document";

// Sample CV data for preview
const SAMPLE_CV = {
  personalInfo: {
    fullName: "გიორგი მაისურაძე",
    title: "პროგრამული უზრუნველყოფის ინჟინერი",
    email: "giorgi@example.com",
    phone: "+995 555 12 34 56",
    address: "თბილისი, საქართველო",
    website: "giorgi.dev",
    linkedin: "linkedin.com/in/giorgi",
    github: "github.com/giorgi",
  },
  summary:
    "გამოცდილი Full Stack დეველოპერი 5+ წლიანი გამოცდილებით თანამედროვე ვებ ტექნოლოგიებში. სპეციალიზაცია React, Node.js და TypeScript-ში. პასუხისმგებელი, გუნდური მოთამაშე მაღალი ხარისხის კოდის წერის უნარით.",
  workExperience: [
    {
      id: "1",
      position: "Senior Frontend Developer",
      company: "TechGeorgia",
      location: "თბილისი",
      startDate: "იანვარი 2020",
      endDate: "დღემდე",
      description:
        "React და TypeScript-ით SaaS პროდუქტის შემუშავება. მიკროსერვისების არქიტექტურაზე მუშაობა. გუნდის ხელმძღვანელობა და უმცროსი დეველოპერების მენტორობა.",
    },
    {
      id: "2",
      position: "Full Stack Developer",
      company: "WebSolutions",
      location: "თბილისი",
      startDate: "მარტი 2018",
      endDate: "დეკემბერი 2019",
      description:
        "კლიენტების ვებ-აპლიკაციების შემუშავება React, Node.js და MongoDB-ის გამოყენებით. REST API-ების დიზაინი და იმპლემენტაცია.",
    },
    {
      id: "3",
      position: "Junior Web Developer",
      company: "Startup Hub",
      location: "თბილისი",
      startDate: "ივნისი 2016",
      endDate: "თებერვალი 2018",
      description:
        "სტარტაპების დახმარება MVP-ების შექმნაში. მთლიანად პასუხისმგებელი ფრონტენდის განვითარებაზე.",
    },
  ],
  education: [
    {
      id: "1",
      degree: "კომპიუტერული მეცნიერების მაგისტრი",
      institution: "საქართველოს ტექნიკური უნივერსიტეტი",
      location: "თბილისი",
      startDate: "2014",
      endDate: "2016",
      description:
        "ფოკუსი პროგრამულ ინჟინერიაზე და მონაცემთა მეცნიერებაზე. GPA: 3.8/4.0",
    },
    {
      id: "2",
      degree: "კომპიუტერული მეცნიერების ბაკალავრი",
      institution: "თბილისის სახელმწიფო უნივერსიტეტი",
      location: "თბილისი",
      startDate: "2010",
      endDate: "2014",
      description:
        "საფუძვლიანი განათლება ალგორითმებში, მონაცემთა სტრუქტურებსა და პროგრამირების ენებში.",
    },
  ],
  skills: [
    { id: "1", name: "JavaScript", level: 90 },
    { id: "2", name: "TypeScript", level: 85 },
    { id: "3", name: "React", level: 90 },
    { id: "4", name: "Node.js", level: 80 },
    { id: "5", name: "GraphQL", level: 75 },
    { id: "6", name: "HTML/CSS", level: 85 },
    { id: "7", name: "MongoDB", level: 70 },
    { id: "8", name: "Git", level: 85 },
  ],
  languages: [
    { id: "1", name: "ქართული", level: "მშობლიური" },
    { id: "2", name: "ინგლისური", level: "პროფესიული" },
    { id: "3", name: "რუსული", level: "საშუალო" },
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "MERN Stack აპლიკაცია სრული საგადახდო ინტეგრაციით",
      link: "github.com/giorgi/ecommerce",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "React & Firebase პროექტების მართვის აპლიკაცია",
      link: "github.com/giorgi/taskmanager",
    },
  ],
};

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();
  const [isClient, setIsClient] = useState(false);

  // Get template ID from URL parameter
  const templateId = searchParams.get("template") || "classic";

  // Start loading when component mounts
  useEffect(() => {
    startLoading();

    // Set isClient to true after component mounts
    setIsClient(true);

    // Simulate PDF loading
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);

    return () => clearTimeout(timer);
  }, [startLoading, stopLoading]);

  const handleUseTemplate = () => {
    startLoading();
    router.push(`/cv-builder?template=${templateId}`);
  };

  // Ensure we're only rendering on client-side
  if (!isClient) return null;

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

        <div className="flex gap-4">
          <PDFDownloadLink
            document={
              <CVDocument template={templateId as any} cv={SAMPLE_CV} />
            }
            fileName={`${templateId}-template-preview.pdf`}
            className="inline-block"
          >
            {({ loading }) => (
              <Button variant="outline" disabled={loading}>
                <Download className="mr-2 h-4 w-4" />
                PDF ჩამოტვირთვა
              </Button>
            )}
          </PDFDownloadLink>

          <Button onClick={handleUseTemplate}>ამ შაბლონის გამოყენება</Button>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">
        {templateId === "classic" && "კლასიკური შაბლონი"}
        {templateId === "modern" && "თანამედროვე შაბლონი"}
        {templateId === "professional" && "პროფესიული შაბლონი"}
        {templateId === "creative" && "კრეატიული შაბლონი"}
        {templateId === "minimal" && "მინიმალისტური შაბლონი"}
        {templateId === "executive" && "ხელმძღვანელის შაბლონი"}
      </h1>

      <div className="shadow-lg rounded-lg overflow-hidden h-[calc(100vh-200px)] min-h-[800px]">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <CVDocument template={templateId as any} cv={SAMPLE_CV} />
        </PDFViewer>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          ეს არის წინასწარი ხედვა. შეავსეთ საკუთარი მონაცემები და მოახდინეთ
          მორგება თქვენს საჭიროებებზე.
        </p>
        <Button onClick={handleUseTemplate} size="lg">
          დაიწყეთ ამ შაბლონით
        </Button>
      </div>
    </div>
  );
}
