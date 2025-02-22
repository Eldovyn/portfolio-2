'use client'
import NavbarComponent from "@/components/navbar";
import Image from "next/image";
import Avatar from '@/../public/avatar.png'
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="h-screen bg-[#12141e] flex justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col text-[#FFFFFF] me-2">
            <p className="text-sm mb-1">{`Hello World, I'm`}</p>
            <p className="text-3xl font-semibold mb-1">Andana Farras Pramudita</p>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'Discord Bot Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-md text-[#60A5FA]"
              repeat={Infinity}
            />
          </div>
          <Image src={Avatar} alt="avatar" className="w-[500px] text-white bg-transparent" />
        </div>
      </div>
    </>
  );
}
