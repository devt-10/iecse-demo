import React from "react";

import styled from "styled-components";
import Team from "./Team.js";
import { device } from "../devices.js";

const Names = styled.div`
	column-count: 2;
	column-rule: 1px solid lightblue;
	font-weight: 500;
	margin-bottom: 100px;

	div {
		font-size: 0.7rem;
		column-span: 1;
		line-height: 2.2em;
	}
	@media ${device.mobileM} {
		div {
			font-size: 0.8rem;
		}
	}
	@media ${device.mobileL} {
		div {
			font-size: 1rem;
		}
	}
	@media ${device.tablet} {
		column-count: 3;
		margin-bottom: 100px;
		div {
			line-height: 2em;
		}
	}
	@media ${device.laptop} {
		column-count: 4;
		margin-bottom: 130px;
		div {
			line-height: 2em;
		}
	}
`;

class Mancomm extends React.Component {
	render() {
		const mc = Team.mancomm;
		return (
			<Names>
				{mc.map((name) => {
					return <div>{name.name}</div>;
				})}
			</Names>
		);
	}
}

export default Mancomm;
