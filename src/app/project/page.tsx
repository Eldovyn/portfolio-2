import NavbarComponent from "@/components/navbar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AutoStore from '@/../public/auto-store.png'
import MongoDB from '@/../public/mongodb.png'
import Python from '@/../public/python.png'
import Nextcord from '@/../public/nextcord.png'
import PostgresSQL from '@/../public/postgre.png'
import Flask from '@/../public/flask.png'
import ReactJS from '@/../public/react.png'
import TypeSript from '@/../public/typescript.png'
import SQL from '@/../public/sql.png'
import TailwindCSS from '@/../public/tailwind.png'
import Image from "next/image"
import { GoLinkExternal } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import FideaProject from '@/../public/fidea.jpeg'
import JobEntry from '@/../public/job-entry.png'
import NextJS from '@/../public/nextjs.png'

const projects = [
    {
        title: "Bot Discord Auto Store",
        description: "This project is a Discord bot auto-store designed for automated selling in Discord servers. It supports multiple payment methods such as Saweria, Trakteer, and Sociabuzz, as well as in-game currency from Growtopia. Additionally, it features an auto-balance system to handle transactions seamlessly.",
        image: AutoStore,
        technologies: [Python, MongoDB, Nextcord],
        githubLink: "",
        externalLink: "https://discord.gg/H4SB4Cq63G"
    },
    {
        title: "Fidea E-Commerce",
        description: "This project is an e-commerce platform developed as a college assignment from the lecturer in a second-semester course.",
        image: FideaProject,
        technologies: [Python, SQL, TypeSript, Flask, PostgresSQL, ReactJS, TailwindCSS],
        githubLink: "https://github.com/Fidea-Ecommerce",
        externalLink: "https://github.com/Fidea-Ecommerce"
    },
    {
        title: "Job Entry",
        description: "This project was created for the recruitment of programmers in the psychology laboratory. The website is designed to facilitate the recruitment process with features for registration and the ability to export user data.",
        image: JobEntry,
        technologies: [Python, SQL, TypeSript, Flask, PostgresSQL, ReactJS, NextJS, TailwindCSS],
        githubLink: "https://github.com/Eldovyn/job-entry-web",
        externalLink: "https://github.com/Eldovyn/job-entry-web"
    },
];

const ProjectPage = () => {
    return (
        <>
            <NavbarComponent />
            <div className="h-screen bg-[#12141e] p-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[65%] mx-auto">
                    {projects.map((project, index) => (
                        <Card key={index} className="border-[#64748B] bg-[#12141e] border-2">
                            <CardHeader>
                                <CardTitle className="text-[#FFFFFF]">{project.title}</CardTitle>
                                <CardDescription className="text-[#D1D5DB]">
                                    <div className="flex flex-col">
                                        <p>{project.description}</p>
                                        <div className="flex flex-row justify-start mt-2 w-full">
                                            {project.technologies.map((tech, techIndex) => (
                                                <Image
                                                    key={techIndex}
                                                    src={tech}
                                                    alt="technology"
                                                    className="w-[20px] text-white bg-transparent me-1"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image src={project.image} alt="project-image" className="w-full rounded-md" />
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-row justify-end w-full">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <VscGithubAlt className="cursor-pointer text-[#D1D5DB]" size={20} />
                                    </a>
                                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                        <GoLinkExternal className="cursor-pointer ms-2 text-[#D1D5DB]" size={20} />
                                    </a>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <br />
            </div>
        </>
    )
}

export default ProjectPage