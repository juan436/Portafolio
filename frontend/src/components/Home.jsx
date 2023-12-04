import React from "react";
import PerfilImage from "../assets/perfil.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I´m a Back end Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Student in the process of Telematics Engineering,
                        I have programming knowledge front-end and back-end,
                        I have the ability to troubleshooting and good perform.
                    </p>

                    <div>
                        <Link to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
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
                    className="rounded-2xl mx-auto w-2/3 md:w-full object-cover h-full" 
                    />
                </div>
            </div>
        </div>
    );
}


export default Home;