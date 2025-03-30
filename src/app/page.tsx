import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Create Your Professional CV{" "}
          <span className="text-primary">For Free</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
          Build a professional CV that will help you stand out in the Georgian
          job market. No payment required, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/cv-builder">
            <Button size="lg" className="px-8 w-full sm:w-auto">
              Create My CV
            </Button>
          </Link>
          <Link href="/templates">
            <Button
              size="lg"
              variant="outline"
              className="px-8 w-full sm:w-auto"
            >
              View Templates
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose Our CV Builder
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
            <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
            <p className="text-gray-600">
              Choose from professionally designed templates that are optimized
              for the Georgian job market.
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
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Our intuitive interface makes building your CV simple and quick,
              even if youve never created one before.
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
            <h3 className="text-xl font-bold mb-2">Completely Free</h3>
            <p className="text-gray-600">
              No hidden fees, no premium plans. Access all features completely
              free, forever.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Choose a Template</h3>
              <p className="text-gray-600">
                Select from our collection of professionally designed CV
                templates.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Fill in Your Details</h3>
              <p className="text-gray-600">
                Add your personal information, work experience, education, and
                skills.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Download Your CV</h3>
              <p className="text-gray-600">
                Get your professional CV as a PDF file ready to share with
                employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/testimonial-1.jpg"
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Nino Kapanadze</h3>
                <p className="text-gray-600 text-sm">Marketing Professional</p>
              </div>
            </div>
            <p className="text-gray-600">
              This CV builder helped me create a professional resume that landed
              me an interview with one of the top companies in Tbilisi. The
              templates are modern and the interface is so easy to use!
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                <Image
                  src="/images/testimonial-2.jpg"
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Giorgi Tsiklauri</h3>
                <p className="text-gray-600 text-sm">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-600">
              I tried several CV builders before, but this is the only one that
              let me create a truly professional-looking CV without having to
              pay. Highly recommended for anyone in Georgia looking for a job!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-center bg-primary text-white rounded-xl">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Professional CV?
          </h2>
          <p className="text-xl mb-10">
            Join thousands of Georgians who have used our platform to land their
            dream jobs.
          </p>
          <Link href="/cv-builder">
            <Button size="lg" variant="secondary" className="px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              Is this service really free?
            </h3>
            <p className="text-gray-600">
              Yes, our CV builder is completely free to use. You can create,
              edit, and download your CV without any cost or hidden fees.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              Can I create CVs in Georgian language?
            </h3>
            <p className="text-gray-600">
              Absolutely! Our platform supports both Georgian and English
              languages, so you can create your CV in either language depending
              on your needs.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              How many CVs can I create?
            </h3>
            <p className="text-gray-600">
              You can create unlimited CVs with different designs and content.
              This is helpful if you want to tailor your CV for different job
              applications.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">
              Can I update my CV later?
            </h3>
            <p className="text-gray-600">
              Yes! When you create an account, your CVs are saved so you can
              come back and update them at any time as your career progresses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
