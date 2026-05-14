import { Link } from "@remix-run/react";

export default function WorkAndEducation() {
    const experiences = [
        {
            type: "work",
            title: "Professional Experience",
            items: [
                {
                    company: "Cebu CFI Community Cooperative",
                    logo: "cficoop.svg",
                    position: "Full Stack Developer (IT Operations)",
                    location: "Capitol Compound, Cebu City",
                    duration: "Jan 2023 - Present",
                    description: "Led infrastructure reliability and full stack delivery for branch operations, supporting business continuity while building internal ERP capabilities.",
                    highlights: ["React", "Node.js", "ERP Systems", "Server Maintenance", "Network Setup", "CCTV Deployment"]
                },
                {
                    company: "Elf Station Inc.",
                    logo: "elfstation.svg",
                    position: "Full Stack Web Developer",
                    location: "General Maxilom Avenue, Cebu City",
                    duration: "Oct 2019 - Jan 2023",
                    description: "Built and shipped client web applications across multiple industries, delivering responsive interfaces and scalable backend integrations.",
                    highlights: ["Angular", "React", "WordPress", "Client Delivery", "API Integration"]
                },
                {
                    company: "Avega Bros. Shipping Corp.",
                    logo: "avega.svg",
                    position: "Software Tester (Internship)",
                    location: "J. De Veyra, Cebu City",
                    duration: "Oct 2018 - Feb 2019",
                    description: "Improved software quality through structured QA execution, performance checks, and actionable defect reporting to development teams.",
                    highlights: ["Quality Assurance", "Performance Testing", "Bug Reporting"]
                },
                {
                    company: "Jollibee",
                    logo: "jollibee.svg",
                    position: "Service Crew (Working Student)",
                    location: "Banilad, Cebu City",
                    duration: "Jun 2017 - Dec 2017",
                    description: "Balanced customer service responsibilities with academic commitments, strengthening communication, discipline, and teamwork under pressure.",
                    highlights: ["Customer Service", "Team Coordination", "Time Management"]
                }
            ]
        },
        {
            type: "education",
            title: "Education",
            items: [
                {
                    company: "University of Cebu Banilad",
                    logo: "uc.svg",
                    position: "Bachelor's Degree",
                    location: "Banilad, Cebu City",
                    duration: "2016 - 2019",
                    description: "Focused on programming, multimedia, and computer hardware servicing with project-based technical training.",
                    highlights: [
                        "Part of UC BEEHIVE Accelerator Batch Genesis",
                        "Smart Sweep Competition Representative",
                        "Major: Programming and Multimedia"
                    ]
                },
                {
                    company: "Pit-os National Highschool",
                    logo: "pitos.svg",
                    position: "High School Diploma",
                    location: "Pit-os, Cebu City",
                    duration: "2011 - 2015"
                },
                {
                    company: "Bacayan Elementary School",
                    logo: "bacayan.svg",
                    position: "Elementary Education",
                    location: "Upper Bacayan, Cebu City",
                    duration: "2004 - 2010"
                }
            ]
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm transition-colors duration-200 dark:bg-gray-900">
            {/* Header */}
            <div className="mb-10 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2.5 rounded-lg">
                        <img className="h-5 w-5" src="./img/work2.svg" alt="work" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 ml-3 dark:text-gray-100">
                        Experience & Education
                    </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                    Professional experience and academic background focused on delivering reliable software and stable operations.
                </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-10 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100 dark:border-gray-800 dark:from-gray-800 dark:to-gray-900">
                <h2 className="text-lg font-semibold text-gray-900 mb-3 dark:text-gray-100">Key Achievements</h2>
                <ul className="space-y-2">
                    {[
                        "Combined product engineering and IT operations to support both feature delivery and production reliability.",
                        "Delivered full stack solutions for internal teams and client projects using modern web technologies.",
                        "Contributed across infrastructure, troubleshooting, and system development in multi-branch operations."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Timeline Sections */}
            <div className="space-y-12">
                {experiences.map((section, sectionIndex) => (
                    <section key={sectionIndex}>
                        <div className="flex items-center mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {section.title}
                            </h2>
                            <div className="ml-4 h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
                        </div>

                        <div className="space-y-6">
                            {section.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="group relative pl-8 md:pl-10 hover:bg-gray-50 rounded-lg p-4 transition-colors dark:hover:bg-gray-800"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-6">
                                        <div className={`w-3 h-3 rounded-full ${section.type === 'work' ? 'bg-blue-500' : 'bg-blue-400'
                                            }`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {/* Logo */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 flex items-center justify-center bg-white border border-gray-200 rounded-lg p-2 dark:border-gray-700 dark:bg-gray-900">
                                                <img
                                                    className="max-h-12 max-w-12 object-contain"
                                                    src={`./img/${item.logo}`}
                                                    alt={item.company}
                                                />
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1">
                                            <div className="mb-3">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                        {item.company}
                                                    </h3>
                                                    <span className="text-sm text-gray-500 mt-1 md:mt-0 dark:text-gray-400">
                                                        {item.duration}
                                                    </span>
                                                </div>

                                                <div className="space-y-1">
                                                    {item.position && (
                                                        <p className="text-gray-700 font-medium dark:text-gray-200">
                                                            {item.position}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        </svg>
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>

                                            {item.description && (
                                                <p className="text-gray-600 mb-3 dark:text-gray-300">
                                                    {item.description}
                                                </p>
                                            )}

                                            {item.highlights && (
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {item.highlights.map((highlight, highlightIndex) => (
                                                        <span
                                                            key={highlightIndex}
                                                            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                                        >
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Professional Summary */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">6+</div>
                        <div className="text-sm text-gray-600 mt-1 dark:text-gray-400">Years in Development</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">3+</div>
                        <div className="text-sm text-gray-600 mt-1 dark:text-gray-400">Years in IT Operations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">Full Stack</div>
                        <div className="text-sm text-gray-600 mt-1 dark:text-gray-400">Development & Operations</div>
                    </div>
                </div>

                {/* Career Path Note */}
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100 dark:border-gray-800 dark:from-gray-800 dark:to-gray-900">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <p className="text-gray-700 dark:text-gray-300">
                            My career combines product engineering and IT operations, enabling me to deliver features with stronger reliability, supportability, and real-world execution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
