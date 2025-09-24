export default function Skills() {
    const skillCategories = [
        {
            title: "Office & Productivity",
            icon: "office.svg",
            skills: [
                "MS Word, Excel, PowerPoint",
                "WPS Office",
                "Adobe Reader",
                "Open Office",
                "Microsoft 365 Copilot"
            ],
            color: "from-green-500 to-lime-500"
        },
        {
            title: "Programming & Development",
            icon: "code.svg",
            skills: [
                "HTML, CSS, SCSS",
                "JavaScript, TypeScript",
                "PHP, C#",
                "React, Angular",
                "Node.js, Next.js, Nest.js",
                "Tailwind, Ant Design",
                "Vite, WordPress"
            ],
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Databases",
            icon: "database.svg",
            skills: [
                "MySQL, PostgreSQL",
                "Database Management",
                "Serverless architectures",
                "Traditional server-based systems"
            ],
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "DevOps & Tools",
            icon: "devops.svg",
            skills: [
                "Git, GitHub, GitLab",
                "Git commands",
                "Jira, Bitbucket",
                "Docker",
                "VMWare ESXi",
                "Virtual Machines"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Networking & Hardware",
            icon: "network.svg",
            skills: [
                "Computer hardware servicing",
                "CCTV installation (HikVision)",
                "PoE Switch setup",
                "Router network configuration",
                "Biometrics setup (ZKTeco)",
                "UTP cable crimping",
                "RJ45 installation"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Operating Systems",
            icon: "os.svg",
            skills: [
                "Windows",
                "Ubuntu",
                "Linux",
                "Mac OS"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Other Technical Skills",
            icon: "skills2.svg",
            skills: [
                "Android Studio",
                "Rustdesk, Anydesk",
                "Fortinet, Synology",
                "Pritunl, Yeastar",
                "Unifi Network Server",
                "40+ WPM typing speed",
                "Proficient internet/email use",
                "Cloudfare management",
                "Canva, Figma basics",
                "SEO basics",
                "Basic photo/video editing",
                "Computer troubleshooting",
                "Video conferencing setup (Zoom, Google Meet)",
                "Knowledge of AI tools (ChatGPT, MidJourney)",
                "Basic knowledge of IoT (Internet of Things)",
                "Basic knowledge of Cybersecurity principles",
                "Basic knowledge of Cloud Computing platforms (AWS, Azure, Google Cloud)",
                "Knowledge of Agile and Scrum methodologies",
                "Understanding of UI/UX design principles",
                "Knowledge of API integration and development"
            ],
            color: "from-green-500 to-lime-500"
        }
    ];

    return (
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-8">
            {/* Header */}
            <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 rounded-xl mr-4">
                    <img className="h-7 w-7" src="./img/skills2.svg" alt="skills" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white">Technical Capabilities</h1>
                    <p className="text-gray-300 mt-1">My comprehensive skill set across multiple domains</p>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-br ${category.color} rounded-xl p-0.5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                    >
                        <div className="bg-gray-800 rounded-[11px] h-full p-5">
                            <div className="flex items-center mb-4">
                                <div className="bg-white bg-opacity-10 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src={`./img/${category.icon}`} alt={category.title} />
                                </div>
                                <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="bg-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-200">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Proficiency Legend */}
            <div className="mt-10 bg-gray-700 bg-opacity-50 rounded-xl p-5 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Skill Proficiency Levels
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-gray-300 text-sm">Expert</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-gray-300 text-sm">Advanced</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-gray-300 text-sm">Proficient</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span className="text-gray-300 text-sm">Familiar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}