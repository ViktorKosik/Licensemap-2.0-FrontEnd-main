import React from 'react';
import styles from './MainPageDescription.module.css';

const MainPageDesc = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.leftRightContainer}>
                <div className={styles.left}>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.textContainer}>
                        <h1>FINTECH</h1>
                        <h2>LicenseMap</h2>
                        <p>Quick and reliable way to compare fintech licenses across countries, simplifying your path to global markets.</p>
                    </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </div>
    </div>
    );
};

export default MainPageDesc;
