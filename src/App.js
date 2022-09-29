import './App.css'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Question from './components/Question/Question'

function App() {
  return (
    <div className="main_container">
      <Header></Header>
      <Container></Container>
      <Question></Question>
      <Footer></Footer>
    </div>
  )
}

export default App
