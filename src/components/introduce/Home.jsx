import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const Section = styled.div`
	width: 100%;
    height: 100vh;
    scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	@media only screen and (max-width: 	1024px) {
		height: 200vh;
		scroll-snap-align: start;
    }
`
const Container = styled.div`
	height: 80vh;
	/* scroll-snap-align: center; */
	display: flex;
	justify-content:space-around;
	gap: 20px;
	@media only screen and (max-width: 	1024px) {
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		height: 100%;

    }
`
const Left = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 	1024px) {
		width: 90%;
		align-items: center;
		height: 80vh;
		scroll-snap-align: center;

    }
`
const Title = styled.h1`
	font-size: 60px;
	margin: 0;
	@media only screen and (max-width: 	640px) {
		font-size: 45px;
    }
`
const Text = styled.h3`
	font-size: 40px;
	margin: 0;
	@media only screen and (max-width: 	640px) {
		font-size: 30px;
    }
`
const TextContent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
const Line = styled.img`
	height: 5px;
`
const Subtitle = styled.div`
	color: #da4ea2;
`
const Desc = styled.div`
	font-size: 18px;
	color: lightgray;
	@media only screen and (max-width: 	640px) {
		font-size: 14px;
    }
`

const Right = styled.div`
	width: 40%;
	position: relative;
	@media only screen and (max-width: 	1024px) {
		width: 90%;
		align-items: center;
		height: 100vh;
		scroll-snap-align: center;

    }
`
const Img = styled.img`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	opacity: 0.8;

	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;
	@keyframes animate {
		to{
			transform: translateY(20px);
		}
	}
`

export const Home = () => {
	return (
		<Section id='home'>
			<Navbar/>
			<Container className='container'>
				<Left>
					<Title>
						I'm Thoa Duong
					</Title>
					<Text>a website developer</Text>
					<TextContent>
						<Line src="./img/line.png" />
						<Subtitle>What I Do</Subtitle>
					</TextContent>
					<Desc>
						with a passion for creating engaging and user-friendly web experiences.
						I specialize in crafting responsive, dynamic, and visually appealing websites. Let's build something amazing together!
					</Desc>
					<a className='pink-link-btn' href='#about'>Learn More</a>
				</Left>
				<Right>
					{/* 3d model */}		
					<Canvas camera={{fov:25, position:[10,10,10]}}>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={1} />
						<directionalLight position={[3,2,1]} />
						<Sphere args={[1,100,200]} scale={3}>
							<MeshDistortMaterial 
								color="#3c1a7c" 
								attach="material" 
								distort={0.5} 
								speed={2} 
							/>
						</Sphere>
					</Canvas>	
					{/* <Img src="./img/moon.png" /> */}
					<Img src="./img/avt-transparent.png" />
				</Right>
			</Container>
		</Section>
	)
}
