"use client"
import React from 'react'
import { sidebar } from '@/data/constants'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const router = usePathname();
  const currentPath = router;
  
  return (
    <div className='hidden lg:block w-[20%] font-bold text-Lg border-r border-foreground py-9 pr-8'>
      {
        sidebar.map((item, index) => {
          const isActive = currentPath === "/dashboard" && item === "Skill Test";
          return(
            <p className={`p-3 rounded-br-3xl rounded-tr-3xl cursor-pointer transition-all ${
              isActive ? "bg-bluePurple/20 text-bluePurple" : "text-foreground"
            }`} key={index} >{item}</p>
          )
})
      }
    </div>
  )
}

export default Sidebar
