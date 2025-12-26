import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Projects() {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [confidentialModalOpen, setConfidentialModalOpen] = useState<boolean>(false);

    // Projects that are NOT confidential (exceptions)
    const publicProjects = [
        "SICE Choir Website",
        "Elf Station Inc.",
        "The Mango Mall Online",
        "Clevermasters"
    ];

    // Check if project is confidential
    const isConfidential = (projectTitle: string) => {
        return !publicProjects.includes(projectTitle);
    };

    // Handle ESC key to close fullscreen and modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (fullscreenImage) {
                    setFullscreenImage(null);
                }
                if (confidentialModalOpen) {
                    setConfidentialModalOpen(false);
                }
            }
        };

        if (fullscreenImage || confidentialModalOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [fullscreenImage, confidentialModalOpen]);

    // Restore body overflow when modals are closed
    useEffect(() => {
        if (!fullscreenImage && !confidentialModalOpen) {
            document.body.style.overflow = "unset";
        }
    }, [fullscreenImage, confidentialModalOpen]);

    // Map technology names to their SVG icon paths
    const getTechIcon = (tech: string): string | null => {
        const techIcons: { [key: string]: string } = {
            "React": "react.svg",
            "Remix": "remix.svg",
            "Supabase": "supabase.svg",
            "Tailwind CSS": "tailwind.svg",
            "Ant Design": "antd.svg",
            "Vite": "vite.svg",
            "WordPress": "wordpress.svg",
            "WooCommerce": "woocommerce.svg",
            "MySQL": "mysql.svg",
            "cPanel": "cpanel.svg",
            "PHP": "php.svg",
            "Node.js": "nodejs.svg",
            "NestJS": "nestjs.svg",
            "Next.js": "nextjs.svg",
            "Vue.js": "vue.svg",
            "Angular": "angular.svg",
            "TypeScript": "typescript.svg",
            "HTML/CSS": "html5.svg",
            "Git": "git.svg",
            "GitHub": "github.svg",
            "GitLab": "gitlab.svg",
            "Docker": "docker.svg",
            "Jira": "jira.svg",
            "Figma": "figma.svg",
            "Ubuntu": "ubuntu.svg",
            "Linux": "linux.svg",
            "Windows": "windows.svg",
            "C#/.NET": "dotnet.svg",
            "CloudPanel": "cloudpanel.svg",
            "Render": "render.svg",
            "OpenVPN": "openvpn.svg",
            "phpMyAdmin": "phpmyadmin.svg",
            "XAMPP": "xampp.svg",
            "Zabbix": "zabbix.svg",
            "Wazuh": "wazuh.svg",
            "SnipeIT": "snipeit.svg"
        };

        // Try exact match first
        if (techIcons[tech]) {
            return `./img/${techIcons[tech]}`;
        }

        // Try case-insensitive match
        const lowerTech = tech.toLowerCase();
        for (const [key, value] of Object.entries(techIcons)) {
            if (key.toLowerCase() === lowerTech) {
                return `./img/${value}`;
            }
        }

        return null;
    };
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
            techStack: ["React", "Remix", "Supabase", "Tailwind CSS", "Ant Design", "Vite", "NPM", "Prettier", "HTML/CSS", "GitHub"],
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
            techStack: ["React", "Remix", "Supabase", "Tailwind CSS", "Ant Design", "Vite", "NPM", "Prettier", "HTML/CSS", "GitHub"],
            image: "budget.png",
            link: "#",
            type: "solo"
        },
        {
            title: "Workflow Tracker",
            year: "2025",
            category: "Full Stack Application",
            description: "Helps users track progress, deadlines, and responsibilities to ensure smooth project execution.",
            features: [
                "Task Management",
                "Workflow Stages",
                "Reports & Analytics",
                "Progress Tracking",
                "Dashboard Overview"
            ],
            techStack: ["React", "Remix", "Supabase", "Tailwind CSS", "Ant Design", "Vite", "NPM", "Prettier", "HTML/CSS", "GitHub"],
            image: "workflow.png",
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
            techStack: ["React", "Remix", "Supabase", "Tailwind CSS", "Ant Design", "Vite", "NPM", "Prettier", "HTML/CSS", "GitHub"],
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
            techStack: ["React", "Remix", "Tailwind CSS", "Vite", "NPM", "Prettier", "HTML/CSS", "GitHub"],
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
            techStack: ["Angular", "Node.JS", "Tailwind CSS", "Ant Design", "Vite", "NPM", "Prettier", "HTML/CSS", "GitHub"],
            image: "lgu.jpg",
            link: "#",
            type: "team"
        },
        {
            title: "Elf Station Inc.",
            year: "2021",
            category: "Content Management System",
            description: "Provides Web Design, System Development, ERP Systems and Government Systems.",
            features: [
                "Platform Flexibility",
                "Custom Development",
                "User-Friendly / Responsive Design",
                "Service Variety"
            ],
            techStack: ["WordPress", "HTML/CSS", "Xampp", "cPanel", "phpMyAdmin"],
            image: "elfstation.png",
            link: "#",
            type: "solo"
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
            techStack: ["WordPress", "HTML/CSS", "Xampp", "cPanel", "phpMyAdmin", "WooCommerce"],
            image: "themangomall.png",
            link: "#",
            type: "solo"
        },
        {
            title: "Clevermasters",
            year: "2019",
            category: "Content Management System",
            description: "Management consultancy, corporate support, outsourcing, project management, and regulatory assistance to help businesses improve operations and ensure compliance.",
            features: [
                "Local expertise in Cebu / Philippines",
                "Reliability / trustworthiness",
                "Support in administrative / back-office tasks",
                "One-stop service for corporate management tasks",
                "Customizable solutions"
            ],
            techStack: ["WordPress", "HTML/CSS", "Xampp", "cPanel", "phpMyAdmin"],
            image: "clevermasters.png",
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
            <div className="grid grid-cols-1 gap-8">
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
                        <div
                            className="relative overflow-hidden bg-gray-50 cursor-pointer"
                            onClick={() => setFullscreenImage(`./img/${project.image}`)}
                        >
                            <div className="relative group/image">
                                <img
                                    className="w-full h-96 object-contain transition-transform duration-300 group-hover/image:scale-105"
                                    src={`./img/${project.image}`}
                                    alt={`${project.title} screenshot`}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
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
                                {project.techStack.map((tech, i) => {
                                    const iconPath = getTechIcon(tech);
                                    return (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                                        >
                                            {iconPath && (
                                                <img
                                                    src={iconPath}
                                                    alt={`${tech} icon`}
                                                    className="w-4 h-4 object-contain"
                                                    onError={(e) => {
                                                        // Hide icon if it fails to load
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            )}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="p-5 pt-4 border-t border-gray-100">
                            {isConfidential(project.title) ? (
                                <button
                                    onClick={() => setConfidentialModalOpen(true)}
                                    className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 text-sm font-medium py-2.5 rounded-lg border border-gray-200 transition-colors"
                                >
                                    <span>View Project Details</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            ) : (
                                <Link
                                    to={project.link}
                                    className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 text-sm font-medium py-2.5 rounded-lg border border-gray-200 transition-colors"
                                >
                                    <span>View Project Details</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </Link>
                            )}
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

            {/* Fullscreen Image Modal */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                    onClick={() => setFullscreenImage(null)}
                >
                    <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                        <img
                            className="max-w-full max-h-full object-contain"
                            src={fullscreenImage}
                            alt="Fullscreen project view"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setFullscreenImage(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
                            aria-label="Close fullscreen"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                            Click outside or press ESC to close
                        </div>
                    </div>
                </div>
            )}

            {/* Confidentiality Modal */}
            {confidentialModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    onClick={() => setConfidentialModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setConfidentialModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="flex items-center mb-4">
                            <div className="bg-red-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Confidential Project
                            </h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-gray-700 mb-3">
                                This project is <span className="font-semibold text-gray-900">confidential and exclusive</span> to the company.
                            </p>
                            <p className="text-gray-600 text-sm">
                                Detailed information, source code, and implementation details are restricted and available only to authorized personnel within the organization.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-gray-900">Note:</span> If you are an authorized representative of the company and need access to this project, please contact the project administrator directly.
                            </p>
                        </div>
                        <button
                            onClick={() => setConfidentialModalOpen(false)}
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                        >
                            Understood
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}