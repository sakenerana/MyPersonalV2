import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-[url(/app/img/meteor.gif)] bg-no-repeat bg-cover">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white border-opacity-20">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Profile Image */}
                <div className="shrink-0">
                  <img
                    className="rounded-full h-32 w-32 border-4 border-white border-opacity-30 object-cover shadow-md"
                    src="./img/myself.jpg"
                    alt="Charls Dave Erana"
                  />
                </div>

                {/* Profile Info */}
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold text-white">CHARLS DAVE M. ERANA</h1>
                  <p className="text-white text-opacity-80 italic mt-2">
                    "Web Designer | IT Personnel | Software/Web Developer | Travel Lover | Music Lover"
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-3 mt-4">
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
                        className="transition-transform hover:scale-110"
                      >
                        <img
                          className="h-6 w-6 object-contain"
                          src={`./img/${social.icon}`}
                          alt={social.icon.split('.')[0]}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-full text-white text-sm">
                  <img className="h-5 w-5 mr-2" src="./img/phone.svg" alt="phone" />
                  +639553713233
                </div>

                <Link
                  to="https://docs.google.com/document/d/1Izh0zT_kFA8zF3xgnbGq9Sy0a7Bt7vWDaAxyayhXp7I/edit?tab=t.0"
                  target="_blank"
                  className="flex items-center bg-white text-black px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-opacity-90 hover:shadow-md"
                >
                  <img className="h-5 w-5 mr-2" src="./img/download.svg" alt="download" />
                  Download Resume
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white border-opacity-20">
              <h2 className="text-xl font-bold text-white mb-4">Navigation</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {[
                  { icon: "person.svg", label: "About Me", path: "/" },
                  { icon: "skills.svg", label: "Skills", path: "/skills" },
                  { icon: "work.svg", label: "Work & Education", path: "/work-and-education" },
                  { icon: "setting.svg", label: "Projects", path: "/projects" },
                  { icon: "ai.svg", label: "Vibe Coding", path: "/vibe-coding" }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex flex-col items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg p-3 transition-all cursor-pointer border border-white border-opacity-10"
                  >
                    <img
                      className="h-6 w-6 mb-1"
                      src={`./img/${item.icon}`}
                      alt={item.label}
                    />
                    <span className="text-white text-xs text-center">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Content Outlet */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white border-opacity-20 min-h-[300px]">
              <Outlet />
            </div>
          </div>

          {/* Right Column - Skills Section */}
          <div className="space-y-6">
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
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white border-opacity-20"
              >
                <h2 className="text-lg font-bold text-white mb-4">{category.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Link
                      key={skillIndex}
                      to={skill.url}
                      target="_blank"
                      className="flex items-center bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full text-white text-sm transition-all border border-white border-opacity-10"
                    >
                      <img
                        className="h-4 w-4 mr-2 object-contain"
                        src={`./img/${skill.icon}`}
                        alt={skill.name}
                      />
                      {skill.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}