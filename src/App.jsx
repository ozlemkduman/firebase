
import Register from './pages/Register'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

        </Routes>

      </div>

    </>
  )
}

export default App
