import NavBar from "../components/nav";
import TobaccoEasy from "../components/filterTobacco/tobacco";
import './cardPage.scss'
import TobaccoMedium from "../components/filterTobacco/tobaccoM";
import TobaccoSuper from "../components/filterTobacco/tobaccoS";

export default function CardPage() {

  return(
    <div className="cardPage">
      <NavBar />
      <div className="contentPage">
        <div className="contentPage__title">Кальянная карта <span>HSS</span></div>
        <div className="contentPage__cotegory">
          <div className="tobacco">
            <div className="tobacco__title">Табак</div>
            <div className="tobacco__cotegory">
              <h2>Easy</h2>
              <ol>
                <TobaccoEasy />
              </ol>
             </div>

             <div className="tobacco__cotegory">
              <h2>Medium</h2>
              <ol>
                <TobaccoMedium />
              </ol>
            </div>

            <div className="tobacco__cotegory">
              <h2>Extra</h2>
              <ol>
                <TobaccoSuper />
              </ol>
            </div>
            
          </div>

          <div className="bowl">
            <div className="bowl__title">Чаша</div>
            <div className="bowl__cotegory">

              <div className="bowl__cotegory_title">Классическая</div>
              <div className="bowl__cotegory_blok">
                <div className="bowl__cotegory_blok-item">
                  <p>Easy</p>
                  <span>800₽</span>
                </div>
                <div className="bowl__cotegory_blok-item">
                  <p>Medium</p>
                  <span>900₽</span>
                </div>
                <div className="bowl__cotegory_blok-item">
                  <p>Super</p>
                  <span>1100₽</span>
                </div>
              </div>

              <div className="bowl__cotegory_title">Премиум</div>
              <div className="bowl__cotegory_blok">
                <div className="bowl__cotegory_blok-item">
                  <p>WTO</p>
                  <span>1300₽</span>
                </div>
                <div className="bowl__cotegory_blok-item">
                  <p>Tangirs</p>
                  <span>1250₽</span>
                </div>
              </div>

              <div className="bowl__cotegory_title">На фрукте</div>
              <div className="bowl__cotegory_blok">
                <div className="bowl__cotegory_blok-item">
                  <p>Грейпфрукт</p>
                  <span>1400₽</span>
                </div>
                <div className="bowl__cotegory_blok-item">
                  <p>Помело</p>
                  <span>1650₽</span>
                </div>
                <div className="bowl__cotegory_blok-item">
                  <p>Ананас</p>
                  <span>1900₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contentPage__info">
          <p>Замена чаши 760₽</p>
        </div>
      </div>
    </div>
  )
}