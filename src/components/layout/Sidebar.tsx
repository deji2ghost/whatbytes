import { sidebar } from '@/data/constants'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[15%] border-r border-foreground'>
      {
        sidebar.map((item, index) => (
            <p key={index}>{item}</p>
        ))
      }
    </div>
  )
}

export default Sidebar
