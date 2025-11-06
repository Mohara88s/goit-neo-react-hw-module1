import Transaction from "../Transaction/Transaction";
import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
	return (
		<table className={style.table}>
			<thead className={style.thead}>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			<tbody className={style.tbody}>
				{items.map((transaction, idx) => {
					return (
						<tr key={idx} className={style.tr}>
							{<Transaction transaction={transaction} />}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
