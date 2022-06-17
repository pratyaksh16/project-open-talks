import React from 'react'
import 'assets/css/Welcome.css'
import Banner from './Banner'

import BgVideo from 'assets/videos/videoplayback.webm'
export default function Welcome() {
  return (
    <div className="welcome-page-container">
        <div className="bg-video-wrapper">
            <div className="bg-video-overlay"/>
            <video autoPlay loop muted>
            <source src={BgVideo}/>
            </video>
        </div>
        <Banner/>
    </div>
  )
}
