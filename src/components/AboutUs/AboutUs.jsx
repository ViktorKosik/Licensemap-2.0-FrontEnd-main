import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.leftRightContainer}>
                <div className={styles.left}>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.textContainer}>
                        <h1>About Us</h1>
                        <h2>Fintech Licensemap 2.0</h2>
                    </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;
