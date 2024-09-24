import React from 'react'
import styled from 'styled-components'
import { JobItem } from './JobItem'

const Section = styled.div`
    height: 160vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
	align-items: center;
    @media only screen and (max-width: 	1024px) {
        height: 260vh;
    }
`
const Title = styled.h2`
    text-transform: uppercase;
    margin: 100px auto 0px;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
const Line = styled.div`
    width: 10%;
`
const Ex = styled.div`
    width: 65%;
    @media only screen and (max-width: 	1024px) {
        width: 80%;
    }
`

export const ExperienceTemplate = () => {
    return (
        <Section>
            <Title>My Experiences</Title>

            <Container>
                <Line></Line>

                <Ex>
                    <JobItem 
                        title="Front-end Developer | Technical Solutions Specialist"
                        company="TDCX | Onsite Malaysia"
                        time="09/2022 - Current"
                        projectDes={{
                            des: "Delivered technical solutions for a Google project: Worked as a vendor, providing technical expertise and solutions for a specific Google project",
                            res: [
                                "Customized Front-End Solutions: Provided technical guidance and solutions. This included analyzing website code and helping them implement custom code snippets following Google's best practices",
                                "Collaborated with internal teams: Partnered with Google's internal teams to ensure successful implementation and integration of solutions"
                            ]
                        }}
                    />

                    <JobItem 
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

                    <JobItem
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

                    <JobItem
                        title="Website Developer | Intern"
                        company="HVCG Software | Vietnam"
                        time="07/2019 - 09/2019"
                        projectDes={{
                            des: "Building a foundational understanding of website development through HTML5, CSS3, and JavaScript",
                        }}
                    />

                    <JobItem
                        title="University of Information Technology, Vietnam National University"
                        company="Information System"
                        time="06/2016 - 05/2022"
                        projectDes={{
                            des: "Accomplished Software Engineer with a strong foundation in programming and data analytics. Graduated from UIT with a Bachelor's degree in Engineering.",
                        }}
                    />
                </Ex>
            </Container>
        </Section>
    )
}
