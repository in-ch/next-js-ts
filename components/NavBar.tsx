import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();  // location에 대한 정보가 나옴. 

    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
        </nav>
    )
}

export default NavBar
