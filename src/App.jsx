// react
import { useState } from "react";

// additional functional
import dataContext from "./context";
import { Routes, Route } from 'react-router-dom'

// components
import Sidebar from "./sidebar/sidebar";
import Overview from "./pages/overview";
import Budget from "./pages/budget";
import Settings from './pages/settings'

// styles
import './app.scss'

function App() {
  // * data
  const [data, setData] = useState({
    incomes: [
      { amount: 500, text: 'example text' },
      { amount: 1000, text: 'example text' },
      { amount: 3120, text: 'example text' },
      { amount: 8000, text: 'example text' },
      { amount: 500, text: 'example text' },
      { amount: 1000, text: 'example text' },
      { amount: 3120, text: 'example text' },
      { amount: 8000, text: 'example text' },
      { amount: 500, text: 'example text' },
      { amount: 1000, text: 'example text' },
      { amount: 3120, text: 'example text' },
      { amount: 8000, text: 'example text' },
      { amount: 500, text: 'example text' },
      { amount: 1000, text: 'example text' },
      { amount: 3120, text: 'example text' },
      { amount: 8000, text: 'example text' },
      { amount: 500, text: 'example text' },
      { amount: 1000, text: 'example text' },
      { amount: 3120, text: 'example text' },
      { amount: 8000, text: 'example text' },
      { amount: 500, text: 'example text' },
      { amount: 1000, text: 'example text' },
      { amount: 3120, text: 'example text' },
      { amount: 8000, text: 'example text' },
    ],
    expenses: [
      { amount: 100, text: 'example text' },
      { amount: 14, text: 'example text' },
      { amount: 300, text: 'example text' },
      { amount: 450, text: 'example text' },
      { amount: 100, text: 'example text' },
      { amount: 14, text: 'example text' },
      { amount: 300, text: 'example text' },
      { amount: 450, text: 'example text' },
      { amount: 100, text: 'example text' },
      { amount: 14, text: 'example text' },
      { amount: 300, text: 'example text' },
      { amount: 450, text: 'example text' },
      { amount: 100, text: 'example text' },
      { amount: 14, text: 'example text' },
      { amount: 300, text: 'example text' },
      { amount: 450, text: 'example text' },
    ],
  })

  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className="money-manager">
        <Sidebar />
        <main className="money-manager__main">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </dataContext.Provider >
  )
}

export default App