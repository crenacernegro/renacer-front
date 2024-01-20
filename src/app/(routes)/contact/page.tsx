import ContactForm from "./components/contact-form";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const ContactPage = () => {
  return (
    <>
      <div className="mt-24 mb-4 grid grid-cols-1 gap-x-20 w-2/3 m-auto p-4 md:grid md:grid-cols-3 md:gap-20">
        <div className="mb-8">
          <p className="text-4xl font-bold text-lime-950 mb-4">CONTACTO:</p>
          <br />
          <div className="grid grid-cols-2 gap-8 mt-8">
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
        <br />
        <div className="mt-4">
          <ContactForm />
        </div>
        <div>3</div>
      </div>
    </>
  );
};

export default ContactPage;
