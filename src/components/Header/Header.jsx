import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.logo}>LOGO (IN PROGRESS)</div>
                    <nav className={styles.navigationContainer}>
                        <ul className={styles.chooser}>
                            <li>About Us</li>
                            <li>Licenses</li>
                            <li>Log In</li>
                            <li className={styles.signUp}>Sign Up</li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;
