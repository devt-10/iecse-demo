import React from "react";
import styled from "styled-components";
import { HashLink as Link1 } from "react-router-hash-link";
import { size } from "../devices";

const Itema = styled(Link1)`
	/* text-transform: capitalize; */
	display: block;
	text-decoration: none;
	font-size: 1.2rem;
	padding-bottom: 1em;
	font-weight: 300;
	${(props) => {
		if (props.theme.which) {
			return `background: -webkit-linear-gradient(
			45deg,
			rgba(41, 196, 211, 1) 0%,
			rgba(108, 136, 211, 1) 50%,
			rgba(31, 68, 166, 1) 100%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		background-clip:text;
		-webkit-text-fill-color: transparent;
		animation: Gradient-Animation 2s infinite linear;
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
		}`;
		} else {
			return `color: rgb(0, 0, 0, 0.6);`;
		}
	}}
	:hover {
		background: -webkit-linear-gradient(
			45deg,
			rgba(41, 196, 211, 1) 0%,
			rgba(108, 136, 211, 1) 50%,
			rgba(31, 68, 166, 1) 100%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: Gradient-Animation 2s infinite linear;
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
	@media (max-width: ${size.tablet}) {
		display: none;
	}
	transition: background 1s linear;
	transition: background-position 1s linear;
	transition: background-size 1s linear;
`;

class Item extends React.Component<{ which: boolean, link:string, name:string }, {}>{
  render() {
    return<Itema smooth={true} to={this.props.link} theme={this.props}>{this.props.name}</Itema>;
  }
}

export default Item;