"use client"
import { sidebar } from '@/data/constants'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Sidebar = () => {
  const router = usePathname();
  const currentPath = router;
  
  useEffect(()=> {
    console.log(currentPath)
  }, [currentPath])
  return (
    <div className='hidden lg:block w-[15%] border-r border-foreground'>
      {
        sidebar.map((item, index) => {
          const isActive = currentPath === "/" && item === "Skillset";
          return(
            <p className={`p-2 rounded-md cursor-pointer transition-all ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`} key={index} >{item}</p>
          )
})
      }
    </div>
  )
}

export default Sidebar
