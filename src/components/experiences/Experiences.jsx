import React from 'react'
import styled from 'styled-components'
import { Work } from './Work'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    @media only screen and (max-width: 	1024px) {
        height: 200vh;
        scroll-snap-align: start;
    }
`
const Title = styled.h3`
    font-size: 24px;
`
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 	1024px) {
		flex-wrap: wrap;
        height: 200vh;
    }
`
const Line = styled.img`
	height: 3px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 12px;
    @media only screen and (max-width: 	1024px) {
		display: none;
    }
`
const ContentLeft = styled.div`
    width: 40%;
    align-items: center;
    text-align: right;
    padding-right: 30px;
    @media only screen and (max-width: 	1024px) {
		width: 100%;
        text-align: left;
        padding-left: 30px;
        border: none;
        scroll-snap-align: center;
    }
`
const ContentRight = styled.div`
    width: 40%;
    align-items: center;
    border-left: 1px solid white;
    text-align: left;
    padding-left: 30px;
    @media only screen and (max-width: 	1024px) {
		width: 100%;
        border: none;
        scroll-snap-align: center;
    }
`
const SpaceBlock = styled.div`
    height: 50px;
`
const FirstSpaceBlock = styled.div`
    height: 100px;
    @media only screen and (max-width: 	1024px) {
		height: 0;

    }
`

export const Experiences = () => {
  return (
    <Section id="experiences">
        <Title>Work History</Title>
        <Container className='container'>
            <ContentLeft>
                <div style={{ marginTop: "-50px" }}>
                    <Line src="./img/line.png" />
                    <Work
                        title="Technical Solutions | Front-end Developer"
                        company="TDCX Malaysia"
                        time="08/2022 - Current (1 year 8 months)"
                        desc="Description:
                        To assist sales teams in the region with lead deployment, tag implementation, integration enablement, and customer troubleshooting for online ad campaigns.
                        Effectively consult or educate customers on advanced fixes (Eliminate render-blocking JavaScript and CSS to avoid page delays and redirects.)"
                    />
                </div>

                <SpaceBlock/>

                <div>
                    <Line src="./img/line.png" />
                    <Work
                        title="Fullstack Developer | Fresher"
                        company="ETOPVN"
                        time="05/2020 - 08/2020 (3 months)"
                        desc="Building a project management website for GitHub Issues, using Angular for the Front-end and Nest JS with PostgreSQL for the Back-end"
                    />
                </div>
            </ContentLeft>
            <ContentRight>
                <FirstSpaceBlock/>
                <div>
                    <Line src="./img/line.png" />
                    <Work 
                        title="Software Engineer | Front-end Developer"
                        company="TMA Solutions"
                        time="07/2020 - 07/2022 (2 years)"
                        desc="Description: Build a website to manage, analyze, export reports and configure network devices.
                            Responsibilities:
                            Design the user interface, create a mockup based on the requirements, 
                            and implement the solution accordingly.
                            Fix bugs and maintain the website
                            Research new library/framework to improve performance"
                    />
                </div>

                <SpaceBlock/>

                <div>
                    <Line src="./img/line.png" />
                    <Work 
                        title="Website Developer | Intern"
                        company="HVCG Software"
                        time="06/2019 - 08/2019 (2 months)"
                        desc="Building a foundational understanding of website development through HTML, CSS, and JavaScript"
                    />
                </div>
            </ContentRight>
        </Container>
    </Section>
  )
}
