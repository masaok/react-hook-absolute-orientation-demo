import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import Demo from './components/Demo'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>React Hook Absolute Orientation Demo</title>
        </Helmet>
        <Router>
          <Routes>
            <Route path="/" element={<Demo />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  )
}

export default App
