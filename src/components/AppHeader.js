import { Link } from 'react-router-dom';

const menuItem = {
  padding: '0 10px',
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 30px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
  },
  menuItem,
  menuItem2: {
    ...menuItem,
    borderLeft: '1px solid #ddd',
    borderRight: '1px solid #ddd',
  },
};

export default function AppHeader() {
  return (
    <div style={styles.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul style={styles.menu}>
          <li style={styles.menuItem}><Link to="/">Home</Link></li>
          <li style={styles.menuItem2}><Link to="/calculator">Calculator</Link></li>
          <li style={styles.menuItem}><Link to="/quote-of-the-day">Quote</Link></li>
        </ul>
      </nav>
    </div>
  );
}
