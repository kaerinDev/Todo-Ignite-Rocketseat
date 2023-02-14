import styles from './Header.module.css';

import todoLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo" /> 
      <p><span>to</span><span>do</span></p>
    </header>
  );
}