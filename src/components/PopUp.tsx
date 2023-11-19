import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ReactComponent as LinkSvg } from "../assets/blacklink.svg";
import { size } from "../devices";
import ModalMobile from "./ModalMobile";
import ReactSvg from "../assets/tech/react.svg";
import BashSvg from "../assets/tech/bash.svg";
import CssSvg from "../assets/tech/css.svg";
import DockerSvg from "../assets/tech/docker.svg";
import ExpressSvg from "../assets/tech/express.svg";
import FirebaseSvg from "../assets/tech/firebase.svg";
import FlutterSvg from "../assets/tech/flutter.svg";
import GoSvg from "../assets/tech/golang.svg";
import HtmlSvg from "../assets/tech/html.svg";
import JsSvg from "../assets/tech/javascript.svg";
import MobxSvg from "../assets/tech/mobx.svg";
import MongoSvg from "../assets/tech/mongodb.svg";
import SqlSvg from "../assets/tech/mysql.svg";
import NodeSvg from "../assets/tech/nodeJs.svg";
import ReduxSvg from "../assets/tech/redux.svg";
import TsSvg from "../assets/tech/typescript.svg";

const Tech = styled.div`
	border: 1px solid #dadada;
	border-radius: 8px;
	padding: 0.5rem 2rem;
	margin: 0.5rem 0.25rem 0.25rem;
	color: #c4c4c4;
	font-size: 1.2rem;
	font-weight: 600;
	position: relative;
	.popup {
		display: none;
		:hover {
			display: block;
		}
	}
	:hover,
	div.Techstacktitle:active {
		cursor: pointer;
		border: 1px solid rgba(108, 136, 211, 1);
		color: rgba(108, 136, 211, 1);
	}
	:hover div.popup {
		display: block;
		animation: fade-in 0.3s;
	}
	@media (max-width: ${size.tablet}) {
		:hover div.popup {
			display: block;
			animation: fade-in 0s;
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@media (max-width: ${size.tablet}) {
		margin-left: auto;
		.popup {
			display: block;
		}
	}
	.mobile-only {
		display: none;
		@media (max-width: ${size.tablet}) {
			display: block;
		}
	}
	.modal {
		transition: all ease 1s;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PopLogo = styled.div`
	padding: 0.5rem;
	margin: 2rem 0 2rem 3rem;
	height: 116px;
	width: 188px;
	@media (max-width: ${size.laptop}) and (min-width: ${size.tablet}) {
		height: 5rem;
		width: 7rem;
		padding: 0.5rem;
		margin: 1rem 0 1rem 1.5rem;
		margin-left: auto;
	}
	@media (max-width: ${size.tablet}) {
		padding: 0.5rem;
		margin: 2rem 0 2rem 3rem;
		height: 116px;
		width: 188px;
	}
	background-image: ${(props) => {
		switch (props.theme.name) {
			case "React":
				return `url(${ReactSvg})`;
			case "NodeJS":
				return `url(${NodeSvg})`;
			case "Express":
				return `url(${ExpressSvg})`;
			case "Flutter":
				return `url(${FlutterSvg})`;
			case "Firebase":
				return `url(${FirebaseSvg})`;
			case "MySQL":
				return `url(${SqlSvg})`;
			case "Bash":
				return `url(${BashSvg})`;
			case "Docker":
				return `url(${DockerSvg})`;
			case "GoLang":
				return `url(${GoSvg})`;
			case "MobX":
				return `url(${MobxSvg})`;
			case "MongoDB":
				return `url(${MongoSvg})`;
			case "HTML":
				return `url(${HtmlSvg})`;
			case "CSS":
				return `url(${CssSvg})`;
			case "JavaScript":
				return `url(${JsSvg})`;
			case "Redux":
				return `url(${ReduxSvg})`;
			case "TypeScript":
				return `url(${TsSvg})`;
		}
	}};
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

const Description = styled.div`
	font-size: 16px;
	text-align: left;
	width: 100%;
	/* height: 286px; */
	bottom: 0;
	padding: 2.5rem 2rem 2.5rem;
	line-height: 150%;
	background-color: ${(props) => props.theme.background_color};
	color: ${(props) => props.theme.font_color};
	border-radius: 0 0 20px 20px;
	/* bottom: 0px; */
	@media (max-width: ${size.laptop}) {
		padding: 2.5rem 2rem 2.5rem;
		font-size: 12px;
	}
`;

const PopLink = styled(LinkSvg)`
	width: 26px;
	height: 26px;
	margin: 0 auto 0 0.5rem;
	opacity: 0;
	pointer-events: none;
	@media (max-width: ${size.laptop}) {
		margin: 0 0 0 0.5rem;
	}
	@media (max-width: ${size.tablet}) {
		width: 26px;
		height: 26px;
		margin: 0 auto 0 0.5rem;
	}
`;

const A = styled.a`
	/* display: block; */
	cursor: pointer;
`;

const PopUpDiv = styled.div`
	cursor: default;
	text-align: center;
	position: absolute;
	bottom: 103%;
	left: -70%;
	z-index: 1000000000;
	width: 300px;
	/* height: 450px; */
	background-color: white;
	/* padding: 1.5em; */
	box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	:hover {
		display: block;
	}
	@media (max-width: ${size.laptop}) {
		width: 260px;
	}
	transition: 2s linear;
	@media (max-width: ${size.tablet}) {
		display: none;
		:hover {
			display: none;
		}
	}
`;

interface Myprops {
	name: string;
	description: string;
	font_color: string;
	background_color: string;
	link: string;
}

interface Mystate {
	shouldShow: boolean;
}

export default class PopUp extends React.Component<Myprops, Mystate> {
	constructor(props: any) {
		super(props);
		this.state = {
			shouldShow: false,
		};
		this.showModal = this.showModal.bind(this);
	}
	state = {
		shouldShow: false,
	};
	showModal = (e: any) => {
		this.setState({
			shouldShow: !this.state.shouldShow,
		});
	};

	render() {
		return (
			<Tech
				onClick={(e) => {
					if (window.matchMedia("(max-width: 786px)").matches) {
						this.showModal(e);
					}
				}}
			>
				<div className='popup'>
					<div className='modal'>
						<ModalMobile
							name={this.props.name}
							description={this.props.description}
							font_color={this.props.font_color}
							background_color={this.props.background_color}
							link={this.props.link}
							show={this.state.shouldShow}
							onClose={this.showModal}
						/>
					</div>
					<PopUpDiv>
						<ThemeProvider theme={this.props}>
							<LogoContainer>
								<A
									href={this.props.link}
									rel='noreferrer noopener'
								>
									<PopLogo />
								</A>
								<PopLink />
							</LogoContainer>
							<Description>{this.props.description}</Description>
						</ThemeProvider>
					</PopUpDiv>
				</div>
				<div className='TechstackTitle'>{this.props.name}</div>
			</Tech>
		);
	}
}
