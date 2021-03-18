import React from "react";
import PaymentItem from "./PaymentItem";

import Swal from "sweetalert2";

const Payment = ({ products = [] }) => {
	const handleAlert = () => {
		Swal.fire("Great!", "successful payment", "success");
	};

	return (
		<section className="payment">
			<div className="payment__content">
				<h2>Your order </h2>
				{products.map((product) => (
					<PaymentItem key={product.id} data={product} />
				))}
				<button className="btn outline green" type="button" onClick={handleAlert}>
					Pay now
				</button>
			</div>
		</section>
	);
};

export default Payment;
