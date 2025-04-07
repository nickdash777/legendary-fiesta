import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-background/95">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div className="space-y-4 max-w-sm">
            <h3 className="font-bold text-xl">საქართველოს CV</h3>
            <p className="text-muted-foreground">
              უფასო CV გენერატორი ქართველი პროფესიონალებისთვის გამორჩეული
              რეზიუმეების შესაქმნელად.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 w-full md:w-auto">
            <div className="space-y-3">
              <h4 className="font-medium text-base">სწრაფი ბმულები</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    მთავარი
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cv-builder"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    CV შექმნა
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    შაბლონები
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    ჩვენ შესახებ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-base">რესურსები</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    ბლოგი
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    ხშირად დასმული კითხვები
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career-tips"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    კარიერული რჩევები
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:col-span-2 md:col-span-1">
              <h4 className="font-medium text-base">სამართლებრივი</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    კონფიდენციალობის პოლიტიკა
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    გამოყენების პირობები
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    კონტაქტი
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} საქართველოს CV. ყველა უფლება
              დაცულია.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
