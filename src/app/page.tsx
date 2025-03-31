import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          შექმენით პროფესიონალური CV{" "}
          <span className="text-primary">უფასოდ</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
          შექმენით პროფესიონალური CV ან რეზიუმე, რომელიც გამოგარჩევთ სამუშაო
          ბაზარზე. გამოყყენეთ მზა ფორმები, მაგალითები, ნიმუშები და შაბლონები.
          საიტი არის სრულიად უფასო.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/cv-builder">
            <Button size="lg" className="px-8 w-full sm:w-auto">
              CV შექმნა
            </Button>
          </Link>
          <Link href="/templates">
            <Button
              size="lg"
              variant="outline"
              className="px-8 w-full sm:w-auto"
            >
              შაბლონების ნახვა
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          რატომ უნდა გამოიყენოთ ჩვენი CV-ის შემქმნელი
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md">
            <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary w-6 h-6"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">პროფესიონალური შაბლონები</h3>
            <p className="text-gray-600">
              აირჩიეთ პროფესიონალურად შექმნილი შაბლონები, რომლებიც
              ოპტიმიზირებულია სამუშაო ბაზრისთვის.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg shadow-md">
            <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary w-6 h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">მარტივი გამოყენება</h3>
            <p className="text-gray-600">
              ჩვენი ინტუიტიური ინტერფეისი გაგიადვილებთ CV-ის შექმნას, მარტივად
              და სწრაფად.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg shadow-md">
            <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary w-6 h-6"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">სრულად უფასო</h3>
            <p className="text-gray-600">
              ყველა ფუნქცია ხელმისაწვდომია უფასოდ, მარადიულად.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            როგორ მუშაობს
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">აირჩიე შაბლონი</h3>
              <p className="text-gray-600">
                აირჩიე ჩვენი პროფესიონალურად შექმნილი CV-ის ფორმების
                კოლექციიდან.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">შეავსე შენი დეტალები</h3>
              <p className="text-gray-600">
                დაამატე შენი პირადი ინფორმაცია, სამუშაო გამოცდილება, განათლება
                და უნარები.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">ჩამოტვირთე შენი CV</h3>
              <p className="text-gray-600">
                მიიღე შენი პროფესიონალური CV PDF ფაილის სახით - სასურველ
                ვაკანსიებზე გასაგზავნად გამზადებული.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          რას ამბობენ ჩვენი მომხმარებლები
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/testimonial-1.jpg"
                  alt="მომხმარებლის ავატარი"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">ნინო კაპანაძე</h3>
                <p className="text-gray-600 text-sm">მარკეტინგის სპეციალისტი</p>
              </div>
            </div>
            <p className="text-gray-600">
              ეს CV-ის შემქმნელი დამეხმარა პროფესიონალური რეზიუმეს შექმნაში, რის
              შედეგადაც დავსაქმდი თბილისის ერთ-ერთ წამყვან კომპანიაში. შაბლონები
              თანამედროვეა, საიტის ინტერფეისი კი ძალიან მარტივი!
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/testimonial-2.jpg"
                  alt="მომხმარებლის ავატარი"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">გიორგი წიკლაური</h3>
                <p className="text-gray-600 text-sm">დეველოპერი</p>
              </div>
            </div>
            <p className="text-gray-600">
              ვცადე რამდენიმე CV-ის შემქმნელი, მაგრამ ეს ერთადერთია, რომელმაც
              მომცა საშუალება შევქმნა ნამდვილად პროფესიონალური CV გადახდის
              გარეშე. გირჩევთ ყველას, ვინც ეძებს სამუშაოს!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-center bg-primary text-white rounded-xl">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            მზად ხარ შექმნა შენი პროფესიონალური CV?
          </h2>
          <p className="text-xl mb-10">
            შეუერთდი სამსახურის მაძიებლებლებს, რომლებმაც ჩვენი პლატფორმა
            გამოიყენეს თავიანთი სასურველი სამსახურის საპოვნელად.
          </p>
          <Link href="/cv-builder">
            <Button size="lg" variant="secondary" className="px-8">
              დაიწყე ახლა
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ხშირად დასმული კითხვები
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              ეს მომსახურება ნამდვილად უფასოა?
            </h3>
            <p className="text-gray-600">
              დიახ, ჩვენი CV-ის შემქმნელი სრულად უფასოა. შეგიძლია CV-ის შექმნა,
              რედაქტირება და ჩამოტვირთვა ფულის გადახდის გარეშე.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              შემიძლია CV-ის შექმნა ქართულ ენაზე?
            </h3>
            <p className="text-gray-600">
              სრულად! ჩვენი პლატფორმა უზრუნველყოფს როგორც ქართულ, ასევე ინგლისურ
              ენას, ამიტომ შეგიძლია შექმნა შენი CV-ის ნებისმიერ ენაზე, თქვენი
              საჭიროებების მიხედვით.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              რამდენი CV-ის შექმნა შემიძლია?
            </h3>
            <p className="text-gray-600">
              შეგიძლია შექმნა შეუზღუდავი რაოდენობის CV-ები სხვადასხვა დიზაინითა
              და შინაარსით. მაგალითად თუ გსურს CV-ის მორგება სხვადასხვა სამუშაო
              განაცხადებისთვის.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              შემიძლია CV-ის განახლება მოგვიანებით?
            </h3>
            <p className="text-gray-600">
              დიახ! როდესაც შექმნი ანგარიშს, შენი CV-ები შენახულია, ასე რომ
              შეგიძლია დაბრუნდე და განაახლო ისინი ნებისმიერ დროს, შენი კარიერის
              განვითარებასთან ერთად!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
