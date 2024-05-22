import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

const PortfolioFullStack = () => {
    const [projectsFS, setProjectsFS] = useState([]);

    useEffect(() => {
        ObtenerprojectsFullStack();
    }, []);

    const ObtenerprojectsFullStack = async () => {
        try {
            const response = await axios.get('https://portafolio-dwdb.onrender.com/api/projects/getFullStackProjects');
            const projectsFS = response.data.map((project) => ({
                id: project._id.toString(),
                title: project.title,
                description: project.description,
                userTest: project.userTest,
                passTest: project.passTest,
                techSkills: project.techSkills || [],
                codeLink: project.linkRepository,
                codeDeploy: project.linkDeploy,
                image: project.image || ''
            }));

            setProjectsFS(projectsFS);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div name="FullStack" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Proyectos Full-Stack
                    </p>
                    <p className="py-6">Echa un vistazo a algunos de mis trabajos aquí:</p>
                </div>
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {projectsFS.map(({ id, title, description, userTest, passTest, techSkills, codeLink, codeDeploy, image }) => (
                            <SwiperSlide key={id}>
                                <div className="grid grid-cols-customsm sm:grid-cols-custom gap-2 items-start w-full sm:w-3/4 h-full p-1 rounded-lg mx-auto shadow-md shadow-gray-600">
                                    <div className="h-full p-1 rounded-lg mb-2 flex justify-center">
                                        <img src={`https://portafolio-dwdb.onrender.com/uploads/${image}`} alt="Descripción de la imagen" className="w-full sm:w-3/4 h-full rounded-lg border-2 border-transparent transition-colors duration-300 object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h2 className="text-0.8xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 text-center">{title}</h2>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-2">{description}</p>
                                            {techSkills.map((skill, index) => (
                                                <span key={index} className="inline-block bg-gray-200 rounded-full px-1 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="col-span-full flex flex-col items-start p-0.1 mb-5 lg:mb-10">
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">User: {userTest}</p>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">Pass: {passTest}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-full flex items-center justify-around bg-gray-800 p-2 mt-auto space-x-4">
                                        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-2/6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 duration-200 text-center">
                                            Code
                                        </a>
                                        <a href={codeDeploy} target="_blank" rel="noopener noreferrer" className="w-full sm:w-2/6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 duration-200 text-center">
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default PortfolioFullStack;
