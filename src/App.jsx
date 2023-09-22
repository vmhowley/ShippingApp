import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/envia" element={<h1>Envía un producto</h1>} />
      <Route path="/" element={<h1>hola</h1>} />
      <Route path="/" element={<h1>hola</h1>} />
      <Route path="/" element={<h1>hola</h1>} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
