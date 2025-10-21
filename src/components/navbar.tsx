"use client";
import { Navbar, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import Github from '@/../public/github.png'
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Navbar fluid className="bg-[#12141e] sticky top-0 w-full z-50">
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-[#FFFFFF]">ditttt_frs()</span>
                </Navbar.Brand>
                <div className="flex md:order-2 items-center">
                    <Image
                        src={Github}
                        alt="github"
                        className="w-[23px] h-[23px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] text-white bg-transparent"
                    />
                    <NavbarToggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active={pathname === "/" ? true : false}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about" active={pathname === "/about" ? true : false}>About</Navbar.Link>
                    <Navbar.Link href="/project" active={pathname === "/project" ? true : false}>Project</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </Flowbite>
    );
}


export default NavbarComponent