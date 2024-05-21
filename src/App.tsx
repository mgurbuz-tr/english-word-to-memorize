import { useEffect, useState } from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthenticationPage from './pages/AuthenticationPage';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';

function App() {
  const [token, setToken] = useState();

  useEffect(() => { }, [token, setToken])




  return (
    <Router>
      {token == null && (
        <div className='flex items-center justify-center h-screen'>
          <AuthenticationPage setToken={setToken} />
        </div>)
      }
      {token != null && (<div className='container w-screen h-screen'>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/play' Component={PlayPage}></Route>
        </Routes>
      </div>)}
    </Router>
  )
}

export default App
