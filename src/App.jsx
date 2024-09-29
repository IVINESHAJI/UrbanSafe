import './App.css'
import NavBar from './components/NavBar'
import MainPage from './components/mainPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error'
import Report from './components/Report';
import Developer from './components/developer';
import Overlay from './components/overlay';

function App() {

  return (
    <>
    <Overlay />
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element= {<MainPage/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/crime' element={<Report/>}/>
        <Route path="/developers_page" element={<Developer/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
