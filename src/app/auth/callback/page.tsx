"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    async function handleCallback() {
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
          router.push("/login?verified=true");
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
    }

    handleCallback();
  }, [code, router]);

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold">Verifying your email...</h1>
        <p className="text-muted-foreground mt-2">
          Please wait while we verify your email address.
        </p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto py-10">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold">Loading...</h1>
            <p className="text-muted-foreground mt-2">
              Please wait while we process your request.
            </p>
          </div>
        </div>
      }
    >
      <CallbackContent />
    </Suspense>
  );
}
