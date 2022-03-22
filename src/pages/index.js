import React from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Introduction from '../components/Introduction'
import Pandaprice from '../components/Pandaprice'
import Trailer from '../components/Trailer'
import Footer from '../components/Footer'
import Roadmap from '../components/Roadmap'
import Mintafter from '../components/Mintafter'
import Rarity from '../components/Rarity'
import Team from '../components/Team'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Timer />
        <Introduction/>
        <Roadmap />
        <Pandaprice />
        <Rarity />
        <Mintafter />
        <Team />
        <Footer />
    </div>
  )
}

export default Home