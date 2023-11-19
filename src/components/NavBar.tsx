import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LogoBlack from "../assets/IECSELogo.svg";
import LogoWhite from "../assets/IECSELogoWhite.svg";
import { size } from "../devices";
import Instagram from "../assets/instagramWhite.svg";
import Facebook from "../assets/facebookWhite.svg";
import Twitter from "../assets/twitterWhite.svg";
import LinkPin from "../assets/linkpin.svg";
import { Link } from "react-router-dom";
import { HashLink as HashLinked } from "react-router-hash-link";
import ScrollUpButton from "react-scroll-up-button";

const Container = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	padding: 20px 70px;
	width: 100%;
	justify-content: space-between;
	animation: birthnav 1000ms ease-in-out;
	@keyframes birthnav {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	/* backdrop-filter: blur(15px);*/
	background: ${(props) => {
		if (!props.theme.which) {
			return `#252525`;
		} else {
			return `#ffffff`;
		}
	}};
	@media (max-width: ${size.tablet}) {
		background: #ffffff;
	}
	transition: background 300ms linear;
	z-index: 10000000;
	@media (max-width: ${size.laptopL}) {
		padding: 20px 50px;
	}
	@media (max-width: ${size.laptop}) {
		padding: 20px 40px;
	}
	@media (max-width: ${size.tablet}) {
		padding: 20px 35px;
		position: absolute;
	}
	.no-border {
		outline: none;
		border: 0;
	}
`;
const Logo = styled.img`
	height: 30px;
	width: 95px;
	animation: birthlogo 1000ms ease-in-out;
	@keyframes birthlogo {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	align-self: center;
	width: 25rem;
	margin-left: 90px;
	color: ${(props) => {
		if (props.theme.which) {
			return `#252525`;
		} else {
			return `#ffffff`;
		}
	}};
	transition: color 300ms linear;
	animation: birthlink 1000ms ease-in-out;
	@keyframes birthlink {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0%);
		}
	}
	@media (max-width: ${size.tablet}) {
		display: none;
	}
`;
const Linked = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 25px;
	transition: 400ms;
	:hover {
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
		cursor: pointer;
	}
`;

