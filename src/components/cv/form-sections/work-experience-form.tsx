"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCVStore } from "@/store/cv-store";
import { z } from "zod";
import { workExperienceSchema } from "@/lib/validators";
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

interface WorkExperienceUpdateFields {
  company?: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

const formSchema = z.object({
  workExperience: z.array(workExperienceSchema),
});

export function WorkExperienceForm() {
  const { cv, addWorkExperience, updateWorkExperience, removeWorkExperience } =
    useCVStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workExperience: cv.workExperience.length ? cv.workExperience : [],
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "workExperience",
  });

  function onSubmit() {
    // The store manages individual work experience items
    // so we don't need to do anything here
  }

  const handleAddWorkExperience = () => {
    addWorkExperience();
  };

  const handleRemoveWorkExperience = (index: number, id: string) => {
    remove(index);
    removeWorkExperience(id);
  };

  const handleFieldChange = (
    id: string,
    field: keyof WorkExperienceUpdateFields,
    value: string
  ) => {
    updateWorkExperience(id, { [field]: value } as WorkExperienceUpdateFields);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.length === 0 ? (
          <div className="text-center p-4 border rounded-md">
            <p className="text-muted-foreground">
              No work experience added yet.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={handleAddWorkExperience}
              className="mt-4"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Work Experience
            </Button>
          </div>
        ) : (
          <>
            {fields.map((field, index) => (
              <Card key={field.id} className="relative">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Work Experience #{index + 1}
                  </CardTitle>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-4 right-4"
                    onClick={() => handleRemoveWorkExperience(index, field.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`workExperience.${index}.company`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`workExperience.${index}.id`),
                                "company",
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
                    name={`workExperience.${index}.position`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`workExperience.${index}.id`),
                                "position",
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
                      name={`workExperience.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange(
                                  form.getValues(`workExperience.${index}.id`),
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
                      name={`workExperience.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleFieldChange(
                                  form.getValues(`workExperience.${index}.id`),
                                  "endDate",
                                  e.target.value
                                );
                              }}
                              placeholder="Present (if current)"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name={`workExperience.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`workExperience.${index}.id`),
                                "description",
                                e.target.value
                              );
                            }}
                            rows={4}
                            placeholder="Describe your responsibilities and achievements"
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
              onClick={handleAddWorkExperience}
              className="w-full"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Work Experience
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
