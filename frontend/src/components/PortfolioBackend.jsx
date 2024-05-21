import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Importa useLocation para obtener la ruta actual

const PortfolioBackend = ({ showPlusButton, limitProjects }) => {
    const [projectsB, setProjects] = useState([]);
    const location = useLocation(); // Obtiene la ruta actual
    const [displayedProjects, setDisplayedProjects] = useState([]);

    useEffect(() => {
        obtenerProyectosBackend();
    }, []);

    useEffect(() => {
        if (limitProjects) {
            const slicedProjects = projectsB.slice(0, 6);
            setDisplayedProjects(slicedProjects);
        } else {
            setDisplayedProjects(projectsB);
        }
    }, [projectsB, limitProjects]);

    const obtenerProyectosBackend = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/projects/getBackendProjects');
            const proyectosBackend = response.data.map((proyecto) => ({
                id: proyecto._id.toString(),
                title: proyecto.title,
                description: proyecto.description,
                codeLink: proyecto.linkRepository,
            }));
            setProjects(proyectosBackend);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    return (
        <div name="Backend" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className={`pb-8 flex items-center ${location.pathname === '/projectback' ? 'justify-center' : 'justify-start'}`}>
                    <p className={`text-4xl font-bold inline ${location.pathname !== '/projectback' && 'border-b-4 border-gray-500'}`}>
                        Proyectos Backend
                    </p>
                    {showPlusButton && (
                        <span className="text-gray-400 text-2xl ml-2"><a href="/projectback">+</a></span>
                    )}
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {displayedProjects.map(({ id, title, description, codeLink }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4 flex flex-col justify-between">
                            <div>
                                <h3 className="text-white text-center mb-4">{title}</h3>
                                <p className="text-xs text-gray-300 text-center mb-2">{description}</p>
                            </div>
                            <div className="flex items-center justify-around bg-gray-800 p-2 mt-auto">
                                <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green700 duration-200 text-center"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioBackend;
