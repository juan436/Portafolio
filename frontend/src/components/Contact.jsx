import React, { useState } from "react";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Submit the form
    const form = e.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: formData,
    }).then(() => {
      setMessageSent(true);
      form.reset();
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    });
  };

  return (
    <div
      name="contactame"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contactame
          </p>
          <p className="py-6">
            Envíe el siguiente formulario para ponerse en contacto conmigo
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/eapdvxma"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese su correo"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Ingrese su mensaje"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Hablemos
            </button>
          </form>
        </div>

        {messageSent && (
          <div className="mt-4 text-green-500 text-center">
            Enviado
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
