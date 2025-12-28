import React from 'react'
import { AuthProvider } from './AuthContext'
import Login from './pages/Login'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "./admain" element ={
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

export default App
