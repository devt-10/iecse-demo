import React from "react";
import styled from "styled-components";
import Board from "./Board";
import Mancomm from "./Mancomm";
import { device } from "../devices.js";
const Container = styled.section`
	@media ${device.laptop} {
	min-height: 100vh;
	}
	display: flex;
	align-content: flex-start;
	flex-direction: column;
	font: Catamaran;
	background: #ffffff;
	padding: 9vh 8vw 0;
	overflow: hidden;
	// margin-bottom:100px;
`;
const H1 = styled.div`
	font-size: 3rem;
	font-weight: 600;
`;

const Container2 = styled.div`
	width: 100%;
	// height:30vh;
	text-align: left;
	line-height: 35px;
	margin-top: 1vh;
	// margin-left: 2vw;
	margin-bottom: 6vh;
	font-size: 1.2rem;
`;

const Button = styled.div`
	//fortext
	${(props: any) =>
		props.theme.selected
			? `
      background: -webkit-linear-gradient(
       -45deg,
			rgba(41, 196, 211, 1) 0%,
			rgba(108, 136, 211, 1) 50%,
			#8D43F7 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: Gradient-Animation 5s infinite linear;
		@keyframes Gradient-Animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
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
	padding-left: 10px;
	@media ${device.mobileS} {
		padding-left: 20px;
	}
	@media ${device.tablet} {
		padding-left: 30px;
	}
	@media ${device.laptop} {
		padding-left: 40px;
	}
	letter-spacing: 1em;
	font-weight: 500;
	transition: font-weight;
	:hover {
		cursor: pointer;
		font-weight: 600;
	}
`;

const Container3 = styled.div`
	text-align: center;
	width: 100%;
`;

interface MyProps {}

interface MyState {
	first: boolean;
}

class OurTeam extends React.Component<MyProps, MyState> {
	constructor(props: any) {
		super(props);
		this.state = {
			first: true,
		};
	}

	render() {
		const { first } = this.state;
		return (
			<Container id='team'>
				<H1>Our Team</H1>
				<Container2>
					<Button
						theme={{ selected: first }}
						onClick={() => {
							this.setState({
								first: true,
							});
						}}
					>
						EXECUTIVE BOARD
					</Button>
					<Button
						theme={{ selected: !first }}
						onClick={() => {
							this.setState({
								first: false,
							});
						}}
					>
						MANAGING COMMITTEE
					</Button>
				</Container2>
				<Container3>
					{this.state.first ? <Board /> : <Mancomm />}
				</Container3>
			</Container>
		);
	}
}

export default OurTeam;
