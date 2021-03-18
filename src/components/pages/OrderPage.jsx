import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Form from "../Form.jsx";

// import orderFetch from "../../db";
import Payment from "../Payment.jsx";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../utils/Loading.jsx";
const OrderPage = () => {
	const { id } = useParams();
	const [orderInfo, setOrderInfo] = useState([]);
	const [orderFetch] = useFetch("https://eshop-deve.herokuapp.com/api/v2/orders");

	useEffect(() => {
		const data = orderFetch.filter((order) => order.orderNumber === id)[0];
		setOrderInfo(data);
	}, [orderFetch]);

	useEffect(() => {
		setOrderInfo(orderInfo);
	}, [orderInfo]);

	if (orderInfo === undefined) return <Loading />;

	return (
		<div>
			<h1>Order #{orderInfo.orderNumber}</h1>
			<div className="order-page__content">
				<Form title="Add new product" setOrderInfo={setOrderInfo} products={orderInfo} />
				<Payment products={orderInfo.products} />
			</div>
		</div>
	);
};

export default OrderPage;
