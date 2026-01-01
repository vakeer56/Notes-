import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import ProtectedRoute from './Routes/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to= "/login" />}/>
        <Route path="/dashboard" element={<ProtectedRoute>
                                             <Dashboard />
                                          </ProtectedRoute>} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
