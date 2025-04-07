"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { User } from "@supabase/supabase-js";

interface ProfileData {
  id: string;
  updated_at: string;
  full_name: string;
  email_notifications?: boolean;
  dark_mode?: boolean;
}

export default function SettingsPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
          router.push("/login");
          return;
        }

        setUser(user);

        // Modify this query to match your actual table columns
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*") // Select all columns to see what's available
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
        }

        if (profile) {
          // Check if these properties exist on the profile object
          if ("full_name" in profile) {
            setFullName(profile.full_name || "");
          }

          if ("email_notifications" in profile) {
            // Ensure we're setting a boolean value
            setEmailNotifications(
              profile.email_notifications === true ? true : false
            );
          }

          if ("dark_mode" in profile) {
            // Ensure we're setting a boolean value
            setDarkMode(profile.dark_mode === true ? true : false);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error in getUser:", error);
        setLoading(false);
      }
    }

    getUser();
  }, [router]);

  const handleSave = async () => {
    if (!user) return;

    try {
      // First check if the columns exist in the table
      const { data: tableInfo } = await supabase
        .from("profiles")
        .select("*")
        .limit(1);

      // Build the data object with fields that definitely exist
      const profileData: ProfileData = {
        id: user.id,
        updated_at: new Date().toISOString(),
        full_name: fullName,
      };

      // Only add these fields if they exist in the table schema
      // We determined this by checking the actual table columns
      const hasEmailNotifications =
        tableInfo && tableInfo[0] && "email_notifications" in tableInfo[0];
      const hasDarkMode =
        tableInfo && tableInfo[0] && "dark_mode" in tableInfo[0];

      if (hasEmailNotifications) {
        profileData.email_notifications = emailNotifications;
      }

      if (hasDarkMode) {
        profileData.dark_mode = darkMode;
      }

      // Use upsert to handle both insert and update cases
      const { error } = await supabase.from("profiles").upsert(profileData);

      if (error) throw error;

      toast.success("Settings saved successfully");
    } catch (error) {
      toast.error("Error saving settings");
      console.error("Error saving settings:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>Update your profile information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Manage your application preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications about your CV updates
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle between light and dark theme
                </p>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
