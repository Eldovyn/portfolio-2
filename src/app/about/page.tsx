import NavbarComponent from "@/components/navbar";
import Image from "next/image";
import Avatar from '@/../public/avatar.png'
import HTML from '@/../public/html-5.png'
import CSS from '@/../public/css-3.png'
import JS from '@/../public/js.png'
import TS from '@/../public/typescript.png'
import Python from '@/../public/python.png'
import SQL from '@/../public/sql.png'
import Postgre from '@/../public/postgre.png'
import MongoDB from '@/../public/mongodb.png'
import Lua from '@/../public/lua.png'
import NextJS from '@/../public/nextjs.png'
import ReactIcon from '@/../public/react.png'
import TailwindCSS from '@/../public/tailwind.png'
import Bootstrap from '@/../public/bootstrap.png'
import DiscordPY from '@/../public/discordpy.png'
import Nextcord from '@/../public/nextcord.png'
import PythonAnyWhere from '@/../public/pythonanywhere.png'
import Vercel from '@/../public/vercel.png'
import Docker from '@/../public/social.png'
import Railway from '@/../public/railway.png'
import Github from '@/../public/github.png'
import Flask from '@/../public/flask.png'
import FastAPI from '@/../public/fastapi.png'
import Postman from '@/../public/postman.png'
import Heroku from '@/../public/heroku.png'
import Redis from '@/../public/redis.webp'
import Gcp from '@/../public/gcp.png'
import SASS from '@/../public/erasebg-transformed.webp'
import Php from '@/../public/php.png'
import MySql from '@/../public/mysql.png'
import Go from '@/../public/golang_logo_icon_171073.png'
import VueJS from '@/../public/vuejs.png'
import NuxtJS from '@/../public/nuxtjs.svg'
import Codeigniter from '@/../public/ci-logo.png'
import Linux from '@/../public/linux.png'
import Cloudinary from '@/../public/cloudinary.webp'
import GoFiber from '@/../public/logo.svg'

const AboutPage = () => {
    return (
        <>
            <NavbarComponent />
            <div className="h-screen bg-[#12141e]">
                <div className="border-2 border-[#64748B] bg-[#12141e] p-5 rounded-md w-[90%] md:w-[70%] mx-auto mt-10">
                    <div className="flex items-center space-x-4">
                        <p className="text-[#FFFFFF] text-xl font-semibold">About Me</p>
                        <div className="w-[35%] border-t-2 border-[#64748B]"></div>
                    </div>
                    <div className="flex xl:flex-row flex-col justify-center items-center mt-4">
                        <Image src={Avatar} alt="avatar" className="w-[300px] md:w-[500px] text-white bg-transparent" />
                        <div className="flex flex-col text-[#FFFFFF] mt-4 md:mt-0 md:ms-4">
                            <p>I am someone who is passionate about technology, especially web development. I am currently focusing on the web developer environment and have several skills in this field. I won first place in the GCW 2025 Hackathon and was also a finalist in the competitive programming competition Kompres 15 LabTI. I have completed an internship at Evermos as a backend developer and at Core Initiative as a frontend developer.</p>
                        </div>
                    </div>
                </div>

                <div className="border-2 border-[#64748B] bg-[#12141e] p-5 rounded-md w-[90%] md:w-[70%] mx-auto mt-10">
                    <div className="flex items-center space-x-4">
                        <p className="text-[#FFFFFF] text-xl font-semibold">Tech Stack</p>
                        <div className="w-[35%] border-t-2 border-[#64748B]"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-3">
                        {[
                            { src: HTML, alt: "html", text: "HTML" },
                            { src: CSS, alt: "css", text: "CSS" },
                            { src: SASS, alt: "sass", text: "SASS" },
                            { src: JS, alt: "js", text: "JavaScript" },
                            { src: TS, alt: "typescript", text: "TypeScript" },
                            { src: Go, alt: "go", text: "Go" },
                            { src: Python, alt: "python", text: "Python" },
                            { src: Php, alt: "php", text: "PHP" },
                            { src: Lua, alt: "lua", text: "Lua" },
                            { src: SQL, alt: "sql", text: "SQL" },
                            { src: Postgre, alt: "postgre", text: "PostgreSQL" },
                            { src: MySql, alt: "MySQL", text: "MySQL" },
                            { src: MongoDB, alt: "mongodb", text: "MongoDB" },
                            { src: Redis, alt: "redis", text: "Redis" },
                            { src: Cloudinary, alt: "redis", text: "Cloudinary" },
                            { src: Gcp, alt: "gcp", text: "GCP" },
                            { src: Flask, alt: "Flask", text: "Flask" },
                            { src: FastAPI, alt: "FastAPI", text: "FastAPI" },
                            { src: Codeigniter, alt: "Codeigniter", text: "Codeigniter" },
                            { src: GoFiber, alt: "Go Fiber", text: "Go Fiber" },
                            { src: ReactIcon, alt: "react", text: "React" },
                            { src: NextJS, alt: "nextjs", text: "NextJS" },
                            { src: VueJS, alt: "VueJS", text: "VueJS" },
                            { src: NuxtJS, alt: "NuxtJS", text: "NuxtJS" },
                            { src: TailwindCSS, alt: "tailwindcss", text: "TailwindCSS" },
                            { src: Bootstrap, alt: "bootstrap", text: "Bootstrap" },
                            { src: DiscordPY, alt: "discordpy", text: "Discord.PY" },
                            { src: Nextcord, alt: "nextcord", text: "Nextcord" },
                        ].map((item, index) => (
                            <div key={index} className="border-2 border-[#64748B] text-center h-[3.5rem] flex justify-center items-center text-[#FFFFFF] rounded-md">
                                <div className="flex justify-between items-center w-full ms-3 me-3">
                                    <Image src={item.src} alt={item.alt} className="w-[30px] text-white bg-transparent" />
                                    <p className="font-semibold">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-2 border-[#64748B] bg-[#12141e] p-5 rounded-md w-[90%] md:w-[70%] mx-auto mt-10">
                    <div className="flex items-center space-x-4">
                        <p className="text-[#FFFFFF] text-xl font-semibold">Tools</p>
                        <div className="w-[40%] border-t-2 border-[#64748B]"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-3">
                        {[
                            { src: Railway, alt: "railway", text: "Railway" },
                            { src: Heroku, alt: "heroku", text: "heroku" },
                            { src: PythonAnyWhere, alt: "pythonanywhere", text: "PythonAnyWhere" },
                            { src: Vercel, alt: "vercel", text: "Vercel" },
                            { src: Docker, alt: "docker", text: "Docker" },
                            { src: Github, alt: "github", text: "Github" },
                            { src: Postman, alt: "postman", text: "postman" },
                            { src: Linux, alt: "linux", text: "linux" },
                        ].map((item, index) => (
                            <div key={index} className="border-2 border-[#64748B] text-center h-[3.5rem] flex justify-center items-center text-[#FFFFFF] rounded-md">
                                <div className="flex justify-between items-center w-full ms-3 me-3">
                                    <Image src={item.src} alt={item.alt} className="w-[30px] text-white bg-transparent" />
                                    <p className="font-semibold text-sm">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <br />
            </div>
        </>
    )
}

export default AboutPage