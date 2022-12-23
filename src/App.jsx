import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore'
import Resources from './components/Resources/Resources'
import Chat from './components/Chat/Chat'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Explore />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </BrowserRouter>
      <Chat />
    </div>
  )
}
