import { Link } from "@remix-run/react";

export default function Projects() {
    const projects = [
        {
            title: "Full Inventory System",
            year: "2025",
            category: "Full Stack Application",
            description: "Comprehensive inventory management solution with real-time stock monitoring and reporting.",
            features: [
                "Stock level monitoring & alerts",
                "SKU management system",
                "Role-based access control",
                "Barcode scanning integration",
                "Multi-location tracking",
                "Inventory valuation reports"
            ],
            techStack: ["React", "Remix", "Supabase", "Tailwind CSS", "Ant Design"],
            image: "full-inventory.png",
            link: "#",
            type: "solo"
        },
        {
            title: "Budget Tracker",
            year: "2025",
            category: "Financial Application",
            description: "Personal finance management tool for tracking income, expenses, and savings goals.",
            features: [
                "Income & expense tracking",
                "Budget planning tools",
                "Visual reports & analytics",
                "Savings goal management",
                "Multi-device synchronization"
            ],
            techStack: ["React", "Remix", "Supabase", "Tailwind CSS", "Chart.js"],
            image: "budget.png",
            link: "#",
            type: "solo"
        },
        {
            title: "Admin Dashboard",
            year: "2025",
            category: "Administrative System",
            description: "Comprehensive admin panel for user management and system configuration.",
            features: [
                "Dashboard analytics",
                "User & role management",
                "System configuration",
                "Data management tools",
                "Activity monitoring"
            ],
            techStack: ["React", "Remix", "Supabase", "Ant Design", "Vite"],
            image: "admin.png",
            link: "#",
            type: "solo"
        },
        {
            title: "SICE Choir Website",
            year: "2025",
            category: "Community Website",
            description: "Showcase website for a choir group featuring events, galleries, and member information.",
            features: [
                "Performance showcase",
                "Event calendar",
                "Member profiles",
                "Photo/video gallery",
                "News & announcements"
            ],
            techStack: ["React", "Remix", "Tailwind CSS", "Ant Design"],
            image: "sice.png",
            link: "#",
            type: "solo"
        },
        {
            title: "Prosperidad LGU System",
            year: "2022",
            category: "Government System",
            description: "Local government unit management system for citizen services and record management.",
            features: [
                "Citizen management",
                "Business licensing",
                "Financial tracking",
                "Document management",
                "Report generation"
            ],
            techStack: ["WordPress", "MySQL", "cPanel", "Custom PHP"],
            image: "lgu.jpg",
            link: "#",
            type: "team"
        },
        {
            title: "The Mango Mall Online",
            year: "2020",
            category: "E-commerce Platform",
            description: "Full-featured e-commerce platform with product management and secure payments.",
            features: [
                "Online storefront",
                "Shopping cart & checkout",
                "Inventory management",
                "Payment integration",
                "Mobile responsive design"
            ],
            techStack: ["WordPress", "WooCommerce", "MySQL", "cPanel"],
            image: "themangomall.png",
            link: "#",
            type: "solo"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="mb-10 pb-6 border-b border-gray-100">
                <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2.5 rounded-lg">
                        <img className="h-5 w-5" src="./img/setting.svg" alt="projects" />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 ml-3">
                        Project Portfolio
                    </h1>
                </div>
                <p className="text-gray-600">
                    A selection of my recent work showcasing full-stack development and problem-solving skills.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 overflow-hidden hover:shadow-md"
                    >
                        {/* Project Header */}
                        <div className="p-5 pb-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.type === "team" && (
                                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                                Team Project
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <span className="bg-gray-100 px-2 py-0.5 rounded mr-2">
                                            {project.year}
                                        </span>
                                        <span>{project.category}</span>
                                    </div>
                                </div>
                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.type === "solo"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-blue-100 text-blue-800"
                                    }`}>
                                    {project.type === "solo" ? "Solo" : "Team"}
                                </span>
                            </div>

                            <p className="text-gray-600 text-sm mb-4">
                                {project.description}
                            </p>
                        </div>

                        {/* Project Image */}
                        <div className="relative overflow-hidden bg-gray-50">
                            <img
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                src={`./img/${project.image}`}
                                alt={`${project.title} screenshot`}
                            />
                        </div>

                        {/* Features */}
                        <div className="p-5 pt-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                            <ul className="space-y-1 mb-4">
                                {project.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                        <svg className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                                {project.features.length > 3 && (
                                    <li className="text-xs text-gray-500 pl-5">
                                        +{project.features.length - 3} more features
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="p-5 pt-0">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-900">Technology Stack</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="p-5 pt-4 border-t border-gray-100">
                            <Link
                                to={project.link}
                                className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 text-sm font-medium py-2.5 rounded-lg border border-gray-200 transition-colors"
                            >
                                <span>View Project Details</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Statistics */}
            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
                        <div className="text-sm text-gray-600 mt-1">Projects Showcased</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">6+</div>
                        <div className="text-sm text-gray-600 mt-1">Full Stack Apps</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">4</div>
                        <div className="text-sm text-gray-600 mt-1">Solo Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">2020-2025</div>
                        <div className="text-sm text-gray-600 mt-1">Project Timeline</div>
                    </div>
                </div>
            </div>

            {/* Note */}
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-5 border border-gray-100">
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <p className="text-gray-700 text-sm">
                            These projects demonstrate my ability to work across different domains, from government systems to e-commerce platforms,
                            using both modern tech stacks and traditional web technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}