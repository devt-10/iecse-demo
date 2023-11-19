import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { device } from "../devices.js";
import Code from "../assets/code.svg";
import Dev from "../assets/dev.svg";
import Hashtag from "../assets/hashtag.svg";
import ML from "../assets/ml.svg";
import Studios from "../assets/studios.svg";
import Domain from "./DomainData";

const Container = styled.section`
	display: flex;
	align-content: flex-start;
	flex-direction: column;
	font: Catamaran;
	background: #ffffff;
	padding: 0 5vw;
	@media ${device.mobileM} {
		padding: 0 8vw;
	}
	@media ${device.laptop} {
		min-height: 100vh;
	}
`;
const H1 = styled.div`
	font-size: 3rem;
	font-weight: 600;
	margin-top: 10vh;
	@media ${device.tablet} {
		margin-top: 12vh;
	}
	@media ${device.laptop} {
		margin-top: 12vh;
	}
`;

const Container2 = styled.div`
	width: 100%;
	text-align: left;
	line-height: 35px;
	margin-top: 1vh;
	margin-bottom: 6vh;
	font-size: 1.2rem;
`;

const Button = styled.div`
	//fortext
	background: -webkit-linear-gradient(
		-45deg,
		rgba(41, 196, 211, 1) 0%,
		rgba(108, 136, 211, 1) 50%,
		#8d43f7 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: Gradient-Animation 3s infinite linear;

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

	border-left: 3px solid transparent;
	-moz-border-image: -moz-linear-gradient(bottom, #3acfd5 0%, #3a4ed5 100%);
	-webkit-border-image: -webkit-linear-gradient(
		bottom,
		#3acfd5 0%,
		#3a4ed5 100%
	);
	border-image: linear-gradient(bottom, #3acfd5 0%, #3a4ed5 100%);
	border-image-slice: 1;

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
`;
const MainContainer = styled.div`
	@media ${device.laptop} {
		display: flex;
		flex-direction: row;
		height: 55%;
	}
`;
const ContainerD = styled.div`
	margin: 0 auto;
	width: 288px;
	height: 288px;
	@media ${device.mobileM} {
		width: 335px;
		height: 335px;
	}
	@media ${device.laptop} {
		padding-top: 5%;
	}

	.code {
		left: 14px;
		top: 15px;
		${(props) => {
			if (props.theme.index === 0) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.code1 {
		left: 6px;
		top: -9px;
		${(props) => {
			if (props.theme.index === 0) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.code2 {
		left: 9px;
		top: -3px;
		${(props) => {
			if (props.theme.index === 0) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.code3 {
		left: 36px;
		top: -13px;
		${(props) => {
			if (props.theme.index === 0) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.dev {
		left: 93px;
		top: -160px;
		${(props) => {
			if (props.theme.index === 2) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}

	.ml {
		left: 147px;
		top: -132px;
		${(props) => {
			if (props.theme.index === 1) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.ml1 {
		left: 220px;
		top: -225px;
		${(props) => {
			if (props.theme.index === 1) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.stud {
		left: 40px;
		top: -165px;
		${(props) => {
			if (props.theme.index === 3) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.std1 {
		left: 27px;
		top: -175px;
		${(props) => {
			if (props.theme.index === 3) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.std2 {
		left: 48px;
		top: -182px;
		${(props) => {
			if (props.theme.index === 3) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.std3 {
		left: 34px;
		top: -185px;
		${(props) => {
			if (props.theme.index === 3) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.hash {
		left: 184px;
		top: -378px;
		${(props) => {
			if (props.theme.index === 4) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.hash1 {
		left: 269px;
		top: -435px;
		${(props) => {
			if (props.theme.index === 4) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	.hash2 {
		display: none;
		left: 312px;
		top: -437px;
		${(props) => {
			if (props.theme.index === 4) {
				return `background: linear-gradient(215.18deg, #23C8D3 9.75%, #886ED2 116.5%);`;
			}
		}}
	}
	@media ${device.mobileM} {
		.dev {
			left: 100px;
			top: -165px;
		}
		.ml {
			left: 180px;
			top: -135px;
		}

		.ml1 {
			left: 270px;
		}
		.hash {
			left: 202px;
			top: -403px;
		}
		.hash1 {
			left: 292px;
		}
		.hash2 {
			display: block;
		}
	}
