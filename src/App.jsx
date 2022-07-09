// react
import { useState, useEffect } from "react";

// additional functional
import dataContext from "./context";
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import nextId from "react-id-generator";

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
    if (!localStorage.getItem('data')) {
      const data = {
        incomes: [
          { amount: 500, category: 'example category', id: nextId() },
          { amount: 1000, category: 'example category', id: nextId() },
          { amount: 3120, category: 'example category', id: nextId() },
          { amount: 8000, category: 'example category', id: nextId() },
        ],
        expenses: [
          { amount: 100, category: 'example category', id: nextId() },
          { amount: 14, category: 'example category', id: nextId() },
          { amount: 300, category: 'example category', id: nextId() },
          { amount: 450, category: 'example category', id: nextId() },
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

  const location = useLocation()

  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className="money-manager">
        <Sidebar />
        <main className="money-manager__main">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Overview />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </dataContext.Provider >
  )
}

export default App