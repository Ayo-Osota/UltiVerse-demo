import Image from "next/image";
import Video from "../video/video";
import styles from "./content.module.css";

const Content = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Image src="/images/click-rotate.svg" alt="click" width={105} height={105} />
            </div>
            <div className={styles.body}>
                <div className={styles.textWrapper}>
                    <Image src="/images/immersive.png" alt="immersive" width={700} height={152} />
                    <Image src="/images/metaverse.png" alt="metaverse" width={700} height={152} />
                </div>
                <Video/>
            </div>
        </div>
    )
}

export default Content;