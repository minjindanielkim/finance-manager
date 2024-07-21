//table.jsx

import React, { useState } from 'react';

function PriceTable(props) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const changeName = (event) => {
		setName(event.target.value);
	};

	const changePrice = (event) => {
		setPrice(event.target.value);
	};

	const transferValue = (event) => {
		event.preventDefault();
		const val = {
			name,
			price,
		};
		props.func(val);
		clearState();
	};

	const clearState = () => {
		setName('');
		setPrice('');
	};

	return (
		<div>
			<label>Name</label>
			<input type="text" value={name} onChange={changeName} />
			<label>Price</label>
			<input type="text" value={city} onChange={changePrice} />
			<button onClick={transferValue}> Add </button>
		</div>
	);
}

export default PriceTable;
