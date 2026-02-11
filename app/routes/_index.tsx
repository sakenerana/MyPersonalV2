import { Link, Outlet } from "@remix-run/react";
import { useMemo, useState } from "react";

type AiPrompt = {
  id: string;
  label: string;
  question: string;
  answer: string;
  source: string;
};

const AI_PROMPTS: AiPrompt[] = [
  {
    id: "background",
    label: "Summarize my background",
    question: "Can you summarize your background in one short pitch?",
    answer:
      "I am a full-stack developer with 7+ years of experience delivering modern web solutions across React, Angular, Node.js, Remix, and e-commerce platforms. I focus on building reliable, user-friendly systems that improve day-to-day workflows.",
    source: "About + Experience sections",
  },
  {
    id: "project-fit",
    label: "Find projects by tech",
    question: "Which projects should I review for full-stack and inventory-related work?",
    answer:
      "Start with the inventory-focused projects that showcase front-end and back-end integration, workflow design, and practical business impact. They highlight real implementation work from interface design to operations support.",
    source: "Projects section",
  },
  {
    id: "interview",
    label: "Generate interview questions",
    question: "Give me a few interview questions based on your stack.",
    answer:
      "1) How do you structure Remix routes for maintainability? 2) When would you choose Angular over React for enterprise work? 3) How do you secure API keys and secrets in production? 4) How do you optimize Tailwind-heavy UIs for performance? 5) How do you containerize and deploy Node-based applications with Docker?",
    source: "Skills + Projects sections",
  },
];

export default function Index() {
  const [selectedPromptId, setSelectedPromptId] = useState(AI_PROMPTS[0].id);

  const selectedPrompt = useMemo(
    () => AI_PROMPTS.find((prompt) => prompt.id === selectedPromptId) ?? AI_PROMPTS[0],
    [selectedPromptId]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Left Column - Profile & Navigation */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200">
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
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Charls Dave M. Erana
                  </h1>
                  <p className="text-gray-600 text-sm font-medium">
                    Full Stack Developer
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    Building digital experiences with modern technologies
                  </p>
                </div>

                {/* Contact Info */}
                <div className="w-full mt-6 space-y-3">
                  <div className="flex text-gray-600 text-sm">
                    <img className="h-4 w-4 mr-2 opacity-60" src="./img/phone.svg" alt="phone" />
                    +63 955 371 3233
                  </div>

                  <Link
                    to="mailto:sakenerana@gmail.com"
                    className="flex text-gray-600 text-sm hover:text-blue-600 transition-colors"
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
    bg-white border-2 border-gray-900 
    hover:bg-gray-900 hover:text-white
    text-gray-900 px-4 py-2.5 rounded-lg 
    text-sm font-medium transition-all duration-200 
    shadow-sm hover:shadow"
                >
                  <img className="h-4 w-4 mr-2" src="./img/preview.svg" alt="preview" />
                  Preview Resume
                </Link>

                <div className="mt-6 w-full rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h2 className="text-sm font-semibold text-gray-900">Ask AI About My Work</h2>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                      Beta
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mb-3">
                    Try recruiter-focused prompts for a quick overview.
                  </p>

                  <div className="space-y-2 mb-3">
                    {AI_PROMPTS.map((prompt) => {
                      const isActive = prompt.id === selectedPrompt.id;

                      return (
                        <button
                          key={prompt.id}
                          type="button"
                          onClick={() => setSelectedPromptId(prompt.id)}
                          className={`w-full text-left text-xs rounded-lg px-3 py-2 border transition-colors ${
                            isActive
                              ? "border-blue-200 bg-blue-50 text-blue-800"
                              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {prompt.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-3 space-y-2">
                    <p className="text-[11px] font-medium text-gray-700">Q: {selectedPrompt.question}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">A: {selectedPrompt.answer}</p>
                    <p className="text-[10px] text-gray-400">Source: {selectedPrompt.source}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
              <div className="space-y-1">
                {[
                  { icon: "person.svg", label: "About", path: "/" },
                  { icon: "skills.svg", label: "Skills", path: "/skills" },
                  { icon: "work.svg", label: "Experience", path: "/work-and-education" },
                  { icon: "setting.svg", label: "Projects", path: "/projects" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all duration-150 font-medium text-sm"
                  >
                    <img
                      className="h-4 w-4 mr-3 opacity-70"
                      src={`./img/${item.icon}`}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Availability</h3>
                  <p className="text-xs text-gray-500 mt-1">Open to opportunities</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="text-xs font-medium text-green-600">Available</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center">
                <img className="h-4 w-4 mr-2 opacity-60" src="./img/location.svg" alt="location" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Location</h3>
                  <p className="text-xs text-gray-500 mt-1">Philippines (GMT+8)</p>
                  <p className="text-xs text-gray-500 mt-1">Upper Bacayan, Cebu City 6000</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Certifications</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <img className="h-5 w-5 mr-2" src="./img/certificate.svg" alt="AWS" />
                  <span className="text-xs font-medium text-gray-700"> UC BEEHIVE Accelerator (12-week program)</span>
                </div>
                <div className="flex items-center">
                  <img className="h-5 w-5 mr-2" src="./img/certificate.svg" alt="React" />
                  <span className="text-xs font-medium text-gray-700">Innovation Kickboxing, Brand Sprint, Design Sprint</span>
                </div>
                <div className="flex items-center">
                  <img className="h-5 w-5 mr-2" src="./img/certificate.svg" alt="React" />
                  <span className="text-xs font-medium text-gray-700">Startup Roadmapping & Pitching Workshop</span>
                </div>
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Interests & Hobbies</h3>
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
                    <p className="text-xs font-medium text-gray-800">Music Enthusiast</p>
                    <p className="text-xs text-gray-500 mt-0.5">
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
                    <p className="text-xs font-medium text-gray-800">Gaming</p>
                    <p className="text-xs text-gray-500 mt-0.5">
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
                    <p className="text-xs font-medium text-gray-800">Coffee Connoisseur</p>
                    <p className="text-xs text-gray-500 mt-0.5">
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
                    <p className="text-xs font-medium text-gray-800">Travel Explorer</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Loves discovering new places & cultures
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-8 z-20">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Message</h3>
              <form
                action="https://formspree.io/f/xzdpkylk"
                method="POST"
              >
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Brief message..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-[284px] z-20">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Connect</h3>
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
                    className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[600px] p-6 md:p-8">
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
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              >
                <h2 className="text-base font-semibold text-gray-900 mb-4">
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
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-8 z-20">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Experience</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">7+</div>
                  <div className="text-xs text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-xs text-gray-600 mt-1">Projects</div>
                </div>
                <div className="text-center col-span-2">
                  <div className="text-sm font-medium text-gray-700 mt-2">Full Stack Focus</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Charls Dave Erana
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Crafted with precision using Remix & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
