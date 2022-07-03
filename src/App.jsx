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
      { amount: 500, category: 'example category' },
      { amount: 1000, category: 'example category' },
      { amount: 3120, category: 'example category' },
      { amount: 8000, category: 'example category' },
      { amount: 500, category: 'example category' },
      { amount: 1000, category: 'example category' },
      { amount: 3120, category: 'example category' },
      { amount: 8000, category: 'example category' },
      { amount: 500, category: 'example category' },
      { amount: 1000, category: 'example category' },
      { amount: 3120, category: 'example category' },
      { amount: 8000, category: 'example category' },
      { amount: 500, category: 'example category' },
      { amount: 1000, category: 'example category' },
      { amount: 3120, category: 'example category' },
      { amount: 8000, category: 'example category' },
      { amount: 500, category: 'example category' },
      { amount: 1000, category: 'example category' },
      { amount: 3120, category: 'example category' },
      { amount: 8000, category: 'example category' },
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
      { amount: 100, category: 'example category' },
      { amount: 14, category: 'example category' },
      { amount: 300, category: 'example category' },
      { amount: 450, category: 'example category' },
      { amount: 100, category: 'example category' },
      { amount: 14, category: 'example category' },
      { amount: 300, category: 'example category' },
      { amount: 450, category: 'example category' },
      { amount: 100, category: 'example category' },
      { amount: 14, category: 'example category' },
      { amount: 300, category: 'example category' },
      { amount: 450, category: 'example category' },
    ],
    incomesCategories: ['buisness', 'work', 'salary'],
    expensesCategories: ['food', 'games', 'family'],
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