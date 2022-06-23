// react
import { useState } from "react";

// additional functional
import dataContext from "./context";

// components
import Sidebar from "./sidebar/sidebar";

// styles
import './app.scss'

function App() {
  // * data
  const [data, setData] = useState({})

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