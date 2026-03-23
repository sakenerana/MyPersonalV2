import { Link, NavLink, Outlet } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Index() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-colors duration-200 dark:from-gray-950 dark:to-slate-900">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(90deg,#1f2937_1px,transparent_1px)]"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Left Column - Profile & Navigation */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              {/* Ribbon at Top Left */}
              <div className="absolute -top-2 -left-2">
                <div className="relative">
                  {/* Ribbon Shape */}
                  <div className="h-7 bg-gradient-to-r from-gray-600 to-gray-500 flex items-center px-3 shadow-sm">
                    <span className="text-white text-xs font-bold uppercase tracking-wide">
                      Portfolio
                    </span>
                  </div>
                  {/* Ribbon Tail */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0 
        border-l-[6px] border-l-transparent
        border-t-[6px] border-t-gray-700
        border-r-[6px] border-r-transparent"></div>
                </div>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              >
                {theme === "light" ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12.79A9 9 0 1111.21 3c0 .34.02.67.05 1A7 7 0 0020 13c.33.03.66.05 1 .05z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v2.25M12 18.75V21M4.97 4.97l1.59 1.59M17.44 17.44l1.59 1.59M3 12h2.25M18.75 12H21M4.97 19.03l1.59-1.59M17.44 6.56l1.59-1.59M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
              </button>

              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-gray-100"></div>
                  <img
                    className="relative rounded-full h-32 w-32 object-cover shadow-md"
                    src="./img/myself.jpg"
                    alt="Charls Dave Erana"
                  />
                </div>

                {/* Profile Info */}
                <div className="space-y-3">
                  <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Charls Dave M. Erana
                  </h1>
                  <p className="text-gray-600 text-sm font-medium dark:text-gray-300">
                    Full Stack Developer
                  </p>
                  <p className="text-gray-500 text-sm italic dark:text-gray-400">
                    Building digital experiences with modern technologies
                  </p>
                </div>

                {/* Contact Info */}
                <div className="w-full mt-6 space-y-3">
                  <div className="flex text-gray-600 text-sm dark:text-gray-300">
                    <img className="h-4 w-4 mr-2 opacity-60" src="./img/phone.svg" alt="phone" />
                    +63 955 371 3233
                  </div>

                  <Link
                    to="mailto:sakenerana@gmail.com"
                    className="flex text-gray-600 text-sm hover:text-blue-600 transition-colors dark:text-gray-300"
                  >
                    <img className="h-4 w-4 mr-2 opacity-60" src="./img/gmail.svg" alt="email" />
                    sakenerana@gmail.com
                  </Link>
                </div>

                {/* Resume Download - Border Style */}
                <Link
                  to="./img/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full flex items-center justify-center 
    bg-white border-2 border-gray-900 dark:border-gray-200 dark:bg-gray-900
    hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900
    text-gray-900 dark:text-gray-100 px-4 py-2.5 rounded-lg 
    text-sm font-medium transition-all duration-200 
    shadow-sm hover:shadow"
                >
                  <img className="h-4 w-4 mr-2" src="./img/preview.svg" alt="preview" />
                  Preview Resume
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="space-y-1">
                {[
                  { icon: "person.svg", label: "About", path: "/" },
                  { icon: "skills.svg", label: "Skills", path: "/skills" },
                  { icon: "work.svg", label: "Experience", path: "/work-and-education" },
                  { icon: "setting.svg", label: "Projects", path: "/projects" },
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg transition-all duration-150 font-medium text-sm ${
                        isActive
                          ? "bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/40 dark:text-blue-200"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`
                    }
                  >
                    <img
                      className="h-4 w-4 mr-3 opacity-70"
                      src={`./img/${item.icon}`}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Availability</h3>
                  <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">Open to opportunities</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="text-xs font-medium text-green-600">Available</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center">
                <img className="h-4 w-4 mr-2 opacity-60" src="./img/location.svg" alt="location" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Location</h3>
                  <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">Philippines (GMT+8)</p>
                  <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">Upper Bacayan, Cebu City 6000</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 dark:text-gray-100">Certifications</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <img className="h-5 w-5 mr-2" src="./img/certificate.svg" alt="AWS" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300"> UC BEEHIVE Accelerator (12-week program)</span>
                </div>
                <div className="flex items-center">
                  <img className="h-5 w-5 mr-2" src="./img/certificate.svg" alt="React" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Innovation Kickboxing, Brand Sprint, Design Sprint</span>
                </div>
                <div className="flex items-center">
                  <img className="h-5 w-5 mr-2" src="./img/certificate.svg" alt="React" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Startup Roadmapping & Pitching Workshop</span>
                </div>
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 dark:text-gray-100">Interests & Hobbies</h3>
              <div className="space-y-3">

                {/* Music */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-purple-50 rounded-lg">
                    <img
                      className="h-4 w-4"
                      src="./img/music.svg"
                      alt="Music"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200">Music Enthusiast</p>
                    <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">
                      Drummer in a band, proficient in guitar & bass
                    </p>
                  </div>
                </div>

                {/* Gaming */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-blue-50 rounded-lg">
                    <img
                      className="h-4 w-4"
                      src="./img/gaming.svg"
                      alt="Gaming"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200">Gaming</p>
                    <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">
                      PS5 enthusiast, casual Mobile Legends player
                    </p>
                  </div>
                </div>

                {/* Coffee */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-amber-50 rounded-lg">
                    <img
                      className="h-4 w-4"
                      src="./img/coffee.svg"
                      alt="Coffee"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200">Coffee Connoisseur</p>
                    <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">
                      Black coffee aficionado
                    </p>
                  </div>
                </div>

                {/* Travel */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-emerald-50 rounded-lg">
                    <img
                      className="h-4 w-4"
                      src="./img/travel.svg"
                      alt="Travel"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200">Travel Explorer</p>
                    <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">
                      Loves discovering new places & cultures
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-8 z-20 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 dark:text-gray-100">Quick Message</h3>
              <form
                action="https://formspree.io/f/xzdpkylk"
                method="POST"
              >
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  />
                  <textarea
                    name="message"
                    placeholder="Brief message..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-[284px] z-20 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 dark:text-gray-100">Connect</h3>
              <div className="flex justify-center gap-3">
                {[
                  { icon: "linkedin.svg", url: "https://www.linkedin.com/in/charls-dave-erana-39b8b6180/", label: "LinkedIn" },
                  { icon: "github.svg", url: "https://github.com/", label: "GitHub" },
                  { icon: "instagram.svg", url: "https://www.instagram.com/charlsdaveerana/", label: "Instagram" },
                  { icon: "facebook.svg", url: "https://www.facebook.com/sakenerana", label: "Facebook" },
                  { icon: "tiktok.svg", url: "https://www.tiktok.com/@charlsdaveerana", label: "Tiktok" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    to={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
                    title={social.label}
                  >
                    <img
                      className="h-5 w-5 opacity-80"
                      src={`./img/${social.icon}`}
                      alt={social.label}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Content Outlet */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[600px] p-6 md:p-8 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <Outlet />
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                title: "Core Technologies",
                skills: [
                  { icon: "react.svg", name: "React", level: 90 },
                  { icon: "angular.svg", name: "Angular", level: 90 },
                  { icon: "nodejs.svg", name: "Node.js", level: 85 },
                  { icon: "nextjs.svg", name: "Next.js", level: 80 },
                  { icon: "typescript.svg", name: "TypeScript", level: 85 },
                  { icon: "tailwind.svg", name: "Tailwind", level: 90 },
                  { icon: "vite.svg", name: "Vite", level: 85 },
                  { icon: "antd.svg", name: "Ant Design", level: 90 },
                  { icon: "docker.svg", name: "Docker", level: 75 },
                  { icon: "shopify.svg", name: "Shopify", level: 85 },
                  { icon: "remix.svg", name: "Remix", level: 90 },
                  { icon: "prettier.svg", name: "Prettier", level: 90 },
                  { icon: "npm.svg", name: "NPM", level: 90 },
                  { icon: "html5.svg", name: "HTML", level: 90 },
                  { icon: "css3.svg", name: "CSS", level: 90 }
                ]
              },
              {
                title: "Tools & Platforms",
                skills: [
                  { icon: "git.svg", name: "Git", level: 85 },
                  { icon: "figma.svg", name: "Figma", level: 70 },
                  { icon: "supabase.svg", name: "Supabase", level: 80 },
                  { icon: "firebase.svg", name: "Firebase", level: 75 },
                  { icon: "jira.svg", name: "Jira", level: 80 },
                  { icon: "woocommerce.svg", name: "Woocommerce", level: 90 }
                ]
              },
              {
                title: "Operating System",
                skills: [
                  { icon: "windows.svg", name: "Windows", level: 90 },
                  { icon: "ubuntu.svg", name: "Ubuntu", level: 75 },
                  { icon: "linux.svg", name: "Linux", level: 75 },
                  { icon: "apple.svg", name: "Mac", level: 85 },
                ]
              },
              {
                title: "Vibe Coding",
                skills: [
                  { icon: "wordpress.svg", name: "Wordpress", level: 90 },
                  { icon: "lovable.svg", name: "Lovable", level: 90 },
                  { icon: "wix.svg", name: "Wix Studio", level: 80 },
                  { icon: "webflow.svg", name: "Webflow", level: 85 },
                  { icon: "chatgpt.svg", name: "ChatGPT", level: 90 },
                  { icon: "deepseek.svg", name: "DeepSeek", level: 85 },
                  { icon: "cursor.svg", name: "Cursor", level: 90 },
                ]
              }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="text-base font-semibold text-gray-900 mb-4 dark:text-gray-100">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="h-4 w-4 mr-2 opacity-80"
                            src={`./img/${skill.icon}`}
                            alt={skill.name}
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-8 z-20 transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="text-base font-semibold text-gray-900 mb-4 dark:text-gray-100">Experience</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">7+</div>
                  <div className="text-xs text-gray-600 mt-1 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">10+</div>
                  <div className="text-xs text-gray-600 mt-1 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center col-span-2">
                  <div className="text-sm font-medium text-gray-700 mt-2 dark:text-gray-300">Full Stack Focus</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center dark:border-gray-800">
          <p className="text-gray-500 text-sm dark:text-gray-400">
            © {new Date().getFullYear()} Charls Dave Erana
          </p>
          <p className="text-gray-400 text-xs mt-1 dark:text-gray-500">
            Crafted with precision using Remix & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
