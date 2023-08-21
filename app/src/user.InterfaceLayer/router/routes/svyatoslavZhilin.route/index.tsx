import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom";

import Index from "../../routePath";
import Error from "../../../Components/generalComponents/Error";
import PirsingRoutesPaths from "./Pirsing.routesPaths";
import Loader from "../../../Components/generalComponents/Loader";
import MainLayout from "../../../Layouts/Main.layout";
import { LastPage } from "user.InterfaceLayer/Pages/Last.page";
import { MainPage } from "user.InterfaceLayer/Pages/Main.page";

const PirsingRoutes: RouteObject[] = [
	{
		path: Index.PIRSING_LIST,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			// {
			// 	// path: PirsingRoutesPaths.LAST,
			// 	// element: (
			// 	// 	<Suspense fallback={<Loader />}>
			// 	// 		<LastPage />
			// 	// 	</Suspense>
			// 	// ),
			// 	// errorElement: <Error />,
			// },
			// {
			// 	path: Index.NOT_FOUND,
			// 	element: <div>страницы нет</div>,
			// },
		],
	},
];

export default PirsingRoutes;
