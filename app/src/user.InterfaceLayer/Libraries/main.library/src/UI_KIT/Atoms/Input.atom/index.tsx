import React from "react";
import { StyledInput } from "./styled.tsx";
import { IInput } from "./type/index.js";

const Input = ({getInput} : IInput) =>{
    return (
        <StyledInput onChange={(e)=>getInput(e.target.value)}></StyledInput>
    )
}

export default Input