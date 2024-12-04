import MyNav from './Components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './Components/footer'
import MyMain from './Components/main'
import EditProfile from './Components/profilePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav subtitle="Bookstore" isFluid={true} />
        </header>
        <main className="bg-black">
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/EditProfile" element={<EditProfile />} />
          </Routes>
        </main>
        <footer className="bg-dark">
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
