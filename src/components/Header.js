import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Expense Tracker</h1>
      <h2>Track Your Expenses</h2>
    </div>
  );
}

export default Header;
