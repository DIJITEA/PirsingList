import React, { useEffect, useState } from "react";
import Input from "../../UI_KIT/Atoms/Input.atom";
import AuthToken from "../../UI_KIT/Molecules/AuthToken.molecule";

import { AuthTokenWrap } from "./styled";
import { IAuthToken } from "./type";

import Products from "./modules/Products.module";

const AuthTokenWidget = ({ useLazyGetPirsingQuery }: IAuthToken) => {
	const [apiAdminKey, setApiAdminKey] = useState("");
	const [activeInput, setActiveInput] = useState(true);
	const [curData, setCurData] = useState([]);

	const [trigger, data, isLoading, isError, error] = useLazyGetPirsingQuery({});

	useEffect(() => {
		if (data.status === "fulfilled") {
			// console.log(data.data.record.collection[0].name);
			// console.log(src)

			setActiveInput(false);
		}
	}, [data]);
	useEffect(() => {
		const reportapiAdminKeyInStorage = localStorage.getItem("apiAdminKey");
		if (reportapiAdminKeyInStorage !== null) {
			setApiAdminKey(reportapiAdminKeyInStorage);
			trigger({ authToken: reportapiAdminKeyInStorage })
			if (data.status === "fulfilled") {
				setCurData(data.data.record.collection);
			}
		}
	}, [apiAdminKey]);

	return (
		<>
			<AuthTokenWrap $active={activeInput}>
				<AuthToken
					apiAdminKey={apiAdminKey}
					setApiAdminKey={setApiAdminKey}
				/>
			</AuthTokenWrap>
			{data.status === "fulfilled" ? (
				<Products products={data.data.record.collection} />
			) : (
				<div></div>
			)}
		</>
	);
};

export default AuthTokenWidget;
