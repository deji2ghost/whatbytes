import Image from "next/image"
import avatar from "../../../public/istockphoto-1153003888-612x612-removebg-preview 1.svg"

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-7 py-5">
      <h1 className="text-[30px] font-bold">WhatBytes</h1>
      <div className="border border-foreground flex items-center gap-3 rounded-[8px] p-1">
        <div className="w-[30px] h-[30px] rounded-full border border-bluePurple"><Image src={avatar} alt="" /></div>
        <h1 className="text-[14px] font-bold">Rahil Siddque</h1>
      </div>
    </div>
  )
}

export default Navbar
