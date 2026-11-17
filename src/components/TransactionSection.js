import { useState } from "react";
import ListTransactions from "./ListTransactions";
import FilterTransaction from "./FilterTransaction";

import styles from "./TransactionSection.module.css";

function TransactionSection({ transactions, removeTransaction, onEdit }) {
  const [searchInput, setSearchInput] = useState("");
  const [filterItem, setFilteredItem] = useState("All");

  const filteredItems = transactions.filter((item) => {
    const searchResults = item.detail
      .toLowerCase()
      .includes(searchInput.toLowerCase().trim());
    const searchCategory = filterItem === "All" || item.category === filterItem;
    return searchResults && searchCategory;
  });

  return (
    <div className={styles.transactionSection}>
      <input
        value={searchInput}
        placeholder="Search Transactions..."
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <FilterTransaction
        setFilteredItem={setFilteredItem}
        filterItem={filterItem}
      />
      <ListTransactions
        transactions={filteredItems}
        onEdit={onEdit}
        removeTransaction={removeTransaction}
      />
    </div>
  );
}

export default TransactionSection;
