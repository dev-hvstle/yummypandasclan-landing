import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Introduction from '../components/Introduction'
import Pandaprice from '../components/Pandaprice'
import Footer from '../components/Footer'
import Roadmap from '../components/Roadmap'
import Mintafter from '../components/Mintafter'
import Rarity from '../components/Rarity'
import Team from '../components/Team'
import RarityScale from '../components/RarityScale'
import Sidebar from '../components/Sidebar'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Navbar toggle={toggle} />
        <Timer />
        <Introduction/>
        <Roadmap />
        <Pandaprice />
        <Rarity />
        <RarityScale />
        <Mintafter />
        <Team />
        <Footer />
    </div>
  )
}

export default Home