"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCVStore } from "@/store/cv-store";
import { z } from "zod";
import { skillSchema } from "@/lib/validators";
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
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface SkillUpdateFields {
  name?: string;
  level?: number;
}

const formSchema = z.object({
  skills: z.array(skillSchema),
});

export function SkillsForm() {
  const { cv, addSkill, updateSkill, removeSkill } = useCVStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: cv.skills.length ? cv.skills : [],
    },
  });

  const { fields, remove } = useFieldArray({
    control: form.control,
    name: "skills",
  });

  function onSubmit() {
    // The store manages individual skill items
    // so we don't need to do anything here
  }

  const handleAddSkill = () => {
    addSkill();
  };

  const handleRemoveSkill = (index: number, id: string) => {
    remove(index);
    removeSkill(id);
  };

  const handleFieldChange = (
    id: string,
    field: keyof SkillUpdateFields,
    value: string | number
  ) => {
    updateSkill(id, { [field]: value } as SkillUpdateFields);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.length === 0 ? (
          <div className="text-center p-4 border rounded-md">
            <p className="text-muted-foreground">No skills added yet.</p>
            <Button
              type="button"
              variant="outline"
              onClick={handleAddSkill}
              className="mt-4"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Skill
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
                    onClick={() => handleRemoveSkill(index, field.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name={`skills.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Skill Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  handleFieldChange(
                                    form.getValues(`skills.${index}.id`),
                                    "name",
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

                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name={`skills.${index}.level`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Proficiency Level ({field.value}/5)
                            </FormLabel>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={1}
                                max={5}
                                step={1}
                                onValueChange={(value) => {
                                  field.onChange(value[0]);
                                  handleFieldChange(
                                    form.getValues(`skills.${index}.id`),
                                    "level",
                                    value[0]
                                  );
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={handleAddSkill}
              className="w-full"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Skill
            </Button>
          </>
        )}
      </form>
    </Form>
  );
}
