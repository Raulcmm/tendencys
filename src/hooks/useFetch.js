import { useEffect, useState } from "react";

const useFetch = (api_url) => {
	const [data, setData] = useState([]);
	const AUTHORIZATION = process.env.REACT_APP_API_AUTHORIZATION;

	useEffect(() => {
		const headers = {
			method: "GET",
			headers: {
				Authorization: AUTHORIZATION,
				"Content-Type": "application/json",
			},
		};

		async function getDataApi() {
			const request = await fetch(api_url, headers);
			const response = await request.json();

			const orders = response.orders.map((product) => ({
				products: [...product.items],
				orderNumber: product.number,
			}));
			setData(orders);
		}
		getDataApi();
	}, []);
	return [data];
};

export default useFetch;
