import { useEffect, useState } from "react";
import Button from "./Button";
import AddTransaction from "./AddTransaction";
import styles from "./Expense.module.css";

function Expense({ transactions, onAddTransaction }) {
  const [isAddBalance, setAddBalance] = useState(false);
  let budjet = transactions
    .filter((transaction) => transaction.category === "income")
    .reduce((acc, total) => {
      return acc + total.amount;
    }, 0);

  const expenses = transactions
    .filter((transaction) => transaction.category === "expense")
    .reduce((acc, total) => {
      return acc + total.amount;
    }, 0);

  let balance = budjet - expenses;

  return (
    <>
      <div>
        <div className={styles.balanceItem}>
          <h3>Balance ${balance}</h3>
          <Button onClick={() => setAddBalance(true)}>Add</Button>
        </div>

        {isAddBalance && (
          <AddTransaction
            setAddBalance={setAddBalance}
            onAddTransaction={onAddTransaction}
          />
        )}
      </div>
      <div className={styles.displayItems}>
        <div className={styles.expense}>
          <h2>Expense</h2>
          <h3>${expenses}</h3>
        </div>
        <div className={styles.income}>
          <h2>Budget</h2>
          <h3>${budjet}</h3>
        </div>
      </div>
    </>
  );
}

export default Expense;
