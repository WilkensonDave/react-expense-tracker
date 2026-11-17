import { useState } from "react";
import styles from "./AddTransaction.module.css";

function AddTransaction({ onAddTransaction, setAddBalance }) {
  const [amount, setAmount] = useState("");
  const [detail, setDetails] = useState("");
  const [category, setCategory] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;

    onAddTransaction({
      amount,
      detail,
      category,
      id: Date.now(),
    });
    setAmount("");
    setDetails("");
    setCategory("expense");
    setAddBalance(false);
  };

  return (
    <div className={styles.addTransactionStyle}>
      <input
        value={amount}
        type={"number"}
        placeholder="Enter amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      ></input>
      <input
        value={detail}
        type={"text"}
        placeholder="Enter detail"
        onChange={(e) => setDetails(e.target.value)}
      ></input>
      <div>
        <div className={styles.radioItem}>
          <input
            type="radio"
            id="expense"
            name="type"
            value={"expense"}
            checked={category === "expense"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
        </div>
        <div className={styles.radioItem}>
          <input
            type="radio"
            id="income"
            value={"income"}
            checked={category === "income"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="income">Income</label>
        </div>
        <button onClick={handleSubmit}>Add Transaction</button>
      </div>
    </div>
  );
}

export default AddTransaction;
