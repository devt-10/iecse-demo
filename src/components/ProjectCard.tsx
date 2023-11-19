import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ReactComponent as LinkSvg } from "../assets/LinkGrad.svg";
import Text from "./GradientText";
import PopUp from "./PopUp";
import { size } from "../devices";
import { projects, projects2 } from "../data.js";
import NextSvg from "../assets/next.svg";
import PrevSvg from "../assets/prev.svg";
import aetherwebL from "../assets/projects/aetherweb2.png";
import aetherwebM from "../assets/projects/aetherweb1.png";
import aetherL from "../assets/projects/aether2.png";
import aetherM from "../assets/projects/aether1.png";
import ageofcodersL from "../assets/projects/ageofcoders2.png";
import ageofcodersM from "../assets/projects/ageofcoders1.png";
import hawkeyeL from "../assets/projects/hawkeye2.png";
import hawkeyeM from "../assets/projects/hawkeye1.png";
import hotstreaksL from "../assets/projects/hotstreaks2.png";
import hotstreaksM from "../assets/projects/hotstreaks1.png";
import codeportalM from "../assets/projects/codeportal1.png";
import codeportalL from "../assets/projects/codeportal2.png";

const ProjectCardContainer = styled.div`
	@media (max-width: ${size.tablet}) {
		margin: 0 0rem;
		padding: 0;
	}
`;
const Link = styled(LinkSvg)`
	width: 26px;
	height: 26px;
	margin-bottom: 5px;
`;

const TitleHeader = styled.div`
	display: flex;
	margin: 3vh 0 0.5rem;
	align-items: center;
	justify-content: baseline;
	@media (max-width: ${size.tablet}) {
		margin-left: 2rem;
	}
`;
const A = styled.a`
	/* display: block; */
`;

const TitleText = styled.div`
	font-size: 40px;
	font-weight: 600;
	margin-left: 7px;
	@media (max-width: ${size.tablet}) {
		font-size: 37px;
	}
	@media (max-width: ${size.mobileL}) {
		font-size: 34px;
	}
	@media (max-width: ${size.mobileM}) {
		font-size: 30px;
	}
	@media (max-width: ${size.mobileS}) {
		font-size: 28px;
	}
`;
const MockUpContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: baseline;
	position: relative;
	/* margin-left: 1rem; */
	margin-right: 7rem;
	@media (max-width: ${size.laptop}) {
		${(props) => {
			if (props.theme.title === "aether") {
				return `padding-right:20rem;
                padding-bottom:0.5rem;`;
			}
		}}
	}
	@media (max-width: ${size.tablet}) {
		display: none;
	}
	overflow-x: scroll;
`;
const Laptop = styled.img`
	${(props) => {
		if (props.theme.title === "aether") {
			return `margin:0 4rem;`;
		}
	}}

	height: auto;
	width: ${(props) => {
		switch (props.theme.title) {
			case "aether":
				return "9vw";
			default:
				return "37vw";
		}
	}};
	margin-right: auto;
	@media (max-width: ${size.tablet}) {
		display: none;
	}
`;
const Mobile = styled.img`
	width: 9vw;
	height: auto;
	margin-left: auto;
	@media (max-width: ${size.tablet}) {
		display: none;
	}
`;
const MobilePhotosContainer = styled.div`
	display: none;
	@media (max-width: ${size.tablet}) {
		display: block;
	}
`;

const MobilePhotosBar = styled.div`
	@media (max-width: ${size.tablet}) {
		display: flex;
	}
	display: none;
	position: relative;
	width: 126px;
	height: 5px;
	margin: 2rem auto 1rem;
	background: #ededed;
	div {
		${(props) => {
			if (props.theme.which) {
				return `left:0;`;
			} else {
				return `left:50%;`;
			}
		}};
	}
`;

const MobilePhotoBarSingular = styled.div`
	position: absolute;
	width: 50%;
	height: 100%;
	background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
	transition: left 500ms ease-in-out;
`;

const MobilePhotoMain = styled.div`
	@media (max-width: ${size.tablet}) {
		display: flex;
	}
	display: none;
	padding: 0 1rem;
	margin: auto;
	justify-content: center;
	align-items: center;
	width: 100%;
	position: relative;
`;

const Next = styled.img`
	width: 40px;
	height: 40px;
	position: absolute;
	right: 10px;
	:hover {
		cursor: pointer;
	}
	:active {
		transform: scale(0.9);
	}
`;

const Prev = styled.img`
	width: 40px;
	height: 40px;
	position: absolute;
	left: 10px;
	z-index: 100;
	:hover {
		cursor: pointer;
	}
	:active {
		transform: scale(0.9);
	}
`;

const MobilePhotoContainer = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 70vh;
`;

