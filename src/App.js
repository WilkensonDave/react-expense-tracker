import Header from "./components/Header";
import Expense from "./components/Expense";

import { useEffect, useState } from "react";
import TransactionSection from "./components/TransactionSection";

import styles from "./App.module.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    return savedTransactions ? savedTransactions : [];
  });

  function HandleAddTransaction(transaction) {
    if (!transaction) return;
    setTransactions([...transactions, transaction]);
  }

  useEffect(
    function () {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    },
    [transactions],
  );

  function removeTransaction(id) {
    const newTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(newTransactions);
  }

  function onEdit(id, updateData) {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, ...updateData } : transaction,
      ),
    );
  }

  return (
    <div className={styles.container}>
      <Header></Header>
      <Expense
        transactions={transactions}
        HandleAddTransaction={HandleAddTransaction}
        onAddTransaction={HandleAddTransaction}
      ></Expense>

      <TransactionSection
        transactions={transactions}
        removeTransaction={removeTransaction}
        onEdit={onEdit}
      />
    </div>
  );
}

export default App;
