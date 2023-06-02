import Footer from "@/components/footer/footer";
import styles from "@/styles/VideoPage.module.css";
import { useRouter } from "next/router";
// import Modal from "react-modal";

const VideoPage = () => {
    const router = useRouter();

    return (
        <>
        <div className={styles.container}>
        {/* <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => { router.back() }}
                className={styles.modal}
                overlayClassName={styles.overlay}
            > */}
                <div className={styles.videoWrapper}>
                </div>
            {/* </Modal> */}
        </div>
        <Footer footerLeft={false}/>
        </>
    )
}

export default VideoPage;