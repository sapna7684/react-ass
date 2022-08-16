import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Breadcrumbs from './navigation/Breadcrumbs'
import { Sidebar } from './navigation/Sidebar'

const BoxWrapper = styled.div`
display:grid;
grid-template-columns: 180px 2fr 
`
const LeftWrapper = styled.div`
padding:30px 15px;
`
export const Layout = () => {
  const location = useLocation();
  return (
    <>
    {location.pathname !== '/' ? (
    <BoxWrapper>
        <Sidebar/>
        <LeftWrapper>
        <Breadcrumbs/>
        <Outlet/>
        </LeftWrapper>
    </BoxWrapper>
    ) : <Outlet/>}
    </>
  )
}
