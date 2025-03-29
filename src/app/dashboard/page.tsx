"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, PlusCircle, FileText, Download } from "lucide-react";
import { useCVStore } from "@/store/cv-store";

export default function DashboardPage() {
  const router = useRouter();
  const [cvs, setCVs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { loadCV } = useCVStore();

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/login");
        return;
      }

      fetchCVs();
    }

    checkAuth();
  }, [router]);

  async function fetchCVs() {
    try {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("cvs")
        .select("*")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });

      if (error) throw error;
      setCVs(data || []);
    } catch (error) {
      console.error("Error fetching CVs:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLoadCV(id: string) {
    await loadCV(id);
    router.push("/cv-builder");
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My CVs</h1>
        <Link href="/cv-builder">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New CV
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : cvs.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-60">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              You havent created any CVs yet.
            </p>
            <Link href="/cv-builder" className="mt-4">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Your First CV
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvs.map((cv) => (
            <Card key={cv.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{cv.title}</CardTitle>
                <CardDescription>
                  Template:{" "}
                  {cv.template.charAt(0).toUpperCase() + cv.template.slice(1)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date(cv.updated_at).toLocaleDateString()}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleLoadCV(cv.id)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleLoadCV(cv.id)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
