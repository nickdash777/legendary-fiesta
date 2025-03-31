"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCVStore } from "@/store/cv-store";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  summary: z.string().optional(),
  title: z.string().min(1, "CV title is required"),
  template: z.enum(["classic", "modern", "professional"]),
});

type FormValues = z.infer<typeof formSchema>;

export function SummaryForm() {
  const { cv, setSummary, template, setTemplate, title, setTitle } =
    useCVStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema), // Now using the schema for validation
    defaultValues: {
      summary: cv.summary || "",
      title: title,
      template: template,
    },
  });

  function onSubmit(data: FormValues) {
    setSummary(data.summary || "");
    setTitle(data.title);
    setTemplate(data.template);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CV Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="My Professional CV"
                  onChange={(e) => {
                    field.onChange(e);
                    setTitle(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="template"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CV Template</FormLabel>
              <Select
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value);
                  setTemplate(value as "classic" | "modern" | "professional");
                }}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Summary</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Write a brief summary of your professional experience, skills, and career goals..."
                  rows={6}
                  onChange={(e) => {
                    field.onChange(e);
                    setSummary(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
              <p className="text-sm text-muted-foreground">
                A good summary highlights your key qualifications and what makes
                you a strong candidate.
              </p>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
