import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url(/app/img/dot-grid.png)] bg-[length:40px_40px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Profile Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image with Glow Effect */}
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                  <img
                    className="relative rounded-full h-36 w-36 border-4 border-white border-opacity-20 object-cover shadow-xl group-hover:border-opacity-40 transition-all duration-300"
                    src="./img/myself.jpg"
                    alt="Charls Dave Erana"
                  />
                </div>

                {/* Profile Info */}
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                    CHARLS DAVE M. ERANA
                  </h1>
                  <p className="text-white text-opacity-80 mt-3 text-lg italic font-light">
                    "Web Designer | IT Personnel | Software/Web Developer | Travel Lover | Music Lover"
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-4 mt-6">
                    {[
                      { icon: "facebook.svg", url: "https://www.facebook.com/sakenerana" },
                      { icon: "instagram.svg", url: "https://www.instagram.com/charlsdaveerana/" },
                      { icon: "tiktok.svg", url: "https://www.tiktok.com/@charlsdaveerana" },
                      { icon: "linkedin.svg", url: "https://www.linkedin.com/in/charls-dave-erana-39b8b6180/" },
                      { icon: "gmail.svg", url: "mailto:sakenerana@gmail.com" }
                    ].map((social, index) => (
                      <Link
                        key={index}
                        to={social.url}
                        target="_blank"
                        className="transition-all hover:scale-110 hover:brightness-125"
                      >
                        <div className="bg-gray-800 p-2 rounded-lg hover:bg-purple-900 transition-colors">
                          <img
                            className="h-6 w-6 object-contain"
                            src={`./img/${social.icon}`}
                            alt={social.icon.split('.')[0]}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-lg text-white text-sm transition-all border border-gray-700 hover:border-purple-500">
                  <img className="h-5 w-5 mr-2 brightness-0 invert opacity-80" src="./img/phone.svg" alt="phone" />
                  +639553713233
                </div>

                <Link
                  to="https://docs.google.com/document/d/1Izh0zT_kFA8zF3xgnbGq9Sy0a7Bt7vWDaAxyayhXp7I/edit?tab=t.0"
                  target="_blank"
                  className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:shadow-lg"
                >
                  <img className="h-5 w-5 mr-2" src="./img/download.svg" alt="download" />
                  Download Resume
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-gray-800 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-700 max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center gap-1">
                {[
                  { icon: "person.svg", label: "About", path: "/" },
                  { icon: "skills.svg", label: "Skills", path: "/skills" },
                  { icon: "work.svg", label: "Experience", path: "/work-and-education" },
                  { icon: "setting.svg", label: "Projects", path: "/projects" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center justify-center px-5 py-3 rounded-xl hover:bg-gray-700 hover:text-purple-300 transition-all duration-200 text-white font-medium text-sm"
                  >
                    <img
                      className="h-5 w-5 mr-2 brightness-0 invert opacity-80"
                      src={`./img/${item.icon}`}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Content Outlet */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 min-h-[400px] transition-all hover:border-purple-500 duration-300">
              <Outlet />
            </div>
          </div>

          {/* Right Column - Skills Section */}
          <div className="space-y-8">
            {/* Skills Categories */}
            {[
              {
                title: "Web Development",
                skills: [
                  { icon: "react.svg", name: "React", url: "https://react.dev/" },
                  { icon: "angular.svg", name: "Angular", url: "https://angular.dev/" },
                  { icon: "nodejs.svg", name: "Node JS", url: "https://nodejs.org/en" },
                  { icon: "antd.svg", name: "Ant Design", url: "https://ant.design/" },
                  { icon: "tailwind.svg", name: "Tailwind", url: "https://tailwindcss.com/" },
                  { icon: "vite.svg", name: "Vite", url: "https://vite.dev/" },
                  { icon: "shopify.svg", name: "Shopify", url: "https://www.shopify.com/" },
                  { icon: "nextjs.svg", name: "NextJS", url: "https://nextjs.org/" },
                  { icon: "nestjs.svg", name: "NestJS", url: "https://nestjs.com/" },
                  { icon: "supabase.svg", name: "Supabase", url: "https://supabase.com/" },
                  { icon: "remix.svg", name: "Remix", url: "https://remix.run/" },
                  { icon: "jira.svg", name: "Jira", url: "https://www.atlassian.com/software/jira" },
                  { icon: "vue.svg", name: "VueJS", url: "https://vuejs.org/" },
                  { icon: "dotnet.svg", name: ".NET", url: "https://dotnet.microsoft.com/" },
                  { icon: "prettier.svg", name: "Prettier", url: "https://prettier.io/" },
                  { icon: "npm.svg", name: "NPM", url: "https://www.npmjs.com/" },
                  { icon: "eslint.svg", name: "ESLint", url: "https://eslint.org/" },
                  { icon: "figma.svg", name: "Figma", url: "https://www.figma.com/" },
                  { icon: "html5.svg", name: "HTML", url: "" },
                  { icon: "css3.svg", name: "CSS", url: "" },
                  { icon: "firebase.svg", name: "Firebase", url: "https://firebase.google.com/" }
                ]
              },
              {
                title: "Operating System",
                skills: [
                  { icon: "windows.svg", name: "Windows", url: "https://www.microsoft.com/" },
                  { icon: "ubuntu.svg", name: "Ubuntu", url: "https://ubuntu.com/" },
                  { icon: "linux.svg", name: "Linux", url: "https://www.linux.org/" },
                  { icon: "apple.svg", name: "Mac", url: "https://www.apple.com/ph/mac/" }
                ]
              },
              {
                title: "Version Control",
                skills: [
                  { icon: "github.svg", name: "Github", url: "https://github.com/" },
                  { icon: "gitlab.svg", name: "Gitlab", url: "http://gitlab.com/" },
                  { icon: "git.svg", name: "Git", url: "https://git-scm.com/" }
                ]
              },
              {
                title: "Open Source",
                skills: [
                  { icon: "snipeit.svg", name: "SnipeIT", url: "https://snipeitapp.com/" },
                  { icon: "wazuh.svg", name: "Wazuh", url: "https://wazuh.com/" },
                  { icon: "zabbix.svg", name: "Zabbix", url: "https://www.zabbix.com/" },
                  { icon: "xampp.svg", name: "Xampp", url: "https://www.apachefriends.org/" },
                  { icon: "phpmyadmin.svg", name: "phpMyAdmin", url: "https://phpmyadmin.net/" },
                  { icon: "openvpn.svg", name: "openVPN", url: "https://openvpn.net/" },
                  { icon: "docker.svg", name: "Docker", url: "https://www.docker.com/" },
                  { icon: "cloudpanel.svg", name: "CloudPanel", url: "https://www.cloudpanel.io/" },
                  { icon: "render.svg", name: "Render", url: "https://render.com/" },
                  { icon: "cpanel.svg", name: "cPanel", url: "https://cpanel.net/" }
                ]
              },
              {
                title: "Vibe Coding",
                skills: [
                  { icon: "wordpress.svg", name: "Wordpress", url: "https://wordpress.com/" },
                  { icon: "lovable.svg", name: "Lovable", url: "https://lovable.dev/" },
                  { icon: "wix.svg", name: "Wix Studio", url: "https://wix.com/" },
                  { icon: "webflow.svg", name: "Webflow", url: "https://webflow.com/" },
                  { icon: "chatgpt.svg", name: "ChatGPT", url: "https://chatgpt.com/" },
                  { icon: "deepseek.svg", name: "DeepSeek", url: "https://chatgpt.com/" },
                  { icon: "firebasestudio.svg", name: "Firebase Studio", url: "https://studio.firebase.google.com/" }
                ]
              }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-white mb-5 flex items-center">
                  <span className="bg-clip-text text-white">
                    {category.title}
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Link
                      key={skillIndex}
                      to={skill.url}
                      target="_blank"
                      className="flex items-center bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-white text-sm transition-all border border-gray-600 hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5"
                      title={skill.name}
                    >
                      <img
                        className="h-5 w-5 mr-2 object-contain"
                        src={`./img/${skill.icon}`}
                        alt={skill.name}
                      />
                      <span>{skill.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Charls Dave Erana. All rights reserved.</p>
          <p className="mt-1">Built with Remix and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}