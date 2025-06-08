import React from 'react'
import HeaderPages from './HeaderPage/HeaderPages'
import ComponentPage from './Component/ComponentPage'
import FooterPage from './FooterPage/FooterPage'

function App() {
  return (
    <div>
      <header>
        <HeaderPages/>
      </header>
      <ComponentPage/>
      <footer>
        <FooterPage/>
      </footer>
    </div>
  )
}

export default App
