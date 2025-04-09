import TemplatePreview from "@/components/templates/template-preview";

// This is needed for Next.js static export
export function generateStaticParams() {
  return [
    { id: "classic" },
    { id: "modern" },
    { id: "professional" },
    { id: "creative" },
    { id: "minimal" },
    { id: "executive" },
  ];
}

// Generate metadata for the page
export function generateMetadata({ params }: { params: { id: string } }) {
  const templateNames: Record<string, string> = {
    classic: "კლასიკური შაბლონი",
    modern: "თანამედროვე შაბლონი",
    professional: "პროფესიული შაბლონი",
    creative: "კრეატიული შაბლონი",
    minimal: "მინიმალისტური შაბლონი",
    executive: "ხელმძღვანელის შაბლონი",
  };

  const templateName = templateNames[params.id] || "CV შაბლონი";

  return {
    title: templateName,
    description: `${templateName} - პროფესიონალურად შექმნილი CV შაბლონი`,
  };
}

// Server component that passes the templateId to the client component
export default function TemplatePreviewPage({
  params,
}: {
  params: { id: string };
}) {
  return <TemplatePreview templateId={params.id} />;
}
