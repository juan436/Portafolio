import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-black to-black w-full text-white p-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:order-1 mb-4 md:mb-0">
          <p className="text-lg font-semibold">¡Sígueme en mis redes sociales!</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="https://twitter.com/juanVillegas80"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-villegas-aaa05b20a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/juan436"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/584125086548"
              className="text-2xl hover:text-gray-400 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right md:order-2">
          <p className="text-lg">© 2024. Todos los Derechos Reservados.</p>
          <p className="text-lg">
            By <span className="text-xl font-bold">Juan Villegas</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
