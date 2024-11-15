
import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import ReviewProvider from './contexts/ReviewContext'

function App() {
 

  return (
    <>
     <ReviewProvider>
      <Header />
       <Main />
      <Footer />
     </ReviewProvider>
    </>
  )
}

export default App
