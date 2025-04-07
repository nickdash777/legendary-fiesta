"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { UserNav } from "./user-nav";
import { Menu, X } from "lucide-react";
import { useLoading } from "./loading-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { startLoading } = useLoading();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const { data } = await supabase.auth.getSession();
        setIsLoggedIn(!!data.session);
      } catch (error) {
        console.error("Error checking auth:", error);
      } finally {
        setIsLoading(false);
      }

      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event, session) => {
          setIsLoggedIn(!!session);
        }
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    }

    checkAuth();
  }, []);

  const navItems = [
    { name: "მთავარი", href: "/" },
    { name: "CV შექმნა", href: "/cv-builder" },
    { name: "შაბლონები", href: "/templates" },
    { name: "კარიერის რჩევები", href: "/career-tips" },
    { name: "FAQ", href: "/faq" },
    { name: "ჩვენ შესახებ", href: "/about" },
  ];

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Custom navigation handler
  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      startLoading();
      router.push(href);
    }
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-bold text-2xl flex items-center pl-0 sm:pl-2"
              aria-label="GeorgiaCV - მთავარ გვერდზე დაბრუნება"
              onClick={(e) => {
                if (pathname !== "/") {
                  e.preventDefault();
                  handleNavigation("/");
                }
              }}
            >
              <Image
                src="/logo.svg"
                alt="GeorgiaCV ლოგო"
                width={120}
                height={32}
                priority
                className="h-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-6 ml-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={(e) => {
                    if (pathname !== item.href) {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 pr-0 sm:pr-2">
            {!isLoading && (
              <>
                {isLoggedIn ? (
                  <div className="hidden md:block">
                    <UserNav />
                  </div>
                ) : (
                  <div className="hidden md:flex items-center gap-4">
                    <Button
                      variant="ghost"
                      onClick={() => handleNavigation("/login")}
                    >
                      შესვლა
                    </Button>
                    <Button onClick={() => handleNavigation("/register")}>
                      რეგისტრაცია
                    </Button>
                  </div>
                )}
              </>
            )}

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="მენიუს გახსნა">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[350px] pt-10"
              >
                <div className="flex justify-end mb-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="მენიუს დახურვა"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <div key={item.href} className="flex items-center">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          handleNavigation(item.href);
                        }}
                        className={`text-base py-2 transition-colors hover:text-primary w-full text-left ${
                          pathname === item.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}

                  <div className="border-t pt-6 mt-2">
                    {isLoggedIn ? (
                      <>
                        <Button
                          variant="outline"
                          className="w-full mb-4"
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleNavigation("/dashboard");
                          }}
                        >
                          ჩემი პროფილი
                        </Button>
                        <Button
                          variant="secondary"
                          className="w-full"
                          onClick={handleSignOut}
                        >
                          გასვლა
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          className="w-full mb-4"
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleNavigation("/login");
                          }}
                        >
                          შესვლა
                        </Button>
                        <Button
                          className="w-full"
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleNavigation("/register");
                          }}
                        >
                          რეგისტრაცია
                        </Button>
                      </>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
