import { Link } from "@remix-run/react";

export default function () {
    return (
        <div>
            <div className="col-span-full m-2">
                <h1 className="pt-3"><b>Saint Isidore Chorale Ensemble</b></h1>
                <div className="mt-2">
                    <p className="italic">- Integrate inventory for easy monitoring of item</p>
                    <p className="italic">- Integrate inventory for easy monitoring of item</p>
                </div>
                <h1 className="mt-2"><b>Tech Used</b></h1>
                <div className="flex flex-wrap mt-1">
                    <Link to={"https://nestjs.com/"} target="_blank">
                        <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                            <img className="h-5 pr-2" src="./img/nestjs.svg" alt="nestjs" />
                            NestJS
                        </div>
                    </Link>
                </div>
                <h1 className="mt-2"><b>User Interface</b></h1>
                <img className="h-fit mt-2 w-100vw hover:border-2 hover:border-black" src="./img/inventory-beta.png" alt="person" />
                <div className="border-t border-gray-200 my-4"></div>
            </div>

            <div className="col-span-full">
                <h1><b>Full Invetory - Website (Self Made)</b></h1>
                <div className="mt-2">
                    <p className="italic">- Integrate inventory for easy monitoring of item</p>
                    <p className="italic">- Integrate inventory for easy monitoring of item</p>
                </div>
                <h1 className="mt-2"><b>Tech Used</b></h1>
                <div className="flex flex-wrap mt-1">
                    <Link to={"https://nestjs.com/"} target="_blank">
                        <div className="flex cursor-pointer bg-black pr-3 pl-3 pt-1 pb-1 rounded-2xl text-[14px] hover:border hover:border-white">
                            <img className="h-5 pr-2" src="./img/nestjs.svg" alt="nestjs" />
                            NestJS
                        </div>
                    </Link>
                </div>
                <h1 className="mt-2"><b>User Interface</b></h1>
                <img className="h-fit mt-2 w-100vw hover:border-2 hover:border-black" src="./img/inventory-beta.png" alt="person" />
                <div className="border-t border-gray-200 my-4"></div>
            </div>

        </div>
    );
}