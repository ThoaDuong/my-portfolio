import React, { useState } from 'react'
import styled from 'styled-components'
import { ComputerCanvas } from '../threejs/ComputerCanvas'
import { ProjectCard } from './ProjectCard'
import { CorgiCanvas } from '../threejs/CorgiCanvas'
import { ShibaCanvas } from '../threejs/ShibaCanvas'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
	align-items: center;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`
const Title = styled.h3`
    font-size: 24px;
    text-align: center;
`
const Card = styled.div`
    /* position: relative; */
`
const CardUp = styled.div`
    /* position: absolute; */
`
const CardDown = styled.div`
    /* position: absolute; */

`
const BoxCard = styled.div`
    width: 40%;
    @media only screen and (max-width: 	1024px) {
		width: 90%;
        margin: auto 20px;
    }
`
const BoxObject = styled.div`
    width: 40%;
    @media only screen and (max-width: 	1024px) {
		display: none;
    }
`

export const Project = () => {

    // variable

    return (
        <Section>
            <Title>My favorite projects</Title>
            
            <Container className='container'>
                <BoxCard>
                    <ProjectCard
                        name="TLearn"
                        desc="TLearn is a web application I built to make learning English accessible and engaging. Users can:"
                        mainFunction={[
                            "Store vocabulary to expand knowledge",
                            "Memorize vocabularies with interactive exercises",
                            "Sharpen writing skills"
                        ]}
                        link={{
                            live: "https://tlearn-voca.netlify.app/",
                            caseStudy: "",
                            gitFE: "https://github.com/ThoaDuong/tlearn_client",
                            gitBE: "https://github.com/ThoaDuong/tlearn_server"
                        }}
                    />
                </BoxCard>
                <BoxObject>
                    <CorgiCanvas/>
                </BoxObject>
                <BoxObject>
                    <ShibaCanvas/>
                </BoxObject>
                <BoxCard>
                    <ProjectCard
                        name="LooToo"
                        desc="LooToo is a real-time web application I built to capture the festive spirit of Vietnamese Lunar New Year through a multiplayer bingo game. Users can:"
                        mainFunction={[
                            "Join live games and choose unique boards",
                            "Real-time gameplay: Race to be the first to complete your board",
                            "Interactive chat"
                        ]}
                        link={{
                            live: "https://lootoo.netlify.app/",
                            caseStudy: "",
                            gitFE: "https://github.com/ThoaDuong/lucky-socketio-client",
                            gitBE: "https://github.com/ThoaDuong/lucky-socketio-server"
                        }}
                    />
                </BoxCard>
            </Container>
        </Section>
    )
}

