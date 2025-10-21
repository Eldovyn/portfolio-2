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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center max-w-7xl mx-auto px-4">
          <div className="flex flex-col text-[#FFFFFF] text-center lg:text-left">
            <p className="text-sm mb-1">{`Hello World, I'm`}</p>
            <p className="text-3xl font-semibold mb-1">Andana Farras Pramudita</p>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'Bot Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-md text-[#60A5FA]"
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={Avatar}
              alt="avatar"
              className="w-full max-w-[300px] lg:max-w-[500px] text-white bg-transparent"
            />
          </div>
        </div>
      </div>
    </>
  );
}