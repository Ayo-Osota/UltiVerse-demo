import styles from "./coverFront.module.css";
import Nav from "./navbar";

const CoverFront = () => {
    return (
        <div className={`${styles.coverFront} h-screen`}>
            <Nav/>
            CoverFront
        </div>
    )
}

export default CoverFront;