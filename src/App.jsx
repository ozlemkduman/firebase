
import Register from './pages/Register'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App({isActive}) {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home isActive={isActive}/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

        </Routes>

      </div>

    </>
  )
}

export default App
