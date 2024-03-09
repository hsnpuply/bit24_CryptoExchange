import './App.css'
import Coin_Section from './components/coins-section'
import Header from './components/header'
import HeroSection from './components/hero_section'
import Marketing from './components/marketing'
import News from './components/news'

function App() {

  return (
    <>
    <Header/>
    <main>
    <HeroSection/>
    <News/>
    <Coin_Section/>
    <Marketing/>
    </main>
    </>
  )
}

export default App
