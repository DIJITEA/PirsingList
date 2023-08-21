import { Dispatch, SetStateAction } from "react";

export interface IAuth {
	apiAdminKey: string;
	setApiAdminKey: Dispatch<SetStateAction<string>>;
}
