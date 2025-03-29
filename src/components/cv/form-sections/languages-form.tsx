"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCVStore } from "@/store/cv-store";
import { z } from "zod";
import { languageSchema } from "@/lib/validators";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";

interface LanguageUpdateFields {
  name?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Fluent" | "Native";
}
const formSchema = z.object({
  languages: z.array(languageSchema),
});

const languageLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Fluent",
  "Native",
] as const;

export function LanguagesForm() {
  const { cv, addLanguage, updateLanguage, removeLanguage } = useCVStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      languages: cv.languages.length ? cv.languages : [],
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "languages",
  });

  function onSubmit() {
    // The store manages individual language items
    // so we don't need to do anything here
  }

  const handleAddLanguage = () => {
    addLanguage();
  };

  const handleRemoveLanguage = (index: number, id: string) => {
    remove(index);
    removeLanguage(id);
  };

  const handleFieldChange = (
    id: string,
    field: keyof LanguageUpdateFields,
    value: string | LanguageUpdateFields["level"]
  ) => {
    updateLanguage(id, { [field]: value } as LanguageUpdateFields);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.length === 0 ? (
          <div className="text-center p-4 border rounded-md">
            <p className="text-muted-foreground">No languages added yet.</p>
            <Button
              type="button"
              variant="outline"
              onClick={handleAddLanguage}
              className="mt-4"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Language
            </Button>
          </div>
        ) : (
          <>
            {fields.map((field, index) => (
              <Card key={field.id} className="relative">
                <CardContent className="pt-6 pb-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 h-8 w-8 p-0"
                    onClick={() => handleRemoveLanguage(index, field.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name={`languages.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Language</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange(
                                  form.getValues(`languages.${index}.id`),
                                  "name",
                                  e.target.value
                                );
                              }}
                              placeholder="e.g., Georgian, English, Russian"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`languages.${index}.level`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proficiency</FormLabel>
                          <Select
                            value={field.value}
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleFieldChange(
                                form.getValues(`languages.${index}.id`),
                                "level",
                                value as
                                  | "Beginner"
                                  | "Intermediate"
                                  | "Advanced"
                                  | "Fluent"
                                  | "Native"
                              );
                            }}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {languageLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={handleAddLanguage}
              className="w-full"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Language
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
