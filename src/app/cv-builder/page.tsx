import ClientCVBuilder from "./ClientCVBuilder";

// Static metadata for SEO
export const metadata = {
  title: "CV Builder - Create Your Professional Resume",
  description:
    "Build a professional CV with our free online CV builder. Choose from modern, classic, and creative templates to create your resume in minutes.",
  keywords: "CV builder, resume maker, professional CV, free CV templates",
};

// Static page with no reliance on searchParams
export default function CVBuilderPage() {
  const defaultTemplate = "modern"; // Hardcode default for static rendering

  return (
    <div className="container mx-auto py-10">
      {/* Static SEO content */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold">CV Builder</h1>
        <p className="text-lg mt-2">
          Create a standout resume with our free CV builder. Select from
          professional templates like {defaultTemplate} and customize your CV
          effortlessly.
        </p>
      </section>

      {/* Dynamic client-side component */}
      <ClientCVBuilder initialTemplate={defaultTemplate} />
    </div>
  );
}
