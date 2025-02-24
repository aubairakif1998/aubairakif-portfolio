"use client"
import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import path from 'path'

const link = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]
function Nav() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <nav className='flex gap-8'>
            {link.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname &&

                    "text-accent border-b-2 border-accent "
                    } capitalize font-medium hover::text-accent transition-all `}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav
