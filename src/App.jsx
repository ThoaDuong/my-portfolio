import React from 'react'
import styled from 'styled-components'
import { Home } from './components/introduce/Home'
import { About } from './components/introduce/About'
import { Contact } from './components/contact/Contact'
import { ProjectTemplate } from './components/project/ProjectTemplate'
import { SkillTemplate } from './components/skills/SkillTemplate'
import { ContactIcon } from './components/contact/ContactIcon'

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./img/bg.jpeg"); 
    &::-webkit-scrollbar{
        display: none;
    }
`


function App() {
    return (<React.Fragment>
        <Container>
            <Home />
            <About />
            <SkillTemplate />
            <ProjectTemplate />
            <Contact />
            <ContactIcon />
        </Container>
    </React.Fragment>)
}

export default App
