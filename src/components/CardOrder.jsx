import React from "react";
import { Link } from "react-router-dom";

const CardOrder = ({ order }) => {
	const { orderNumber } = order;
	return (
		<Link to={`/order/${orderNumber}`} className="card-orders">
			<article className="card-orders__content">
				<h2>{orderNumber}</h2>
			</article>
		</Link>
	);
};

export default CardOrder;
