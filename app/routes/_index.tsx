import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex h-full inset-ring-4 justify-center bg-[url(/app/img/meteor.gif)] bg-no-repeat bg-cover">
      <div className="md:m-10 lg:m-10 xl:m-10 2xl:m-10 h-auto rounded-xl xs:w-full sm:w-full lg:w-full xl:w-[75%] 2xl:w-[75%] bg-black bg-opacity-10 sm:justify-center">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-4 xl:gap-4 2xl:gap-4 sm:gap-0">

          <div className="col-span-2 bg-white bg-opacity-10 md:m-2 lg:m-2 xl:m-2 2xl:m-2 rounded-lg p-1 h-[100%]">
            <div className="flex flex-wrap gap-8 m-3 text-center 2xl:text-start">
              <div className="pt-5 text-white">
                <div className="flex justify-center md:justify-center md:justify-center lg:justify-center 2xl:float-left 2xl:pr-6">
                  <img className="rounded-full h-28 w-28 border-2 border-white" src="./img/myself.jpg" alt="mypp" />
                </div>
                <h1 className="text-lg mt-4">CHARLS DAVE M. ERANA</h1>
                <p>“Web Designer | IT Personnel | Software/Web Developer | Travel Lover | Music Lover”.</p>
                <div className="flex gap-2 pt-4 justify-center 2xl:justify-start">
                  <Link to="https://www.facebook.com/sakenerana" target='_blank'>
                    <img className="h-6 mr-1 cursor-pointer hover:border-2 hover:border-black" src="./img/facebook.svg" alt="person" />
                  </Link>
                  <Link to={"https://www.instagram.com/charlsdaveerana/"} target="_blank">
                    <img className="h-6 mr-1 cursor-pointer hover:border-2 hover:border-black" src="./img/instagram.svg" alt="person" />
                  </Link>
                  <Link to={"https://www.tiktok.com/@charlsdaveerana"} target="_blank">
                    <img className="h-6 mr-1 cursor-pointer hover:border-2 hover:border-black" src="./img/tiktok.svg" alt="person" />
                  </Link>
                  <Link to={"https://www.linkedin.com/in/charls-dave-erana-39b8b6180/"} target="_blank">
                    <img className="h-6 mr-1 cursor-pointer hover:border hover:border-black" src="./img/linkedin.svg" alt="person" />
                  </Link>
                  <Link to={"mailto:sakenerana@gmail.com"}>
                    <img className="h-5 mt-1 mr-1 cursor-pointer hover:border-2 hover:border-black" src="./img/gmail.svg" alt="person" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center 2xl:justify-end 2xl:mr-2">
              <p className="flex   text-white bg-black p-4 rounded-md text-[14px]">
                <img className="h-5 p-1 mr-1 bg-white rounded-full" src="./img/phone.svg" alt="person" />
                +639553713233
              </p>
              <Link to={"https://docs.google.com/document/d/1Izh0zT_kFA8zF3xgnbGq9Sy0a7Bt7vWDaAxyayhXp7I/edit?tab=t.0"} target="_blank">
                <p className="flex hover:border-4 hover:border-black cursor-pointer text-black bg-white p-4 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="./img/download.svg" alt="person" />
                  Resume
                </p>
              </Link>
            </div>

            <h1 className="text-white text-xl font-bold mt-2 pb-1 text-center 2xl:text-start">Suggestions</h1>
            <div className="flex flex-wrap text-white gap-2">
              <Link to="/">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="./img/person.svg" alt="person" />
                  About Me
                </div>
              </Link>
              <Link to="/skills">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="./img/skills.svg" alt="skills" />
                  Skills
                </div>
              </Link>
              <Link to="/work-and-education">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="./img/work.svg" alt="work" />
                  Work & Education
                </div>
              </Link>
              <Link to="/projects">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="./img/setting.svg" alt="setting" />
                  <h1>Projects</h1>
                </div>
              </Link>
              <Link to="/vibe-coding">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="./img/ai.svg" alt="ai" />
                  <h1>Vibe Coding</h1>
                </div>
              </Link>
            </div>
            <div className="bg-white text-white bg-opacity-10 rounded-lg">
              <Outlet />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 bg-white bg-opacity-10 mt-2 md:m-2 md:mt-5 lg:m-2 xl:m-2 2xl:m-2 rounded-lg p-1 h-[100%]">
            <div className="sticky top-0 m-2">
              <h1 className="text-white text-lg font-bold mt-2">Web Development</h1>
              <div className="flex flex-wrap text-white gap-2">
                <Link to={"https://react.dev/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-6 pr-2" src="./img/react.svg" alt="react" />
                    React
                  </div>
                </Link>
                <Link to={"https://angular.dev/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/angular.svg" alt="angular" />
                    Angular
                  </div>
                </Link>
                <Link to={"https://nodejs.org/en"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/nodejs.svg" alt="nodejs" />
                    Node JS
                  </div>
                </Link>
                <Link to={"https://ant.design/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/antd.svg" alt="ant design" />
                    Ant Design
                  </div>
                </Link>
                <Link to={"https://tailwindcss.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/tailwind.svg" alt="tailwind" />
                    Tailwind
                  </div>
                </Link>
                <Link to={"https://vite.dev/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/vite.svg" alt="vite" />
                    Vite
                  </div>
                </Link>
                <Link to={"https://www.shopify.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/shopify.svg" alt="shopify" />
                    Shopify
                  </div>
                </Link>
                <Link to={"https://nextjs.org/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white rounded-full" src="./img/nextjs.svg" alt="nextjs" />
                    NextJS
                  </div>
                </Link>
                <Link to={"https://nestjs.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/nestjs.svg" alt="nestjs" />
                    NestJS
                  </div>
                </Link>
                <Link to={"https://supabase.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/supabase.svg" alt="supabase" />
                    Supabase
                  </div>
                </Link>
                <Link to={"https://remix.run/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px hover:border hover:border-white]">
                    <img className="h-5 pr-2" src="./img/remix.svg" alt="remix" />
                    Remix
                  </div>
                </Link>
                <Link to={"https://www.atlassian.com/software/jira"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/jira.svg" alt="jira" />
                    Jira
                  </div>
                </Link>
                <Link to={"https://vuejs.org/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/vue.svg" alt="vue" />
                    VueJS
                  </div>
                </Link>
                <Link to={"https://dotnet.microsoft.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white rounded-full" src="./img/dotnet.svg" alt=".net" />
                    .NET
                  </div>
                </Link>
                <Link to={"https://prettier.io/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/prettier.svg" alt="prettier" />
                    Prettier
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
                <Link to={"https://www.figma.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/figma.svg" alt="figma" />
                    Figma
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
                <Link to={"https://firebase.google.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/firebase.svg" alt="firebase" />
                    Firebase
                  </div>
                </Link>
              </div>

              <h1 className="text-white text-lg font-bold mt-2">Operating System</h1>
              <div className="flex flex-wrap text-white gap-2">
                <Link to={"https://www.microsoft.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/windows.svg" alt="windows" />
                    Windows
                  </div>
                </Link>
                <Link to={"https://ubuntu.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/ubuntu.svg" alt="ubuntu" />
                    Ubuntu
                  </div>
                </Link>
                <Link to={"https://www.linux.org/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/linux.svg" alt="linux" />
                    Linux
                  </div>
                </Link>
                <Link to={"https://www.apple.com/ph/mac/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white rounded-full" src="./img/apple.svg" alt="mac" />
                    Mac
                  </div>
                </Link>
              </div>

              <h1 className="text-white text-lg font-bold mt-2">Version Control</h1>
              <div className="flex flex-wrap text-white gap-2">
                <Link to={"https://github.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white rounded-full" src="./img/github.svg" alt="github" />
                    Github
                  </div>
                </Link>
                <Link to={"http://gitlab.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/gitlab.svg" alt="gitlab" />
                    Gitlab
                  </div>
                </Link>
                <Link to={"https://git-scm.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/git.svg" alt="git" />
                    Git
                  </div>
                </Link>
              </div>

              <h1 className="text-white text-lg font-bold mt-2">Open Source</h1>
              <div className="flex flex-wrap text-white gap-2">
                <Link to={"https://snipeitapp.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white" src="./img/snipeit.svg" alt="snipeit" />
                    SnipeIT
                  </div>
                </Link>
                <Link to={"https://wazuh.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-3 mt-1 mr-1 bg-white" src="./img/wazuh.svg" alt="wazuh" />
                    Wazuh
                  </div>
                </Link>
                <Link to={"https://www.zabbix.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-3 mt-1 mr-1 bg-white" src="./img/zabbix.svg" alt="zabbix" />
                    Zabbix
                  </div>
                </Link>
                <Link to={"https://www.apachefriends.org/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white " src="./img/xampp.svg" alt="xampp" />
                    Xampp
                  </div>
                </Link>
                <Link to={"https://phpmyadmin.net/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-4 mt-1 mr-1 bg-white " src="./img/phpmyadmin.svg" alt="phpmyadmin" />
                    phpMyAdmin
                  </div>
                </Link>
                <Link to={"https://openvpn.net/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/openvpn.svg" alt="openvpn" />
                    openVPN
                  </div>
                </Link>
                <Link to={"https://www.docker.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2 rounded-full" src="./img/docker.svg" alt="docker" />
                    Docker
                  </div>
                </Link>
                <Link to={"https://www.cloudpanel.io/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-4 pr-2" src="./img/cloudpanel.svg" alt="cloudpanel" />
                    CloudPanel
                  </div>
                </Link>
                <Link to={"https://render.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-4 mr-1 bg-white" src="./img/render.svg" alt="cloudpanel" />
                    Render
                  </div>
                </Link>
                <Link to={"https://cpanel.net/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1" src="./img/cpanel.svg" alt="cpanel" />
                    cPanel
                  </div>
                </Link>
              </div>

              <h1 className="text-white text-lg font-bold mt-2">Vibe Coding</h1>
              <div className="flex flex-wrap text-white gap-2">
                <Link to={"https://wordpress.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/wordpress.svg" alt="wordpress" />
                    Wordpress
                  </div>
                </Link>
                <Link to={"https://lovable.dev/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/lovable.svg" alt="lovable" />
                    Lovable
                  </div>
                </Link>
                <Link to={"https://wix.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 mr-1 bg-white rounded-full" src="./img/wix.svg" alt="wix" />
                    Wix Studio
                  </div>
                </Link>
                <Link to={"https://webflow.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/webflow.svg" alt="webflow" />
                    Webflow
                  </div>
                </Link>
                <Link to={"https://chatgpt.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/chatgpt.svg" alt="chatgpt" />
                    ChatGPT
                  </div>
                </Link>
                <Link to={"https://chatgpt.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/deepseek.svg" alt="deepseek" />
                    DeepSeek
                  </div>
                </Link>
                <Link to={"https://studio.firebase.google.com/"} target="_blank">
                  <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                    <img className="h-5 pr-2" src="./img/firebasestudio.svg" alt="firebasestudio" />
                    Firebase Studio
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div >
  );
}
