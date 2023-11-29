import React from "react";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            title: 'ES6 [ ARRAY ] DESTRUCTURING',
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 2,
            title: 'REACT PARALLAX SCROLLING',
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 3,
            title: 'RESPONSIVE NAV BAR',
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 4,
            title: 'REACT SMOOTH SCROLLING',
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 5,
            title: 'Install Node & Build Server',
            demoLink: '#',
            codeLink: '#',
        },
        {
            id: 6,
            title: 'with forecast',
            demoLink: '#',
            codeLink: '#',
        },
    ];

    const renderPortfolios = (title) => (
        <div>
            <p className="text-3xl font-bold p-2 ">
                {title}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"> 
                {portfolios.map(({ id, title, demoLink, codeLink }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <h3 className="text-white text-center py-4">{title}</h3>
                        <div className="flex flex-col sm:flex-row items-center justify-around bg-gray-800 p-4">
                            <a href={demoLink} className="w-full sm:w-1/3 px-6 py-3 m-4 bg-blue-500 text-white rounded hover:bg-blue-700 duration-200 text-center">
                                Demo
                            </a>
                            <a href={codeLink} className="w-full sm:w-1/3 px-6 py-3 m-4 bg-green-500 text-white rounded hover:bg-green-700 duration-200 text-center">
                                Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Echa un vistazo a algunos de mis trabajos aquí:</p>
                </div>
                {renderPortfolios("Full-Stack")}
                {renderPortfolios("Backend")}
            </div>
        </div>
    );
}

export default Portfolio;
