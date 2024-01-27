export default function Stats({ items }) {
	if (items.length === 0)
		return (
			<footer className="stats">
				<em>Start adding items for your travel!</em>
			</footer>
		);

	const numItems = items.length;
	const numPackedItems = items.filter(item => item.packed).length;
	const percentagePacked = Math.round((numPackedItems / numItems) * 100);

	return (
		<footer className="stats">
			<em>
				{percentagePacked === 100
					? 'Your packing is complete! Enjoy your trip!'
					: `You have ${numItems} items on your list, and you have already packed ${numPackedItems} items (${percentagePacked}%)`}
			</em>
		</footer>
	);
}
