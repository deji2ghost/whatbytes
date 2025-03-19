import Image from "next/image"
import avatar from "../../../public/istockphoto-1153003888-612x612-removebg-preview 1.svg"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-7 py-9">
      <h1 className="text">WhatBytes</h1>
      <div className="border border-foreground flex items-center gap-3">
        <div className="w-[40px] h-[40px]"><Image src={avatar} alt="" /></div>
        <h1>Rahil Siddque</h1>
      </div>
    </div>
  )
}

export default Navbar
