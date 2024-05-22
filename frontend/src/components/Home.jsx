import React from "react";
import PerfilImage from "../assets/perfil1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-5"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Juan Villegas Desarrollador Backend
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Soy un studiante en proceso de Ingeniería Telemática, tengo conocimientos de programación front-end y back-end,
            tengo capacidad de resolución de problemas y buen desempeño.
          </p>

          <div>
            <Link
              to="FullStack"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portafolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={PerfilImage}
            alt="profile"
            className="rounded-2xl mx-auto w-full md:max-w-lg object-cover h-auto md:h-max"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 50%, transparent 92%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
