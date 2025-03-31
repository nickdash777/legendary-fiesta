import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SupabaseProvider } from "@/providers/supabase-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    default: "შექმენით CV უფასოდ | გააკეთე შენი პროფესიონალური სივი ახლა",
    template: "%s |ქართული CV შექმნა",
  },
  description:
    "შექმენით cv ან რეზიუმე უფასოდ და იპოვეთ სასურველი სამსახური. გამოიყენეთ cv ფორმა, ნიმუში, მაგალითი, შაბლონი, შეავსეთ და გააგზავნეთ",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://cvfy.ge"
  ),
  keywords: [
    "CV შექმნა",
    "CV გაკეთება",
    "რეზიუმეს შექმნა",
    "რეზუმეს გაკეთება",
    "CV ფორმა",
    "CV ნიმუში",
    "CV მაგალითი",
    "CV შევსება",
    "CV შაბლონი",
    "სამსახური",
    "სივი შექმნა",
    "სივის შევსება",
    "ვაკანსიები",
    "უფასო CV",
    "ვაკანსია",
    "jobs.ge",
    "სამსახურის პოვნა",
    "ვაკანსიები თბილისი",
    "ვაკანსიები ბათუმში",
    "ვაკანსიები თბილისში",
    "ვაკანსიები ქუთაისში",
  ],
  authors: [{ name: "CVfy.ge" }],
  creator: "CV შექმნა საქართველო",
  publisher: "CV გაკეთება საქართველო",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cvfy.ge",
    siteName: "ქართული CV შექმნა",
    title: "ქართული CV შექმნა",
    description:
      "შექმენით cv ან რეზიუმე უფასოდ და იპოვეთ სასურველი სამსახური. გამოიყენეთ cv ფორმა, ნიმუში, მაგალითი, შაბლონი, შეავსეთ და გააგზავნეთ",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "CV შექმნა უფასოდ",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "შექმენით CV უფასოდ | გააკეთე შენი პროფესიონალური სივი ან რეზიუმე ახლა",
    description:
      "შექმენით cv ან რეზიუმე უფასოდ და იპოვეთ სასურველი სამსახური. გამოიყენეთ cv ფორმა, ნიმუში, მაგალითი, შაბლონი, შეავსეთ და გააგზავნეთ.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </SupabaseProvider>
      </body>
    </html>
  );
}
