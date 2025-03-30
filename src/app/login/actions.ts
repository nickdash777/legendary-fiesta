"use client";

import { supabase } from "@/lib/supabase/client";

export async function login(formData: FormData) {
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signup(formData: FormData) {
  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/confirm`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}
