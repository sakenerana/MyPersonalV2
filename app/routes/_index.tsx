import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex h-screen inset-ring-4 justify-center bg-[url(/public/meteor.gif)] bg-no-repeat bg-cover">
      <div className="m-10 h-auto rounded-xl w-[75%] bg-black bg-opacity-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white bg-opacity-10 m-2 rounded-lg p-1 h-[100%]">
            <div className="flex flex-wrap gap-8 m-3">
              <div className="xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100">
                <img className="rounded-full h-28 w-28 border-2 border-white" src="/public/myself.jpg" alt="mypp" />
              </div>
              <div className="pt-5 text-white">
                <h1 className="text-lg">CHARLS DAVE M. ERANA</h1>
                <p>I love Web Development.</p>
              </div>
              <div className="">
                <p className="cursor-pointer text-black bg-white p-4 rounded-md text-[14px]">+639553713233</p>
              </div>
              <div className="">
                <p className="cursor-pointer text-black bg-white p-4 rounded-md text-[14px]">Resume</p>
              </div>
            </div>
            <h1 className="text-white text-xl font-bold mt-2 pb-1">Suggestions</h1>
            <div className="flex text-white gap-2">
              <Link to="/">
                <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  About Me
                </div>
              </Link>
              <Link to="/skills">
                <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  Skills
                </div>
              </Link>
              <Link to="/work-and-education">
                <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                  Work and Education
                </div>
              </Link>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-md text-[14px]">
                Projects
              </div>
            </div>
            <div className="bg-white text-white bg-opacity-10 m-2 rounded-lg p-1">
              <Outlet />
            </div>
          </div>

          <div className="bg-white bg-opacity-10 m-2 rounded-lg p-1 h-[100%]">
            <h1 className="text-white text-lg font-bold mt-2">Web Development</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-6 pr-2" src="public/react.svg" alt="react" />
                React
              </div>
              <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                <img className="h-6 pr-2" src="public/angular.svg" alt="angular" />
                Angular
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Node JS
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Ant Design
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Tailwind
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Vite
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Wordpress
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Shopify
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Next JS
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Nest JS
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Supabase
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Remix
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Jira
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Vue JS
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                .Net
              </div>
            </div>

            <h1 className="text-white text-lg font-bold mt-2">Operating System</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Windows
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Ubuntu
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Linux
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Mac
              </div>
            </div>

            <h1 className="text-white text-lg font-bold mt-2">Version Control</h1>
            <div className="flex flex-wrap text-white gap-2">
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
                Github
              </div>
              <div className="cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px]">
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