const ProjectsBtn = styled.div`
	height: 40px;
	width: 122px;
	background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
	text-align: center;
	padding: 7px 0;
	color: #fff;
	border-radius: 5px;
	font-size: 17px;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
`;
const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 12rem;
	animation: birthbtn 1000ms ease-in-out;
	@keyframes birthbtn {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
	@media (max-width: ${size.tablet}) {
		display: none;
	}
	${ProjectsBtn}:hover {
		/* background: linear-gradient(215.18deg, #232ad3 9.75%, #6ed2d2 116.5%); */
		transform: scale(1.1);
	}
	${ProjectsBtn}:active {
		/* background: linear-gradient(215.18deg, #232ad3 9.75%, #6ed2d2 116.5%); */
		transform: scale(1);
	}
`;

const Hamburger = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	:hover {
		cursor: pointer;
	}
`;

const HamburgerBar = styled.div`
	width: 27px;
	height: 4px;
	background: linear-gradient(90deg, #57d9f7 0%, #57d9f7 0%, #8d43f7 100%);
	border-radius: 2px;
`;

//DesktopNav

const Background = styled.div`
	background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
	position: fixed;
	right: 50px;
	top: 10px;
	width: 25vw;
	border-radius: 10px;
	min-height: 55vh;
	display: flex;
	flex-direction: column;
	.desk {
		height: auto;
		margin: 1em;
		margin-left: auto;
	}
`;
const Container2 = styled.div`
	flex-grow: 1;
	flex-basis: auto;
	display: flex;
	color: white;
`;
const Socials = styled.div`
	display: flex;
	flex-direction: column;
	border-right: 1.1px solid white;
	justify-content: flex-end;
	a {
		margin: 0.5em 1.2em;
	}
	img {
		height: 4vh;
	}
`;
const Links = styled.div`
	padding: 1em;
`;
const NavLink = styled.a`
	display: flex;
	align-items: baseline;
	text-decoration: none;
	font-size: 1.7rem;
	font-weight: 300;
	align-items: center;
`;
const Container1 = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: row;
	align-items: space-evenly;
	width: min-content;
	:hover {
		cursor: pointer;
	}
`;
const HamburgerBarD = styled.div`
	height: 32px;
	width: 4px;
	background-color: rgb(255, 255, 255);
	border-radius: 2px;
	margin-right: 6px;
`;

interface MenuState {
	DesktopMenu: boolean;
}
interface MenuProps {
	which: boolean;
}
export default class NavBar extends React.Component<MenuProps, MenuState> {
	constructor(props: any) {
		super(props);
		this.state = {
			DesktopMenu: false,
		};
	}
	ShowMenu = () => {
		this.setState(
			(prevState) => ({
				DesktopMenu: !prevState.DesktopMenu,
			}),
			() => {
				if (this.state.DesktopMenu) {
					window.addEventListener(
						"mousedown",
						this.handleClickListener
					);
					window.addEventListener("keyup", this.handleKeyListener);
				} else {
					window.removeEventListener(
						"mousedown",
						this.handleClickListener
					);
					window.removeEventListener("keyup", this.handleKeyListener);
				}
			}
		);
	};
	handleClickListener = (e: any) => {
		let menu = document.querySelector("#menu");
		if (!menu?.contains(e.target)) {
			this.ShowMenu();
		}

	};
	handleKeyListener = (e: any) => {
		if (e.keyCode === 27) {
			this.ShowMenu();
		}
	};
	chooseLogo = () => {
		return this.props.which ? LogoBlack : LogoWhite;
	};
	render() {
		const Menu = this.state.DesktopMenu;
		return (
			<ThemeProvider theme={this.props}>
				<Container theme={this.props}>
					<Link to='/'>
						<ScrollUpButton
							StopPosition={0}
							EasingType='easeOutCubic'
							AnimationDuration={500}
							ContainerClassName='ScrollUpButton__Container no-border'
							TransitionClassName='ScrollUpButton__Toggled no-border'
						>
							<Logo
								src={
									window.innerWidth > 768
										? this.chooseLogo()
										: LogoBlack
								}
							/>
						</ScrollUpButton>
					</Link>

					<LinkContainer theme={this.props}>
						<HashLinked smooth={true} to='/#about'>
							<Linked className='poppins'>About</Linked>
						</HashLinked>
						<HashLinked smooth={true} to='/#whatwedo'>
							<Linked className='poppins'>Work</Linked>
						</HashLinked>
						<HashLinked smooth={true} to='/#journey'>
							<Linked className='poppins'>Journey</Linked>
						</HashLinked>
						<HashLinked smooth={true} to='/#team'>
							<Linked className='poppins'>Team</Linked>
						</HashLinked>
						<HashLinked smooth={true} to='/#contactus'>
							<Linked className='poppins'>Contact</Linked>
						</HashLinked>
					</LinkContainer>
					<ButtonContainer>
						<Link to='/projects'>
							<ProjectsBtn>Projects</ProjectsBtn>
						</Link>
						{Menu ? (
							<Background id="menu" >
								<div>
									<Container1
										onClick={this.ShowMenu}
										className='desk'
									>
										<HamburgerBarD></HamburgerBarD>
										<HamburgerBarD></HamburgerBarD>
										<HamburgerBarD></HamburgerBarD>
									</Container1>
								</div>
								<Container2>
									<Socials>
										<a
											href='https://twitter.com/iecsemanipal/'
											target='_blank'
											rel='noreferrer noopener'
										>
											<img src={Twitter} alt='twitter' />
										</a>
										<a
											href='https://www.instagram.com/iecsemanipal/'
											target='_blank'
											rel='noreferrer noopener'
										>
											<img
												src={Instagram}
												alt='instagram'
											/>
										</a>
										<a
											href='https://www.facebook.com/iecsemanipal/'
											target='_blank'
											rel='noreferrer noopener'
										>
											<img
												src={Facebook}
												alt='facebook'
											/>
										</a>
									</Socials>
									<Links>
										<NavLink
											href='https://members.iecsemanipal.com/'
											target='_blank'
											rel='noreferrer noopener'
										>
											<img
												src={LinkPin}
												alt='link'
												style={{
													height: "3vh",
													padding: "0 1vw",
												}}
											/>
											Member Portal
										</NavLink>
										<NavLink
											href='https://code.iecsemanipal.com/'
											target='_blank'
											rel='noreferrer noopener'
										>
											<img
												src={LinkPin}
												alt='link'
												style={{
													height: "3vh",
													padding: "0 1vw",
												}}
											/>
											Code Portal
										</NavLink>
										<NavLink
											href='https://design.iecsemanipal.com/'
											target='_blank'
											rel='noreferrer noopener'
										>
											<img
												src={LinkPin}
												alt='link'
												style={{
													height: "3vh",
													padding: "0 1vw",
												}}
											/>
											Design Portal
										</NavLink>
									</Links>
								</Container2>
							</Background>
						) : null}
						<Hamburger onClick={this.ShowMenu}>
							<HamburgerBar></HamburgerBar>
							<HamburgerBar></HamburgerBar>
							<HamburgerBar></HamburgerBar>
						</Hamburger>
					</ButtonContainer>
				</Container>
			</ThemeProvider>
		);
	}
}
