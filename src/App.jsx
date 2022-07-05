// react
import { useState, useEffect } from "react";

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
    incomes: [],
    expenses: [],
    incomesCategories: [],
    expensesCategories: [],
  })

  // * useEffect
  useEffect(() => {
    if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
      const dpt = window.devicePixelRatio;
      const widthM = window.screen.width * dpt;
      const widthH = window.screen.height * dpt;
      document.write('<meta name="viewport" content="width=' + widthM + ', height=' + widthH + '">');
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('data')) {
      const data = {
        incomes: [
          { amount: 500, category: 'example category' },
          { amount: 1000, category: 'example category' },
          { amount: 3120, category: 'example category' },
          { amount: 8000, category: 'example category' },
        ],
        expenses: [
          { amount: 100, category: 'example category' },
          { amount: 14, category: 'example category' },
          { amount: 300, category: 'example category' },
          { amount: 450, category: 'example category' },
        ],
        incomesCategories: ['buisness', 'work', 'salary'],
        expensesCategories: ['food', 'games', 'family'],
      }

      localStorage.setItem('data', JSON.stringify(data))
      setData(data)
    } else {
      setData(JSON.parse(localStorage.getItem('data')))
    }
  }, [])

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