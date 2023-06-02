import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';
import { navLinks } from '@/data';

const Navbar = () => {
    return (
        <div className={`${styles.navWrapper} container`}>
            <div className="flex-center">
                <Image src="/images/logo.svg" alt="multiverse" width={30} height={35} />
            </div>

            <div className={styles.progressBar}>
                <div className={styles.progress}></div>
            </div>

            <div className={styles.nav}>
                <nav>
                    <ul className={`${styles.list} list`}>
                        {navLinks.map((link) => {
                            const { id, content, path } = link;
                            return (
                                <li key={id} className="">
                                    <Link href={path}>
                                        <div className={styles.link}>
                                            <p className="">{id}</p>
                                            <h4>{content}</h4>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="flex-center">
                            <Image src="/images/hamburger.svg" alt="menu" width={36} height={8} />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;