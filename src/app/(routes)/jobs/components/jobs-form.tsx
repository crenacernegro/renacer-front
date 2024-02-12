"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  candidatename: z.string().min(2, {
    message: "Nombre del candidato debe ser de al menos 2 caracteres.",
  }),
  candidatelastname: z.string().min(2, {
    message: "Apellido del candidato debe ser de al menos 2 caracteres.",
  }),
  candidateId: z.string().min(2, {
    message: "Cédula del candidato debe ser de al menos 2 caracteres.",
  }),
});

export function JobsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 mx-auto p-4"
      >
        <FormField
          control={form.control}
          name="candidatename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="candidatelastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos</FormLabel>
              <FormControl>
                <Input placeholder="Apellido" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="candidateId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de cédula</FormLabel>
              <FormControl>
                <Input placeholder="Número de cédula" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-8">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
