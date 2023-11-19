import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Logo } from "../assets/IECSELogoWhite.svg";
import Instagram from "../assets/instagramWhite.svg";
import Facebook from "../assets/facebookWhite.svg";
import Twitter from "../assets/twitterWhite.svg";
import ArrowDown from "../assets/arrow_down.svg";
import ArrowRight from "../assets/arrow_right.svg";
import ArrowUp from "../assets/arrow_up.svg";
import { HashLink as Link } from "react-router-hash-link";
import NavBtn from "./NavButton";
import { Link as Linked } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

const Enter = keyframes`
	0% { 
		transform: translateX(100%);
		opacity: 0.5; 
	}
	100% { 
		transform: translateX(0); 
		opacity: 1; 
	}
`;
const Background = styled.div`
	animation: ${Enter} 0.7s;
	background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	.logo {
		width: 120px;
		height: auto;
		margin: 1em;
	}
	.no-border {
		outline: none;
		border: 0;
	}
	z-index: 100000000000;
`;

const IECSELogo = styled(Logo)`
	width: 120px;
	height: auto;
	margin: 1em;
`;
const Container = styled.div`
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
	padding-bottom: 7rem;
`;
const Links = styled.div`
	padding: 1em;
	max-height: 90vh;
	overflow: scroll;
	.dropdown {
		padding-left: 2em;
	}
`;
const NavLink = styled(Link)`
	display: block;
	margin-bottom: 0.6em;
	text-decoration: none;
	font-size: 1.7rem;
	font-weight: 300;
`;
const DropHeader = styled.a`
	display: flex;
	align-items: baseline;
`;
const DropDownItem = styled.a`
	display: block;
	text-decoration: none;
	font-size: 1.2rem;
	padding-bottom: 1em;
	font-weight: 300;
`;
const links = [
	{ name: "About", to: "/#about" },
	{ name: "What we do", to: "/#whatwedo" },
	{ name: "Journey", to: "/#journey" },
	{ name: "Team", to: "/#team" },
	{ name: "Contact Us", to: "/#contactus" },
];

const projectlinks = [
	{ name: "codeportal", to: "/projects/#codeportal" },
	{ name: "aether", to: "/projects/#aether" },
	{ name: "aether web", to: "/projects/#aetherweb" },
	{ name: "hotstreaks", to: "/projects/#hotstreaks" },
	{ name: "hawkeye", to: "/projects/#hawkeye" },
	{ name: "age of coders", to: "/projects/#ageofcoders" },
	{ name: "mailer", to: "/projects/#mailer" },
	{ name: "judge", to: "/projects/#judge" },
	{ name: "certman", to: "/projects/#certman" },
];

const MobileNav = () => {
	const [showProjects, setShowProjects] = useState<boolean>(false);
	const onClick = () => setShowProjects((showProjects) => !showProjects);

	const [menu, setMenu] = useState<boolean>(false);
	const menuClick = () => setMenu((menu) => !menu);
	return (
		<div>
			{menu ? (
				<Background>
					<Linked to='/' onClick={menuClick}>
						<ScrollUpButton
							StopPosition={0}
							EasingType='easeOutCubic'
							AnimationDuration={500}
							ContainerClassName='ScrollUpButton__Container no-border'
							TransitionClassName='ScrollUpButton__Toggled no-border'
						>
							<IECSELogo />
						</ScrollUpButton>
					</Linked>
					<Container>
						<Socials>
							<a
								href='https://twitter.com/iecsemanipal/'
								target='_blank'
								rel='noreferrer noopener'
							>
								<img
									src={Twitter}
									alt='twitter'
									style={{
										height: "6vh",
										margin: "0 6vw",
										marginBottom: "6vh",
									}}
								/>
							</a>
							<a
								href='https://www.instagram.com/iecsemanipal/'
								target='_blank'
								rel='noreferrer noopener'
							>
								<img
									src={Instagram}
									alt='instagram'
									style={{
										height: "6vh",
										margin: "0 6vw",
										marginBottom: "6vh",
									}}
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
									style={{
										height: "6vh",
										margin: "0 6vw",
										marginBottom: "6vh",
									}}
								/>
							</a>
							<img
								src={ArrowRight}
								alt='close'
								style={{
									height: "3.5vh",
									margin: "0 6vw",
									marginBottom: "6vh",
								}}
								onClick={menuClick}
							/>
						</Socials>
						<Links>
							{links.map((link, i) => {
								return (
									<NavLink
										smooth
										to={link.to}
										onClick={menuClick}
									>
										{link.name}
									</NavLink>
								);
							})}
							<DropHeader>
								<ScrollUpButton
									StopPosition={0}
									EasingType='easeOutCubic'
									AnimationDuration={500}
									ContainerClassName='ScrollUpButton__Container no-border'
									TransitionClassName='ScrollUpButton__Toggled no-border'
								>
									<NavLink
										to='/projects'
										style={{ paddingBottom: "3vh" }}
										onClick={menuClick}
									>
										Projects
									</NavLink>
								</ScrollUpButton>
								<img
									src={showProjects ? ArrowUp : ArrowDown}
									alt='more'
									style={{
										height: "2.5vh",
										padding: "0 3vw",
									}}
									onClick={onClick}
								/>
							</DropHeader>
							{showProjects ? (
								<div className='dropdown'>
									{projectlinks.map((item, i) => {
										return (
											<Link
												to={item.to}
												onClick={menuClick}
											>
												<DropDownItem>
													{item.name}
												</DropDownItem>
											</Link>
										);
									})}
								</div>
							) : null}
						</Links>
					</Container>
				</Background>
			) : (
				<NavBtn onClick={menuClick} />
			)}
		</div>
	);
};

export default MobileNav;
