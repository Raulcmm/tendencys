import React from "react";

const PaymentItem = ({ data }) => {
	const { sku, name, quantity, price } = data;
	return (
		<article className="payment-item">
			<div className="payment-item__content">
				<p>Quantity: </p>
				<p className="payment-item__quantity">{quantity}</p>
			</div>
			<div className="payment-item__content">
				<p>Name: </p>
				<h3 className="payment-item__name">{name}</h3>
			</div>
			<div className="payment-item__content">
				<p className="payment-item__sku">{sku}</p>
				<p className="payment-item__price">$ {price}</p>
			</div>
		</article>
	);
};

export default PaymentItem;
