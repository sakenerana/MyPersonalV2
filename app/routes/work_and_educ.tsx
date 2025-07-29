import { Link } from "@remix-run/react";

export default function WorkAndEducation() {
    const experiences = [
        {
            type: "work",
            title: "Work History",
            icon: "work2.svg",
            items: [
                {
                    company: "Jollibee",
                    logo: "jollibee.svg",
                    position: "Crew (Working Student)",
                    location: "Banilad, Cebu City",
                    duration: "JUNE 2017 – DECEMBER 2017",
                    description: "To tend to the needs of customers, providing help and assistance in the kitchen when such is needed.",
                    highlights: []
                },
                {
                    company: "Avega Bros. Shipping Corp.",
                    logo: "avega.svg",
                    position: "Software Tester (Internship/OJT)",
                    location: "J. De Veyra, Cebu City",
                    duration: "OCTOBER 2018 – FEBRUARY 2019",
                    description: "With their current system, I tested their current application for better performances.",
                    highlights: []
                },
                {
                    company: "Elf Station Inc.",
                    logo: "elfstation.svg",
                    position: "Software/Web Developer",
                    location: "General Maxilom Avenue, Cebu City",
                    duration: "OCTOBER 2019 – JANUARY 2023",
                    description: "We create Web Applications for different clients using Angular, WordPress, React etc.",
                    highlights: []
                },
                {
                    company: "Cebu CFI Community Cooperative",
                    logo: "cficoop.svg",
                    position: "IT Personnel (Current Job)",
                    location: "Capitol Compound, Cebu City",
                    duration: "JANUARY 2023 – Present",
                    description: "Troubleshooting and setup of PC, Laptops and Printers, we also do server maintenance everyday, and install CCTV on every branch.",
                    highlights: []
                }
            ]
        },
        {
            type: "education",
            title: "Education",
            icon: "education.svg",
            items: [
                {
                    company: "Bacayan Elementary School",
                    logo: "bacayan.svg",
                    position: "",
                    location: "Upper Bacayan, Cebu City",
                    duration: "2004 – 2010",
                    description: "",
                    highlights: []
                },
                {
                    company: "Pit-os National Highschool",
                    logo: "pitos.svg",
                    position: "",
                    location: "Pit-os, Cebu City",
                    duration: "2011 – 2015",
                    description: "",
                    highlights: []
                },
                {
                    company: "University of Cebu Banilad",
                    logo: "uc.svg",
                    position: "",
                    location: "Banilad, Cebu City",
                    duration: "2016 – 2019",
                    description: "",
                    highlights: [
                        "Major academic course highlights: Programming, Multimedia, Computer Hardware Servicing",
                        "Part of UC BEEHIVE Accelerator Batch Genesis",
                        "Representative of Smart Sweep Competition"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-8">
            {experiences.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-12 last:mb-0">
                    {/* Section Header */}
                    <div className="flex items-center mb-8">
                        <div className={`p-3 rounded-xl mr-4 ${section.type === 'work' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                            <img className="h-7 w-7" src={`./img/${section.icon}`} alt={section.title} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">{section.title}</h1>
                            <p className="text-gray-300 mt-1">
                                {section.type === 'work' ? 'My professional journey' : 'My academic background'}
                            </p>
                        </div>
                    </div>

<<<<<<< HEAD
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>

                        <div className="space-y-8">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="relative pl-14 group">
                                    {/* Timeline dot */}
                                    <div className={`absolute left-0 top-0 h-5 w-5 rounded-full border-4 ${section.type === 'work' ? 'border-blue-500/50 bg-blue-400' : 'border-purple-500/50 bg-purple-400'} transform translate-x-1/2 group-hover:scale-125 transition-all z-10`}></div>

                                    {/* Timeline content */}
                                    <div className={`bg-gray-700/50 hover:bg-gray-700/70 rounded-xl p-6 border ${section.type === 'work' ? 'border-blue-500/30 hover:border-blue-500/50' : 'border-purple-500/30 hover:border-purple-500/50'} transition-all duration-300 hover:shadow-lg`}>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Company Logo */}
                                            <div className="flex-shrink-0 flex items-center justify-center">
                                                <div className={`p-3 rounded-lg ${section.type === 'education' ? 'bg-white' : 'bg-gray-800'}`}>
                                                    <img
                                                        className="h-20 w-20 object-contain"
                                                        src={`./img/${item.logo}`}
                                                        alt={item.company}
                                                    />
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1">
                                                <div className="mb-3">
                                                    <h2 className="text-xl font-semibold text-white">{item.company}</h2>
                                                    {item.position && (
                                                        <p className={`text-sm font-medium ${section.type === 'work' ? 'text-blue-300' : 'text-purple-300'}`}>
                                                            {item.position}
                                                        </p>
                                                    )}
                                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                                                        <div className="flex items-center text-gray-300 text-sm">
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                            </svg>
                                                            {item.location}
                                                        </div>
                                                        <div className="flex items-center text-gray-400 text-sm">
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                            {item.duration}
                                                        </div>
                                                    </div>
                                                </div>

                                                {item.description && (
                                                    <p className="text-gray-300 mb-4 italic">"{item.description}"</p>
                                                )}

                                                {item.highlights.length > 0 && (
                                                    <ul className="space-y-2">
                                                        {item.highlights.map((highlight, highlightIndex) => (
                                                            <li key={highlightIndex} className="flex items-start">
                                                                <div className={`rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0 ${section.type === 'work' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                                                                <span className="text-gray-300">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
=======
            <div className="flex gap-8 m-3 justify-start text-start">
                <img className=" h-40 w-40" src="./img/jollibee.svg" alt="jollibee" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Jollibee, Banilad, Cebu City - Crew (Working Student)</h1>
                    <p className="italic">JUNE 2017 – DECEMBER 2017</p>
                    <p className="italic">“To tend to the needs of customers, providing help and assistance in the kitchen when such is needed.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className=" h-40 w-40" src="./img/avega.svg" alt="avega" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Avega Bros. Shipping Corp.,J. De Veyra, Cebu City - Software Tester (Internship/OJT)</h1>
                    <p className="italic">OCTOBER 2018 – FEBRUARY 2019</p>
                    <p className="italic">“With their current system, I tested their current application for better performances.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40" src="./img/elfstation.svg" alt="elfstation" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Elf Station Inc. , General Maxilom Avenue, Cebu City - (Software/Web Developer)</h1>
                    <p className="italic">OCTOBER 2019 – JANUARY 2023</p>
                    <p className="italic">“We create Web Applications for different clients using Angular, WordPress, React etc.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/cficoop.svg" alt="cficoop" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Cebu CFI Community Cooperative, Capitol Compound, Cebu City - (IT Personnel/Current Job)</h1>
                    <p className="italic">JANUARY 2023 – XX XXXX</p>
                    <p className="italic">“Troubleshooting and setup of PC, Laptops and Printers, we also do server maintenance everyday, and install CCTV on every branch.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="./img/education.svg" alt="education" /><b>Education</b></h1>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/bacayan.svg" alt="bacayan" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Bacayan Elementary School</h1>
                    <p className="italic">UPPER BACAYAN, CEBU CITY</p>
                    <p className="italic">MONTH 2004 – MONTH 2010</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/pitos.svg" alt="pitos" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Pit-os National Highschool</h1>
                    <p className="italic">PIT-OS, CEBU CITY</p>
                    <p className="italic">MONTH 2011 – MONTH 2015</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/uc.svg" alt="uc" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">University of Cebu Banilad</h1>
                    <p className="italic">BANILAD, CEBU CITY</p>
                    <p className="italic">MONTH 2016 – MONTH 2019</p>
                    <ul className="list-disc ml-5">
                        <li className="italic">Major academic course highlights: Programming, Multimedia, Computer Hardware Servicing</li>
                        <li className="italic">Part of UC BEEHIVE Accelerator Batch Genesis</li>
                        <li className="italic">Representative of Smart Sweep Competition</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

>>>>>>> 231ec780755a3f7d2d6a1246d997c7a001b31049
        </div>
    );
}