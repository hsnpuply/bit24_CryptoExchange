import All_coin_Section from './components/all-coins-section'
import App_introudction from './components/app-introduction'
import Banners_section from './components/banners_section'
import Blogs_content from './components/blogs-content'
import Coin_Section from './components/coins-section'
import Header from './components/header'
import HeroSection from './components/hero_section'
import Marketing from './components/marketing'
import News from './components/news'
import Our_services from './components/our-services'
import Why_us from './components/why-us'

function App() {

  return (
    <>
    <Header/>
    <main>
    <HeroSection/>
    <News/>
    <Coin_Section/>
    <Marketing/>
    <Banners_section/>
    <Why_us/>
    <All_coin_Section/>
    <App_introudction/>
    <Our_services/>
    <Blogs_content/>
    </main>
    </>
  )
}

export default App
