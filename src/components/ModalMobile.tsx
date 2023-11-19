import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ReactComponent as LinkSvg } from "../assets/blacklink.svg";
import { ReactComponent as CloseSvg } from "../assets/close.svg";
import { size } from "../devices";
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

const MobileModal = styled.div`
	@media (max-width: ${size.tablet}) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10000;
	}
`;

const MobilePopModal = styled.div`
	@media (max-width: ${size.tablet}) {
		position: fixed;
		animation: fadeIn ease 300ms;
		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		background: white;
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
		border-radius: 20px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const CloseButton = styled(CloseSvg)`
	@media (max-width: ${size.tablet}) {
		width: 48px;
		height: 48px;
		margin: 1rem 0 0 1rem;
	}
`;

const ModalLogoContainer = styled.div`
	@media (max-width: ${size.tablet}) {
		display: flex;
		align-items: center;
	}
	div.modal-logo-link {
		margin-left: auto;
	}
`;

const ModalLink = styled(LinkSvg)`
	@media (max-width: ${size.tablet}) {
		height: 26px;
		width: 26px;
		margin-right: auto;
	}
`;

const ModalLogo = styled.img`
	@media (max-width: ${size.tablet}) {
		margin: 1rem;
		max-width: auto;
		height: 25vw;
		max-width: 180px;
	}
`;

const ModalDescription = styled.div`
	margin-top: 1rem;
	background-color: ${(props) => props.theme.background_color};
	color: ${(props) => props.theme.font_color};
	border-radius: 0 0 20px 20px;
	@media (max-width: ${size.tablet}) {
		padding: 3rem;
		font-size: 1.2rem;
	}
	@media (max-width: ${size.mobileL}) {
		padding: 2rem;
		font-size: 1.1rem;
	}
	@media (max-width: ${size.mobileM}) {
		padding: 2rem;
		font-size: 1.1rem;
	}
	@media (max-width: ${size.mobileS}) {
		padding: 2rem;
		font-size: 1rem;
	}
`;

const A = styled.a`
	display: block;
`;

interface Myprops {
	name: string;
	description: string;
	font_color: string;
	background_color: string;
	link: string;
	show: boolean;
	onClose: any;
}

export default class ModalMobile extends React.Component<Myprops> {
	onClose = (e: any) => {
		this.props.onClose && this.props.onClose(e);
	};
	chooseImg = () => {
		switch (this.props.name) {
			case "React":
				return ReactSvg;
			case "NodeJS":
				return NodeSvg;
			case "Express":
				return ExpressSvg;
			case "Flutter":
				return FlutterSvg;
			case "Firebase":
				return FirebaseSvg;
			case "MySQL":
				return SqlSvg;
			case "Bash":
				return BashSvg;
			case "Docker":
				return DockerSvg;
			case "GoLang":
				return GoSvg;
			case "MobX":
				return MobxSvg;
			case "MongoDB":
				return MongoSvg;
			case "HTML":
				return HtmlSvg;
			case "CSS":
				return CssSvg;
			case "JavaScript":
				return JsSvg;
			case "Redux":
				return ReduxSvg;
			case "TypeScript":
				return TsSvg;
		}
	};
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div>
				<ThemeProvider theme={this.props}>
					<MobileModal>
						<MobilePopModal className='mobile-only'>
							<Container>
								<CloseButton
									onClick={(e) => {
										this.onClose(e);
									}}
								/>
								<ModalLogoContainer>
									<div className='modal-logo-link'>
										<A
											href={this.props.link}
											rel='noreferrer noopener'
										>
											<ModalLogo src={this.chooseImg()} />
										</A>
									</div>
									<ModalLink />
								</ModalLogoContainer>
								<ModalDescription>
									{this.props.description}
								</ModalDescription>
							</Container>
						</MobilePopModal>
					</MobileModal>
				</ThemeProvider>
			</div>
		);
	}
}
