import styles from './footer.module.css';

const Footer = ({footerLeft}) => {
    return (
        <div className={footerLeft ? `${styles.footer} ${styles.footerLeft} container` : `${styles.footer} container`}>
            <div className={styles.playingAnimation__container}>
                {[1, 2, 3, 4, 5].map((playingAnimation, i) => {
                    return (
                        <div key={i} className={styles.playingAnimation}></div>
                    )
                })}
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