import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import PerfilImage from "../assets/portfolio/a.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            title: 'ES6 [ ARRAY ] DESTRUCTURING',
            demoLink: '#',
            codeLink: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.'
        },
        {
            id: 2,
            title: 'REACT PARALLAX SCROLLING',
            demoLink: '#',
            codeLink: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
        },
        {
            id: 3,
            title: 'RESPONSIVE NAV BAR',
            demoLink: '#',
            codeLink: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusCras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
        },
        {
            id: 4,
            title: 'REACT SMOOTH SCROLLING',
            demoLink: '#',
            codeLink: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
        },
        {
            id: 5,
            title: 'Install Node & Build Server',
            demoLink: '#',
            codeLink: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.'
        },
        {
            id: 6,
            title: 'with forecast',
            demoLink: '#',
            codeLink: '#',
            description: 'PLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risusellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.'
        },
    ];



    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        My Projects
                    </p>
                    <p className="py-6">Echa un vistazo a algunos de mis trabajos aquí:</p>
                </div>
                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        {portfolios.map(({ id, title, codeLink, description }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4 flex flex-col justify-between"> 
                                <div>
                                    <h3 className="text-white text-center mb-4">{title}</h3> 
                                    <p className="text-xs text-gray-300 text-center mb-2">{description}</p> 
                                </div>
                                <div className="flex items-center justify-around bg-gray-800 p-2 mt-auto"> 
                                    <a href={codeLink} className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green700 duration200 text-center">
                                        Code
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p className="text-3xl font-bold py-6">Extra Projects</p>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {portfolios.map(({ id, title, codeLink, description }) => (
                                <SwiperSlide >

                                    <div key={id} class="grid grid-cols-customsm sm:grid-cols-custom gap-2 items-start w-full sm:w-3/4 h-full p-1 rounded-lg mx-auto shadow-md shadow-gray-600">
                                        <div class="h-full p-1 rounded-lg mb-2 flex justify-center">
                                            <img src={PerfilImage} alt="Descripción de la imagen" className="w-full sm:w-3/4 h-full rounded-lg border-2 border-transparent transition-colors duration-300 object-cover" />
                                        </div>
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <h2 className="text-0.8xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 text-center">{title}</h2>
                                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-2">{description}</p>
                                                <div className="flex flex-wrap p-2 sm:p-1">
                                                    <span className="inline-block bg-gray-200 rounded-full px-1 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">HTML</span>
                                                    <span className="inline-block bg-gray-200 rounded-full px-1 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">CSS</span>
                                                    <span className="inline-block bg-gray-200 rounded-full px-1 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">JavaScript</span>
                                                </div>
                                            </div>

                                            <div className="col-span-full flex flex-col items-start p-0.1 mb-5 lg:mb-10">
                                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">User:Prueba@gmail.com</p>
                                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">Pass:1234</p>
                                            </div>
                                        </div>

                                        <div className="col-span-full flex items-center justify-around bg-gray-800 p-2 mt-auto space-x-4">
                                            <a href={codeLink} className="w-full sm:w-2/6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green700 duration200 text-center">
                                                Code
                                            </a>

                                            <a href={codeLink} className="w-full sm:w-2/6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-green700 duration200 text-center">
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
        </div>

    );
}

export default Portfolio;

