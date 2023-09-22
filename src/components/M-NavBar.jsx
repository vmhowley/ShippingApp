import React from 'react'
import NavBar from '../components/NavBar'
import { BellIcon } from '@heroicons/react/24/solid'

export default function Mnav() {
  return (
<div className="p-4 justify-between items-center flex">
    <div className=" justify-start items-center gap-4 flex">
        <img className="w-[49px] h-[49px] rounded-[56px] border border-white border-opacity-30" src="https://unavatar.io/benitoxx25" />
        <div className="flex-col justify-center items-start gap-1 inline-flex">
            <div className="text-white text-xl font-semibold leading-normal">Benito, Adam!</div>
            <div className="text-zinc-400 text-xs font-normal ">25 Septiembre, 2023</div>
        </div>
    </div>
  <div className='flex'>
  <BellIcon className="h-6 w-6 text-gray-600" />
    </div>      
</div>
  )
}
