import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding: 20px;
    background: url('./img/project_bg.png') no-repeat;
    background-size: cover;
`
const Card = styled.div`
    border: 1px solid white;
    padding: 20px;
    background: rgba(154, 66, 206, 0.3);
    transition: transform 0.5s;
    &:hover{
        transform: scale(1.1);
    }
    
`
const Title = styled.h3`
    font-size: 18px;
    margin: 0;
`
const Desc = styled.div`
    margin: 10px auto;
	font-size: 15px;
    @media only screen and (max-width: 	1024px) {
		font-size: 14px;
    }
`
const LinkContext = styled.div`
    display: flex;
    gap: 10px;
    justify-content: end;
`
const List = styled.ul``
const ListItem = styled.li`
    font-style: italic;
    font-size: 14px;
    @media only screen and (max-width: 	1024px) {
		font-size: 12px;
    }
`
const Link = styled.a`
    /* list-style: none; */
    text-decoration: none;
    border-bottom: 1px solid #0aca44;
    font-weight: bold;
    padding-bottom: 2px;
    color: #0aca44;
    :hover{
        color: white;
        border-bottom: 1px solid white;
    }
`
export const ProjectCard = ({ name, desc, mainFunction, link }) => {
    return (
        <Container>
            <Card>
                <Title>{name}</Title>
                <Desc>
                    {desc}
                    <List>
                        {mainFunction && mainFunction.map((item, index) => 
                            <ListItem key={index}> {item} </ListItem>
                        )}
                    </List>
                    

                </Desc>
                <LinkContext>
                    <Link target="_blank" href={link.live ? link.live : '#'}>Live</Link>
                    <Link target="_blank" href={link.gitFE ? link.gitFE : '#'}>Github FE</Link>
                    <Link target="_blank" href={link.gitBE ? link.gitBE : '#'}>Github BE</Link>
                </LinkContext>
            </Card>
        </Container>
    )
}
