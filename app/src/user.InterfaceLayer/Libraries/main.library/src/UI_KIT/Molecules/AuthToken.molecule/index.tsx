import React, { useEffect, useState } from "react";
import Input from "../../Atoms/Input.atom";
import Button from "../../Atoms/Button.atom";
import { StyledAuthToken } from "./styled";
import { IAuthToken } from "../../../Widgets/AuthToken.widget/type";
import { IAuth } from "./type";

const AuthToken = ({ apiAdminKey, setApiAdminKey }: IAuth) => {
	const [fullKey, setFullKey] = useState("");

	const addKey = () => {
		localStorage.setItem("apiAdminKey", fullKey);
		setApiAdminKey(fullKey);
	};

	return (
		<StyledAuthToken>
			<Input getInput={setFullKey} />
			<Button
				src={"enter key"}
				srcFunc={addKey}
			/>
		</StyledAuthToken>
	);
};

export default AuthToken;
