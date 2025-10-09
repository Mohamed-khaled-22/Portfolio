import Header from './Componants/1-Header/Header'
import Hero from './Componants/2-Hero/Hero'
import About from './Componants/3-About-Me/About'
import Skills from './Componants/4-Skills/Skills'
import Projects from './Componants/5-Projects/Projects'
import Contact from './Componants/6-Contact-Me/Contact'
import Footer from './Componants/7-Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react'
import Section from './Motion/Section';

function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScrollToTopVisible(true)
      } else {
        setScrollToTopVisible(false)
      }
    })
  }, []);

  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  return (
    <div id='up' className='container'>
      <Header />

      <Hero />

      <Section>
        <About />
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Projects />
      </Section>

      <Section>
        <Contact />
      </Section>

      <Section>
        <Footer />
      </Section>

      <a style={{ opacity: scrollToTopVisible ? .7 : 0, display: scrollToTopVisible ? "block" : 'none' }} href="#up" className="scroll-to-top"> <FontAwesomeIcon size='lg' icon={faAngleUp} /> </a>

    </div >
  )
}

export default App
