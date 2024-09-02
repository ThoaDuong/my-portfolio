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
                        position="left"
                        title="Front-end Developer | Technical Solutions Specialist"
                        company="TDCX | onsite Malaysia"
                        time="09/2022 - Current"
                        projectDes={{
                            des: "Delivered technical solutions for a Google project: Worked as a vendor, providing technical expertise and solutions for a specific Google project",
                            res: [
                                "Customized Front-End Solutions: Provided technical guidance and solutions. This included analyzing website code and helping them implement custom code snippets following Google's best practices",
                                "Collaborated with internal teams: Partnered with Google's internal teams to ensure successful implementation and integration of solutions"
                            ]
                        }}

                    />
                </div>

                <SpaceBlock/>

                <div>
                    <Line src="./img/line.png" />
                    <Work
                        position="left"
                        title="Fullstack Developer | Fresher"
                        company="ETOP | Vietnam"
                        time="07/2020 - 10/2020"
                        projectDes={{
                            des: "Developed a project management website for GitHub Issues",
                            res: [
                                "Front-End: Angular framework for a user-friendly and interactive interface",
                                "Back-End: NestJS for efficient server-side logic and API development",
                                "Database: PostgreSQL to ensure secure and scalable data storage",
                            ]
                        }}
                    />
                </div>
            </ContentLeft>
            <ContentRight>
                <FirstSpaceBlock/>
                <div>
                    <Line src="./img/line.png" />
                    <Work 
                        position="right"
                        title="Software Engineer"
                        company="TMA Solutions | Vietnam"
                        time="11/2020 - 09/2022"
                        projectDes={{
                            des: "Developed a web application for managing network devices. This application allows users to: manage network devices, analyze data, and export reports",
                            res: [
                                "Front-End Development: Designed a user-friendly interface for managing network devices, Created mockups based on user requirements to ensure a positive user experience and Implemented the user interface using appropriate front-end technologies",
                                "Maintenance and Optimization: Fixed bugs and maintained the website's functionality and Researched new libraries/frameworks to improve website performance"
                            ]
                        }}
                    />
                </div>

                <SpaceBlock/>

                <div>
                    <Line src="./img/line.png" />
                    <Work 
                        position="right"
                        title="Website Developer | Intern"
                        company="HVCG Software | Vietnam"
                        time="07/2019 - 09/2019"
                        projectDes={{
                            des: "Building a foundational understanding of website development through HTML5, CSS3, and JavaScript",
                        }}
                    />
                </div>
            </ContentRight>
        </Container>
    </Section>
  )
}
