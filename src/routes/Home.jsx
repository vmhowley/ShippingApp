import React from 'react'
import NavBar from '../components/NavBar'
import Mnav from '../components/M-NavBar'
import { BellIcon } from '@heroicons/react/24/outline'
import SearchBar from '../components/Search'
import Ccard from '../components/Ccard'

export default function Home() {
  return (
    <>  
    <Mnav />
    <SearchBar />
    <Ccard />    
        
    </>

  )
}
