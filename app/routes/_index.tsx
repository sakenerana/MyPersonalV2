import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex h-full inset-ring-4 justify-center bg-[url(/app/img/meteor.gif)] bg-no-repeat bg-cover">
      <div className="m-10 h-auto rounded-xl w-[75%] bg-black bg-opacity-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white bg-opacity-10 m-2 rounded-lg p-1 h-[100%]">
            <div className="flex flex-wrap gap-8 m-3">
              <div className="xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100">
                <img className="rounded-full h-28 w-28 border-2 border-white" src="/app/img/myself.jpg" alt="mypp" />
              </div>
              <div className="pt-5 text-white">
                <h1 className="text-lg">CHARLS DAVE M. ERANA</h1>
                <p>I love Web Development.</p>
              </div>
              <div className="">

                <p className="flex   text-white bg-black p-4 rounded-md text-[14px]">
                  <img className="h-5 p-1 mr-1 bg-white rounded-full" src="/app/img/phone.svg" alt="person" />
                  +639553713233
                </p>
              </div>
              <div className="">
                <p className="flex hover:border-4 hover:border-black cursor-pointer text-black bg-white p-4 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/download.svg" alt="person" />
                  Resume
                </p>
              </div>
            </div>
            <h1 className="text-white text-xl font-bold mt-2 pb-1">Suggestions</h1>
            <div className="flex text-white gap-2">
              <Link to="/">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/person.svg" alt="person" />
                  About Me
                </div>
              </Link>
              <Link to="/skills">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/skills.svg" alt="person" />
                  Skills
                </div>
              </Link>
              <Link to="/work-and-education">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/work.svg" alt="person" />
                  Work & Education
                </div>
              </Link>
              <Link to="/work-and-education">
                <div className="flex hover:border hover:border-white cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/setting.svg" alt="person" />
                  Projects
                </div>
              </Link>
            </div>
            <div className="bg-white text-white bg-opacity-10 m-2 rounded-lg p-1">
              <Outlet />
            </div>
          </div>

          <div className="bg-white bg-opacity-10 m-2 rounded-lg p-1 h-[100%]">
            <h1 className="text-white text-lg font-bold mt-2">Web Development</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-6 pr-2" src="/app/img/react.svg" alt="react" />
                React
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/angular.svg" alt="angular" />
                Angular
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/nodejs.svg" alt="angular" />
                Node JS
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/antd.svg" alt="angular" />
                Ant Design
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/tailwind.svg" alt="angular" />
                Tailwind
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/vite.svg" alt="angular" />
                Vite
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/wordpress.svg" alt="angular" />
                Wordpress
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/shopify.svg" alt="angular" />
                Shopify
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/nextjs.svg" alt="angular" />
                NextJS
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/nestjs.svg" alt="angular" />
                NestJS
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/supabase.svg" alt="angular" />
                Supabase
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/remix.svg" alt="angular" />
                Remix
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/jira.svg" alt="angular" />
                Jira
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/vue.svg" alt="angular" />
                VueJS
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/dotnet.svg" alt="angular" />
                .NET
              </div>
            </div>

            <h1 className="text-white text-lg font-bold mt-2">Operating System</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/windows.svg" alt="angular" />
                Windows
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/ubuntu.svg" alt="angular" />
                Ubuntu
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/linux.svg" alt="angular" />
                Linux
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/apple.svg" alt="angular" />
                Mac
              </div>
            </div>

            <h1 className="text-white text-lg font-bold mt-2">Version Control</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/github.svg" alt="angular" />
                Github
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-5 pr-2" src="/app/img/gitlab.svg" alt="angular" />
                Gitlab
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Git
              </div>
            </div>

            <h1 className="text-white text-lg font-bold mt-2">Open Source</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Snipe-it
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Wazuh
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Zabbix
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Xampp
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                phpMyAdmin
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                openVPN
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Docker
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Cloudpanel
              </div>
            </div>

          </div>
        </div>

      </div>
    </div >
  );
}
