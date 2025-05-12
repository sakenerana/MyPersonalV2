import { Link } from "@remix-run/react";

export default function () {
    return (
        <div>
            <div className="col-span-full m-2">
                <h1 className="pt-3"><b>Full Invetory - Website (Self Made) - Year 2025</b></h1>
                <div className="mt-2">
                    <ul className="list-disc ml-5">
                        <li><p className="italic ">Real-time stock level monitoring</p></li>
                        <li><p className="italic">SKU (Stock Keeping Unit) management</p></li>
                        <li><p className="italic">Role-based access control</p></li>
                        <li><p className="italic">Inventory valuation reports</p></li>
                    </ul>
                </div>
                <h1 className="mt-2"><b>Tech Used</b></h1>
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
                            <img className="h-5 pr-2" src="./img/tailwind.svg" alt="tailwind" />
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
                            <img className="h-5 pr-2" src="./img/prettier.svg" alt="prettier" />
                            Prettier
                        </div>
                    </Link>
                    <Link to={"https://supabase.com/"} target="_blank">
                        <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                            <img className="h-5 pr-2" src="./img/supabase.svg" alt="supabase" />
                            Supabase
                        </div>
                    </Link>
                    <Link to={"https://github.com/"} target="_blank">
                        <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                            <img className="h-5 mr-1 bg-white rounded-full" src="./img/github.svg" alt="github" />
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
                <h1 className="mt-2"><b>User Interface</b></h1>
                <img className="h-fit mt-2 w-100vw hover:border-2 hover:border-black" src="./img/inventory-beta.png" alt="person" />
                <div className="border-t border-gray-200 my-4"></div>
            </div>

            {/* 2nd Row */}

            <div className="col-span-full">
                <h1><b>Clevermasters - Website/Mobile (Self Made) - Year 2019</b></h1>
                <div className="mt-2">
                    <ul className="list-disc ml-5">
                        <li><p className="italic ">Real-time stock level monitoring</p></li>
                        <li><p className="italic">SKU (Stock Keeping Unit) management</p></li>
                        <li><p className="italic">Role-based access control</p></li>
                        <li><p className="italic">Inventory valuation reports</p></li>
                    </ul>
                </div>
                <h1 className="mt-2"><b>Tech Used</b></h1>
                <div className="flex flex-wrap gap-2 mt-1">
                    <Link to={"https://wordpress.com/"} target="_blank">
                        <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                            <img className="h-5 pr-2" src="./img/wordpress.svg" alt="wordpress" />
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
                </div>
                <h1 className="mt-2"><b>User Interface</b></h1>
                <img className="h-fit mt-2 w-100vw hover:border-2 hover:border-black" src="./img/clevermasters.png" alt="clevermasters" />
                <div className="border-t border-gray-200 my-4"></div>
            </div>


        </div>
    );
}