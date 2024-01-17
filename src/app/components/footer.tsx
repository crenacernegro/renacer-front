import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center h-full  w-full bg-lime-950 p-2 font-semibold text-slate-50 dark:border-b dark:border-stone-600 dark:bg-stone-900">
        <nav className="mt-4 grid grid-cols-1 justify-between gap-4 p-4 text-lg sm:grid-flow-col sm:gap-4">
          <Link href={"/consejo"}>El consejo</Link>
          <Link href={"/project"}>Proyectos</Link>
          <Link href={"/donacion"}>Donaciones</Link>
          <Link href={"/post"}>Noticias</Link>
          <Link href={"/contact"}>Contacto</Link>
        </nav>
        {/*Social media links */}
        <nav>
          <div className="grid grid-flow-col gap-4 p-2">
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
          <div>Síguenos en redes sociales!</div>
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
