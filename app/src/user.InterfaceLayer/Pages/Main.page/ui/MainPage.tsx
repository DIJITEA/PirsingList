import {
	useGetPirsingQuery,
	// usePostPirsingMutation,
} from "business.InterfaceLayer/store/shared/entities/pirsing/pirsing.entity/redux/api";
import React, { FC, useEffect } from "react";
import AuthTokenComponent from "user.InterfaceLayer/Components/ComponentsBll/AuthTokenComponent";
import Component1 from "user.InterfaceLayer/Components/ComponentsBll/Component1.bll";

// import { Cells1.cell } from "test-lib";

const MainPage: FC = () => {
	// useEffect(()=>{postPirsing({payload:{"sample": "Hello World"}}).then()},[])

	// eslint-disable-next-line no-console
	// console.log(Cells1.cell);
	// const { data, isLoading } = useGetPirsingQuery({
	// 	authToken: "$2b$10$/jFJNILkprdkVAWtsRvvuOadcU926APvycdu1VkWcZRE61g.qbJcq",
	// });

	// const postPirsing = usePostPirsingMutation();
	// const [postPirsing,{isLoading: PostPirsingmutatiOnLoading, isError: PostPirsingmutatiIsError}] = usePostPirsingMutation()
	// const test = async () => {
	// 	// postPirsing({payload:{"sample": "Hello World2"}}).then(console.log)

	// 	await fetch("https://api.jsonbin.io/v3/b/64de4b6e9d312622a392b4a4", {
	// 		method: "PUT",
	// 		headers: {
	// 			"x-access-key":
	// 				"$2b$10$/jFJNILkprdkVAWtsRvvuOadcU926APvycdu1VkWcZRE61g.qbJcq",
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: `{
	// 			"banana": {
	// 			  "name": "Банан",
	// 			  "collection": [
	// 				{
	// 				  "steel": "тип стали",
	// 				  "mm": 7,
	// 				  "color": "цвет",
	// 				  "count": 0
	// 				}
	// 			  ]
	// 			},
	// 			"labret": {
	// 			  "name": "Лабрет",
	// 			  "collection": [
	// 				{
	// 				  "steel": "тип стали",
	// 				  "mm": 7,
	// 				  "color": "цвет",
	// 				  "count": 0
	// 				}
	// 			  ]
	// 			},
	// 			"Ring": {
	// 			  "name": "Кольцо",
	// 			  "collection": [
	// 				{
	// 				  "steel": "тип стали",
	// 				  "mm": 7,
	// 				  "color": "цвет",
	// 				  "count": 0
	// 				}
	// 			  ]
	// 			},
	// 			"Circular": {
	// 			  "name": "Циркуляр",
	// 			  "collection": [
	// 				{
	// 				  "steel": "тип стали",
	// 				  "mm": 7,
	// 				  "color": "цвет",
	// 				  "count": 0
	// 				}
	// 			  ]
	// 			},
	// 			"Barbell": {
	// 			  "name": "Штанга",
	// 			  "collection": [
	// 				{
	// 				  "steel": "тип стали",
	// 				  "mm": 7,
	// 				  "color": "цвет",
	// 				  "count": 0
	// 				}
	// 			  ]
	// 			},
	// 			"Nostril": {
	// 			  "name": "Нострил",
	// 			  "collection": [
	// 				{
	// 				  "steel": "тип стали",
	// 				  "mm": 7,
	// 				  "color": "цвет",
	// 				  "count": 0
	// 				}
	// 			  ]
	// 			}
	// 		  }`,
	// 	}).then(console.log);
	// };

	// let req = new XMLHttpRequest();

	// req.onreadystatechange = () => {
	//   if (req.readyState == XMLHttpRequest.DONE) {
	// 	console.log(req.responseText);
	//   }
	// };

	// req.open("POST", "https://api.jsonbin.io/v3/b", true);
	// req.setRequestHeader("Content-Type", "application/json");
	// req.setRequestHeader("X-Master-Key", "$2b$10$uQ86lHM4rIy1ahSNa1a6f.2b5lmr5mxHvVIbEvxDB7cwOGqX/9MMO");
	// req.send('{"sample": "Hello World"}');

	// console.log(data);
	return (
		<div>
			{/* <button onClick={test}>asdasd</button> */}
			{/* <div>{data}</div> */}
			TEST5 <Component1 />
			<AuthTokenComponent/>
		</div>
	);
};

export default MainPage;
