import React, { useState } from "react";

function Item({ name, category }) {

	const [addToCart, setAddToCart] = useState(false)
	const [cartClass, setCartClass] = useState(false)

	const added = cartClass ? "in-cart" : ""
	const inCart = addToCart ? "Remove From Cart" : "Add to Cart"

	function handleAddToCart() {
		
		setAddToCart((addToCart) => !addToCart)
		setCartClass((cartClass) => !cartClass)
	}

	return (
		<li className={added}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button onClick={handleAddToCart} className="add">{inCart}</button>
		</li>
	);
}

export default Item;
