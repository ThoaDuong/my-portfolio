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
const Logo = styled.img`
    height: 60px;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const ListItem = styled.li``
const Link = styled.a`
    color: white;
    text-decoration: none;
`

export const Navbar = () => {
  return (
    <Section>
        <Container className='container'>
            <Links>
                <Logo src="https://img.icons8.com/clouds/100/monitor.png" alt="my-computer" />
                <List>
                    <ListItem>
                        <Link href='#home'>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#about'>About</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#contact'>Contact</Link>
                    </ListItem>
                </List>
            </Links>
            <Icons>
                {/* <Icon src="./img/search.png" /> */}
                <a className='pink-link-btn' href='#contact'>Hire Now</a>
            </Icons>
        </Container>
    </Section>
  )
}
