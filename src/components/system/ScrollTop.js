import React, { useState } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollTop.css'

const ScrollTop = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  window.addEventListener('scroll', checkScrollTop)
    
  const scrollUp =() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  return (
    <div className="scrollUp">
      <FaArrowCircleUp 
        fill="black" 
        onClick={scrollUp} 
        style={{width: "40px", height:"40px", display: showScroll ? 'flex' : 'none'}}
      />
    </div>
  )
}

export default ScrollTop;