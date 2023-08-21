import { Dispatch, SetStateAction } from "react";

export interface IInput {
	getInput: Dispatch<SetStateAction<string>>;
}
