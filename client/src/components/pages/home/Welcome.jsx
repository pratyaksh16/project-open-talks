import React from 'react'
import 'assets/css/Welcome.css'
import Banner from './Banner'
import BgVideo from 'assets/videos/videoplayback.webm'
import BgAudio from 'assets/audio/sorry_lofi_hip_hop.mp3'

export default function Welcome() {
  return (
    <div className="welcome-page-container">
        <div className="bg-video-wrapper">
            <div className="bg-video-overlay"/>
            <video autoPlay loop muted>
            <source src={BgVideo}/>
            </video>
        </div>
        <audio autoPlay loop src={BgAudio}></audio>
        <Banner/>
        
    </div>
  )
}
