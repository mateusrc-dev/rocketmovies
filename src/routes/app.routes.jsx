import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Details } from '../Pages/Details'
import { NewMovie } from '../Pages/NewMovie'
import { Profile } from '../Pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newmovie" element={<NewMovie />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}