import Image from 'next/image';
import styles from './video.module.css';
import Link from 'next/link';

const Video = () => {
    return (
        <Link href='/video' className={`${styles.video} video-link`}>
            <div>
                <Image src='/images/times.svg' alt='rect' width={26} height={26} />
            </div>
        </Link>
    )
}

export default Video;