import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    position: fixed;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 99;
`
const Link = styled.a`
    border-radius: 50%;
    background-color: white;
    padding: 8px 7px 3px;
    border: 1px solid var(--green);
    &:hover{
        background-color: var(--green);
    }
`
const Img = styled.img`
    width: 40px;
    height: 35px;
`

export const ContactIcon = () => {
    return (
        <Section id='contactID'>
            <Link href='mailto:kimthoa2598@gmail.com' target='_blank'>
                <Img src="https://img.icons8.com/sf-black-filled/64/new-post.png" alt="new-post"/>
            </Link>
            <Link href='https://www.linkedin.com/in/thoa-duong-8a15161bb' target='_blank'>
                <Img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
            </Link>
            <Link href='https://github.com/ThoaDuong' target='_blank'>
                <Img src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
            </Link>
        </Section>
    )
}
