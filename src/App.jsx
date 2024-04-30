import Home from './assets/Components/Home'
import Nav from './assets/Components/Nav'
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </Router>
    </div>
  )
}
