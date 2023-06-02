import { sidenavLinks } from "@/data";
import Link from "next/link";
import styles from './sidebar.module.css';
import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
    const [tempActive, setTempActive] = useState("001");

    return (
        <div className={styles.wrapper}>
            <nav>
                <ul className="list">
                    {sidenavLinks.map((link) => {
                        const {id, content, path} = link;
                        return (
                            <li key={id}>
                                <Link onClick={() => setTempActive(id)} href={path} className={tempActive === id ? `${styles.active}` : undefined} >
                                    <div className={styles.link}>
                                        {tempActive === id ?
                                        <Image src="/images/list-img-active.svg" alt="link" width={12} height={33}/> :
                                        <Image src="/images/list-img.svg" alt="link" width={12} height={33}/>}
                                    <h4>{content}</h4>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;