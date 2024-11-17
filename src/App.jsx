
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './views/Main'
import ReviewProvider from './contexts/ReviewContext'
import Contact from './views/Contact'

function App() {
 

  return (
    <>
       <BrowserRouter>
        <ReviewProvider>
        <Header />
       <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
        <Footer />
       </ReviewProvider>
       </BrowserRouter>
    </>
  )
}

export default App
