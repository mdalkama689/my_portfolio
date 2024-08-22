import React from 'react'
import Header from './Header'
import About from './About'
import TechStack from './TechStack'
import Project from './Project'
import Contact from './Contact'
import HomeLayout from './HomeLayout'


const Home = () => {
  return (
    <div className=' flex items-center justify-center max-w-4xl m-auto'>
        <div>
            <Header />
            <About />
            <TechStack />
            <Project />
            <Contact />
              <HomeLayout />
        </div>
    </div>
  )
}

export default Home