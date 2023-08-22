import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/page';
import LoginPage from './pages/auth/login/page';
import RegisterPage from './pages/auth/register/page';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
