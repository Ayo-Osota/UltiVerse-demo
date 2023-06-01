import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={`${styles.footer} container py-16`}>
            <div className={styles.playingAnimation__container}>
                <div className={styles.playingAnimation}></div>
                <div className={styles.playingAnimation}></div>
                <div className={styles.playingAnimation}></div>
                <div className={styles.playingAnimation}></div>
                <div className={styles.playingAnimation}></div>
            </div>
            <div>
                <p>
                    UTILIZING METAFI, UE5,
                    AND WEB3 TECHNOLOGY
                    TO CREATE A SOCIAL
                    AND IMMERSIVE GAMING METAVERSE.
                </p>
            </div>
        </div>
    )
}

export default Footer;