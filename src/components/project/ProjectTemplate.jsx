import React from 'react'
import styled from 'styled-components'
import { ProjectItem } from './ProjectItem'
import { ProjectKaplay } from './ProjectKaplay'
import { ProjectFE } from './ProjectFE'

const Section = styled.div`
    height: 300vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
	align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 	1024px) {
        height: fit-content;
    }
`
const Title = styled.h2`
    text-transform: uppercase;
    margin-top: 50px;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    justify-content: center;
`


export const ProjectTemplate = () => {
  return (
    <Section id="projects">
        <Title>My Persional Projects</Title>

        <Container>
            <ProjectItem
                name="TLearn"
                desc="TLearn is a web application I built to make learning English accessible and engaging. Users can:"
                mainFunction={[
                    "Store vocabulary to expand knowledge",
                    "Memorize vocabularies with interactive exercises",
                    "Sharpen writing skills"
                ]}
                link={{
                    live: "https://youtu.be/HGPF2JX1_Tc",
                    gitFE: "https://github.com/ThoaDuong/tlearn_client",
                    gitBE: "https://github.com/ThoaDuong/tlearn_server"
                }}
                tech={{
                    fe: "ReactJS, Redux Toolkit, MaterialUI",
                    be: "NodeJS / ExpressJS, MongoDB, PassportJS"
                }}
                imgProject='./img/tlearn_all.png'
            />
            <ProjectItem
                name="LooToo"
                desc="LooToo is a real-time web application I built to capture the festive spirit of Vietnamese Lunar New Year through a multiplayer bingo game. Users can:"
                mainFunction={[
                    "Join live games and choose unique boards",
                    "Real-time gameplay: Race to be the first to complete your board",
                    "Interactive chat"
                ]}
                link={{
                    live: "https://youtu.be/PApPPLeGWE4",
                    gitFE: "https://github.com/ThoaDuong/lucky-socketio-client",
                    gitBE: "https://github.com/ThoaDuong/lucky-socketio-server"
                }}
                tech={{
                    fe: "VueJS, Pinia, TailwindCSS",
                    be: "NodeJS / ExpressJS, SocketIO, MongoDB"
                }}
                imgProject='./img/lootoo_all.png'
            />
        </Container>
        
        <Container>
            <ProjectKaplay/>
        </Container>

        <Container>
            <ProjectFE 
                title='E-Commerce'
                git='https://github.com/ThoaDuong/Bridge-ReactJS'
                live='https://youtu.be/ecr_yQ9Y3iU'
                imgProject='./img/eec_all.png'
            />
            <ProjectFE
                title='Food Recipes'
                git='https://github.com/ThoaDuong/Recipes'
                live='https://thoaduong.github.io/Recipes/'
                imgProject='./img/recipes_all.png'
            />
        </Container>


    </Section>
  )
}
