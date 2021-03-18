import React, { useEffect, useState } from "react";
import Orders from "./Orders";

import useFetch from "../hooks/useFetch";
const Home = () => {
	const [orderFetch] = useFetch("https://eshop-deve.herokuapp.com/api/v2/orders");
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		setOrders(orderFetch);
	}, [orderFetch]);

	if (Object.keys(orders).length === 0) return null;

	return (
		<div className="app">
			<Orders orders={orders} />
		</div>
	);
};

export default Home;
