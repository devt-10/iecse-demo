import React from "react";
import styled from "styled-components";
import NextSvg from "../assets/next.svg";
import PrevSvg from "../assets/prev.svg";
import Images from "./Images";
import { size } from "../devices";
const Container = styled.div`
	min-height: 100vh;
	background: #252525;
	padding: 80px 0vw 0;
	@media (max-width: ${size.tablet}) {
		height: auto;
		/* padding-bottom: 10vw; */
		padding-top: 8vw;
	}
`;
const Title = styled.div`
	font-size: 3rem;
	font-weight: 600;
	color: #ffffff;
	margin: 0 8vw;
`;

const InnerContainer = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	@media (max-width: ${size.tablet}) {
		flex-direction: column;
		padding: 0;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	animation: fade 5s infinite linear;
	@keyframes fade {
		0%,
		100% {
			opacity: 0;
		}
		5% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		95% {
			opacity: 0;
		}
	}
	@media (max-width: ${size.tablet}) {
		margin-bottom: 3rem;
	}
`;

const SmallContent = styled.div`
	font-size: 2rem;
	text-transform: uppercase;
	color: #c4c4c4c4;
	@media (max-width: ${size.laptopL}) {
		font-size: 1.6rem;
	}
	@media (max-width: ${size.laptop}) {
		font-size: 1.5rem;
	}
	@media (max-width: 830px) {
		font-size: 1rem;
	}
	@media (max-width: ${size.tablet}) {
		font-size: 2rem;
	}
	@media (max-width: ${size.mobileL}) {
		font-size: 2rem;
	}
	@media (max-width: ${size.mobileM}) {
		font-size: 1.4rem;
	}
`;

const LargeContent = styled.div`
	font-size: 12em;
	line-height: 88%;
	background: -webkit-linear-gradient(
		-45deg,
		rgba(41, 196, 211, 1) 0%,
		rgba(108, 136, 211, 1) 50%,
		rgba(31, 68, 166, 1) 100%
	);
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
	@media (max-width: ${size.laptopL}) {
		font-size: 9rem;
	}
	@media (max-width: ${size.laptop}) {
		font-size: 8rem;
	}
	@media (max-width: 830px) {
		font-size: 6rem;
	}
	@media (max-width: ${size.tablet}) {
		font-size: 8rem;
	}
	@media (max-width: ${size.mobileL}) {
		font-size: 8rem;
	}
	@media (max-width: ${size.mobileM}) {
		font-size: 8rem;
	}
`;

const PhotoContainer = styled.div`
	width: 50vw;
	height: 60vh;
	background: black;
	margin: 0 2rem 0 0rem;
	position: relative;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: ${size.tablet}) {
		margin: 0;
		width: 100vw;
		height: 60vh;
	}
`;

const ScrollLoc = styled.div`
	width: 2px;
	height: 40vh;
	background: #c4c4c4;
	justify-self: flex-start;
	position: relative;
	margin: 0 0rem 0 4vw;
	@media (max-width: ${size.tablet}) {
		height: 2px;
		width: 82vw;
		margin: 2rem 0 3rem;
	}
`;

const Pointer = styled.div`
	width: 2px;
	background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
	animation: ani 20s infinite linear;
	@keyframes ani {
		0% {
			height: 0;
		}
		50% {
			height: 40vh;
		}
		100% {
			height: 0;
		}
	}
	@media (max-width: ${size.tablet}) {
		height: 2px;
		animation: wani 20s infinite linear;
		@keyframes wani {
			0% {
				width: 0;
			}
			50% {
				width: 82vw;
			}
			100% {
				width: 0;
			}
		}
	}
`;

const Next = styled.img`
	position: absolute;
	width: 40px;
	height: 40px;
	right: 5px;
	/* top:50%; */
	/* margin-right: 5px; */
	:hover {
		cursor: pointer;
	}
	:active {
		transform: scale(0.9);
	}
`;

const Prev = styled.img`
	position: absolute;
	width: 40px;
	height: 40px;
	left: 5px;
	/* top:50%; */
	z-index: 100;
	/* margin-left: 5px; */
	:hover {
		cursor: pointer;
		/* transform: scale(1.1); */
	}
	:active {
		transform: scale(0.9);
	}
`;

const Image = styled.img`
	max-height: 60vh;
	max-width: 50vw;
	@media (max-width: ${size.tablet}) {
		max-width: 100vw;
		max-height: auto;
	}
`;

const SmallA = ["founded", "over", "more than", "over"];

const Large = [13, 20, 150, 10000];

const SmallB = [
	"years ago",
	"different workshops",
	"events conducted",
	"attendees",
];
var myVar: any;
class Journey extends React.Component<{}, { cur: any; photo: any }> {
	constructor(props: any) {
		super(props);
		this.state = {
			cur: 0,
			photo: 0,
		};
		this.changeImageNext = this.changeImageNext.bind(this);
		this.changeImagePrev = this.changeImagePrev.bind(this);
		this.chooseImage = this.chooseImage.bind(this);
	}
	SelectA = () => {
		let a = this.state.cur;
		return SmallA[a];
	};
	SelectB = () => {
		return Large[this.state.cur];
	};
	SelectC = () => {
		return SmallB[this.state.cur];
	};
	getNum = () => {
		let a = this.state.cur;
		a = a + 1;
		if (a > 3) {
			a = 0;
		}
		this.setState({ cur: a });
	};
	componentDidMount() {
		myVar = setInterval(() => {
			this.getNum();
		}, 5000);
	}
	componentWillUnmount() {
		clearInterval(myVar);
	}
	changeImageNext() {
		let a = this.state.photo;
		a = a + 1;
		if (a >= Images.length) {
			a = 0;
		}
		this.setState({ photo: a });
	}
	changeImagePrev() {
		let a = this.state.photo;
		a = a - 1;
		if (a < 0) {
			a = Images.length - 1;
		}
		this.setState({ photo: a });
	}
	chooseImage() {
		return Images[this.state.photo];
	}
	render() {
		const AA = this.SelectA();
		const BB = this.SelectB();
		const CC = this.SelectC();
		return (
			<div>
				<Container>
					<Title>Our Journey</Title>
					<InnerContainer>
						<ScrollLoc>
							<Pointer />
						</ScrollLoc>
						<TextContainer>
							<SmallContent>{AA}</SmallContent>
							<LargeContent>{BB}</LargeContent>
							<SmallContent>{CC}</SmallContent>
						</TextContainer>
						<PhotoContainer>
							<Prev
								src={PrevSvg}
								onClick={this.changeImagePrev}
							/>
							<Image src={this.chooseImage()}></Image>
							<Next
								src={NextSvg}
								onClick={this.changeImageNext}
							/>
						</PhotoContainer>
					</InnerContainer>
				</Container>
			</div>
		);
	}
}

export default Journey;
