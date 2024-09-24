import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    padding: 30px 20px;
    font-size: 14px;
    position: relative;
`
const Dot = styled.div`
    width: 20px;
    position: absolute;
    top: 32px;
    left: -22px;
`
const Line = styled.div`
    position: absolute;
    height: 65%;
    border-right: 1px solid white;
    top: 60px;
    left: -12px;
`
const Container = styled.section`
    /* padding: 20px;
    font-size: 14px; */
    /* border: 1px solid white; */
`
const Title = styled.h3`
    margin: 0 auto 3px;
`
const SubTitle = styled.div`
    color: #bebebe;
`
const TitleDesc = styled.h4`
    margin: 10px auto 3px;
`
const ListBox = styled.ul`
    margin: 0;
`


export const JobItem = ({ title, company, time, projectDes }) => {
    return (
        <Section>
            <Dot>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill='white' d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            </Dot>
            <Line></Line>

            <Container>
                {/* Position name */}
                <Title> {title} </Title>
                
                {/* Company & Datetime */}
                <SubTitle> {company} </SubTitle>
                <SubTitle> {time} </SubTitle>
                
                {/* Project description */}
                <TitleDesc>Project Description</TitleDesc>
                <span>{projectDes.des}</span>

                {/* Detail Responsibilities */}
                {projectDes.res && 
                <div>
                    <TitleDesc>Responsibilities</TitleDesc>
                    <ListBox>
                        {projectDes.res.map((item, index) => 
                            <li key={index}> {item} </li>  
                        )}
                    </ListBox>
                </div>
                }
            </Container>

            
        </Section>
    )
}
