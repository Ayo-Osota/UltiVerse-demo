import CoverFront from '@/components/cover-front/coverFront';
import ReactAudioPlayer from 'react-audio-player';


export default function Home() {
  return (
    <>
      <CoverFront />
      <ReactAudioPlayer
        src="/summer.mp3"
        autoPlay
      />
    </>
  )
}
