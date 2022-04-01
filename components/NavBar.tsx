import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

const NavBar = () => {
    const router = useRouter();  // location에 대한 정보가 나옴. 

    return (
        <nav>
            <Link href="/">
                <a className={`${styles.link} ${
                    router.pathname === "/" ? styles.active : ""
                }`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>about</a>
            </Link>
        </nav>
    )
}

export default NavBar
