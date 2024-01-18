"use client";

import React from "react";

import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const ContactForm = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">
          Envíanos un mensaje y pronto nos pondremos en contacto contigo.
        </h2>
      </div>
      <form
        className="mt-10 flex flex-col dark:text-black border border-gray-500 rounded-lg p-2 w-full"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Correo enviado, muchas gracias!");
        }}
      >
        <p>Correo</p>
        <input
          className="h-14 p-4 rounded-lg border border-gray-500 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="tu correo"
        />
        <p>Mensaje</p>
        <textarea
          className="h-52 my-3 rounded-lg border border-gray-500 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="tu mensaje"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default ContactForm;
