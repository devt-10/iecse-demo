import styled from "styled-components";

const Text = styled.div`
	background: -webkit-linear-gradient(
		45deg,
		rgba(41, 196, 211, 1) 0%,
		rgba(108, 136, 211, 1) 50%,
		rgba(31, 68, 166, 1) 100%
	);
	background-size:200% auto;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: Gradient-Animation 2s infinite linear;
	@keyframes Gradient-Animation {
		0%{
			background-position:0% 50%;
		}
		50%{
			background-position:100% 50%;
		}
		100%{
			background-position:0% 50%;
		}
	}
`;

export default Text;
