import { Link } from "@remix-run/react";

export default function Projects() {
    const projects = [
        {
            title: "Full Inventory System",
            year: "2025",
            description: "A comprehensive inventory management solution for efficient stock monitoring.",
            features: [
                "Stock level monitoring",
                "SKU (Stock Keeping Unit) management",
                "Role-based access control",
                "Inventory valuation reports",
                "Barcode scanning integration",
                "Multi-location inventory tracking"
            ],
            techStack: [
                { name: "React", icon: "react.svg", url: "https://react.dev/" },
                { name: "Remix", icon: "remix.svg", url: "https://remix.run/" },
                { name: "Tailwind", icon: "tailwind.svg", url: "https://tailwindcss.com/" },
                { name: "Ant Design", icon: "antd.svg", url: "https://ant.design/" },
                { name: "Vite", icon: "vite.svg", url: "https://vite.dev/" },
                { name: "NPM", icon: "npm.svg", url: "https://www.npmjs.com/" },
                { name: "ESLint", icon: "eslint.svg", url: "https://eslint.org/" },
                { name: "Prettier", icon: "prettier.svg", url: "https://prettier.io/" },
                { name: "Supabase", icon: "supabase.svg", url: "https://supabase.com/" },
                { name: "Github", icon: "github.svg", url: "https://github.com/" },
                { name: "HTML", icon: "html5.svg", url: "" }
            ],
            image: "full-inventory.png",
            type: "Website (Self Made)",
            link: "#"
        },
        {
            title: "Budget Tracker",
            year: "2025",
            description: "Helps users monitor their income, expenses, and savings.",
            features: [
                "Income and Expense Tracking",
                "Budget Planning",
                "Visual Reports and Charts",
                "Savings Goals",
                "Mobile and Web Access",
                "Category Management"
            ],
            techStack: [
                { name: "React", icon: "react.svg", url: "https://react.dev/" },
                { name: "Remix", icon: "remix.svg", url: "https://remix.run/" },
                { name: "Tailwind", icon: "tailwind.svg", url: "https://tailwindcss.com/" },
                { name: "Ant Design", icon: "antd.svg", url: "https://ant.design/" },
                { name: "Vite", icon: "vite.svg", url: "https://vite.dev/" },
                { name: "NPM", icon: "npm.svg", url: "https://www.npmjs.com/" },
                { name: "ESLint", icon: "eslint.svg", url: "https://eslint.org/" },
                { name: "Prettier", icon: "prettier.svg", url: "https://prettier.io/" },
                { name: "Supabase", icon: "supabase.svg", url: "https://supabase.com/" },
                { name: "Github", icon: "github.svg", url: "https://github.com/" },
                { name: "HTML", icon: "html5.svg", url: "" }
            ],
            image: "budget.png",
            type: "Website (Self Made)",
            link: "#"
        },
        {
            title: "Workflow Tracker",
            year: "2025",
            description: "Helps users track progress, deadlines, and responsibilities to ensure smooth project execution.",
            features: [
                "Task Management",
                "Progress Tracking",
                "Workflow Stages",
                "Dashboard Overview",
                "Reports & Analytics"
            ],
            techStack: [
                { name: "React", icon: "react.svg", url: "https://react.dev/" },
                { name: "Remix", icon: "remix.svg", url: "https://remix.run/" },
                { name: "Tailwind", icon: "tailwind.svg", url: "https://tailwindcss.com/" },
                { name: "Ant Design", icon: "antd.svg", url: "https://ant.design/" },
                { name: "Vite", icon: "vite.svg", url: "https://vite.dev/" },
                { name: "NPM", icon: "npm.svg", url: "https://www.npmjs.com/" },
                { name: "ESLint", icon: "eslint.svg", url: "https://eslint.org/" },
                { name: "Prettier", icon: "prettier.svg", url: "https://prettier.io/" },
                { name: "Supabase", icon: "supabase.svg", url: "https://supabase.com/" },
                { name: "Github", icon: "github.svg", url: "https://github.com/" },
                { name: "HTML", icon: "html5.svg", url: "" }
            ],
            image: "workflow.png",
            type: "Website (Self Made)",
            link: "#"
        },
        {
            title: "Admin Panel",
            year: "2025",
            description: "Helps users track progress, deadlines, and responsibilities to ensure smooth project execution.",
            features: [
                "Dashboard Overview",
                "User Management",
                "Role-Based Access Control",
                "System Configuration",
                "Data Management"
            ],
            techStack: [
                { name: "React", icon: "react.svg", url: "https://react.dev/" },
                { name: "Remix", icon: "remix.svg", url: "https://remix.run/" },
                { name: "Tailwind", icon: "tailwind.svg", url: "https://tailwindcss.com/" },
                { name: "Ant Design", icon: "antd.svg", url: "https://ant.design/" },
                { name: "Vite", icon: "vite.svg", url: "https://vite.dev/" },
                { name: "NPM", icon: "npm.svg", url: "https://www.npmjs.com/" },
                { name: "ESLint", icon: "eslint.svg", url: "https://eslint.org/" },
                { name: "Prettier", icon: "prettier.svg", url: "https://prettier.io/" },
                { name: "Supabase", icon: "supabase.svg", url: "https://supabase.com/" },
                { name: "Github", icon: "github.svg", url: "https://github.com/" },
                { name: "HTML", icon: "html5.svg", url: "" }
            ],
            image: "admin.png",
            type: "Website (Self Made)",
            link: "#"
        },
        {
            title: "SICE",
            year: "2025",
            description: "Designed to engage audiences, attract new members, and provide updates on upcoming events or concerts.",
            features: [
                "Showcase Performances",
                "Events and Schedules",
                "Meet the Choir Members",
                "About the Choir",
                "Photo and Video Gallery",
                "News and Announcements",
                "Contact and Join Us",
                "Support or Donate Page",
                "Social Media Links"
            ],
            techStack: [
                { name: "React", icon: "react.svg", url: "https://react.dev/" },
                { name: "Remix", icon: "remix.svg", url: "https://remix.run/" },
                { name: "Tailwind", icon: "tailwind.svg", url: "https://tailwindcss.com/" },
                { name: "Ant Design", icon: "antd.svg", url: "https://ant.design/" },
                { name: "Vite", icon: "vite.svg", url: "https://vite.dev/" },
                { name: "NPM", icon: "npm.svg", url: "https://www.npmjs.com/" },
                { name: "ESLint", icon: "eslint.svg", url: "https://eslint.org/" },
                { name: "Prettier", icon: "prettier.svg", url: "https://prettier.io/" },
                { name: "Github", icon: "github.svg", url: "https://github.com/" },
                { name: "HTML", icon: "html5.svg", url: "" }
            ],
            image: "sice.png",
            type: "Website (Self Made)",
            link: "#"
        },
        {
            title: "Prosperidad (LGU)",
            year: "2022",
            description: "Manage records, services, transactions, and communication between the local government and its constituents",
            features: [
                "Citizen Management",
                "Business Permit and Licensing",
                "Financial Management",
                "Document and Records Management",
                "Barangay / Department Modules",
                "Report Generation and Analytics",
                "User Roles and Access Control"
            ],
            techStack: [
                { name: "Wordpress", icon: "wordpress.svg", url: "https://wordpress.com/" },
                { name: "HTML", icon: "html5.svg", url: "" },
                { name: "CSS", icon: "css3.svg", url: "" },
                { name: "cPanel", icon: "cpanel.svg", url: "https://cpanel.net/" },
                { name: "Xampp", icon: "xampp.svg", url: "https://www.apachefriends.org/" },
                { name: "phpMyAdmin", icon: "phpmyadmin.svg", url: "https://phpmyadmin.net/" }
            ],
            image: "lgu.jpg",
            type: "Website (With Team)",
            link: "#"
        },
        {
            title: "Elf Station Inc.",
            year: "2021",
            description: "Provides Web Design, System Development, ERP Systems and Government Systems.",
            features: [
                "Platform Flexibility",
                "User-Friendly / Responsive Design",
                "Custom Development",
                "Service Variety"
            ],
            techStack: [
                { name: "Wordpress", icon: "wordpress.svg", url: "https://wordpress.com/" },
                { name: "HTML", icon: "html5.svg", url: "" },
                { name: "CSS", icon: "css3.svg", url: "" },
                { name: "cPanel", icon: "cpanel.svg", url: "https://cpanel.net/" },
                { name: "Xampp", icon: "xampp.svg", url: "https://www.apachefriends.org/" },
                { name: "phpMyAdmin", icon: "phpmyadmin.svg", url: "https://phpmyadmin.net/" }
            ],
            image: "elfstation.png",
            type: "Website/Mobile (Self Made)",
            link: "#"
        },
        {
            title: "The Mango Mall Online",
            year: "2020",
            description: "It allows businesses to sell products or services online, manage orders, accept payments, and track inventory — all from a single dashboard.",
            features: [
                "Online Storefront",
                "Secure Payments",
                "Shopping Cart & Checkout",
                "Inventory Management",
                "Customizable Design",
                "Shipping & Tax Control",
                "Mobile Responsive"
            ],
            techStack: [
                { name: "Wordpress", icon: "wordpress.svg", url: "https://wordpress.com/" },
                { name: "Woocommerce", icon: "woocommerce.svg", url: "https://woocommerce.com/" },
                { name: "HTML", icon: "html5.svg", url: "" },
                { name: "CSS", icon: "css3.svg", url: "" },
                { name: "cPanel", icon: "cpanel.svg", url: "https://cpanel.net/" },
                { name: "Xampp", icon: "xampp.svg", url: "https://www.apachefriends.org/" },
                { name: "phpMyAdmin", icon: "phpmyadmin.svg", url: "https://phpmyadmin.net/" }
            ],
            image: "themangomall.png",
            type: "Website/Mobile (Self Made)",
            link: "#"
        },
        {
            title: "Clevermasters",
            year: "2019",
            description: "Management consultancy, corporate support, outsourcing, project management, and regulatory assistance to help businesses improve operations and ensure compliance.",
            features: [
                "Local expertise in Cebu / Philippines",
                "One-stop service for corporate management tasks",
                "Reliability / trustworthiness",
                "Customizable solutions",
                "Support in administrative / back-office tasks"
            ],
            techStack: [
                { name: "Wordpress", icon: "wordpress.svg", url: "https://wordpress.com/" },
                { name: "HTML", icon: "html5.svg", url: "" },
                { name: "CSS", icon: "css3.svg", url: "" },
                { name: "cPanel", icon: "cpanel.svg", url: "https://cpanel.net/" },
                { name: "Xampp", icon: "xampp.svg", url: "https://www.apachefriends.org/" },
                { name: "phpMyAdmin", icon: "phpmyadmin.svg", url: "https://phpmyadmin.net/" }
            ],
            image: "clevermasters.png",
            type: "Website/Mobile (Self Made)",
            link: "#"
        }
    ];

    return (
        <div className="space-y-10">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
                >
                    {/* Project Header */}
                    <div className="p-8 pb-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                    <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {project.year}
                                    </span>
                                </div>
                                <p className="text-gray-300">{project.type}</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                                    {project.description}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 pt-6">
                        {/* Project Features */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-500 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src="./img/feature.svg" alt="features" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                    Key Features
                                </h3>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start bg-gray-700 bg-opacity-50 rounded-lg p-3">
                                        <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-300">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technology Stack */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-500 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src="./img/techstack.svg" alt="tech stack" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                    Technology Stack
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, i) => (
                                    <Link
                                        key={i}
                                        to={tech.url}
                                        target="_blank"
                                        className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white text-sm transition-all border border-gray-600 hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5"
                                        title={tech.name}
                                    >
                                        <img
                                            className="h-5 w-5 mr-2 object-contain"
                                            src={`./img/${tech.icon}`}
                                            alt={tech.name}
                                        />
                                        <span>{tech.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Project Screenshot */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-500 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src="./img/ui.svg" alt="screenshot" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                    User Interface
                                </h3>
                            </div>
                            <div className="relative group rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all duration-300">
                                <img
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={`./img/${project.image}`}
                                    alt={`${project.title} screenshot`}
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}