"use client";
import { JobsForm } from "./components/jobs-form";

import React, { useState } from "react";

const JobsPage = () => {
  return (
    <div className="mt-24">
      <h1 className="flex text-bold text-4xl items-center justify-center p-4 text-lime-950 ml-16">
        Trabaje con nosotros
      </h1>
      <p className="w-2/3 mx-auto text-md p-4">
        Gracias por interesarse en el Comsejo Comunitario Renacer Negro. Lo
        invitamos a postular su hoja de vida en este espacio.
      </p>
      <p className="w-2/3 mx-auto text-md p-4 font-bold">
        Por favor tenga en cuenta que el envío de su hoja de vida no constituye
        compromiso de vinculación con el Consejo.
      </p>
      <JobsForm />
    </div>
  );
};

export default JobsPage;
