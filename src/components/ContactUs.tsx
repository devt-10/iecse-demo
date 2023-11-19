import React from "react";
import styled, { keyframes } from "styled-components";
import Map from "../assets/Map.png";
import twitter from "../assets/twitterWhite.svg";
import mail from "../assets/Mail.svg";
import instagram from "../assets/instagramWhite.svg";
import facebook from "../assets/facebookWhite.svg";
import navdark from "../assets/NavDark.svg";
import navlight from "../assets/NavLight.svg";
import close from "../assets/close.svg";
import { device } from "../devices.js";

const DesktopContainer = styled.div`
	overflow: hidden;
	display: none;
	@media ${device.laptop} {
		color: #ffffff;
		width: 100%;
		font: Catamaran;
		background: #252525;
		display: grid;
		margin: none;
		min-height: 100vh;
		padding: 2vh 8vw 0;
		padding-top: 9vh;
	}


`;

const Body = styled.div`
	display: flex;
	flex-direction: row;
`;
const MobileContainer = styled.div`
	@media ${device.laptop} {
		display: none;
	}
`;
const MainContainer = styled.section`

.buttonwrap1{
	cursor: pointer;
}

.link{
	margin-left: .5rem ;
}

	@media ${device.laptop} {
		min-height: 100vh;
		padding-top: 0;
	}

	width: 100%;
	font: Catamaran;
	background: #252525;
	padding-top: 9vh;

	color: #ffffff;
	display: grid;
	@media ${device.laptop} {
		display: grid;
	}
`;
const H1 = styled.div`
	margin-left: 8vw;
	font-size: 3rem;
	font-weight: 600;
	@media ${device.laptop} {
		margin-left: 0px;
		margin-bottom: 400px;
	}
`;
const Contact = styled.div`
	margin-top: 350px;
	margin-right: 30px;
	div {
		@media ${device.laptop} {
			margin-top: 30px;
		}
	}


`;
const Container = styled.div`
	margin-left: 8vw;
	margin-top: 3vh;
	div {
		margin-bottom: 15px;
	}
	@media ${device.laptop} {
		margin: 0px;
		flex-basis: 20%;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 450px;
	text-align: center;
	@media ${device.laptop} {
		flex-basis: 80%;
		height: 600px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 0%;
	@media ${device.laptop} {
		height: 600px;
	}
`;

const Button = styled.button`
	all: unset;
	border: none;
	width: 150px;
	height: 45px;
	background: #ffffff;
	text-align: center;
	color: #252525;
	border-radius: 8px;
	font-weight: 500;
	font-size: 1.1rem;
	position: relative;
	bottom: 70px;
	margin: auto;
	transition: color 1s, background 1s, transform 0.5s;
	${(props: any) =>
		props.theme.selected
			? `
		color: #FFF;
		background: #252525;
		transform: translate(60%,0);
		`
			: `
		color: #252525;
		background: #FFF;
		opacity: 90%;
		`}
	span {
		margin-left: 5px;
	}
	hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		${(props: any) =>
			props.theme.selected
				? `
		color: #FFF;
		background: #252525;
		transform: translateX(21vw);
		`
				: `
		color: #252525;
		background: #FFF;
		opacity: 90%;
		`}
	}
`;
const ImageS = styled.img`
	height: 15px;
	width: 15px;
	margin-left: 5px;
	transform: translateY(3px);
`;
const Icon = styled.div`
	padding-left: 25px;
	background-size: 16px 16px;
	${(props: any) => `background-image: url(${props.theme.name});`}
	background-repeat: no-repeat;
	align-self: flex-start;

	.button {
		padding-left: 50px;
		background-size: 25px 25px;
		background-size: cover;
	}

	:hover {
		cursor: pointer;
		${(props: any) => `background-image: url(${props.theme.name});`}
		background-repeat: no-repeat;
	}
	a {
		font-weight: 400;
		font-size: calc(4vw + 0.5vh);
		text-align: center;
		align-self: center;
		@media ${device.tablet} {
			font-size: 1.5rem;
		}
		@media ${device.laptop} {
			font-size: 1.3rem;
		}
	}
`;

