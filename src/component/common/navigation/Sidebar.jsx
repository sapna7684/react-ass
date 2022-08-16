import { NavLink } from 'react-router-dom'
import { menus } from './menus'

export const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul>
      {menus.map((menu) => <li key={menu.id}><NavLink to={menu?.link} key={menu.id} >{menu?.name} </NavLink></li>
      )}
      </ul>
      
    </nav>
  )
}
