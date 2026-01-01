import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import AdminLogin from './pages/AdminLogin'
import Register from './pages/registration'
import UploadNotes from "./pages/UploadNotes";
import ProtectedRoute from './Routes/ProtectedRoute'
import AdminPage from './pages/adminDashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to= "/login" />}/>
        <Route path="/dashboard" element={<ProtectedRoute>
                                             <Dashboard />
                                          </ProtectedRoute>} />
        <Route path="/register" element={ <Register />} />
        <Route path="/upload" element={<UploadNotes />} /> 
        <Route path='/login' element={<Login />}/>
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/admindash' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
