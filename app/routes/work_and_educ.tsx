import { Link } from "@remix-run/react";

export default function WorkAndEducation() {
    return (
        <div className="m-2">
            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-2" src="./img/work2.svg" alt="work2" /><b>Work History</b></h1>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className=" h-40 w-40" src="./img/jollibee.svg" alt="jollibee" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Jollibee, Banilad, Cebu City - Crew (Working Student)</h1>
                    <p className="italic">JUNE 2017 – DECEMBER 2017</p>
                    <p className="italic">“To tend to the needs of customers, providing help and assistance in the kitchen when such is needed.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className=" h-40 w-40" src="./img/avega.svg" alt="avega" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Avega Bros. Shipping Corp.,J. De Veyra, Cebu City - Software Tester (Internship/OJT)</h1>
                    <p className="italic">OCTOBER 2018 – FEBRUARY 2019</p>
                    <p className="italic">“With their current system, I tested their current application for better performances.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40" src="./img/elfstation.svg" alt="elfstation" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Elf Station Inc. , General Maxilom Avenue, Cebu City - (Software/Web Developer)</h1>
                    <p className="italic">OCTOBER 2019 – JANUARY 2023</p>
                    <p className="italic">“We create Web Applications for different clients using Angular, WordPress, React etc.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/cficoop.svg" alt="cficoop" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Cebu CFI Community Cooperative, Capitol Compound, Cebu City - (IT Personnel/Current Job)</h1>
                    <p className="italic">JANUARY 2023 – XX XXXX</p>
                    <p className="italic">“Troubleshooting and setup of PC, Laptops and Printers, we also do server maintenance everyday, and install CCTV on every branch.”</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="./img/education.svg" alt="education" /><b>Education</b></h1>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/bacayan.svg" alt="bacayan" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Bacayan Elementary School</h1>
                    <p className="italic">UPPER BACAYAN, CEBU CITY</p>
                    <p className="italic">MONTH 2004 – MONTH 2010</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/pitos.svg" alt="pitos" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">Pit-os National Highschool</h1>
                    <p className="italic">PIT-OS, CEBU CITY</p>
                    <p className="italic">MONTH 2011 – MONTH 2015</p>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex gap-8 m-3 justify-start text-start">
                <img className="h-40 w-40 bg-white rounded-full" src="./img/uc.svg" alt="uc" />
                <div className="pt-5 text-white">
                    <h1 className="text-lg">University of Cebu Banilad</h1>
                    <p className="italic">BANILAD, CEBU CITY</p>
                    <p className="italic">MONTH 2016 – MONTH 2019</p>
                    <ul className="list-disc ml-5">
                        <li className="italic">Major academic course highlights: Programming, Multimedia, Computer Hardware Servicing</li>
                        <li className="italic">Part of UC BEEHIVE Accelerator Batch Genesis</li>
                        <li className="italic">Representative of Smart Sweep Competition</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>

        </div>
    );
}