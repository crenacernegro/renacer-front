import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sentencia = () => {
  return (
    <>
      <div className="grid grid-cols-2 items-center mb-4">
        <Image
          src="https://res.cloudinary.com/dik7oba8h/image/upload/v1706113273/wtibdqxzhknerghttoo1.jpg"
          alt="Sentencia"
          width={400}
          height={300}
          objectFit="cover"
          className="border rounded-lg ml-8"
        />
        <p className="text-xl">
          El Consejo Comunitario Renacer Negro,cuyo territorio colectivo de 71
          mil hectáreas le fueron tituladas en mayo de 2001 por el antiguo
          Incora, recuperó sus derechos sobre ese territorio, luego de que el
          Juzgado Primero Civil del Circuito Especializado en Restitución de
          Tierras de Popayán así lo determinara.
          <br />
          <Link href="/public/sentencia.pdf">
            <p className="text-bold">Ver sentencia</p>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Sentencia;
