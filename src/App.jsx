// react
import { useState, useEffect } from "react";

// additional functional
import dataContext from "./context";

// components
import Sidebar from "./sidebar/sidebar";

// styles
import './app.scss'

function App() {
  // * data
  const [data, setData] = useState({
    sidebar: {
      section: localStorage.getItem('section') || 'Overview',
      isActive: true
    }
  })

  // * effects
  useEffect(() => {
    localStorage.setItem('section', data.sidebar.section)
  }, [data.sidebar.section])

  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className="money-manager">
        <Sidebar data={data} setData={setData} />
        <main className="money-manager__main">

        </main>
      </div>
    </dataContext.Provider >
  )
}

export default App