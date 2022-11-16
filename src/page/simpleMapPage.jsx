import NavBar from "../components/nav";
import './simpleMapPage.scss'



export default function SimpleMapPage() {

  return(
    <div className="simpleMapPage">
    <div className="title">
          <h2>Контакты <span>HSS</span></h2>
        </div>
      <NavBar />
      <div className="simpleMapPage__content">
        

        <div className="simpleMapPage__content-info">
          <div className="block">
            <h3>Адрес</h3>
            <p>г.Москва <br />
            Джанкольская улица д.4</p>
          </div>

          <div className="block">
            <h3>Телефон</h3>
            <a href="tel:+79273542416">8(927)354-24-16</a>
          </div>

          <div className="block">
            <h3>Режим работы</h3>
            <p>Ежедневно с 10 до 24</p>
          </div>
          
        </div>

        <div className="simpleMapPage__content-map">
          <img src="/img/contact-bg.png" alt="map" />
        </div>
      </div>
      
    </div>
  )
}