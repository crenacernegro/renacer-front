import React from "react";
import Image from "next/image";

const GestionPage = () => {
  return (
    <div className="w-full bg-white py-4 text-lime-950">
      <h1 className="flex items-center justify-center text-4xl font-bold">
        Quienes somos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        <p className="p-8 text-justify text-2xl">
          El consejo comunitario Renacer Negro está ubicado entre las
          comunidades de Cheté y Coteje, en el municipio de Timbiquí,
          departamento del Cauca.
        </p>
        <Image
          alt="Timbiqui location"
          src="https://res.cloudinary.com/dik7oba8h/image/upload/v1707151869/lanchabomba_en_timbiqui_cauca_b2ur2i.jpg"
          width={400}
          height={300}
          objectFit="cover"
          className="border rounded-lg p-2 md:ml-24"
        />
      </div>
    </div>
  );
};

export default GestionPage;
