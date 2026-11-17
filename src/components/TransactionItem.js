import { useState } from "react";
import Button from "./Button";

import styles from "./TransactionItems.module.css";

function TransactionItem({ trans, onEdit, removeTransaction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [detail, setDetail] = useState(trans.detail);
  const [amount, setAmount] = useState(trans.amount);

  function handleSaved(e) {
    e.preventDefault();
    const updateData = {
      detail,
      amount: Number(amount),
    };

    onEdit(trans.id, updateData);
    setIsEditing(false);
  }

  return (
    <div className={styles.items}>
      {isEditing ? (
        <form onSubmit={handleSaved}>
          <input value={detail} onChange={(e) => setDetail(e.target.value)} />
          <input
            type="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button type="submit">Save Changes</Button>
          <Button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </form>
      ) : (
        <li>
          <span>{trans.detail}</span>
          <span>${trans.amount}</span>
          <Button onClick={() => removeTransaction(trans.id)}>Remove</Button>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </li>
      )}
    </div>
  );
}

export default TransactionItem;
