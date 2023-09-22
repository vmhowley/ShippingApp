import React from 'react'
import NavBar from '../components/NavBar'
import Mnav from '../components/M-NavBar'
import { BellIcon } from '@heroicons/react/24/outline'
import Search from '../components/Search'
import Ccard from '../components/Ccard'

export default function Home() {
  return ( 
    <>
    <Mnav />
    <Ccard />
    <Search />    
    </> 
  )
}
