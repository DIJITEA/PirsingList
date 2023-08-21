import React from "react";
import { StyledButton } from "./styled";

import { IButton } from "./type";

const Button = ({ src, srcFunc }: IButton) => {
	return <StyledButton onClick={srcFunc}>{src}</StyledButton>;
};

export default Button;
