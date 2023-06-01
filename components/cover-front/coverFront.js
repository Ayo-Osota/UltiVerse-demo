import Image from "next/image";
import styles from "./coverFront.module.css";
import Nav from "./navbar";
import Footer from "./footer";

const CoverFront = () => {
    return (
        <div className={`${styles.coverFront} flex flex-col container h-screen`}>
            <Nav />
            <div className={`${styles.body} grid w-11/12 h-full`}>
                <Image className={styles.gridItem} src="/images/multiverse.png" alt="multiverse" width={1582} height={722} />
                <div className={`${styles.gridItem} px-10`}>
                    <Image src="/images/times.svg" alt="multiverse" width={35} height={35} />
                    <Image src="/images/click-rotate.svg" alt="multiverse" width={105} height={105} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CoverFront;