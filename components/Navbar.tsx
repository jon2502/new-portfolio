import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='px-8 pt-3 pb-16'>
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/Logo.png" alt="logo" width={380} height={75} />
            </Link>
            <div className='flex items-center gap-5'>
            <Link href="/startup/create">
                <span>Multimediedesigner Cases</span>
            </Link>
            <Link href="/startup/create">
                <span>Webudvikling Cases</span>
            </Link>
            <Link href="/startup/create">
                <span>Adobe Programmer</span>
            </Link>
            <Link href="/startup/create">
                <span>Kodning</span>
            </Link>
            <Link href="/startup/create">
                <span>Om Mig</span>
            </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar