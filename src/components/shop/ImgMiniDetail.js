import React from 'react'

function ImgMiniDetail({img, setIndex}) {
  return (
    <div>
      {img.map((image, index)=> (
        <img 
          className="mx-2"
          src={image} 
          alt="" 
          key={index} 
          onClick={() => setIndex(index)}
          style={{width:"27%", cursor: "pointer"}}
        />
      ))}
    </div>
  )
}

export default ImgMiniDetail
