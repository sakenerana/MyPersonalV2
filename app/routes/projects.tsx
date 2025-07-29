import { Link } from "@remix-run/react";

<<<<<<< HEAD
export default function Projects() {
    const projects = [
        {
            title: "Full Inventory System",
            year: "2025",
            description: "A comprehensive inventory management solution with real-time tracking capabilities",
            features: [
                "Real-time stock level monitoring",
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
            image: "inventory-beta.png",
            type: "Website (Self Made)",
            link: "#"
        },
        {
            title: "Clevermasters",
            year: "2019",
            description: "E-commerce platform with inventory management features",
            features: [
                "Online product catalog",
                "Shopping cart functionality",
                "Payment gateway integration",
                "Order management system",
                "Customer account management",
                "Responsive mobile design"
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
                    className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden"
                >
                    {/* Project Header */}
                    <div className="p-8 pb-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                    <span className="bg-purple-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {project.year}
                                    </span>
                                </div>
                                <p className="text-gray-300">{project.type}</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
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
                                <div className="bg-purple-500 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src="./img/features.svg" alt="features" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                                    Key Features
                                </h3>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start bg-gray-700 bg-opacity-50 rounded-lg p-3">
                                        <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-300">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technology Stack */}
                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-purple-500 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src="./img/tech-stack.svg" alt="tech stack" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                                    Technology Stack
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, i) => (
                                    <Link
                                        key={i}
                                        to={tech.url}
                                        target="_blank"
                                        className="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white text-sm transition-all border border-gray-600 hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5"
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
                                <div className="bg-purple-500 p-2 rounded-lg mr-3">
                                    <img className="h-5 w-5" src="./img/screenshot.svg" alt="screenshot" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                                    User Interface
                                </h3>
                            </div>
                            <div className="relative group rounded-xl overflow-hidden border-2 border-gray-700 hover:border-purple-500 transition-all duration-300">
                                <img
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={`./img/${project.image}`}
                                    alt={`${project.title} screenshot`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
=======
export default function () {
  return (
    <div>
      <div className="col-span-full m-2">
        <h1 className="pt-3">
          <b>Full Invetory - Website (Self Made) - Year 2025</b>
        </h1>
        <div className="mt-2">
          <ul className="list-disc ml-5">
            <li>
              <p className="italic ">Real-time stock level monitoring</p>
            </li>
            <li>
              <p className="italic">SKU (Stock Keeping Unit) management</p>
            </li>
            <li>
              <p className="italic">Role-based access control</p>
            </li>
            <li>
              <p className="italic">Inventory valuation reports</p>
            </li>
          </ul>
>>>>>>> 231ec780755a3f7d2d6a1246d997c7a001b31049
        </div>
        <h1 className="mt-2">
          <b>Tech Used</b>
        </h1>
        <div className="flex flex-wrap gap-2 mt-1">
          <Link to={"https://react.dev/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/react.svg" alt="react" />
              React
            </div>
          </Link>
          <Link to={"https://remix.run/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px hover:border hover:border-white]">
              <img className="h-5 pr-2" src="./img/remix.svg" alt="remix" />
              Remix
            </div>
          </Link>
          <Link to={"https://tailwindcss.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 pr-2"
                src="./img/tailwind.svg"
                alt="tailwind"
              />
              Tailwind
            </div>
          </Link>
          <Link to={"https://ant.design/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/antd.svg" alt="ant design" />
              Ant Design
            </div>
          </Link>
          <Link to={"https://vite.dev/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/vite.svg" alt="vite" />
              Vite
            </div>
          </Link>
          <Link to={"https://www.npmjs.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-4 mt-1 pr-2" src="./img/npm.svg" alt="npm" />
              NPM
            </div>
          </Link>
          <Link to={"https://eslint.org/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/eslint.svg" alt="eslint" />
              ESLint
            </div>
          </Link>
          <Link to={"https://prettier.io/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 pr-2"
                src="./img/prettier.svg"
                alt="prettier"
              />
              Prettier
            </div>
          </Link>
          <Link to={"https://supabase.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 pr-2"
                src="./img/supabase.svg"
                alt="supabase"
              />
              Supabase
            </div>
          </Link>
          <Link to={"https://github.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 mr-1 bg-white rounded-full"
                src="./img/github.svg"
                alt="github"
              />
              Github
            </div>
          </Link>
          <Link to={""} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/html5.svg" alt="html5" />
              HTML
            </div>
          </Link>
        </div>
        <h1 className="mt-2">
          <b>User Interface</b>
        </h1>
        <img
          className="h-fit mt-2 w-100vw hover:border-2 hover:border-black"
          src="./img/inventory-beta.png"
          alt="person"
        />
        <div className="border-t border-gray-200 my-4"></div>
      </div>

      {/* 2nd Row */}

      <div className="col-span-full">
        <h1>
          <b>Clevermasters - Website/Mobile (Self Made) - Year 2019</b>
        </h1>
        <div className="mt-2">
          <ul className="list-disc ml-5">
            <li>
              <p className="italic ">Job Seek for General Services</p>
            </li>
            <li>
              <p className="italic">Less Hassle</p>
            </li>
            <li>
              <p className="italic">Flexibility</p>
            </li>
            <li>
              <p className="italic">Effiency</p>
            </li>
          </ul>
        </div>
        <h1 className="mt-2">
          <b>Tech Used</b>
        </h1>
        <div className="flex flex-wrap gap-2 mt-1">
          <Link to={"https://wordpress.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 pr-2"
                src="./img/wordpress.svg"
                alt="wordpress"
              />
              Wordpress
            </div>
          </Link>
          <Link to={""} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/html5.svg" alt="html5" />
              HTML
            </div>
          </Link>
          <Link to={""} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/css3.svg" alt="css3" />
              CSS
            </div>
          </Link>
          <Link to={"https://cpanel.net/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 mr-1" src="./img/cpanel.svg" alt="cpanel" />
              cPanel
            </div>
          </Link>
          <Link to={"https://www.apachefriends.org/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 mr-1 bg-white "
                src="./img/xampp.svg"
                alt="xampp"
              />
              Xampp
            </div>
          </Link>
          <Link to={"https://phpmyadmin.net/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-4 mt-1 mr-1 bg-white "
                src="./img/phpmyadmin.svg"
                alt="phpmyadmin"
              />
              phpMyAdmin
            </div>
          </Link>
        </div>
        <h1 className="mt-2">
          <b>User Interface</b>
        </h1>
        <img
          className="h-fit mt-2 w-100vw hover:border-2 hover:border-black"
          src="./img/clevermasters.png"
          alt="clevermasters"
        />
        <div className="border-t border-gray-200 my-4"></div>
      </div>

      {/* 3rd Row */}

      <div className="col-span-full">
        <h1>
          <b>
            Saint Isidore Chorale Ensemble - Website/Mobile (Self Made) - Year
            2025
          </b>
        </h1>
        <div className="mt-2">
          <ul className="list-disc ml-5">
            <li>
              <p className="italic ">Centralized Information Hub</p>
            </li>
            <li>
              <p className="italic">News & Updates</p>
            </li>
            <li>
              <p className="italic">
                Audience Interaction & Performance Calendar
              </p>
            </li>
            <li>
              <p className="italic">Testimonials & Reviews</p>
            </li>
            <li>
              <p className="italic">Open for members to join or donate</p>
            </li>
          </ul>
        </div>
        <h1 className="mt-2">
          <b>Tech Used</b>
        </h1>
        <div className="flex flex-wrap gap-2 mt-1">
          <Link to={"https://react.dev/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-6 pr-2" src="./img/react.svg" alt="react" />
              React
            </div>
          </Link>
          <Link to={"https://tailwindcss.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 pr-2"
                src="./img/tailwind.svg"
                alt="tailwind"
              />
              Tailwind
            </div>
          </Link>
          <Link to={""} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/html5.svg" alt="html5" />
              HTML
            </div>
          </Link>
          <Link to={""} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/css3.svg" alt="css3" />
              CSS
            </div>
          </Link>
          <Link to={"https://nodejs.org/en"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/nodejs.svg" alt="nodejs" />
              Node JS
            </div>
          </Link>
          <Link to={"https://vite.dev/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-5 pr-2" src="./img/vite.svg" alt="vite" />
              Vite
            </div>
          </Link>
          <Link to={"https://remix.run/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px hover:border hover:border-white]">
              <img className="h-5 pr-2" src="./img/remix.svg" alt="remix" />
              Remix
            </div>
          </Link>
          <Link to={"https://www.npmjs.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img className="h-4 mt-1 pr-2" src="./img/npm.svg" alt="npm" />
              NPM
            </div>
          </Link>
          <Link to={"https://prettier.io/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-5 pr-2"
                src="./img/prettier.svg"
                alt="prettier"
              />
              Prettier
            </div>
          </Link>
          <Link to={"https://render.com/"} target="_blank">
            <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
              <img
                className="h-4 mr-1 bg-white"
                src="./img/render.svg"
                alt="cloudpanel"
              />
              Render
            </div>
          </Link>
        </div>
        <h1 className="mt-2">
          <b>User Interface</b>
        </h1>
        <img
          className="h-fit mt-2 w-100vw hover:border-2 hover:border-black"
          src="./img/sice.png"
          alt="clevermasters"
        />
        <div className="border-t border-gray-200 my-4"></div>
      </div>
    </div>
  );
}
