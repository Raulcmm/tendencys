import React, { useState } from "react";

const Form = ({ title, setOrderInfo, products }) => {
	const [dataProduct, setDataProduct] = useState({
		sku: "",
		name: "",
		quantity: "",
		price: "",
		id: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDataProduct({
			...dataProduct,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//añadirle un id al producto
		setDataProduct({ ...dataProduct, id: Math.floor(Math.random() * 10000) }); // se puede usar UUID para los id por ahora solo un random
		//guardar el nuevo producto en el arreglo para mandarlo a pintar
		setOrderInfo({ products: [...products.products, dataProduct] });
		e.target.reset();
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form__content">
				<h2>{title}</h2>
				<label className="form__item">
					sku
					<input type="number" name="sku" onChange={handleChange} required />
				</label>
				<label className="form__item">
					name
					<input type="text" name="name" onChange={handleChange} required />
				</label>
				<label className="form__item">
					quantity
					<input type="number" name="quantity" onChange={handleChange} required />
				</label>
				<label className="form__item">
					price
					<input type="number" name="price" onChange={handleChange} required />
				</label>
				<button type="submit" className="btn outline green">
					Add to chart
				</button>
			</div>
		</form>
	);
};

export default Form;
