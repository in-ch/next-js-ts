import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

const NavBar = () => {
    const router = useRouter();  // location에 대한 정보가 나옴. 

    return (
        <nav className={styles.nav}>
            <img className={styles.img} src="/vercel.svg" />
            <div>
                <Link href="/">
                <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
                </Link>
                <Link href="/about">
                <a className={router.pathname === "/about" ? styles.active : ""}>About</a>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
