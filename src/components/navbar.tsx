"use client";
import { Navbar, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import Github from '@/../public/github.png'
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
    navbar: {
        link: {
            base: "hover:text-[#FFFFFF] hover:border-[#64748B] hover:border-b-2 font-semibold focus:text-[#FFFFFF]",
            active: {
                on: "text-[#FFFFFF]",
                off: "text-[#D1D5DB]"
            }
        },
    },
};


const NavbarComponent = () => {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Navbar fluid className="bg-[#12141e] sticky top-0 w-full z-50">
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-[#FFFFFF]">ditttt_frs()</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Image src={Github} alt="github" className="w-[30px] text-white bg-transparent" />
                    <NavbarToggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Project</Navbar.Link>
                    <Navbar.Link href="#">Certificate</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </Flowbite>
    );
}


export default NavbarComponent