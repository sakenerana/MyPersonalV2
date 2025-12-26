export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "code.svg",
            skills: [
                { name: "React", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Angular", level: 80 },
                { name: "HTML/CSS", level: 95 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Vue.js", level: 75 },
                { name: "AntDesign", level: 90 },
                { name: "Wordpress", level: 90 },
                { name: "Vite", level: 85 }
            ]
        },
        {
            title: "Backend & Databases",
            icon: "database.svg",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "NestJS", level: 80 },
                { name: "PostgreSQL", level: 80 },
                { name: "MySQL", level: 85 },
                { name: "PHP", level: 75 },
                { name: "C#/.NET", level: 70 },
                { name: "REST APIs", level: 85 }
            ]
        },
        {
            title: "DevOps & Tools",
            icon: "devops.svg",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "Jira", level: 85 },
                { name: "VS Code", level: 95 },
                { name: "GitHub/GitLab", level: 90 },
                { name: "Figma", level: 70 },
                { name: "Terminal", level: 85 }
            ]
        },
        {
            title: "IT & Infrastructure",
            icon: "network.svg",
            skills: [
                { name: "Network Setup", level: 85 },
                { name: "Server Management", level: 80 },
                { name: "CCTV Systems", level: 75 },
                { name: "Hardware Troubleshooting", level: 90 },
                { name: "Windows/Ubuntu", level: 85 },
                { name: "Virtual Machines", level: 75 },
                { name: "Security Systems", level: 70 }
            ]
        }
    ];

    const additionalSkills = [
        {
            category: "Productivity",
            skills: ["Microsoft 365", "WPS Office", "Google Workspace", "Jira", "Notion", "Adobe Reader", "Open Office"]
        },
        {
            category: "Design & Editing",
            skills: ["Figma", "Canva", "Photoshop Basics", "Video Editing", "UI/UX Principles", "Filmora", "Capcut"]
        },
        {
            category: "Methodologies",
            skills: ["Agile/Scrum", "CI/CD", "Responsive Design", "SEO Basics", "API Integration"]
        }
    ];

    const proficiencyLabels = [
        { level: 90, label: "Expert", color: "bg-green-300" },
        { level: 80, label: "Advanced", color: "bg-blue-300" },
        { level: 70, label: "Proficient", color: "bg-yellow-300" },
        { level: 60, label: "Intermediate", color: "bg-gray-300" }
    ];

    const openSourcePlatforms = [
        "GitHub",
        "GitLab",
        "Ubuntu",
        "Debian",
        "Docker",
        "Kubernetes",
        "WordPress",
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "VS Code",
        "Linux",
        "Apache",
        "Nginx",
        "Redis",
        "SnipeIT",
        "Wazuh",
        "Zabbix",
        "Xampp",
        "phpMyAdmin",
        "openVPN",
        "CloudPanel",
        "Render",
        "cPanel",
        "Cloudflare",
        "Vercel",
        "Netlify",
        "Heroku",
        "DigitalOcean",
        "AWS",
        "GCP",
        "Azure"
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2.5 rounded-lg">
                        <img className="h-5 w-5" src="./img/skills2.svg" alt="skills" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 ml-3">
                        Technical Skills
                    </h1>
                </div>
                <p className="text-gray-600">
                    A comprehensive overview of my technical expertise across development, operations, and infrastructure.
                </p>
            </div>

            {/* Main Skills Grid - Badge Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-200 p-5 hover:border-blue-300 transition-colors"
                    >
                        <div className="flex items-center mb-5">
                            <div className="p-2 rounded-lg bg-blue-50 mr-3">
                                <img className="h-4 w-4" src={`./img/${category.icon}`} alt={category.title} />
                            </div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                {category.title}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                                    <span className={`text-xs px-2.5 py-1 rounded ${skill.level >= 90 ? 'bg-green-100 text-green-800' :
                                        skill.level >= 80 ? 'bg-blue-100 text-blue-800' :
                                            skill.level >= 70 ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-gray-100 text-gray-800'
                                        }`}>
                                        {skill.level >= 90 ? 'Expert' :
                                            skill.level >= 80 ? 'Advanced' :
                                                skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Skills */}
            <div className="mb-10">
                <h2 className="text-lg font-semibold text-gray-900 mb-5">Additional Competencies</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {additionalSkills.map((category, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide text-gray-600">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-lg border border-gray-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Proficiency Guide */}
            <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Proficiency Guide</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {proficiencyLabels.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                            <div>
                                <div className="text-sm font-medium text-gray-900">{item.label}</div>
                                <div className="text-xs text-gray-500">{item.level}+% mastery</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-10 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                        <p className="text-gray-600 text-sm">
                            Committed to staying current with emerging technologies and best practices in software development and IT operations.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <div className="flex space-x-2">
                            <span className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-lg border border-gray-200">
                                Always Learning
                            </span>
                            <span className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-lg border border-gray-200">
                                Detail-Oriented
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Source Platforms */}
            <div className="mt-10 border-t border-gray-100 pt-8">
                <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-lg mr-3">
                        <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Open Source Platforms & Systems</h2>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                    Experience with open source technologies and platforms that power modern development and infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                    {openSourcePlatforms.map((platform, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white text-gray-700 text-sm rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors font-medium"
                        >
                            {platform}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}