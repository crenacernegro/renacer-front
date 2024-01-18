import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "./logo";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center h-full  w-full bg-lime-950 p-2 font-semibold text-slate-50 dark:border-b dark:border-stone-600 dark:bg-stone-900">
        <nav className="mt-4 grid grid-cols-1 justify-between gap-8 p-4 text-lg sm:flex sm:flex-row sm:justify-center">
          <Link href={"/consejo"}>El consejo</Link>
          <Link href={"/project"}>Proyectos</Link>
          <Link href={"/donacion"}>Donaciones</Link>
          <Link href={"/post"}>Noticias</Link>
          <Link href={"/contact"}>Contacto</Link>
        </nav>
        {/*Social media links */}
        <nav>
          <div className="flex flex-row gap-4 justify-center">
            {/*Youtube */}
            <a
              href="https://www.youtube.com/channel/UCmYs8a-JSmvzqg5gSrG_Ymw"
              target="_blank"
            >
              <FaYoutube className="text-3xl" />
            </a>
            {/*Instagram */}
            <a href="/">
              <FaInstagram className="text-3xl" />
            </a>
            {/*Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61553325365441"
              target="_blank"
            >
              <FaFacebook className="text-3xl" />
            </a>
          </div>
          <div className="mt-4">Síguenos en redes sociales!</div>
          <div className="flex items-center justify-center p-4">
            <Link href={"/"}>
              <Logo
                alt="Logo"
                srcLight="https://res.cloudinary.com/dxa54qfxx/image/upload/v1701312593/Light_1_eqz3wk.svg"
                srcDark="https://res.cloudinary.com/dxa54qfxx/image/upload/t_Project1Renacer/v1701312593/Dark_xjddfi.svg"
                width={80}
                height={80}
              />
            </Link>
          </div>
        </nav>
        <aside>
          <p className="p-4 font-semibold">
            Copyright © 2023 - Todos los derechos reservados{" "}
            <span className="text-lime-500">
              CONSEJO COMUNITARIO RENACER NEGRO
            </span>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
