"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { type EmailOtpType } from "@supabase/supabase-js";

function ConfirmContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType;
  const next = searchParams.get("next") ?? "/";

  useEffect(() => {
    async function handleConfirm() {
      if (token_hash && type) {
        const { error } = await supabase.auth.verifyOtp({
          type,
          token_hash,
        });
        if (!error) {
          router.push(next);
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
    }

    handleConfirm();
  }, [token_hash, type, next, router]);

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold">Confirming your email...</h1>
        <p className="text-muted-foreground mt-2">
          Please wait while we confirm your email address.
        </p>
      </div>
    </div>
  );
}

export default function AuthConfirm() {
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
      <ConfirmContent />
    </Suspense>
  );
}
