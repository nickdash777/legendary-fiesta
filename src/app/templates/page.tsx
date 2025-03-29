import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TemplatesPage() {
  const templates = [
    {
      id: "classic",
      name: "Classic",
      description: "A traditional CV layout that works for most industries.",
      image: "/images/templates/classic.jpg",
    },
    {
      id: "modern",
      name: "Modern",
      description:
        "A contemporary design with a sidebar for skills and contact info.",
      image: "/images/templates/modern.jpg",
    },
    {
      id: "professional",
      name: "Professional",
      description: "A clean, corporate layout ideal for senior positions.",
      image: "/images/templates/professional.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">CV Templates</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose from our professionally designed CV templates. All templates
          are fully customizable to match your personal style.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-60 w-full">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover"
                // Add this as a fallback if your images don't exist yet
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x400?text=Template+Preview";
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-muted-foreground mb-4">
                {template.description}
              </p>
              <Link href={`/cv-builder?template=${template.id}`}>
                <Button className="w-full">Use This Template</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
