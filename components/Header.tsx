import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAdk } from '@advisible/adk-nextjs'

import { Logo } from './Logo'

const LINKS = [
    { href: '/', label: 'HOME' },
    { href: '/test', label: 'TEST' },
]

export const Header = () => {
    const { reloadContainers } = useAdk()
    const { pathname } = useRouter()
    const prevRef = useRef(pathname)

    useEffect(() => {
        if (prevRef.current === pathname) return
        prevRef.current = pathname
        reloadContainers({ reloadId: 'routeChange' })
    }, [pathname, reloadContainers])

    return (
        <header>
            <div>
                <div className="logo-container">
                    <Logo />
                    <span className="logo-text">ADVISIBLE | NEXT.JS DEMO</span>
                </div>
                <nav>
                    {LINKS.map(({ href, label }) =>
                        <Link
                            key={href}
                            href={href}
                            className={href === pathname ? 'active' : undefined}
                        >
                            {label}
                        </Link>
                    )}
                    <button onClick={() => reloadContainers()}>RELOAD</button>
                </nav>
            </div>
        </header>
    )
}