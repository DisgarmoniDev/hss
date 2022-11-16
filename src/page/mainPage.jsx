import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './mainPage.scss'
import DateAndTimePickers from '../components/datetime'
import NavBar from '../components/nav';

function MainPage() {
  const [open, setOpen] = useState(false)

  const {
    register,
    formState:{
      errors
    },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
      <div className="content">
      <NavBar />
      <main className="mainPage">
        <div className="name">
          <div className="name__title">
            <p><span>H</span>ookah<br />
            <span>S</span>weet<br />
            <span>S</span>moke</p>
          </div>
          <div className="name__logo">
            <img src="/img/hookan.svg" alt="hookan" />
          </div>
        </div>

        <div className="description">
          <p>Кальянная <span>HSS</span> - это место с незабываемой атмосферой,
          приятной музыкой и дымными кальянами.</p>
        </div>
        <div className="advantages">
          <div className="advantages__item">
            <div className="border">
              <div className="change-img iimg-1">
                <div className="front-side-img">
                  <img src="img/item1.svg" alt="bar" />
                </div>
                <div className="back-side-img">
                  <img src="img/item1.svg" alt="bar" />
                </div>
              </div>
            </div>
            <p>Полноценный
            бар</p>
          </div>

          <div className="advantages__item">
            <div className="border">
              <div className="change-img iimg-2">
                <div className="front-side-img">
                  <img src="img/item2.svg" alt="interior" />
                </div>
                <div className="back-side-img">
                  <img src="img/item2.svg" alt="interior" />
                </div>
              </div>
            </div>
            <p>Премиум
            интерьер</p>
          </div>

          <div className="advantages__item">
            <div className="border">
              <div className="change-img iimg-3">
                <div className="front-side-img">
                  <img src="img/item3.svg" alt="board games" />
                </div>
                <div className="back-side-img">
                  <img src="img/item3.svg" alt="board games" />
                </div>
              </div>
            </div>
            <p>Настольные
            игры</p>
          </div>

          <div className="advantages__item">
            <div className="border">
              <div className="change-img iimg-4">
                <div className="front-side-img">
                  <img src="img/item4.svg" alt="wi-fi" />
                </div>
                <div className="back-side-img">
                  <img src="img/item4.svg" alt="wi-fi" />
                </div>
              </div>
            </div>
            <p>Бесплатный
            Wi-Fi</p>
          </div>
        </div>
        
        <button onClick={() => setOpen(true)} className="modalBtn">Забронировать стол</button>
        <div className={`overlay animated ${open ? 'show' : ''}`}>
          <div className="modal">
            <svg onClick={()=> setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <div className="modal__form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title">Бронирование стола</div>
                <label>
                  Имя <br />
                  <input 
                    {...register('firstName', {
                      required: 'Поле обязательно к заполнению'
                    })}
                  />
                </label>
                <div className='div-error'>
                  {errors?.firstName && <p>{errors?.firstName?.message || "Error!!!"}</p>}
                </div>

                <label>
                  Телефон <br />
                  <input 
                    {...register('phone', {
                      required: 'Поле обязательно к заполнению'
                    })}
                  />
                </label>
                <div className='div-error'>
                  {errors?.phone && <p>{errors?.phone?.message || "Error!!!"}</p>}
                </div>

                <label>
                  Количество персон <br />
                  <input 
                    {...register('persons', {
                      required: 'Поле обязательно к заполнению'
                    })}
                  />
                </label>
                <div className='div-error'>
                  {errors?.persons && <p>{errors?.persons?.message || "Error!!!"}</p>}
                </div>

                <DateAndTimePickers /> 
                <input className='btn-submit' type="submit" />
              </form>
            </div>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default MainPage;