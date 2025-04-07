import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAdkReset } from '@advisible/adk-react'

const LINKS = [
    { href: '/', label: 'Static route' },
    { href: '/dynamic/1', label: 'Dynamic route' },
]

export default function Menu() {
    /*
     * When using dynamic routes, make sure to use `asPath` as input to useAdkReset
     * since `pathname` does not change between dynamic routes.
     */
    const { asPath } = useRouter()
    /*
     * Query parameters are removed from the path here. Use entire `asPath` string
     * to also trigger a reset on query parameter changes.
     */
    const path = asPath.split('?')[0]
    useAdkReset(path)

    return (
        <nav>
            {LINKS.map(({ href, label }) =>
                <Link
                    key={href}
                    href={href}
                    className={`nav-link ${(href === path ? 'nav-link--current' : '')}`}
                >
                    {label}
                </Link>,
            )}
        </nav>
    )
}
