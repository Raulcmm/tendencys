import React from "react";
import CardOrder from "./CardOrder";

const Orders = ({ orders }) => {
	return (
		<section className="orders">
			<h2>Your orders </h2>
			<div className="orders__content">
				{orders.map((order) => (
					<CardOrder order={order} key={order.orderNumber} />
				))}
			</div>
		</section>
	);
};

export default Orders;
