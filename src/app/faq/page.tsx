import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">ხშირად დასმული კითხვები</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>როგორ შემიძლია CV-ს შექმნა?</AccordionTrigger>
          <AccordionContent>
            CV-ს შექმნა მარტივია! უბრალოდ დაარეგისტრირდით, აირჩიეთ შაბლონი და
            შეავსეთ თქვენი ინფორმაცია ჩვენს მარტივ ინტერფეისში.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            რა ფორმატებში შემიძლია CV-ს ჩამოტვირთვა?
          </AccordionTrigger>
          <AccordionContent>
            თქვენი CV შეგიძლიათ ჩამოტვირთოთ PDF ფორმატში, რომელიც მარტივად
            იკითხება ნებისმიერი მოწყობილობიდან.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            შემიძლია თუ არა CV-ს რედაქტირება შემდგომში?
          </AccordionTrigger>
          <AccordionContent>
            დიახ! თქვენი CV ინახება თქვენს ანგარიშში და შეგიძლიათ რედაქტირება
            ნებისმიერ დროს.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>რა უნდა ჩავწერო CV-ში?</AccordionTrigger>
          <AccordionContent>
            CV-ში უნდა ჩაიწეროს თქვენი პირადი ინფორმაცია, განათლება, სამუშაო
            გამოცდილება, უნარები და სხვა მნიშვნელოვანი ინფორმაცია, რომელიც
            დაგეხმარებათ სამუშაოს მოძებნაში.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>როგორ ვიპოვო სამუშაო?</AccordionTrigger>
          <AccordionContent>
            ჩვენი პლატფორმა გთავაზობთ CV-ს შექმნას და რედაქტირებას. სამუშაოს
            მოძებნა შეგიძლიათ სხვადასხვა სამუშაო პორტალებზე, როგორიცაა jobs.ge,
            hr.ge და სხვა.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
