import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width: 96%;
    padding: 20px;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 0;

`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    cursor: pointer;
    @media only screen and (max-width: 640px) {
        display: none;
    }
`
const LogoIcon = styled.a`
    height: 25px;
    width: 35px;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const ListItem = styled.li``
const Link = styled.a`
    color: white;
    text-decoration: none;
    border-bottom: 1px solid white;
    padding-bottom: 3px;
    &:hover{
        border-color: var(--green);
        color: var(--green);
    }
`

export const Navbar = () => {
  return (
    <Section>
        <Container className='container'>
            <Links>
                {/* <Logo src="https://img.icons8.com/clouds/100/monitor.png" alt="my-computer" /> */}
                <LogoIcon href='#home'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill='white' d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                </LogoIcon>
                <List>
                    <ListItem>
                        <Link href='#home'>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#about'>About</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#projects'>Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#contact'>Contact</Link>
                    </ListItem>
                </List>
            </Links>
            <Icons>
                {/* <Icon src="./img/search.png" /> */}
                <a className='common-link' href='https://www.linkedin.com/in/thoa-duong-8a15161bb' target='_blank'>Let's Connect</a>
            </Icons>
        </Container>
    </Section>
  )
}
