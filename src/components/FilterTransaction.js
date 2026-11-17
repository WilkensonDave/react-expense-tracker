import styles from "./FilterTransaction.module.css";

function FilterTransaction({ filterItem, setFilteredItem }) {
  return (
    <div className={styles.filterTransaction}>
      <select
        value={filterItem}
        onChange={(e) => setFilteredItem(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="expense">Expenses</option>
        <option value="income">Income</option>
      </select>
    </div>
  );
}

export default FilterTransaction;
