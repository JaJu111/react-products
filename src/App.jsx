import React from "react";
import { Rroduct } from "./components/Product";
import { products } from "./data/products";

export default function App() {
	return (
		<>
			<div className="container mx-auto max-w-2xl pt-5">
				{/* <Rroduct product={ products[0] } />
				<Rroduct product={ products[1] } /> */}

				{ products.map(product => <Rroduct product={product} key={product.id} />) }
			</div>
		</>
	)
}