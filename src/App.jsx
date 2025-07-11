import Header from './components/Header'
import About from './components/About'

import Contact from './components/Contact'

function App() {
  return (
    <div>
      <div className="section">
        <Header />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  )
}

export default App
