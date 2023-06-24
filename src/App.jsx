import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage';
import WalletPage from './pages/WalletPage';


function App() {
  const [active, setActive] = useState()
 
  return (
    <div className={``}>
    <BrowserRouter>
    
              
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<HomePage /> } />
            <Route path='/wallets' element={<WalletPage /> } />
            
          </Routes>

    </BrowserRouter>
  </div>
  )
}

export default App
