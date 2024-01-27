import Item from './Item';

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
	return (
		<div className="list">
			<ul>
				{items.map(item => (
					<Item
						item={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
		</div>
	);
}
