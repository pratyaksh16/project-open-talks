// import { useState } from 'react'
import 'assets/css/Banner.css'

export default function Banner() {

  return (
    <div className="banner-container">
      <div className="banner-card">
        <h1 className='noselect'>&lt; Project Open Talks /&gt;</h1>
      </div>
      <textarea 
        className= ""
        name="Your views" 
        placeholder="A Praty-Talks initiative" 
        id="" 
        cols="30" 
        rows="10"
      />
    </div>
  )
}
