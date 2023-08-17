import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	<div>
		<div>
			<Link to={"/PirsingList/last"}>last</Link>
		</div>
		<div>
			<Link to={"/PirsingList"}>main</Link>
		</div>
		PirsingListMainLayout <Outlet />
	</div>
);

export default MainLayout;
