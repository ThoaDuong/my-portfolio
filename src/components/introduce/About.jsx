import React from 'react'
import styled from 'styled-components'
import { CubeCanvas } from '../threejs/CubeCanvas'



const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
	display: flex;
    justify-content: center;
`
const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content:space-around;
	@media only screen and (max-width: 	1024px) {
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		height: 100%;

    }
`
const Left = styled.div`
	width: 40%;
	@media only screen and (max-width: 	1024px) {
		display: none;

    }
`

const Right = styled.div`
	width: 40%;

    display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 	1024px) {
		width: 100%;
		align-items: center;
		padding: 20px;
    }
`
const Title = styled.h1`
	font-size: 35px;
	margin: 0;
`
const TextContent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	@media only screen and (max-width: 	1024px) {
		justify-content: center;
    }
`
const Line = styled.img`
	height: 5px;
`
const Desc = styled.div`
	font-size: 18px;
	color: lightgray;
	@media only screen and (max-width: 	640px) {
		font-size: 14px;
    }
`
const STitle = styled.h4`
	font-size: 24px;
	/* margin: 20px auto; */
	margin-bottom: 10px;
`
const Skill = styled.div`
	display: flex;
	justify-content: space-between;
`
const SLeft = styled.div`
	width: 50%;
`
const SRight = styled.div`
	width: 50%;
`
const SCard = styled.div`
`
// const skillData = []

export const About = () => {
	return (
		<Section id='about'>
			<Container className='container'>
				<Left>
                    {/* 3d model */}		
					<CubeCanvas/>			
				</Left>
				<Right>
                    <Title>
						About me
					</Title>
					<TextContent>
						<Line src="./img/line.png" />
						<div className='color-green'>Who I Am</div>
					</TextContent>
					<Desc>
						<div>
							Motivated Web Developer with 3+ Years of Experience. Highly skilled web developer with expertise in both MERN and MEVN stacks. 
							Possesses a proven track record of success in building dynamic web applications across diverse industries. 
							Proven ability to thrive in both local Vietnamese and international work environments (onsite experience in Malaysia). 
							Eager learner with a strong desire to continuously adapt and develop new skill-sets to meet evolving project requirements.
						</div>
						<div style={{ display: 'none' }}>
							<STitle>My Skills</STitle>
							<Skill>
								<SLeft>
									<SCard>ReactJS</SCard>
									<SCard>React Hook</SCard>
									<SCard>Redux / RTK</SCard>
									<SCard>VueJS</SCard>
									<SCard>VueX / Pinia</SCard>
									<SCard>Bootstrap 4</SCard>
									<SCard>Material UI</SCard>
								</SLeft>
								<SRight>
									<SCard>TailwindCSS</SCard>
									<SCard>SASS / SCSS / LESS</SCard>
									<SCard>Javascript</SCard>
									<SCard>NodeJS / ExpressJS</SCard>
									<SCard>MongoDB / Mongoose</SCard>
									<SCard>Git / Github / Gitlab</SCard>
									<SCard>Jira / Confluence</SCard>
								</SRight>
								
							</Skill>
						</div>
					</Desc>
					<a className='common-link' href='#skills'>See my skills</a>
				</Right>
			</Container>
		</Section>
	)
}
