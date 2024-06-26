import React from "react";

// Importa las imágenes para las tecnologías
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import php from "../assets/php.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";
import docker from "../assets/docker.png";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: php,
      title: "PHP",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 10,
      src: docker,
      title: "Docker",
      style: "shadow-indigo-500",
    },
  ];

  return (
    <div
      name="habilidades"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Habilidades
          </p>
          <p className="py-6">
            Estas son las tecnologías con las que he trabajado.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="mx-auto" style={{ width: "80px", height: "80px" }} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
