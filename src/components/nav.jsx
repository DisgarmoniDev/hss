import {NavLink} from 'react-router-dom'
import './nav.scss'

export default function NavBar() {
  return(
    <div className="nav">
        <nav className="nav__position">
          <ul>
            <li><NavLink to='/'>Заказать стол</NavLink></li>
            <li><NavLink to='/hookah-card'>Меню кальянов</NavLink></li>
            <li><NavLink to='/gallery'>Галерея</NavLink></li>
            <li><NavLink to='/map'>Контакты</NavLink></li>
          </ul>
        </nav>
      </div>
  )
}