import {Routes, Route} from 'react-router-dom'

import CardPage from "./page/cardPge";
import GalleryPage from "./page/galleryPage";
import MainPage from "./page/mainPage";
import SimpleMapPage from "./page/simpleMapPage";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/hookah-card' element={<CardPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/map' element={<SimpleMapPage />} />
      </Routes>
    </>
  )
}

export default App;
