import React from "react";
import styled from "styled-components";

const Container = styled.section`
	display: flex;
	min-height: 100vh;
	align-content: flex-start;
	flex-direction: column;
	font: Catamaran;
	background: #252525;
	padding: 9vh 8vw 1.5rem;
	@media (max-width: 768px) {
		height: auto;
	}
	p {
		@media (max-width: 750px) {
			font-size: 1.25rem;
			letter-spacing: 1;
		}
	}
`;
const H1 = styled.div`
	font-size: 3rem;
	font-weight: 600;
	color: white;
`;

const Container2 = styled.div`
	width: 100%;
	text-align: left;
	line-height: 35px;
	margin-top: 1vh;
	margin-left: 2vw;
	margin-bottom: 3vh;
	font-size: 1.2rem;
`;

const Video = styled.video`
	@media (min-width: 768px) {
		height: 40vh;
		width: 71vw;
		margin: 2rem auto;
	}
`;

const Button = styled.div`
	width: fit-content;
	//fortext
	${(props: any) =>
		props.theme.selected
			? `
      background: -webkit-linear-gradient(
        0deg, rgba(87,217,247,1) 0%, rgba(141,67,247,1) 30%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
			: "color: #c4c4c4;"}
	//forleftborder
	${(props) =>
		props.theme.selected
			? `border-left: 3px solid transparent;
  -moz-border-image: -moz-linear-gradient(bottom, #3acfd5 0%, #3a4ed5 100%);
  -webkit-border-image: -webkit-linear-gradient(bottom, #3acfd5 0%, #3a4ed5 100%);
  border-image: linear-gradient(bottom, #3acfd5 0%, #3a4ed5 100%);
  border-image-slice: 1;`
			: "border-left: 3px solid #c4c4c4;"}
	//commonprops
	padding-left: 40px;
	letter-spacing: 1em;
	font-weight: 500;
	:hover {
		cursor: pointer;
	}
`;

const Container3 = styled.div`
	//text-align
	width: 100%;
	font-weight: 300;
	margin-bottom: 5vh;
`;

const Vision = () => {
	return (
		<div style={{ color: "white", fontStyle: "Medium", fontSize: "20px" }}>
			<p>
				IECSE Manipal aims at spreading technical knowledge among
				students. It strives to keep its members updated with the latest
				happenings in the world of computers, providing students with
				everything from information about gadgets to knowledge of
				various programming languages, software &amp; other latest
				technological developments.
			</p>
		</div>
	);
};
const Mission = () => {
	return (
		<div style={{ color: "white", fontStyle: "Medium", fontSize: "20px" }}>
			<p>
				IECSE aims at helping the students of MIT obtain technical
				knowledge, gain exposure to the latest technology, and uplift
				the overall computer science culture by delivering high quality
				events like workshops and competitions in various departments
				ranging from web developement, graphic design and general
				programming.
			</p>
		</div>
	);
};
interface MyProps {}

interface MyState {
	first: boolean;
}

class About extends React.Component<MyProps, MyState> {
	constructor(props: any) {
		super(props);
		this.state = {
			first: true,
		};
	}

	render() {
		const { first } = this.state;
		return (
			<Container id='about'>
				<H1>About Us</H1>
				<Container2>
					<Button
						theme={{ selected: first }}
						onClick={() => {
							this.setState({
								first: true,
							});
						}}
					>
						OUR VISION
					</Button>
					<Button
						theme={{ selected: !first }}
						onClick={() => {
							this.setState({
								first: false,
							});
						}}
					>
						OUR MISSION
					</Button>
				</Container2>
				<Container3>
					{this.state.first ? <Vision /> : <Mission />}
				</Container3>
				<Video
					className='about-vid'
					loop
					autoPlay
					muted
					// controls
					// controlsList='nodownload'
				>
					<source
						src={require("../assets/iecsevideo_final.mp4").default}
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</Video>
			</Container>
		);
	}
}

export default About;
