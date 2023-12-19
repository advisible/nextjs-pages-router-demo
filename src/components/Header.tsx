import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { reloadContainers } from '@advisible/adk-react'

import { Logo } from './Logo'

const LINKS = [
    { href: '/', label: 'HOME' },
    { href: '/other', label: 'OTHER' },
]

export const Header = () => {
    const { pathname } = useRouter()
    const prevRef = useRef(pathname)

    useEffect(() => {
        if (prevRef.current !== pathname) {
            prevRef.current = pathname
            reloadContainers({ reloadId: 'routeChange' })
        }
    }, [pathname])

    return (
        <header>
            <div>
                <Logo />
                <nav>
                    {LINKS.map(({ href, label }) =>
                        <Link
                            key={href}
                            href={href}
                            className={'button' + (href === pathname ? ' active' : '')}
                        >
                            {label}
                        </Link>,
                    )}
                    <button onClick={() => reloadContainers()}>RELOAD</button>
                </nav>
            </div>
        </header>
    )
}
