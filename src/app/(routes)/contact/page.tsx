import ContactForm from "./components/contact-form";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";

const ContactPage = () => {
  return (
    <>
      <div className="mt-24 mb-4 grid grid-cols-1 w-3/4  m-auto p-4 md:grid md:grid-cols-3 md:gap-20">
        <div className="mb-8">
          <p className="text-4xl font-bold text-lime-950 mb-4">CONTACTO:</p>
          <br />
          <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-8 gap-x-0">
            <FaPhoneVolume
              className="text-4xl text-lime-950"
              style={{ marginTop: "1rem" }}
            />
            <div className="">3167864270</div>
            <FaMailBulk
              className="text-4xl text-lime-950"
              style={{ marginTop: "1rem" }}
            />
            <div>crenacernegro@gmail.com</div>
            <FaClock
              className="text-4xl text-lime-950"
              style={{ marginTop: "1rem" }}
            />
            <div>Lunes a Viernes entre 8:00 am y 5:30 pm</div>
            <FaLocationDot
              className="text-4xl text-lime-950"
              style={{ marginTop: "1rem" }}
            />
            <div>
              <p>Barrio San Jose</p>
              <p>Timbiquí-Cauca</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <ContactForm />
        </div>
        <div>
          <Button className="mt-8 text-xl ml-8">
            <p className="px-2">¡Dona ahora!</p>
            <CiHeart className="text-2xl" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
