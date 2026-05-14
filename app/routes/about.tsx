import { Link } from "@remix-run/react";

export default function About() {
    return (
        <div className="bg-white rounded-xl shadow-sm transition-colors duration-200 dark:bg-gray-900">
            {/* Header */}
            <div className="mb-10 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5 text-blue-600" src="./img/person2.svg" alt="person" />
                    </div>
                    <h1 className="text-xl font-semibold text-gray-900 ml-3 dark:text-gray-100">
                        About Me
                    </h1>
                </div>
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                    I'm Charls Dave Erana, a Full Stack Developer with hands-on IT operations experience. I build web applications that are fast, maintainable, and production-ready, from clean UI and APIs to deployment and infrastructure support.
                </p>
            </div>

            {/* Career Journey */}
            <section className="mb-8">
                <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg">
                        <img className="h-5 w-5" src="./img/magnify.svg" alt="journey" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3 dark:text-gray-100">
                        Professional Journey
                    </h2>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                        I started my career at the University of Cebu - Banilad and spent four years as a Junior Software Developer building business-focused web applications. Over time, I expanded into IT operations, which strengthened how I design systems that are not only feature-complete but also stable, secure, and easier to support in real environments.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 dark:border-gray-800 dark:bg-gray-800">
                        <p className="text-gray-700 italic text-sm dark:text-gray-300">
                            "I focus on shipping practical solutions, improving continuously, and delivering work teams can rely on."
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
                    <h2 className="text-lg font-semibold text-gray-900 ml-3 dark:text-gray-100">
                        Core Values
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                        { title: "Clarity", desc: "Simple architecture, readable code, and clear decisions" },
                        { title: "Ownership", desc: "Accountable delivery from planning through production" },
                        { title: "Reliability", desc: "Build solutions that perform well and scale with growth" }
                    ].map((value, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100 dark:border-gray-800 dark:bg-gray-800">
                            <h3 className="font-medium text-gray-900 mb-1 dark:text-gray-100">{value.title}</h3>
                            <p className="text-gray-600 text-sm dark:text-gray-300">{value.desc}</p>
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
                    <h2 className="text-lg font-semibold text-gray-900 ml-3 dark:text-gray-100">
                        Areas of Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Development</h3>
                        <ul className="space-y-2">
                            {[
                                "Full Stack Product Development",
                                "React, Angular, and Remix Applications",
                                "API Design and Third-Party Integrations",
                                "Performance and UX Improvements"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm dark:text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">IT Operations</h3>
                        <ul className="space-y-2">
                            {[
                                "System and Server Administration",
                                "Deployment and Environment Setup",
                                "Network and Security Fundamentals",
                                "Production Support and Troubleshooting"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm dark:text-gray-300">{item}</span>
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
                    <h2 className="text-lg font-semibold text-gray-900 ml-3 dark:text-gray-100">
                        Beyond Code
                    </h2>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100 dark:border-gray-800 dark:from-gray-800 dark:to-gray-900">
                    <p className="text-gray-700 mb-4 dark:text-gray-300">
                        Outside of work, I stay creative through music and stay curious through travel and learning. Those habits help me bring better collaboration, focus, and fresh thinking to product and engineering challenges.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Music", "Travel", "Gaming", "Coffee", "Photography"].map((interest, index) => (
                            <span key={index} className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
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
                    <h2 className="text-lg font-semibold text-gray-900 ml-3 dark:text-gray-100">
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
                            <div className={`flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors dark:border-gray-700 dark:hover:border-blue-500 ${contact.color} hover:bg-white dark:bg-gray-800`}>
                                <div className="flex items-center">
                                    <div className="p-2 rounded-lg bg-white mr-3 border border-gray-100 dark:border-gray-700 dark:bg-gray-900">
                                        <img
                                            className="h-4 w-4"
                                            src={`./img/${contact.icon}`}
                                            alt={contact.text}
                                        />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900 text-sm dark:text-gray-100">{contact.text}</div>
                                        <div className="text-gray-600 text-xs dark:text-gray-400">{contact.handle}</div>
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
            <div className="mt-10 pt-6 pb-6 border-t border-gray-100 text-center dark:border-gray-800">
                <p className="text-gray-600 mb-4 text-sm dark:text-gray-300">
                    Looking for a developer who can contribute across both product engineering and technical operations?
                </p>
                <Link
                    to="mailto:sakenerana@gmail.com"
                    className="inline-flex items-center bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-shadow"
                >
                    <img className="h-4 w-4 mr-2 mt-1" src="./img/mail.svg" alt="email" />
                    Schedule a Conversation
                </Link>
            </div>
        </div>
    );
}
