import Image from "next/image"
import avatar from "../../../public/istockphoto-1153003888-612x612-removebg-preview 1.svg"

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-7 py-5">
      <h1 className="text-[30px] font-bold">WhatBytes</h1>
      <div className="border border-foreground flex items-center gap-3 rounded-[12px] p-2">
        <div className="w-[40px] h-[40px] rounded-full"><Image src={avatar} alt="" /></div>
        <h1 className="text-[14px] font-[300]">Rahil Siddque</h1>
      </div>
    </div>
  )
}

export default Navbar
