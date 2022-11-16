import { Gallery } from '../components/gallery/Gallery'
import NavBar from '../components/nav'
import './galleryPage.scss'

export default function GalleryPage() {

  return(
    <div className="galleryPage">
      <NavBar />

      <div className="galleryPage__content">
        <h2>Галерея <span>HSS</span></h2>
        <Gallery />
      </div>
      
    </div>
  )
}