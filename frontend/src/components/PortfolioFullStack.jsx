import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

const SkeletonLoader = () => (
    <div className="grid grid-cols-customsm sm:grid-cols-custom gap-2 items-start w-full sm:w-3/4 h-full p-1 rounded-lg mx-auto shadow-md shadow-gray-600 animate-pulse">
        <div className="h-full p-1 rounded-lg mb-2 flex justify-center bg-gray-700">
            <div className="w-full sm:w-3/4 h-full rounded-lg bg-gray-600"></div>
        </div>
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="h-6 bg-gray-600 mb-4 rounded"></div>
                <div className="h-4 bg-gray-600 mb-2 rounded"></div>
                <div className="flex flex-wrap">
                    <div className="h-4 bg-gray-600 rounded-full px-2 py-1 mr-1 mb-1"></div>
                    <div className="h-4 bg-gray-600 rounded-full px-2 py-1 mr-1 mb-1"></div>
                    <div className="h-4 bg-gray-600 rounded-full px-2 py-1 mr-1 mb-1"></div>
                </div>
            </div>
            <div className="col-span-full flex flex-col items-start p-0.1 mb-5 lg:mb-10">
                <div className="h-4 bg-gray-600 mb-2 rounded"></div>
                <div className="h-4 bg-gray-600 mb-2 rounded"></div>
            </div>
        </div>
        <div className="col-span-full flex items-center justify-around bg-gray-1000 p-2 mt-auto space-x-4">
            <div className="w-full sm:w-2/6 h-10 bg-gray-600 rounded"></div>
            <div className="w-full sm:w-2/6 h-10 bg-gray-600 rounded"></div>
        </div>
    </div>
);

const PortfolioFullStack = () => {
    const [projectsFS, setProjectsFS] = useState([]);
    const [loading, setLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (loading && retryCount < 10) {
                setRetryCount(retryCount + 1);
                ObtenerprojectsFullStack();
            }
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [loading, retryCount]);

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
            setLoading(false);
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
                    {loading ? (
                        <SkeletonLoader />
                    ) : (
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true, el: '.swiper-scrollbar' }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {projectsFS.map(({ id, title, description, userTest, passTest, techSkills, codeLink, codeDeploy, image }) => (
                                <SwiperSlide key={id}>
                                    <div className="grid grid-cols-customsm sm:grid-cols-custom gap-2 items-start w-full sm:w-3/4 h-full p-1 rounded-lg mx-auto shadow-md shadow-gray-600">
                                        <div className="h-full p-1 rounded-lg mb-2 flex justify-center">
                                            <img src={image} alt="Descripción de la imagen" className="w-full sm:w-3/4 h-full rounded-lg border-2 border-transparent transition-colors duration-300 object-cover" />
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
                                        <div className="col-span-full flex items-center justify-around bg-gray-1000 p-2 mt-auto space-x-4">
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
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfolioFullStack;