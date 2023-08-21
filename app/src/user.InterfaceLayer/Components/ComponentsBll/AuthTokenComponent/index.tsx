import React from "react";

import {
	useGetTodoQuery,
	useLazyGetTodoQuery,
} from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import {
	useGetPirsingQuery, useLazyGetPirsingQuery,
	// usePostPirsingMutation,
} from "business.InterfaceLayer/store/shared/entities/pirsing/pirsing.entity/redux/api";
import Widget1 from "../../../Libraries/main.library/src/Widgets/widget1.widget";
import AuthTokenWidget from "user.InterfaceLayer/Libraries/main.library/src/Widgets/AuthToken.widget";

const AuthTokenComponent = () => {
	return <AuthTokenWidget useLazyGetPirsingQuery={useLazyGetPirsingQuery}/>;
};

export default AuthTokenComponent;
