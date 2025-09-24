import { Link } from "@remix-run/react";

export default function About() {
    return (
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-8 hover:border-blue-500 transition-all duration-300">
            {/* The Person I Am */}
            <section className="mb-10">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <img className="h-5 w-5" src="./img/person2.svg" alt="person" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        The Person I Am
                    </h1>
                </div>
                <blockquote className="text-gray-200 text-lg italic pl-4 border-l-4 border-blue-500 mb-6 leading-relaxed">
                    "Hi, I'm Charls Dave Erana, a Software Developer/IT Personnel passionate about Web Development and designs. I help clients achieve their needs and expectations through my skills and knowledge."
                </blockquote>
            </section>

            {/* My Journey */}
            <section className="mb-10">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <img className="h-5 w-5" src="./img/magnify.svg" alt="journey" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        My Journey
                    </h1>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    After graduating from the University of Cebu – Banilad, I began my career as a Junior Software Developer, where I spent four years honing my skills. I then transitioned to an IT Personnel role to expand my expertise beyond development into server management and technical operations. My professional journey began with roles as a Service Crew at Jollibee and later as a Software Application Tester during my OJT, focusing on quality assurance.
                </p>
                <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                        <div className="bg-gray-700 p-1.5 rounded-full mr-3 mt-0.5 flex-shrink-0">
                            <img className="h-4 w-4" src="./img/correct.svg" alt="motto" />
                        </div>
                        <p className="text-gray-300 italic">Motto 1: It does not matter how slowly you go so long as you do not stop.</p>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-gray-700 p-1.5 rounded-full mr-3 mt-0.5 flex-shrink-0">
                            <img className="h-4 w-4" src="./img/correct.svg" alt="motto" />
                        </div>
                        <p className="text-gray-300 italic">Motto 2: Simplicity is beauty.</p>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-gray-700 p-1.5 rounded-full mr-3 mt-0.5 flex-shrink-0">
                            <img className="h-4 w-4" src="./img/correct.svg" alt="values" />
                        </div>
                        <p className="text-gray-300 italic">My Values: Honesty, creativity, and sustainability drive my work.</p>
                    </div>
                </div>
            </section>

            {/* My Expertise */}
            <section className="mb-10">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <img className="h-5 w-5" src="./img/files.svg" alt="expertise" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        My Expertise
                    </h1>
                </div>
                <ul className="text-gray-300 space-y-3 pl-2">
                    {[
                        "Designing WordPress websites for small businesses or personal projects",
                        "Troubleshooting and setting up computers, laptops, and printers",
                        "CCTV installation and configuration",
                        "Developing web applications to meet client needs (UI/UX) using Angular, WordPress, React, and other technologies",
                        "Application testing for optimal performance and quality assurance"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="bg-blue-500 rounded-full w-2 h-2 mt-2.5 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Fun Facts */}
            <section className="mb-10">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <img className="h-5 w-5" src="./img/funfact.svg" alt="fun facts" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        Fun Facts
                    </h1>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-xl p-5 mb-4">
                    <h3 className="text-blue-300 font-semibold mb-2">Hobbies:</h3>
                    <p className="text-gray-300 leading-relaxed">
                        I'm a passionate drummer and enjoy playing in bands. My musical journey began with guitar and bass, and I continue to enjoy making music. When I'm not coding, you can find me gaming on my PS5 or playing Mobile Legends during breaks.
                    </p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-xl p-5">
                    <h3 className="text-blue-300 font-semibold mb-2">Favorites:</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Black coffee, traveling to new places, and all kinds of music.
                    </p>
                </div>
            </section>

            {/* Let's Connect */}
            <section>
                <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                        <img className="h-5 w-5" src="./img/mail-at.svg" alt="contact" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        Let's Connect
                    </h1>
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "Want to collaborate or just say hello? Reach out through any of these channels:"
                </p>
                <div className="space-y-3">
                    {[
                        { icon: "facebook.svg", text: "Charls Dave Erana", url: "https://www.facebook.com/sakenerana" },
                        { icon: "gmail.svg", text: "sakenerana@gmail.com", url: "mailto:sakenerana@gmail.com" },
                        { icon: "github.svg", text: "sakenerana", url: "https://github.com/" },
                        { icon: "instagram.svg", text: "@charlsdaveerana", url: "https://www.instagram.com/charlsdaveerana/" },
                        { icon: "linkedin.svg", text: "Charls Dave Erana", url: "https://www.linkedin.com/in/charls-dave-erana-39b8b6180/" }
                    ].map((contact, index) => (
                        <Link
                            key={index}
                            to={contact.url}
                            target="_blank"
                            className="flex items-center group transition-all hover:-translate-y-0.5"
                        >
                            <div className="flex items-center bg-gray-700 group-hover:bg-gray-600 w-full p-4 rounded-xl transition-all border border-gray-600 group-hover:border-blue-500 shadow-sm group-hover:shadow-md">
                                <div className="bg-gray-600 p-2 rounded-lg mr-4">
                                    <img
                                        className="h-5 w-5 object-contain"
                                        src={`./img/${contact.icon}`}
                                        alt={contact.icon.split('.')[0]}
                                    />
                                </div>
                                <span className="text-gray-200 group-hover:text-white font-medium">{contact.text}</span>
                                <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}