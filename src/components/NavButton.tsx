import styled from "styled-components";
import { size } from "../devices";
import Btn from "../assets/navButton.svg";
const Button = styled.div`
	z-index: 10000000;
	background: url(${Btn});
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 50%;
	position: fixed;
	bottom: 30px;
	right: 30px;
	height: 55px;
	width: 55px;
	display: none;
	animation: birthnavbtn 1500ms ease-in-out;
	@keyframes birthnavbtn {
		0% {
			transform: translateX(200%) translateY(200%);
		}
		100% {
			transform: translateX(0) translateY(0);
		}
	}
	@media (max-width: ${size.tablet}) {
		display: block;
	}
`;
export default Button;
