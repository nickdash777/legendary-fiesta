"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCVStore } from "@/store/cv-store";
import { z } from "zod";
import { educationSchema } from "@/lib/validators";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";

interface EducationUpdateFields {
  institution?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

const formSchema = z.object({
  education: z.array(educationSchema),
});

export function EducationForm() {
  const { cv, addEducation, updateEducation, removeEducation } = useCVStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      education: cv.education.length ? cv.education : [],
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "education",
  });

  function onSubmit() {
    // The store manages individual education items
    // so we don't need to do anything here
  }

  const handleAddEducation = () => {
    addEducation();
  };

  const handleRemoveEducation = (index: number, id: string) => {
    remove(index);
    removeEducation(id);
  };

  const handleFieldChange = (
    id: string,
    field: keyof EducationUpdateFields,
    value: string
  ) => {
    updateEducation(id, { [field]: value } as EducationUpdateFields);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.length === 0 ? (
          <div className="text-center p-4 border rounded-md">
            <p className="text-muted-foreground">No education added yet.</p>
            <Button
              type="button"
              variant="outline"
              onClick={handleAddEducation}
              className="mt-4"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Education
            </Button>
          </div>
        ) : (
          <>
            {fields.map((field, index) => (
              <Card key={field.id} className="relative">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Education #{index + 1}
                  </CardTitle>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-4 right-4"
                    onClick={() => handleRemoveEducation(index, field.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`education.${index}.institution`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`education.${index}.id`),
                                "institution",
                                e.target.value
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`education.${index}.degree`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Degree</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`education.${index}.id`),
                                "degree",
                                e.target.value
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name={`education.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange(
                                  form.getValues(`education.${index}.id`),
                                  "startDate",
                                  e.target.value
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`education.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange(
                                  form.getValues(`education.${index}.id`),
                                  "endDate",
                                  e.target.value
                                );
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name={`education.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`education.${index}.id`),
                                "description",
                                e.target.value
                              );
                            }}
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={handleAddEducation}
              className="w-full"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Education
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
