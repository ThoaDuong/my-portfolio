import React from 'react'
import styled from 'styled-components'
import { SkillItem, SkillItemRectangle } from './SkillItem'

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 	1024px) {
        height: fit-content;
        scroll-snap-align: start;
        justify-content: flex-start;
        /* margin: 100px auto; */
    }
`
const Title = styled.h2`
    text-transform: uppercase;
    @media only screen and (max-width: 	1024px) {
        margin-top: 80px;
    }
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 80%;
    @media only screen and (max-width: 	1024px) {
        width: 95%;
    }
    
`
const Box = styled.div`
`


export const SkillTemplate = () => {
    return (
        <Section id='skills'>
            <Title>My Skills</Title>
            <Container>   
                {/* <SkillItem
                    title='html5'
                    img='https://img.icons8.com/color/48/html-5--v1.png'
                />
                <SkillItem
                    title='css3'
                    img='https://img.icons8.com/color/48/css3.png'
                /> */}
                <SkillItemRectangle
                    title='html5 & css3'
                    img='./img/skills/html5-css3.png'
                />
                <SkillItem
                    title='javascript'
                    img='https://img.icons8.com/color/48/javascript--v1.png'
                />
                <SkillItem
                    title='typescript'
                    img='https://img.icons8.com/fluency/48/typescript--v1.png'
                />                
                <SkillItem
                    title='nodejs'
                    img='https://img.icons8.com/fluency/48/node-js.png'
                />
                <SkillItem
                    title='vue'
                    img='https://img.icons8.com/fluency/48/vuejs.png'
                />
                <SkillItemRectangle
                    title='vuex & pinia'
                    img='./img/skills/vuex&pinia.png'
                />
                <SkillItem
                    title='react js'
                    img='https://img.icons8.com/officel/80/react.png'
                />
                <SkillItem
                    title='redux & rtk'
                    img='https://img.icons8.com/color/48/redux.png'
                />
                <SkillItem
                    title='angular'
                    img='https://img.icons8.com/fluency/48/angularjs.png'
                />
                
                <SkillItem
                    title='mongodb'
                    img='https://img.icons8.com/color/48/mongodb.png'
                />
                <SkillItem
                    title='tailwindcss'
                    img='https://img.icons8.com/color/48/tailwindcss.png'
                />
                <SkillItem
                    title='bootstrap'
                    img='https://img.icons8.com/color/48/bootstrap--v1.png'
                />
                <SkillItem
                    title='material UI'
                    img='./img/skills/material.png'
                />
                <SkillItemRectangle 
                    title='sass, scss & less'
                    img='./img/skills/sass&less.jpg'
                />
                <SkillItem
                    title='git & github'
                    img='https://img.icons8.com/color/48/git.png'
                />
                {/* <SkillItem
                    title='github'
                    img='https://img.icons8.com/ios-filled/50/github.png'
                /> */}
                <SkillItemRectangle
                    title='jira & confluence'
                    img='./img/skills/jira.png'
                />
            </Container>
        </Section>
    )
}
