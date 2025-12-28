import React from 'react'
import { AuthProvider } from './AuthContext'
import Login from './pages/Login'
import Admin from './pages/Admin'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/admin" element ={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
        />

        <Route path = "*" element = {<Navigate to="/login" />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;