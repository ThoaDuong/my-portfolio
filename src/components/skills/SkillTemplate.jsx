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
                    img='https://www.webstudiotraining.co.uk/images/html5-css3.png'
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
                    img='https://miro.medium.com/v2/resize:fit:999/1*wumM818TmrkBDMCqXOfhww.png'
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
                    img='https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/6aecc665-9f30-4dc7-bacc-880d8e66c7bb.png'
                />
                <SkillItemRectangle 
                    title='sass, scss & less'
                    img='https://media.licdn.com/dms/image/C4E12AQGybIFKabrxEw/article-cover_image-shrink_600_2000/0/1520066771050?e=2147483647&v=beta&t=nZAvjQxDJQYn46XXjtrjT5KclahiRBfk3uQGdCvaO1k'
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
                    img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkumGIlSR_3-c_lNw-6OFo7mSIDRou8N0rQ&s'
                />
            </Container>
        </Section>
    )
}
