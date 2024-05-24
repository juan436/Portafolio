import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            id: 1,
            child: <FaLinkedin size={30} />,
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/juan-villegas-aaa05b20a",
        },
        {
            id: 2,
            child: <FaGithub size={30} />,
            text: "GitHub",
            href: "https://github.com/juan436",
        },
        {
            id: 3,
            child: <HiOutlineMail size={30} />,
            text: "Mail",
            href: "mailto:juancvillefer@gmail.com",
        },
        {
            id: 4,
            child: <BsFillPersonLinesFill size={30} />,
            text: "Resume",
            href: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3430.appspot.com/o/curriculum%2FCurriculum%20Juan%20Villegas.pdf?alt=media&token=f7f059c9-4867-4c33-9772-973350090bc3",
            download: true,
        },
    ];

    useEffect(() => {
        const handleClickOutside = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black opacity-90 z-40"></div>}
            
            <div className={`lg:hidden fixed ${isOpen ? 'inset-0 flex items-center justify-center z-40' : 'top-1/2 left-0 transform -translate-y-1/2 z-30'}`}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                    className={`text-gray-300 bg-gray-700 p-2 rounded-full opacity-${isOpen ? '100' : '80'} hover:opacity-100 focus:outline-none z-30`}
                >
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                        <span role="img" aria-label="menu" className="text-lg opacity-75">🌐</span>
                    </div>
                </button>
                {isOpen && (
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <ul className="absolute w-full h-full flex flex-wrap items-center justify-center">
                                {links.map(({ id, child, href, download, text }, index) => {
                                    const angle = (index / links.length) * 2 * Math.PI;
                                    const x = 80 * Math.cos(angle);
                                    const y = 80 * Math.sin(angle);
                                    return (
                                        <li
                                            key={id}
                                            className="absolute transition-transform transform hover:scale-110"
                                            style={{
                                                left: `calc(50% + ${x}px)`,
                                                top: `calc(50% + ${y}px)`,
                                                transform: `translate(-50%, -50%)`
                                            }}
                                        >
                                            <a
                                                href={href}
                                                className="flex items-center text-white"
                                                download={download}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="hidden lg:inline">{text}</span>
                                                <span className="lg:hidden">{child}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* Links for Large Screens */}
            <div className={`hidden lg:flex flex-col top-[35%] left-0 fixed ${isOpen ? 'opacity-50' : ''}`}>
                <ul>
                    {links.map(({ id, child, href, download, text }) => (
                        <li
                            key={id}
                            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="hidden lg:inline">{text}</span> 
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SocialLinks;
