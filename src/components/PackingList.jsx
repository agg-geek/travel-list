import Item from './Item';

const items = [
	{ id: 1, description: 'Passport', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 4, packed: false },
	{ id: 3, description: 'Charger', quantity: 1, packed: true },
];

export default function PackingList() {
	return (
		<div className="list">
			<ul>
				{items.map(item => (
					<Item item={item} />
				))}
			</ul>
		</div>
	);
}
