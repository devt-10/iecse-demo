import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../assets/logo.svg";
import { ReactComponent as ScrollImg } from "../assets/scrollCircle.svg";
import GradText from "./GradientText";
import { size } from "../devices";
import ScrollArrow from "../assets/scrollArrow.svg";
import Typed from "react-typed";
import { HashLink as HashLinked } from "react-router-hash-link";
import LogoComp from "./Logo";

const Container = styled.div`
	padding-top: 20vh;
	min-height: 100vh;
	position: relative;

	.bottom{


		transform: translateY(-55px);

		@media (max-width: ${size.tablet}) {
		transform: translateY(-65px);
	}

	@media (max-width: ${size.mobileL}) {
		transform: translateY(-105px);
	}
	}


	@media (max-width: ${size.laptop}) {
		/* height: auto; */
		margin-top: 15vh;
		margin-bottom: 30px;
	}
	@media (max-width: ${size.tablet}) {
		margin-top: 0vh;
		padding-top: 15vh;
	}
	/* @media (max-width: ${size.laptop}) {
		height: 100%;
	} */

	.typed-cursor{
		margin-left: -.775rem;
	}
`;
const LogoDiv = styled.div`
	/* margin: 0vh 0 7vh; */
	transform: translateY(-35px);
	text-align: center;
	@media (max-width: ${size.laptop}) {
		margin: 0vh 0 7vh;
	}
	@media (max-width: ${size.tablet}) {
		margin: 0vh 0 3vh;
	}
	animation: birth 1000ms ease-in-out;
	@keyframes birth {
		0% {
			transform: scale(1) rotate(-360deg) ;
		}
		50% {
			transform: scale(0.6) rotate(-180deg);
		}
		100% {
			transform: scale(1) rotate(0) translateY(-35px);
		}
	}
`;
const Logo = styled(LogoImg)`
	height: 283px;
	width: 251px;
	@media (max-width: ${size.laptop}) {
		height: 200px;
		width: 180px;
	}
	@media (max-width: ${size.mobileL}) {
		height: 170px;
	}
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 5rem;
	z-index:9999999999999999999;

	@media (max-width: ${size.laptop}) {
		flex-direction: column;
		height: auto;
	}
	span {
		color: #252525;
		text-align: center;
		font-size: 64px;
		margin: 0 10px;
		@media (max-width: ${size.laptop}) {
			font-size: 48px;
			height: 3.5rem;
		}
		@media (max-width: ${size.tablet}) {
			font-size: 38px;
		}
		font-weight: 400;
		.bold {
			font-weight: 600;
		}
	}
	animation: birthherotext 1000ms ease-in-out;
	@keyframes birthherotext {
		0% {
			/* transform: translateY(100%); */
			opacity: 0;
		}
		100% {
			/* transform: translateY(0%); */
			opacity: 1;
		}
	}
`;

const ScrollContainer = styled.div`
	height: 180px;
	width: 180px;
	margin: 0 auto;
	/* position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 30%); */
	@media (max-width: ${size.laptop}) {
	/* transform: translate(-50%, 10%); */
	}
	@media (max-width: ${size.tablet}) {
	/* transform: translate(-50%, -15%); */
	}
	@media (max-width: ${size.mobileL}) {
	transform: translateY(-27.5%);
	}
	@media (max-width: ${size.tablet}) {
		margin: 3vh auto 0;
	}
	background: url(${ScrollArrow});
	background-repeat: no-repeat;
	background-position: center;
	animation: birthherotext 1000ms ease-in-out;
`;

const Scroll = styled(ScrollImg)`
	height: 180px;
	width: 180px;
	@media (prefers-reduced-motion: no-preference) {
		animation: App-logo-spin infinite 20s linear;
	}
	@keyframes App-logo-spin {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
`;
const GradTextContainer = styled.div`
	text-align: center;
	font-size: 48px;
	font-weight: 500;
	animation: birthherotext 1000ms ease-in-out;
	@media (max-width: ${size.laptop}) {
		font-size: 32px;
		margin-top: 1rem;
	}
	@media (max-width: ${size.tablet}) {
		font-size: 26px;
	}
`;

class Hero extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<LogoDiv>
						{/* <Logo /> */}
						<LogoComp/>
					</LogoDiv>
					<div className="bottom">
					<TextContainer>
						<Typed
							strings={[
								"We <span class='bold'>Code.</span>",
								"We <span class='bold'>Create.</span>",
								"We <span class='bold'>Innovate.</span>",
								"We are ",
								"We are <span class='bold'>IECSE.</span>",
							]}
							typeSpeed={50}
							backSpeed={40}
							loop
						></Typed>
					</TextContainer>
					<GradTextContainer>
						<GradText>Come be a part of us.</GradText>
					</GradTextContainer>
					</div>
					<HashLinked smooth={true} to="/#about">
					<ScrollContainer>
						<Scroll />
					</ScrollContainer>
					</HashLinked>
				</Container>
			</div>
		);
	}
}

export default Hero;
