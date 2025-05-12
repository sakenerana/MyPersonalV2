import { Link } from "@remix-run/react";

export default function About() {
    return (
        <div className="m-2">

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="/app/img/person2.svg" alt="person2" /><b>The Person I Am</b></h1>
            <p className="italic pb-5">“Hi, I’m Charls Dave Erana, a Software Developer/IT Personnel passionate about Web Development and designs. I help clients achieve their needs and expectations through my skills and knowledge.”</p>

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="/app/img/magnify.svg" alt="mail_at" /><b>What happened to me</b></h1>
            <p className="italic">
                After I Graduated in college at University of Cebu – Banilad, after a week I started my first job as Junior Software Developer for 4 years, and then jump to being IT Personnel for another years to enhance my skills not just as developer but also to have knowledge in servers and technical. But before that I used to be a Service Crew in a fast foods chain which is Jollibee and a Software Application Tester back in my OJT days for quality assurance of their application.
                I started this for my personal growth and achieve my goals.
            </p>
            <p className="italic pt-2 flex"><img className="h-6 mr-1" src="/app/img/correct.svg" alt="mail_at" />Motto 1: It does not matter how slowly you go so long as you do not stop.</p>
            <p className="italic pt-2 flex"><img className="h-6 mr-1" src="/app/img/correct.svg" alt="mail_at" />Motto 2: Simplicity is beauty.</p>
            <h1 className="pt-3 pb-5 flex italic"><img className="h-6 mr-1" src="/app/img/correct.svg" alt="correct" />My Values: Honesty, creativity, and sustainability drive my work.</h1>

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="/app/img/files.svg" alt="files" /><b>My Expertise</b></h1>
            <div className="italic pb-5">
                <ul className="list-disc ml-5">
                    <li>I design WordPress websites for small businesses or personal interest.</li>
                    <li>Troubleshooting and setup of Computers, Laptops and Printers.</li>
                    <li>Can install CCTVs.</li>
                    <li>Implement Web Application for client needs(UI/UX) using Angular, WordPress, React etc.</li>
                    <li>Test application for better performance.</li>
                </ul>
            </div>

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="/app/img/funfact.svg" alt="funcfact" /><b>Fun Facts</b></h1>
            <p className="italic">Hobbies: I do play in band as a drummer since I love music. I can still play guitar and bass since this is where it all started. I do play a lot of video games with my ps5, I also play Mobile Legends during my breaktime.</p>
            <p className="italic pb-5">Favorites: Black Coffee, Travel different places. Music Lover.</p>

            <h1 className="pt-3 pb-3 flex"><img className="h-6 mr-1" src="/app/img/mail-at.svg" alt="mail_at" /><b>Let's Connect@</b></h1>
            <p className="italic">Call-to-action (CTA):</p>
            <p className="italic pb-2">“Want to collaborate? follow me on social medias: ”</p>
            <p className="italic flex">
                <Link to="https://www.facebook.com/sakenerana" target='_blank'>
                    <img className="h-6 mr-1 cursor-pointer hover:border-2 hover:border-black" src="/app/img/facebook.svg" alt="person" />
                </Link>
                Facebook: Charls Dave Erana
            </p>
            <p className="italic flex">
                <Link to={"mailto:sakenerana@gmail.com"}>
                    <img className="h-5 mt-1 mr-1 cursor-pointer hover:border-2 hover:border-black" src="/app/img/gmail.svg" alt="person" />
                </Link>
                Gmail: sakenerana@gmail.com
            </p>
            <p className="italic flex">
                <Link to={"https://github.com/"} target="_blank">
                    <img className="h-5 mr-1 bg-white rounded-full" src="/app/img/github.svg" alt="github" />
                </Link>
                Github: sakenerana
            </p>
            <p className="italic flex">
                <Link to={"https://www.instagram.com/charlsdaveerana/"} target="_blank">
                    <img className="h-6 mr-1 cursor-pointer hover:border hover:border-black" src="/app/img/instagram.svg" alt="person" />
                </Link>
                Instagram: @charlsdaveerana
            </p>
            <p className="italic flex">
                <Link to={"https://www.linkedin.com/in/charls-dave-erana-39b8b6180/"} target="_blank">
                    <img className="h-6 mr-1 cursor-pointer hover:border hover:border-black" src="/app/img/linkedin.svg" alt="person" />
                </Link>
                LinkedIn: Charls Dave Erana
            </p>

        </div>
    );
}