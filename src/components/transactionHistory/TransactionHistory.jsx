import s from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
  <div className={s.wrap}>
    <table className={s.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
      <tbody className={s.tabl}>
          {items.map((transaction) => {
          return <tr key={transaction.id}>
              <td className={s.type}>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
          </tr>
            })}
      </tbody>
    </table>
  </div>
)}

export default TransactionHistory
