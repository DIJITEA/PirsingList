import Styled, { styled } from "styled-components";

interface IAuthTokenWrap {
	$active: boolean;
}

export const AuthTokenWrap = styled.div<IAuthTokenWrap>`
	position: fixed;
	top: 0px;
	height: 100vh;
	width: 100vw;
	backdrop-filter: blur(2px);
	${(props) => (props.$active ? `` : `display: none`)}
`;
