import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [itemName, setItemName] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(evt) {
		evt.preventDefault();

		if (!itemName) return;
		const newItem = { quantity, name: itemName, packed: false, id: Date.now() };
		onAddItems(newItem);

		setItemName('');
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
				{Array.from({ length: 20 }).map((_, idx) => (
					<option value={idx + 1} key={idx + 1}>
						{idx + 1}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={itemName}
				onChange={e => setItemName(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