const Icons = styled.a`
	padding-left: 50px;
	background-size: 19px 19px;
	${(props: any) => `background-image: url(${props.theme.name});`}
	background-repeat: no-repeat;
	align-self: flex-start;

	:hover {
		cursor: pointer;
		${(props: any) => `background-image: url(${props.theme.name});`}
		background-repeat: no-repeat;
	}
`;

const H2 = styled.h2`
	text-align: center;
	font-weight: 500;
	font-size: calc(3vw + 1vh);
	span {
		font-weight: 750;
	}
	@media ${device.laptop} {
		font-size: 1.5rem;
	}
`;
const Footer = styled.footer`
	text-align: center;
	margin-bottom: 10px;

	@media ${device.laptop} {
		padding: 0;
		margin-bottom: 0px;
	}
`;
const popup = keyframes`
	0%{
		opacity: 0%;
	}
	100%{
		opacity: 90%;
	}
`;

const Close = styled.img`
	height: 20px;
	width: 20px;
	// border: 1px solid black;
	// padding:5px;
	margin-bottom: 30px;
	hover {
		cursor: pointer;
	}
`;

const FormContainer = styled.div`
	text-align: left;
	position: absolute;
	border-radius: 10px;
	left: 0px;
	right: 0px;
	width: 90%;
	/* height: 431px; */
	height: 460px;
	margin: auto;
	background: #ffffff;
	/* opacity: 90%; */
	animation: ${popup} 1s ease-in;
	color: black;
	padding: 20px;
	hover {
		cursor: pointer;
	}
	form {
		all: unset;

		label {
			border: none;
			display: block;
			color: #c4c4c4;
			margin-bottom: 60px;

			input {
				font-size: 1.5rem;
				width: 100%;
				font-weight: 500;
				outline: 0;
				border-width: 0 0 1px;
				border-color: #dadada;
			}
		}
	}

	ImageS {
		margin-left: 20px;
	}
	@media ${device.tablet} {
		width: 50%;
	}
	@media ${device.laptop} {
		width: 350px;
		height: 600px; //keep same as image height
		left: 60%;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const ContainButton = styled.div`
	width: 100%;
	display: flex;
	${(props: any) => (props.theme.first ? `justify-content: flex-end;` : ``)}
`;

const Modal = styled.div`
	${(props: any) => (props.theme.show ? `` : `display: none;`)}
	color: #ff0800;
	text-align: center;
	font-weight: 600;
	font-size: 1.5rem;

	position: relative;
	bottom: 90%;
	@media ${device.laptop} {
		position: relative;
		font-size: 1rem;
		bottom: 0;
	}
