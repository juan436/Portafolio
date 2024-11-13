import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mi
          </p>
        </div>

        <p className="text-xl mt-20">
        Soy Juan Villegas, programador Full Stack con experiencia en tecnologías como Next.js, React, Node.js, Express, PHP y Laravel, así como en bases de datos relacionales y no relacionales. Actualmente, curso el décimo semestre de Ingeniería Telemática en la Universidad Centroccidental “Lisandro Alvarado” UCLA lo que me ha permitido adquirir un sólido conocimiento en redes y desarrollo de software.
        </p>

        <br />

        <p className="text-xl mb-10">
        Destaco por mi capacidad para resolver problemas desde distintos enfoques y por mi habilidad para comunicarme efectivamente, cualidades que considero esenciales para el éxito en proyectos de equipo. La investigación y el aprendizaje continuo son mi pasión; disfruto explorando nuevas tecnologías y aplicando innovaciones que optimicen mis desarrollos. Soy autodidacta, comprometido con mi crecimiento profesional y siempre dispuesto a reforzar y expandir mis conocimientos.
        </p>
      </div>
    </div>
  );
};

export default About;
