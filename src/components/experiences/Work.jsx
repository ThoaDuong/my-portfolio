import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 22px;
    margin: 10px auto 3px auto;
`
const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    margin: 3px auto 10px auto;
`
const Company = styled.div`
    font-size: 16px;
    
`
const Time = styled.div`
    font-size: 13px;
    font-weight: 400;
    font-style: italic;
    
`
const Desc = styled.div`
    font-size: 13px;
    font-weight: 400;
`
const TitleDesc = styled.h4`
    margin: 10px auto 5px auto;
    font-size: 15px;

`
const ResList = styled.ul`
    margin: 0px;
`
const ResListItem = styled.li`
    font-size: 13px;
    font-weight: 400;
`

export const Work = ({ title, company, time, position, projectDes }) => {
    return (
        <React.Fragment>
            <Title> {title} </Title>
            <Company> [ {company} ] </Company>
            <Time> {time} </Time>
            <TitleDesc>Project Description</TitleDesc>
            <Desc>{projectDes.des}</Desc>
            {projectDes.res && 
            <div>
                <TitleDesc>Responsibilities</TitleDesc>
                <ResList dir={position === 'left' ? 'rtl' : 'ltr'}>
                    {projectDes.res.map((item, index) => 
                        <ResListItem key={index}> {item} </ResListItem>  
                    )}
                </ResList>
            </div>
            }
        </React.Fragment>
    )
}
