import { Route, Routes } from 'react-router-dom'
import { Profile } from '../Profile'
import { UserContent } from '../UserContent'
import { UserData } from '../UserFormData'
import { Dashboard } from './dashboard/Dashboard'
import { Layout } from './Layout'
import { Login } from './Login'
import RequireAuth from './RequireAuth'


export const Landing = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route exact path='/userdetail' element={<UserContent />} />
          <Route exact path='/addUser' element={<UserData />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}
