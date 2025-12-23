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
                    position: "IT Personnel/Full Stack Developer",
                    location: "Capitol Compound, Cebu City",
                    duration: "Jan 2023 – Present",
                    description: "IT infrastructure management including server maintenance, hardware troubleshooting, and CCTV installations across branches and building ERP Systems.",
                    highlights: ["Server Maintenance", "Hardware Troubleshooting", "Network Setup", "CCTV Installation", "System Development"]
                },
                {
                    company: "Elf Station Inc.",
                    logo: "elfstation.svg",
                    position: "Software/Full Stack Web Developer",
                    location: "General Maxilom Avenue, Cebu City",
                    duration: "Oct 2019 – Jan 2023",
                    description: "Full stack web development for various clients using modern technologies including Angular, React, and WordPress.",
                    highlights: ["Angular Development", "React Applications", "WordPress", "Client Projects"]
                },
                {
                    company: "Avega Bros. Shipping Corp.",
                    logo: "avega.svg",
                    position: "Software Tester (Internship)",
                    location: "J. De Veyra, Cebu City",
                    duration: "Oct 2018 – Feb 2019",
                    description: "Quality assurance and performance testing of existing software applications.",
                    highlights: ["Quality Assurance", "Performance Testing", "Bug Reporting"]
                },
                {
                    company: "Jollibee",
                    logo: "jollibee.svg",
                    position: "Service Crew (Working Student)",
                    location: "Banilad, Cebu City",
                    duration: "Jun 2017 – Dec 2017",
                    description: "Customer service and kitchen operations while pursuing academic studies.",
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
                    duration: "2016 – 2019",
                    description: "Focused on Programming, Multimedia, and Computer Hardware Servicing.",
                    highlights: [
                        "Part of UC BEEHIVE Accelerator Batch Genesis",
                        "Smart Sweep Competition Representative",
                        "Major: Programming & Multimedia"
                    ]
                },
                {
                    company: "Pit-os National Highschool",
                    logo: "pitos.svg",
                    position: "High School Diploma",
                    location: "Pit-os, Cebu City",
                    duration: "2011 – 2015"
                },
                {
                    company: "Bacayan Elementary School",
                    logo: "bacayan.svg",
                    position: "Elementary Education",
                    location: "Upper Bacayan, Cebu City",
                    duration: "2004 – 2010"
                }
            ]
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="mb-10 pb-6 border-b border-gray-100">
                <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2.5 rounded-lg">
                        <img className="h-5 w-5" src="./img/work2.svg" alt="work" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 ml-3">
                        Experience & Education
                    </h1>
                </div>
                <p className="text-gray-600">
                    My professional journey and academic background that shaped my technical expertise.
                </p>
            </div>

            {/* Timeline Sections */}
            <div className="space-y-12">
                {experiences.map((section, sectionIndex) => (
                    <section key={sectionIndex}>
                        <div className="flex items-center mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">
                                {section.title}
                            </h2>
                            <div className="ml-4 h-px flex-1 bg-gray-200"></div>
                        </div>

                        <div className="space-y-6">
                            {section.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="group relative pl-8 md:pl-10 hover:bg-gray-50 rounded-lg p-4 transition-colors"
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
                                            <div className="w-16 h-16 flex items-center justify-center bg-white border border-gray-200 rounded-lg p-2">
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
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        {item.company}
                                                    </h3>
                                                    <span className="text-sm text-gray-500 mt-1 md:mt-0">
                                                        {item.duration}
                                                    </span>
                                                </div>

                                                <div className="space-y-1">
                                                    {item.position && (
                                                        <p className="text-gray-700 font-medium">
                                                            {item.position}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        </svg>
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>

                                            {item.description && (
                                                <p className="text-gray-600 mb-3">
                                                    {item.description}
                                                </p>
                                            )}

                                            {item.highlights && (
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {item.highlights.map((highlight, highlightIndex) => (
                                                        <span
                                                            key={highlightIndex}
                                                            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
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
            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">6+</div>
                        <div className="text-sm text-gray-600 mt-1">Years in Development</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">3+</div>
                        <div className="text-sm text-gray-600 mt-1">Years in IT Operations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">Full Stack</div>
                        <div className="text-sm text-gray-600 mt-1">Development & Operations</div>
                    </div>
                </div>

                {/* Career Path Note */}
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <p className="text-gray-700">
                            My journey demonstrates a unique combination of software development expertise and IT operational knowledge, allowing me to bridge the gap between code and infrastructure effectively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}