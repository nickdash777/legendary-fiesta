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
    default: "Free CV Builder for Georgians | Create Professional Resumes",
    template: "%s | Georgian CV Builder",
  },
  description:
    "Create professional CVs for free in Georgian or English. Our CV maker helps Georgian job seekers build impressive resumes that stand out to employers.",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://georgiacv.com"
  ),
  keywords: [
    "CV maker",
    "Georgian CV",
    "resume builder",
    "free CV template",
    "Georgia CV",
    "CV generator",
    "professional resume",
    "Tbilisi jobs",
    "Georgian resume",
    "კარიერა საქართველო",
    "სივი შექმნა",
    "რეზიუმე საქართველო",
    "უფასო CV",
  ],
  authors: [{ name: "CV Builder Team" }],
  creator: "CV Builder Georgia",
  publisher: "CV Builder Georgia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://georgiacv.com",
    siteName: "Georgian CV Builder",
    title: "Free CV Builder for Georgians | Create Professional Resumes",
    description:
      "Create professional CVs for free in Georgian or English. Our CV maker helps Georgian job seekers build impressive resumes that stand out to employers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Georgian CV Builder",
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
    title: "Free CV Builder for Georgians | Create Professional Resumes",
    description:
      "Create professional CVs for free in Georgian or English. Our CV maker helps Georgian job seekers build impressive resumes that stand out to employers.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
