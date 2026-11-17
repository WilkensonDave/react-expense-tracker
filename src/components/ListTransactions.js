import TransactionItem from "./TransactionItem";

function ListTransactions({ transactions, removeTransaction, onEdit }) {
  return (
    <div>
      <h2>All Transactions</h2>
      {transactions?.length ? (
        transactions.map((trans) => (
          <ul key={trans.id}>
            <TransactionItem
              onEdit={onEdit}
              trans={trans}
              removeTransaction={removeTransaction}
            />
          </ul>
        ))
      ) : (
        <p>No Expenses</p>
      )}
    </div>
  );
}

export default ListTransactions;
