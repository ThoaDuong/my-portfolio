import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    font-size: 20px;
    margin: 10px auto;
`
const Company = styled.div`
    font-size: 16px;
    
`
const Time = styled.div`
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    
`
const Desc = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
    white-space: pre-line;
    line-height: 1.25;
`

export const Work = ({ title, company, time, desc }) => {
    return (
        <React.Fragment>
           
            <Title> {title} </Title>
            <Company> {company} </Company>
            <Time> {time} </Time>
            <Desc> {desc} </Desc>
        </React.Fragment>
    )
}
