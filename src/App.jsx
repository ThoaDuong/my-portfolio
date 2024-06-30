import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Home } from './components/introduce/Home'
import { About } from './components/introduce/About'
import { Experiences } from './components/experiences/Experiences'
import { Contact } from './components/contact/Contact'
import { Project } from './components/project/Project'

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
const ScrollToTop = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 7px 5px 5px 5px;
    border-radius: 50%;
    border: none;
    background-color: var(--pink);
    animation: animate 2s infinite ease alternate;
	@keyframes animate {
		to{
			transform: translateY(20px);
		}
	}
    &:hover{
        cursor: pointer;
    }
`
const Img = styled.img`
    width: 40px;
    height: 35px;
`


function App() {

    // variable
    const [visible, setVisible] = useState(false);
    const containerRef = useRef(null);


    // function
    const handleScrollToTop = () => {
        containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // effect
    // useEffect(() => {
    //     const handleScorllVisibility = () => {
    //         console.log('scroll', window.scrollY, containerRef.current.scrollY);

    //         window.scrollY > 300 ? setVisible(true) : setVisible(false);
    //     }
    //     containerRef.current.addEventListener('scroll', handleScorllVisibility);
        

    //     // return app.removeEventListener('scroll', handleScorllVisibility);

    // }, [])
    

    return (<React.Fragment>
        <Container ref={containerRef} id='app'>
            <Home />
            <About />
            <Experiences />
            <Project/>
            <Contact />
        </Container>

        { visible && <ScrollToTop onClick={handleScrollToTop}>
            <Img src="https://img.icons8.com/clouds/100/up.png" alt="up" />
        </ScrollToTop>}
    </React.Fragment>)
}

export default App
