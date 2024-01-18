import ContactForm from "./components/contact-form";

const ContactPage = () => {
  return (
    <div className="mt-24 mb-4 grid grid-cols-1 gap-4 w-2/3 m-auto p-4 md:grid md:grid-cols-3">
      <h1 className="flex items-center justify-center">contacto</h1>
      <h1 className="flex items-center justify-center">
        <ContactForm />
      </h1>
      <h1 className="flex items-center justify-center">Buttons</h1>
    </div>
  );
};

export default ContactPage;
