import React from "react";
import Team from "./Team.js";
import styled from "styled-components";
import lidark from "../assets/LinkedinDark.svg";
import lilight from "../assets/LinkedinLight.svg";
import ghdark from "../assets/githubDark.svg";
import ghlight from "../assets/githubLight.svg";
import { device } from "../devices.js";
import drdark from "../assets/DribbbleDark.svg";
import drlight from "../assets/DribbbleLight.svg";
import behance from "../assets/behance.svg";

const MainContainer = styled.div`
	margin-bottom: 130px;
	@media ${device.tablet} {
		width: 100%;
		min-height: 60vh;
		overflow-y: scroll;
		background: /* Shadow covers */ linear-gradient(
				white 30%,
				rgba(255, 255, 255, 0)
			),
			linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
			/* Shadows */
				radial-gradient(
					50% 0,
					farthest-side,
					rgba(0, 0, 0, 0.2),
					rgba(0, 0, 0, 0)
				),
			radial-gradient(
					50% 100%,
					farthest-side,
					rgba(0, 0, 0, 0.2),
					rgba(0, 0, 0, 0)
				)
				0 100%;
		background: /* Shadow covers */ linear-gradient(
				white 30%,
				rgba(255, 255, 255, 0)
			),
			linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
			/* Shadows */
				radial-gradient(
					farthest-side at 50% 0,
					rgba(0, 0, 0, 0.2),
					rgba(0, 0, 0, 0)
				),
			radial-gradient(
					farthest-side at 50% 100%,
					rgba(0, 0, 0, 0.2),
					rgba(0, 0, 0, 0)
				)
				0 100%;
		background-repeat: no-repeat;
		background-color: white;
		background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
		/* Opera doesn't support this in the shorthand */
		background-attachment: local, local, scroll, scroll;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	@media ${device.laptop} {
		padding: 0 100px 0 100px;
	}
`;
const Member = styled.div`
	flex-basis: 50%;
	padding: 10px;
	margin-bottom: 20px;
	@media ${device.mobileS} {
		line-height: 1.4em;
	}
	@media (min-width: 700px) {
		flex-basis: 33.33%;
		line-height: 1.2em;
	}
	@media ${device.laptop} {
		flex-basis: 25%;
		line-height: 1.3em;
	}
	@media ${device.laptopL} {
		flex-basis: 20%;
		// padding: 20px;
		line-height: 1.4em;
	}
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	@media (max-width: 300px) {
		width: 70px;
		height: 70px;
	}
`;
const Name = styled.div`
	font-size: 1.3rem;
	font-weight: 600;
	margin-top: 1vh;
`;

const Position = styled.div`
	background: -webkit-linear-gradient(
		0deg,
		#29c4d3 -2.03%,
		#6c88d3 52.97%,
		#1f44a6 106.11%
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
	margin-top: 1vh;
	font-size: 1rem;
	margin-bottom: 1vh;
`;

const LIicon = styled.a`
	padding-left: 30px;
	// margin-right: 20px;
	background-image: url(${lilight});
	background-repeat: no-repeat;
	:hover {
		cursor: pointer;
		background-image: url(${lidark});
		background-repeat: no-repeat;
		background-size: 25px 25px;
	}
	:active {
	}
`;

const GHicon = styled.a`
	padding-left: 30px;
	background-image: url(${ghlight});
	background-repeat: no-repeat;
	:hover {
		cursor: pointer;
		background-image: url(${ghdark});
		background-repeat: no-repeat;
	}
	:active {
	}
`;

const BehanceIcon = styled.a`
	padding-left: 30px;
	background-image: url(${behance});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 22px 22px;
	:hover {
		cursor: pointer;
	}
`;

const DRicon = styled.a`
	padding-left: 30px;
	background-image: url(${drlight});
	background-repeat: no-repeat;
	background-size: 22px 22px;
	:hover {
		cursor: pointer;
		background-image: url(${drdark});
		background-repeat: no-repeat;
	}
	:active {
	}
`;

const Card = (props: any) => {
	let img;
	const url =
		"https://www.trroofingsheets.co.uk/wp-content/uploads/2016/05/default-no-image-1.png";
	img = props.image === "" ? url : props.image;
	let Ghicon: any;

	if (props.ghlink === "") {
		Ghicon = () => {
			return "";
		};
	} else {
		Ghicon = () => {
			return <GHicon href={props.ghlink}></GHicon>;
		};
	}

	let Dricon: any;

	if (props.drlink === "") {
		Dricon = () => {
			return "";
		};
	} else {
		Dricon = () => {
			return <DRicon href={props.drlink}></DRicon>;
		};
	}

	return (
		<Member>
			<Image src={img} alt='Member'></Image>
			<Name>{props.name}</Name>
			<Position>{props.position}</Position>
			<Ghicon />
			{props.lilink && <LIicon href={props.lilink} />}
			<Dricon />
			{props.behance && <BehanceIcon href={props.behance} />}
		</Member>
	);
};

class Board extends React.Component {
	render() {
		// return(<Card />);
		const mc = Team.board;
		return (
			<MainContainer>
				<Container>
					{mc.map((name) => {
						return (
							<Card
								name={name.name}
								image={name.image}
								position={name.pos}
								ghlink={name.gh}
								lilink={name.li}
								key={name.name}
								drlink={name.dr}
							/>
						);
					})}
				</Container>
			</MainContainer>
		);
	}
}

export default Board;
