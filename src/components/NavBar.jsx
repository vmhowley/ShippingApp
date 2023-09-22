import React from 'react'
import logo from '../assets/images/react.svg'

export default function NavBar() {
    let navigation = [
        { "name": 'Home', link: '/'},
        { "name": 'Envio', link: '/envio'},
        { "name": 'Contacto', link: '/contacto'},        
    ]

  return (

        <div className="shadow-md w-full">
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center'>
                {/* Logo Here */}
                <div className="flex text-2x1 cursor-pointer items-center gap-2">
                    <img className='w-7 h-7 ' src={logo} alt="" />
                    <span className='font-bold'>BrandName</span>
                </div>
                {/* Navigation Here  */}
                <ul className='md:flex pl-9 md:pl-0 '>
                    {navigation.map((item, index) => {
                        return (
                            <li className='font-semibold my-7 md:my-0 md:ml-8 ' key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}
