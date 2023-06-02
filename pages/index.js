import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Content from '@/components/content/content'
import Sidebar from '@/components/sidenav/sidebar'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ultiverse</title>
        <meta name="description" content="Immersive metaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} container`}>
        <div className={`${styles.mainBg} flex-center`}>
          <div className={styles.colorPop}></div>
        </div>
        <Sidebar/>
        <Content/>
      </main>
      <Footer footerLeft={true}/>
    </>
  )
}
