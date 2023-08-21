import styled from "styled-components";
import Colors from "../../../../constants/colors";
import FontsEnum from "../../../../constants/fonts";

const font = `
	font-family: ${FontsEnum.Nunito};
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 100%;
    `;

export const StyledInput = styled.input`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 50px;
	color: white;
	background-color: ${Colors.DARKGRAY};
	border: 2px solid ${Colors.GRAY};
	margin-bottom: 15px;
	${font};
`;
