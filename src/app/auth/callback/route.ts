import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    await supabase.auth.exchangeCodeForSession(code);

    // After verification, redirect to login with a success message
    return NextResponse.redirect(new URL("/login?verified=true", request.url));
  }

  // If no code or error, redirect to home page
  return NextResponse.redirect(new URL("/", request.url));
}
