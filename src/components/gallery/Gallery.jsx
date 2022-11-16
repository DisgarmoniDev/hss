import { useState } from 'react'
import { galleryData } from '../../data/galleryData'
import './Gallery.scss'

export const Gallery = () => {


  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')


  const getImg= (imgSrc) =>{
    setTempImgSrc(imgSrc)
    setModel(true)
  }

  return (
    <div className='galleryContent'>
      <div className={model? "model open" : "model"}>
        <svg onClick={()=>setModel(false) }  height="200" viewBox="0 0 200 200" width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src={tempImgSrc} alt='' />
      </div>
      <div className="gallery">
        {galleryData.map((itemImg)=>{
          return(
            <div className="gallery__pics" key={itemImg.id} onClick={()=> getImg(itemImg.imgSrc)}>
              <img src={itemImg.imgSrc} style={{width: '100%'}} alt='' />
            </div>
          )
        })}

      </div>
    </div>
  )
}
