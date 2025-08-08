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
            <Link href="/Webudvikling_Cases">
                <span>Webudvikling Cases</span>
            </Link>
            <Link href="/Multimediedesigner_Cases">
                <span>Multimediedesigner Cases</span>
            </Link>
            <Link href="/Adobe_Programmer">
                <span>Adobe Programmer</span>
            </Link>
            <Link href="/Kodning">
                <span>Kodning</span>
            </Link>
            <Link href="/Om_Mig">
                <span>Om Mig</span>
            </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar