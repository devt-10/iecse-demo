import React from "react";
import styled from "styled-components";
import Text from "./GradientText";
import { useInView } from "react-intersection-observer";
import { projects, projects2 } from "../data.js";
import { ProjectCard, ProjectCard2 } from "./ProjectCard";
import { size } from "../devices";
import Wrapper from "./Wrapper";
import Item from "./ProjectLink";

const links = [
	{ name: "codeportal", to: "#codeportal" },
	{ name: "aether", to: "#aether" },
	{ name: "aether web", to: "#aetherweb" },
	{ name: "hotstreaks", to: "#hotstreaks" },
	{ name: "hawkeye", to: "#hawkeye" },
	{ name: "age of coders", to: "#ageofcoders" },
	{ name: "mailer", to: "#mailer" },
	{ name: "judge", to: "#judge" },
	{ name: "certman", to: "#certman" },
];

const Container = styled.div`
	padding-top: 80px;
	display: flex;
	height: 100vh;
	background-color: #fff;
	flex-direction: row;
	@media (max-width: ${size.tablet}) {
		flex-direction: column;
		padding-top: 60px;
	}
`;
const Container2 = styled.div`
	display: flex;
	background-color: #fff;
	flex-grow: auto;
	padding: 0px 4rem;
	flex-direction: column;
	animation: birthprojectpane 1000ms ease-in-out;
	@keyframes birthprojectpane {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@media (max-width: ${size.laptopL}) {
		padding: 0px 3rem;
	}
	@media (max-width: ${size.laptop}) {
		padding: 0px 2.5rem;
	}
`;
const Container3 = styled.div`
	display: flex;
	background-color: #fff;
	padding: 0 8.75rem 0 6.875rem;
	margin: 0 auto 0;
	flex-direction: column;
	overflow: scroll;

	@media (max-width: ${size.tablet}) {
		overflow: inherit;
	}

	overflow-x: visible;
	::-webkit-scrollbar {
		width: 7px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(215.18deg, #23c8d3 9.75%, #886ed2 116.5%);
	}
	@media (max-width: ${size.desktop}) {
		padding-right: 0;
	}
	@media (max-width: ${size.laptopL}) {
		padding-left: 4rem;
		padding-right: 0;
	}
	@media (max-width: ${size.tablet}) {
		margin: 0;
		padding: 0;
	}
`;
const H1 = styled.div`
	font-size: 4rem;
	font-weight: 600;
	color: black;

	@media (max-width: ${size.laptopL}) {
		font-size: 3rem;
	}
	@media (max-width: ${size.laptop}) {
		font-size: 2.5rem;
	}
	@media (max-width: ${size.tablet}) {
		font-size: 4rem;
	}
	@media (max-width: ${size.mobileL}) {
		font-size: 3rem;
	}
`;

const Project = styled.div`
	@media (min-width: ${size.laptopL}) {
		margin-top: 2vh;
	}
	@media (max-width: ${size.laptopL}) {
		margin-top: 1.5vh;
	}
	@media (max-width: ${size.tablet}) {
		margin: 0;
	}
`;

const HR = styled.hr`
	color: #c4c4c4;
	/* border: 1px solid #c4c4c4; */
	border-width: 0.5px;
	height: 80vh;
	@media (max-width: ${size.tablet}) {
		height: 0;
		width: 90%;
		margin: 0 auto;
	}
	animation: birthh1 1000ms ease-in-out;
	@keyframes birthh1 {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;

const RightSideContainer = styled.div`
	width: 90%;
	/* height:900px; */
	@media (max-width: ${size.tablet}) {
		width: 100%;
	}
	animation: birthprojects 1000ms ease-in-out;
	@keyframes birthprojects {
		0% {
			opacity: 0;
			transform: translateX(100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;

const SingleProject = styled.div`
	padding: 1rem 0 3rem;
	@media (max-width: ${size.tablet}) {
		padding: 0rem 0 3rem;
	}
`;
function Projects() {
	const [ref1, inView1] = useInView({
		threshold: 0.75,
	});
	const [ref2, inView2] = useInView({
		threshold: 0.75,
	});
	const [ref3, inView3] = useInView({
		threshold: 0.75,
	});
	const [ref4, inView4] = useInView({
		threshold: 0.75,
	});
	const [ref5, inView5] = useInView({
		threshold: 0.75,
	});
	const [ref6, inView6] = useInView({
		threshold: 0.75,
	});
	const [ref7, inView7] = useInView({
		threshold: 0.75,
	});
	const [ref8, inView8] = useInView({
		threshold: 0.75,
	});
	const [ref9, inView9] = useInView({
		threshold: 0.75,
	});

	const refA = [ref1, ref2, ref3, ref4, ref5, ref6];
	const refB = [ref7, ref8, ref9];
	const inView = [
		inView1,
		inView2,
		inView3,
		inView4,
		inView5,
		inView6,
		inView7,
		inView8,
		inView9,
	];
	return (
		<Container>
			<Container2>
				<H1>
					<Text>Projects</Text>
				</H1>
				<Project>
					{
						<div>
							{links.map((link, i) => {
								return (
									<Item
										which={inView[i]}
										link={link.to}
										name={link.name}
									/>
								);
							})}
						</div>
					}
				</Project>
			</Container2>
			<HR />
			<Container3>
				<RightSideContainer>
					{
						<div>
							{projects.map((item, i) => {
								return (
									<Wrapper ref={refA[i]}>
										<SingleProject id={item.id}>
											<div>
												<ProjectCard
													title={item.id}
													projectId={i}
												/>
											</div>
										</SingleProject>
									</Wrapper>
								);
							})}
							{projects2.map((item, i) => {
								return (
									<Wrapper ref={refB[i]}>
										<SingleProject id={item.id}>
											<div>
												<ProjectCard2
													title={item.id}
													projectId={i}
												/>
											</div>
										</SingleProject>
									</Wrapper>
								);
							})}
						</div>
					}
				</RightSideContainer>
			</Container3>
		</Container>
	);
}

export default Projects;
