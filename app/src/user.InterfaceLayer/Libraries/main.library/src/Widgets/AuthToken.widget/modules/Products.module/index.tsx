import React from "react";
import Product from "../../../../UI_KIT/Molecules/Profuct.molecule";

interface IProducts {
	products: Array<{
		collection: Array<{
			color: string;
			count: number;
			mm: number;
			steel: string;
		}>;
		name: string;
	}>;
}

const Products = ({ products }: IProducts) => {
	console.log(products);
	return (
		<>
			{products.map((item, i) => (
				<div key={i}>
					<h2>{item.name}</h2>
					{item.collection.map((item, i) => {
						return <Product key={i} src={item} />;
					})}
				</div>
			))}
		</>
	);
};

export default Products;

