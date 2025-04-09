"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useLoading } from "@/components/layout/loading-provider";

export default function TemplatesPage() {
  const router = useRouter();
  const { startLoading } = useLoading();

  const templates = [
    {
      id: "classic",
      name: "კლასიკური",
      description:
        "ტრადიციული CV ფორმატი, რომელიც შესაფერისია ყველა ინდუსტრიისთვის.",
      image: "/images/templates/classic.jpg",
      features: [
        "ორგანიზებული სექციები",
        "პროფესიონალური გარეგნობა",
        "ადვილად წაკითხვადი",
      ],
      popular: true,
    },
    {
      id: "modern",
      name: "თანამედროვე",
      description:
        "სტილური დიზაინი გვერდითი პანელით უნარებისა და საკონტაქტო ინფორმაციისთვის.",
      image: "/images/templates/modern.jpg",
      features: [
        "გვერდითი პანელი",
        "მინიმალისტური დიზაინი",
        "უნიკალური ლეიაუტი",
      ],
      popular: false,
    },
    {
      id: "professional",
      name: "პროფესიული",
      description: "სუფთა, კორპორატიული დიზაინი იდეალურია მაღალი პოზიციისთვის.",
      image: "/images/templates/professional.jpg",
      features: [
        "ორსვეტიანი ლეიაუტი",
        "ბიზნეს ორიენტირებული",
        "კარგად სტრუქტურირებული",
      ],
      popular: true,
    },
    {
      id: "creative",
      name: "კრეატიული",
      description: "გამორჩეული დიზაინი შემოქმედებითი პროფესიებისთვის.",
      image: "/images/templates/creative.jpg",
      features: [
        "ფერადი აქცენტები",
        "უნიკალური ლეიაუტი",
        "ვიზუალურად მიმზიდველი",
      ],
      popular: false,
    },
    {
      id: "minimal",
      name: "მინიმალისტური",
      description:
        "დახვეწილი, სუფთა დიზაინი, სადაც თქვენი გამოცდილებაა წინ წამოწეული.",
      image: "/images/templates/minimal.jpg",
      features: [
        "მინიმალისტური",
        "თეთრი სივრცის მაქსიმალური გამოყენება",
        "ფოკუსირებული შინაარსი",
      ],
      popular: true,
    },
    {
      id: "executive",
      name: "ხელმძღვანელი",
      description: "თვალში საცემი დიზაინი ხელმძღვანელი პოზიციებისთვის.",
      image: "/images/templates/executive.jpg",
      features: [
        "პრემიუმ გარეგნობა",
        "ავტორიტეტული ლეიაუტი",
        "გამოცდილებაზე ფოკუსირებული",
      ],
      popular: false,
    },
  ];

  const handleSelectTemplate = (templateId: string) => {
    console.log(`Selected template: ${templateId}`);
    startLoading();
    router.push(`/cv-builder?template=${templateId}`);
  };

  const handlePreviewTemplate = (templateId: string) => {
    console.log(`Previewing template: ${templateId}`);
    startLoading();
    router.push(`/templates/${templateId}`);
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">CV შაბლონები</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          აირჩიეთ ჩვენი პროფესიონალურად შექმნილი CV შაბლონებიდან. ყველა შაბლონი
          სრულად მორგებადია თქვენს პირად სტილზე.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all z-10"></div>
              <Image
                src={template.image || "/images/templates/placeholder.jpg"}
                alt={`${template.name} CV შაბლონი`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {template.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    პოპულარული
                  </Badge>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{template.name}</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                {template.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">
                  ძირითადი მახასიათებლები:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {template.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="outline"
                      className="font-normal"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => handleSelectTemplate(template.id)}
                >
                  შაბლონის არჩევა
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => handlePreviewTemplate(template.id)}
                >
                  პრევიუ
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ვერ იპოვეთ სასურველი შაბლონი?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          ჩვენ რეგულარულად ვამატებთ ახალ შაბლონებს. დაგვიტოვეთ თქვენი ელფოსტა და
          პირველები გაიგებთ ახალი შაბლონების შესახებ.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="თქვენი ელფოსტა"
            className="flex-1 px-4 py-2 rounded-l-md border border-r-0 border-input bg-background"
          />
          <Button className="rounded-l-none">გამოწერა</Button>
        </div>
      </div>
    </div>
  );
}
