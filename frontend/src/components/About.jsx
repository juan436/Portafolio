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
        Soy Juan Villegas, estudiante de décimo semestre de Ingeniería Telemática. 
        Tengo un sólido conocimiento en diversas áreas de la telemática, incluyendo redes y desarrollo fullstack. 
        Me especializo en el desarrollo backend utilizando tecnologías como Node.js, Express, JavaScript y PHP.
        Destaco por mi capacidad para resolver problemas a través de diferentes 
        enfoques y medios, además de poseer un excelente nivel de comunicación. 
        Me siento cómodo y disfruto trabajando en equipo, lo cual considero fundamental para el éxito de cualquier proyecto.
        </p>

        <br />

        <p className="text-xl mb-10">
        La investigación es una de mis pasiones; siempre estoy buscando aprender y descubrir nuevas cosas. 
        Soy autodidacta y estoy comprometido con mi desarrollo profesional continuo, abierto tanto a reforzar 
        mis conocimientos básicos como a explorar e implementar innovaciones.
        </p>
      </div>
    </div>
  );
};

export default About;
