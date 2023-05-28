import Image from 'next/image'
import { Inter } from 'next/font/google'
import CoverFront from '@/components/cover-front/coverFront'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CoverFront/>
    </>
  )
}
