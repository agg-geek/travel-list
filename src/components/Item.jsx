export default function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.name}
			</span>
			<button>❌</button>
		</li>
	);
}
