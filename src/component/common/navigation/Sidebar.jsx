import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { menus } from './menus'

export const Sidebar = () => {
  return (
    <Menu>
      {menus.map((menu) => <Link to={menu?.link} key={menu.id}>{menu?.name} </Link>
      )}
    </Menu>
  )
}