const MobilePhoto = styled.img`
	max-width: 100%;
	max-height: 70vh;
	display: none;
	@media (max-width: ${size.tablet}) {
		display: block;
	}
`;

const ProjectDescription = styled.div`
	font-size: 20px;
	font-weight: 500;
	margin: 20px 0 0;
	/* width:80% ; */
	@media (max-width: ${size.laptop}) {
		margin: 5px;
	}
	@media (max-width: ${size.tablet}) {
		line-height: 130%;
		margin: 0 2rem;
	}
`;
const TechStack = styled.div`
	margin: 0.5rem 0;
	display: flex;
	/* text-align: center; */
	@media (max-width: ${size.desktop}) {
		flex-wrap: wrap;
		width: 100%;
	}
	@media (max-width: ${size.tablet}) {
		justify-content: center;
		/* margin-left:2rem; */
		/* margin-right:2rem; */
	}
`;

const Tech = styled.div`
	margin: 0 2rem;
`;
interface Myprops {
	projectId: number;
	title: string;
}

interface Mystate {
	which: boolean;
}

class ProjectCard extends React.Component<Myprops, Mystate> {
	constructor(props: Myprops) {
		super(props);
		this.state = {
			which: true,
		};
	}
	show = () => {
		this.setState(() => ({
			which: !this.state.which,
		}));
	};

	chooseFirstImg = () => {
		switch (projects[this.props.projectId].id) {
			case "codeportal":
				return codeportalL;
			case "aether":
				return aetherL;
			case "aetherweb":
				return aetherwebL;
			case "hotstreaks":
				return hotstreaksL;
			case "ageofcoders":
				return ageofcodersL;
			case "hawkeye":
				return hawkeyeL;
		}
	};
	chooseSecondImg = () => {
		switch (projects[this.props.projectId].id) {
			case "codeportal":
				return codeportalM;
			case "aether":
				return aetherM;
			case "aetherweb":
				return aetherwebM;
			case "hotstreaks":
				return hotstreaksM;
			case "ageofcoders":
				return ageofcodersM;
			case "hawkeye":
				return hawkeyeM;
		}
	};

	render() {
		return (
			<ThemeProvider theme={this.props}>
				<ProjectCardContainer>
					<TitleHeader>
						<Link />
						<A href={projects[this.props.projectId].link}>
							<TitleText>
								<Text>
									{projects[this.props.projectId].title}
								</Text>
							</TitleText>
						</A>
					</TitleHeader>
					<MobilePhotoMain>
						<Prev src={PrevSvg} onClick={this.show} />
						<MobilePhotosContainer>
							<MobilePhotoContainer>
								<MobilePhoto
									src={
										this.state.which
											? this.chooseSecondImg()
											: this.chooseFirstImg()
									}
								/>
							</MobilePhotoContainer>
						</MobilePhotosContainer>
						<Next src={NextSvg} onClick={this.show} />
					</MobilePhotoMain>
					<MobilePhotosBar theme={this.state}>
						<MobilePhotoBarSingular />
					</MobilePhotosBar>
					<MockUpContainer>
						<Mobile src={this.chooseSecondImg()} />
						<Laptop src={this.chooseFirstImg()} />
					</MockUpContainer>
					<ProjectDescription>
						{projects[this.props.projectId].description}
					</ProjectDescription>

					{
						<Tech>
							<TechStack>
								{projects[this.props.projectId].techStack.map(
									(techSt, id) => {
										return (
											<div>
												<PopUp
													name={techSt.name}
													description={
														techSt.description
													}
													font_color={
														techSt.font_color
													}
													background_color={
														techSt.color
													}
													link={techSt.link}
												/>
											</div>
										);
									}
								)}
							</TechStack>
						</Tech>
					}
				</ProjectCardContainer>
			</ThemeProvider>
		);
	}
}

class ProjectCard2 extends React.Component<Myprops> {
	render() {
		return (
			<ProjectCardContainer>
				<TitleHeader>
					<TitleText>
						<Text>{projects2[this.props.projectId].title}</Text>
					</TitleText>
				</TitleHeader>
				<ProjectDescription>
					{projects2[this.props.projectId].description}
				</ProjectDescription>

				{
					<div>
						<TechStack>
							{projects2[this.props.projectId].techStack.map(
								(techSt, id) => {
									return (
										<div>
											<PopUp
												name={techSt.name}
												description={techSt.description}
												font_color={techSt.font_color}
												background_color={techSt.color}
												link={techSt.link}
											/>
										</div>
									);
								}
							)}
						</TechStack>
					</div>
				}
			</ProjectCardContainer>
		);
	}
}
export { ProjectCard, ProjectCard2 };
