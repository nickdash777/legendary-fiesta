"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCVStore } from "@/store/cv-store";
import { z } from "zod";
import { projectSchema } from "@/lib/validators";
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

interface ProjectUpdateFields {
  title?: string;
  description?: string;
  link?: string;
}
const formSchema = z.object({
  projects: z.array(projectSchema),
});

export function ProjectsForm() {
  const { cv, addProject, updateProject, removeProject } = useCVStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projects: cv.projects.length ? cv.projects : [],
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  function onSubmit() {
    // The store manages individual project items
    // so we don't need to do anything here
  }

  const handleAddProject = () => {
    addProject();
  };

  const handleRemoveProject = (index: number, id: string) => {
    remove(index);
    removeProject(id);
  };

  const handleFieldChange = (
    id: string,
    field: keyof ProjectUpdateFields,
    value: string
  ) => {
    updateProject(id, { [field]: value } as ProjectUpdateFields);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.length === 0 ? (
          <div className="text-center p-4 border rounded-md">
            <p className="text-muted-foreground">No projects added yet.</p>
            <Button
              type="button"
              variant="outline"
              onClick={handleAddProject}
              className="mt-4"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </div>
        ) : (
          <>
            {fields.map((field, index) => (
              <Card key={field.id} className="relative">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Project #{index + 1}
                  </CardTitle>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-4 right-4"
                    onClick={() => handleRemoveProject(index, field.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`projects.${index}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Title</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`projects.${index}.id`),
                                "title",
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
                    name={`projects.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`projects.${index}.id`),
                                "description",
                                e.target.value
                              );
                            }}
                            rows={3}
                            placeholder="Describe your project, its purpose, and your contributions"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`projects.${index}.link`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Link (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleFieldChange(
                                form.getValues(`projects.${index}.id`),
                                "link",
                                e.target.value
                              );
                            }}
                            placeholder="https://example.com/project"
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
              onClick={handleAddProject}
              className="w-full"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Project
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