`;
const CircleVS = styled.div`
	display: block;
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background-color: #050505;
	position: relative;
`;
const CircleS = styled.div`
	display: block;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background-color: #050505;
	position: relative;
`;
const CircleM = styled.div`
	display: block;
	height: 19px;
	width: 19px;
	border-radius: 50%;
	background-color: #050505;
	position: relative;
`;
const CircleL = styled.div`
	display: block;
	height: 25px;
	width: 25px;
	border-radius: 50%;
	background-color: #050505;
	position: relative;
`;
const CircleVL = styled.div`
	display: block;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: #050505;
	position: relative;
`;
const MainCircle = styled.a`
	display: block;
	height: 80px;
	width: 80px;
	border-radius: 50%;
	padding: 18px;
	background-color: #050505;
	position: relative;
	margin: 0;
	:hover,
	:active {
		background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
		cursor: pointer;
	}
	@media ${device.mobileM} {
		height: 90px;
		width: 90px;
	}
	@media ${device.tablet} {
		padding: 15px;
	}
`;
const DescContainer = styled.div`
	border-top: 1px solid #a8a6a6;
	padding-top: 1vh;
	margin: 30px auto 50px;
	@media ${device.tablet} {
		margin-top: 0;
	}
	@media ${device.laptop} {
		border-top: none;
		border-left: 1px solid #a8a6a6;
		padding-left: 5vw;
		width: 30vw;
		margin-top: 3vh;
	}
`;
const Title = styled.div`
	font-size: 3rem;
	font-weight: 600;
	line-height: 1.1em;
	margin-bottom: 10px;
	margin-top: 4px;
	background: -webkit-linear-gradient(
		45deg,
		rgba(41, 196, 211, 1) 0%,
		rgba(108, 136, 211, 1) 50%,
		rgba(31, 68, 166, 1) 100%
	);
	background-size: 200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: Gradient-Animation 2s infinite linear;
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
`;
const Desc = styled.div`
	font-size: 1.3rem;
	font-weight: 200;
	color: black;
`;

interface DomainState {
	index: number;
}

interface DomainProps {}
class Domains extends React.Component<DomainProps, DomainState> {
	constructor(props: any) {
		super(props);
		this.state = {
			index: 0,
		};
	}
	render() {
		return (
			<Container id='whatwedo'>
				<H1>What We Do</H1>
				<Container2>
					<Button>OUR DOMAINS</Button>
				</Container2>
				<MainContainer>
					<ThemeProvider theme={this.state}>
						<ContainerD>
							<MainCircle
								className='code'
								onClick={() => {
									this.setState({
										index: 0,
									});
								}}
							>
								<img src={Code} alt='code' />
							</MainCircle>
							<CircleVS className='code1' />
							<CircleM className='code2' />
							<CircleS className='code3' />

							<MainCircle
								className='ml'
								onClick={() => {
									this.setState({
										index: 1,
									});
								}}
							>
								<img src={ML} alt='ml' />
							</MainCircle>
							<CircleM className='ml1' />
							<MainCircle
								className='dev'
								onClick={() => {
									this.setState({
										index: 2,
									});
								}}
							>
								<img src={Dev} alt='dev' />
							</MainCircle>
							<MainCircle
								className='stud'
								onClick={() => {
									this.setState({
										index: 3,
									});
								}}
							>
								<img src={Studios} alt='studios' />
							</MainCircle>
							<CircleL className='std1' />
							<CircleVL className='std2' />
							<CircleM className='std3' />
							<MainCircle
								className='hash'
								onClick={() => {
									this.setState({
										index: 4,
									});
								}}
							>
								<img src={Hashtag} alt='hashtag' />
							</MainCircle>
							<CircleL className='hash1' />
							<CircleM className='hash2' />
						</ContainerD>
					</ThemeProvider>
					<DescContainer>
						<Title>{Domain[this.state.index].name}</Title>
						<Desc>{Domain[this.state.index].desc}</Desc>
					</DescContainer>
				</MainContainer>
			</Container>
		);
	}
}

export default Domains;
