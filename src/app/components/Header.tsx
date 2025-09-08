'use client'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {

    const [expanded, setExpanded] = useState(false);

    return (
        <header className="header ">
            <h1 className='header-title'>Mitchell Coovert</h1>
            <div className='header-burger' onClick={() => setExpanded(!expanded)}>
                <FontAwesomeIcon icon={faBars} size='2xl'/>
            </div>

            <nav className="h-full absolute right-0 top-12 md:block md:static ">
                <ul className={`header-list ${!expanded ? 'hidden' : ''} md:flex`}>
                    <li className="header-item"><Link className="header-link" href="/" onClick={() => setExpanded(false)}>Home</Link></li>
                    <li className="header-item"><Link className="header-link" href="/#About" onClick={() => setExpanded(false)}>About</Link></li>
                    <li className="header-item"><Link className="header-link" href="/projects" onClick={() => setExpanded(false)}>Projects</Link></li>
                    <li className="header-item"><Link className="header-link" href="/blog" onClick={() => setExpanded(false)}>Blog</Link></li>
                </ul>
            </nav>

        </header>
    );

}