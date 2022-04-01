import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavBar = () => {
    const router = useRouter();  // location에 대한 정보가 나옴. 

    return (
        <nav>
            <Link href="/"><a style={{color:router.pathname === "/" ? "red" :"blue"}}>Home</a></Link>
            <Link href="/about"><a style={{color:router.pathname === "/about" ? "red" :"blue"}}>about</a></Link>
        </nav>
    )
}

export default NavBar
