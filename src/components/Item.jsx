export default function Item({ item, onDeleteItem }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.name}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}
