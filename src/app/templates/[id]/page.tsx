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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await the params Promise
  const templateId = resolvedParams.id;

  const templateNames: Record<string, string> = {
    classic: "კლასიკური შაბლონი",
    modern: "თანამედროვე შაბლონი",
    professional: "პროფესიული შაბლონი",
    creative: "კრეატიული შაბლონი",
    minimal: "მინიმალისტური შაბლონი",
    executive: "ხელმძღვანელის შაბლონი",
  };

  const templateName = templateNames[templateId] || "CV შაბლონი";

  return {
    title: templateName,
    description: `${templateName} - პროფესიონალურად შექმნილი CV შაბლონი`,
  };
}

// Page component
export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ id: string }>; // Type params as a Promise
}) {
  const resolvedParams = await params; // Await the params Promise
  const templateId = resolvedParams.id;
  return <TemplatePreview templateId={templateId} />;
}
