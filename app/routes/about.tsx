import { Link } from "@remix-run/react";

export default function About() {
    return (
        <div className="bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="mb-10 pb-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5 text-blue-600" src="./img/person2.svg" alt="person" />
                    </div>
                    <h1 className="text-xl font-semibold text-gray-900 ml-3">
                        About Me
                    </h1>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    I'm Charls Dave Erana — a Full Stack Developer and IT Professional passionate about creating digital solutions that solve real-world problems. With expertise in both development and technical operations, I bridge the gap between code and infrastructure.
                </p>
            </div>

            {/* Career Journey */}
            <section className="mb-8">
                <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5" src="./img/magnify.svg" alt="journey" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                        Professional Journey
                    </h2>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                        My career began at the University of Cebu – Banilad, where I developed a strong foundation in software development. I spent four years as a Junior Software Developer, focusing on web applications and user experience before transitioning into IT operations to broaden my technical expertise.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <p className="text-gray-700 italic text-sm">
                            "It does not matter how slowly you go as long as you do not stop."
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mb-8">
                <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5" src="./img/files.svg" alt="values" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                        Core Values
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                        { title: "Simplicity", desc: "Clean, efficient solutions over complexity" },
                        { title: "Honesty", desc: "Transparent communication and integrity" },
                        { title: "Sustainability", desc: "Build to last and evolve" }
                    ].map((value, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <h3 className="font-medium text-gray-900 mb-1">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Expertise */}
            <section className="mb-8">
                <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5" src="./img/setting.svg" alt="expertise" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                        Areas of Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide text-gray-500">Development</h3>
                        <ul className="space-y-2">
                            {[
                                "Full Stack Web Applications",
                                "React & Angular Development",
                                "UI/UX Design Implementation",
                                "API Development & Integration"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide text-gray-500">IT Operations</h3>
                        <ul className="space-y-2">
                            {[
                                "System & Server Management",
                                "Network Configuration",
                                "Security & CCTV Systems",
                                "Technical Troubleshooting"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Personal Section */}
            <section className="mb-10">
                <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5" src="./img/funfact.svg" alt="personal" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                        Beyond Code
                    </h2>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100">
                    <p className="text-gray-700 mb-4">
                        When I'm not developing software, you'll find me playing drums in bands, exploring new destinations, or gaming on my PS5. My passion for music began with guitar and bass, and continues to influence my creative approach to problem-solving.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Music", "Travel", "Gaming", "Coffee", "Photography"].map((interest, index) => (
                            <span key={index} className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section>
                <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5" src="./img/mail-at.svg" alt="contact" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                        Let's Connect
                    </h2>
                </div>
                <div className="space-y-3">
                    {[
                        {
                            icon: "linkedin.svg",
                            text: "LinkedIn",
                            handle: "Charls Dave Erana",
                            url: "https://www.linkedin.com/in/charls-dave-erana-39b8b6180/",
                            color: "bg-blue-50"
                        },
                        {
                            icon: "github.svg",
                            text: "GitHub",
                            handle: "sakenerana",
                            url: "https://github.com/",
                            color: "bg-gray-50"
                        },
                        {
                            icon: "gmail.svg",
                            text: "Email",
                            handle: "sakenerana@gmail.com",
                            url: "mailto:sakenerana@gmail.com",
                            color: "bg-red-50"
                        },
                        {
                            icon: "instagram.svg",
                            text: "Instagram",
                            handle: "@charlsdaveerana",
                            url: "https://www.instagram.com/charlsdaveerana/",
                            color: "bg-pink-50"
                        }
                    ].map((contact, index) => (
                        <Link
                            key={index}
                            to={contact.url}
                            target="_blank"
                            className="group block"
                        >
                            <div className={`flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors ${contact.color} hover:bg-white`}>
                                <div className="flex items-center">
                                    <div className="p-2 rounded-lg bg-white mr-3 border border-gray-100">
                                        <img
                                            className="h-4 w-4"
                                            src={`./img/${contact.icon}`}
                                            alt={contact.text}
                                        />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900 text-sm">{contact.text}</div>
                                        <div className="text-gray-600 text-xs">{contact.handle}</div>
                                    </div>
                                </div>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <div className="mt-10 pt-6 pb-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 mb-4 text-sm">
                    Interested in working together or discussing a project?
                </p>
                <Link
                    to="mailto:sakenerana@gmail.com"
                    className="inline-flex items-center bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-shadow"
                >
                    <img className="h-4 w-4 mr-2 mt-1" src="./img/mail.svg" alt="email" />
                    Start a Conversation
                </Link>
            </div>
        </div>
    );
}