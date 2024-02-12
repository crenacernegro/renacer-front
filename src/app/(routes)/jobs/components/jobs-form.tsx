"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UploadButton, UploadDropzone } from "../../../../utils/uploadthing";

import { FileText, Pencil, Plus } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CSSProperties, useState } from "react";
import { Button } from "@/components/ui/button";

type ButtonCallbackArguments = {
  ready: boolean;
  isUploading: boolean;
  uploadProgress: number;
  fileTypes: string[];
};

type StyleField =
  | string
  | CSSProperties
  | ((args: ButtonCallbackArguments) => string | CSSProperties);

type UploadButtonProps = {
  /* rest of props */
  appearance?: {
    container?: StyleField;
    button?: StyleField;
    allowedContent?: StyleField;
  };
};

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
  const [pdfUrl, setPdfUrl] = useState("");

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

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
        <p className="mt-4 font-bold">Adjuntar hoja de vida</p>
        <div className="col-span-full">
          <div className="flex justify-between items-center mb-4">
            {pdfUrl && (
              <button
                onClick={() => setPdfUrl("")}
                type="button"
                className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
              >
                <Pencil className="w-5 h-5" />
                <span>Change PDF</span>
              </button>
            )}
          </div>
          {pdfUrl ? (
            <a
              className="flex space-x-3 items-center text-purple-600"
              target="_blank"
              href={pdfUrl}
            >
              <FileText />
              <span>View PDF</span>
            </a>
          ) : (
            <UploadButton
              appearance={{
                container: {
                  padding: "1rem",
                  border: "2px dashed #E5E7EB",
                  borderRadius: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                },
                button: {
                  padding: "0.5rem 1rem",
                  border: "2px solid #E5E7EB",
                  borderRadius: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                },
                allowedContent: {
                  fontSize: "0.75rem",
                  color: "#9CA3AF",
                  textAlign: "center",
                },
              }}
              endpoint="pdfUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Button>Enviar</Button>
        </div>
      </form>
    </Form>
  );
}
