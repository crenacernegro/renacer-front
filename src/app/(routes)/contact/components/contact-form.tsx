"use client";

import React from "react";

import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const ContactForm = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold text-lime-950">
          Envíanos un mensaje y pronto nos pondremos en contacto contigo.
        </h2>
      </div>
      <form
        className=" flex flex-col dark:text-black rounded-lg w-full"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Correo enviado, muchas gracias!");
        }}
      >
        <p className="font-semibold mb-4 mt-4">Correo</p>
        <input
          className="bg-lime-100 h-14 p-4 rounded-lg border border-gray-500 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="tu correo"
        />
        <p className="mt-4 font-semibold">Mensaje</p>
        <textarea
          className="bg-lime-100 mb-4 h-40 my-3 rounded-lg border border-gray-500 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="tu mensaje"
          required
          maxLength={5000}
        />
        <div className="flex justify-center items-center">
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
