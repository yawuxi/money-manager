// react
import { useState } from "react";

// additional functional
import dataContext from "./context";

// components
import Sidebar from "./sidebar/sidebar";
import Overview from "./pages/overview";

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
          <Overview />
        </main>
      </div>
    </dataContext.Provider >
  )
}

export default App