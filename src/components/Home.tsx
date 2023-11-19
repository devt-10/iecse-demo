import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import OurTeam from "./OurTeam";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import Domains from "./Domains";
import Journey from "./Journey";
import Wrapper from "./Wrapper";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import NotFound from "./NotFound";

const Container = styled.div``;

const Home = () => {
	const [ref1, inView1] = useInView({
		threshold: 0.5,
	});
	const [ref2, inView2] = useInView({
		threshold: 0.5,
	});
	const [ref3, inView3] = useInView({
		threshold: 0.5,
	});
	const [ref4, inView4] = useInView({
		threshold: 1,
	});
	const [ref5, inView5] = useInView({
		threshold: 1,
	});
	const [showLoading, setShowLoading] = useState(true);
	let timer1 = setTimeout(() => setShowLoading(false), 2000);
	useEffect(() => {
		return () => {
			clearTimeout(timer1);
		};
	});
	return (
		<BrowserRouter>
			<MobileNav />
			<NavBar
				which={
					inView1 ||
					inView2 ||
					inView3 ||
					inView4 ||
					inView5 ||
					showLoading
				}
			/>
			<Switch>
				<Route exact path='/'>
					<Container id='main'>
						<div id='hero' className='animate'>
							<Wrapper ref={ref1}>
								<Hero />
							</Wrapper>
						</div>
						<div id='about' className='animate'>
							<About />
						</div>

						<div id='whatwedo' className='animate'>
							<Wrapper ref={ref2}>
								<Domains />
							</Wrapper>
						</div>
						<div id='journey' className='animate'>
							<Journey />
						</div>
						<div id='team' className='animate'>
							<Wrapper ref={ref3}>
								<OurTeam />
							</Wrapper>
						</div>
						<div id='contactus' className='animate'>
							<ContactUs />
						</div>
					</Container>
				</Route>
				<Route exact path='/projects'>
					<Wrapper ref={ref4}>
						<Projects />
					</Wrapper>
				</Route>
				<Wrapper ref={ref5}>
					<Route component={NotFound} />
				</Wrapper>
			</Switch>
		</BrowserRouter>
	);
};

export default Home;
