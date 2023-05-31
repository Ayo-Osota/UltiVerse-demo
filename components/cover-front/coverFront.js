import Image from "next/image";
import styles from "./coverFront.module.css";
import Nav from "./navbar";

const CoverFront = () => {
    return (
        <div className={`${styles.coverFront} container h-screen`}>
            <Nav/>
            <div className={`${styles.body} w-11/12 h-full`}>
                <Image src="/images/multiverse.png" alt="multiverse" width={1582} height={722}/>
            </div>
        </div>
    )
}

export default CoverFront;