`;

interface MyProps {}

interface MyState {
	first: boolean;
	name: string;
	email: string;
	phoneNo: string;
	message: string;
	error: string;
	showModal: boolean;
	submit: boolean;
	// formclass: any;
}

export default class ContactUs extends React.Component<MyProps, MyState> {
	constructor(props: any) {
		super(props);
		this.state = {
			first: false,
			name: "",
			email: "",
			phoneNo: "",
			message: "",
			error: "",
			showModal: false,
			submit: false,
			// formclass: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event: { target: { name: any; value: any } }) {
		const value: any = event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value,
		});
	}

	handleSubmit(event: any) {
		let err: any;
		event.preventDefault();
		const { name, email, phoneNo, message, first } = this.state;
		let len = phoneNo.length;
		if (
			(first === true && name === "") ||
			email === "" ||
			phoneNo === "" ||
			message === ""
		) {
			// alert("Please enter all details!");
			err = "Please enter all details!";
			this.setState({ error: err, showModal: true });
		} else if (len !== 10) {
			err = "Enter a valid Phone Number!";
			this.setState({ error: err, showModal: true });
		} else if (message === "") {
			err = "Enter a message!";
			this.setState({ error: err, showModal: true });
		} else {
			let url = "https://mail.iecsemanipal.com/contact-us";
			let auth = process.env.REACT_APP_MAILER_SECRET;
			let requestObject = {
				name: name,
				email: email,
				phone: phoneNo,
				message: message,
			};
			fetch(url, {
				method: "POST",
				headers: {
					Authorization: auth!,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestObject),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.success) {
						//code for success

						err = `Your message has been sent. Love, IECSE.`;
						// alert(err);
						this.setState({
							showModal: true,
							error: err,
						});
						setTimeout(() => {
							this.setState({
								first: false,
								name: "",
								email: "",
								phoneNo: "",
								message: "",
								error: "",
								showModal: false,
							});
							window.removeEventListener(
								"mousedown",
								this.handleClickOutside
							);
						}, 3000);

						// alert(error);
					} else {
						// alert(data.msg);
						err = data.msg;
						setTimeout(() => {
							this.setState({
								error: err,
								showModal: true,
							});
						}, 500);
					}
				})
				.catch((err) => {
					// Do something for an error here
					console.log("Error Reading data " + err);
					this.setState({
						showModal: true,
						error: err,
					});
				});
		}
	}

	handleClickOutside = (e: any) => {
		const el = document.querySelector(".wrapper1");
		const el1 = document.querySelector(".buttonwrap1");
		if (!el?.contains(e.target) && !el1?.contains(e.target)) {
			this.setState({
				first: false,
			});
			window.removeEventListener("mousedown", this.handleClickOutside);
		}
	};
	handleClickOutsideMobile = (e: any) => {
		const el = document.querySelector(".wrapper2");
		const el1 = document.querySelector(".buttonwrap2");
		if (!el?.contains(e.target) && !el1?.contains(e.target)) {
			this.setState({
				first: false,
			});
			window.removeEventListener(
				"mousedown",
				this.handleClickOutsideMobile
			);
		}
	};

	render() {
		const { first } = this.state;
		const { showModal, error } = this.state;
		let icon: any;
		icon = this.state.first ? navlight : navdark;

		return (
			<MainContainer id='contactus' theme={{ selected: first }}>
				<DesktopContainer>
					<Body>
						<Container>
							<H1>Contact Us</H1>
							<Contact  >
								<div className="mail" >
								<ImageS src={mail} />
										<a className="link" href='mailto:hello@iecsemanipal.com'>
										 	<span>hello@iecsemanipal.com</span>
										</a>
		
								</div>

								<div>
									<Icons
										theme={{ name: twitter }}
										href='https://twitter.com/iecsemanipal/'
									></Icons>
									<Icons
										theme={{ name: instagram }}
										href='https://instagram.com/iecsemanipal/'
									></Icons>
									<Icons
										theme={{ name: facebook }}
										href='https://www.facebook.com/iecsemanipal/'
									></Icons>

								</div>
							</Contact>
						</Container>
						<ImageContainer>
							{this.state.first ? (
								<FormContainer className='wrapper1'>
									<Close
										onClick={() => {
											window.removeEventListener(
												"mousedown",
												this.handleClickOutside
											);
											this.setState({
												first: false,
											});
										}}
										src={close}
									/>
									<form>
										<label>
											<input
												name='name'
												type='text'
												placeholder='Name'
												value={this.state.name}
												onChange={this.handleChange}
												required
											/>
										</label>
										<label>
											<input
												name='email'
												type='email'
												placeholder='Email-id'
												value={this.state.email}
												onChange={this.handleChange}
												required
											/>
										</label>
										<label>
											<input
												name='phoneNo'
												type='number'
												placeholder='Phone'
												value={this.state.phoneNo}
												onChange={this.handleChange}
												required
											/>
										</label>
										<label>
											<input
												name='message'
												type='text'
												placeholder='Message'
												value={this.state.message}
												onChange={this.handleChange}
												required
											/>
										</label>
									</form>
									<Modal theme={{ show: showModal }}>
										{error}
									</Modal>
								</FormContainer>
							) : null}
							<Image src={Map} />
							<ContainButton>
								<Button
									className='buttonwrap1'
									theme={{ selected: first }}
									onClick={(event) => {
										if (first === false) {
											this.setState({
												first: true,
												showModal: false,
											});
											window.addEventListener(
												"mousedown",
												this.handleClickOutside
											);
										}
										if (first === true) {
											this.handleSubmit(event);
										}
									}}
								>
									<span>Send Message</span>
									<ImageS src={icon} />
								</Button>
							</ContainButton>
						</ImageContainer>
					</Body>

					<H2>
						Made in <span>Manipal</span> with ❤️ by
						<span> IECSE</span>.
					</H2>
					<Footer>© 2021, IECSE Manipal. All Rights Reserved.</Footer>
				</DesktopContainer>
				<MobileContainer>
					<H1>Contact Us</H1>
					<ImageContainer>
						{this.state.first ? (
							<FormContainer className='wrapper2'>
								<Close
									onClick={() => {
										window.removeEventListener(
											"mousedown",
											this.handleClickOutsideMobile
										);

										this.setState({
											first: false,
										});
									}}
									src={close}
								/>
								<form>
									<label>
										<input
											name='name'
											type='text'
											placeholder='Name'
											value={this.state.name}
											onChange={this.handleChange}
											required
										/>
									</label>
									<label>
										<input
											name='email'
											type='email'
											placeholder='Email-id'
											value={this.state.email}
											onChange={this.handleChange}
											required
										/>
									</label>
									<label>
										<input
											name='phoneNo'
											type='number'
											placeholder='Phone'
											value={this.state.phoneNo}
											onChange={this.handleChange}
											required
										/>
									</label>
									<label>
										<input
											name='message'
											type='text'
											placeholder='Message'
											value={this.state.message}
											onChange={this.handleChange}
											required
										/>
									</label>
									<Modal theme={{ show: showModal }}>
										{error}
									</Modal>
								</form>
							</FormContainer>
						) : null}
						<Image src={Map} />

						<Button
							className='buttonwrap2'
							theme={{ selected: first }}
							onClick={(event) => {
								if (first === false) {
									this.setState({
										first: true,
										showModal: false,
									});
									window.addEventListener(
										"mousedown",
										this.handleClickOutsideMobile
									);
								}
								if (this.state.first === true) {
									this.handleSubmit(event);
								}
							}}
						>
							<span>Send Message</span>
							<ImageS src={icon} />
						</Button>
					</ImageContainer>

					<Container>
						{/* <div>
							<Icon theme={{ name: phone }}>
								<span>980000000</span>
							</Icon>
						</div> */}
						<div  className="mail" >
								<ImageS src={mail} />
								<a className="link" href='mailto:hello@iecsemanipal.com'>
									<span>hello@iecsemanipal.com</span> 
								</a>
						</div>

						<div>
							<Icons
								theme={{ name: twitter }}
								href='https://twitter.com/iecsemanipal/'
							></Icons>
							<Icons
								theme={{ name: instagram }}
								href='https://instagram.com/iecsemanipal/'
							></Icons>
							<Icons
								theme={{ name: facebook }}
								href='https://www.facebook.com/iecsemanipal/'
							></Icons>
						</div>
					</Container>
					<H2>
						Made in <span>Manipal</span> with ❤️ by
						<span> IECSE</span>.
					</H2>
					<Footer>© 2021, IECSE Manipal. All Rights Reserved.</Footer>
				</MobileContainer>
			</MainContainer>
		);
	}
}
