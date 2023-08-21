import React from "react";
interface temp {
	src: { color: string; count: number; mm: number; steel: string };
}
const Product = ({ src }: temp) => {
	return (
		<div>
			<div>{src.color}</div>
			<div>{src.count}</div>
			<div>{src.mm}</div>
			<div>{src.steel}</div>
		</div>
	);
};
export default Product;
