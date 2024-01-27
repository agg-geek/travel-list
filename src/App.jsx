import './../public/index.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(newItem) {
		setItems(items => [...items, newItem]);
	}

	function handleDeleteItem(itemId) {
		setItems(items => items.filter(item => item.id !== itemId));
	}

	function handleToggleItem(itemId) {
		setItems(items =>
			items.map(item =>
				item.id === itemId ? { ...item, packed: !item.packed } : item
			)
		);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
			/>
			<Stats />
		</div>
	);
}
