import React from 'react';
import styles from './MainPageWhyChooseUs.module.css';

const MainWhyChooseUs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.topic}>
                    Why do people choose us
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                            <div className={styles.boxTopix}>
                                Timely Updates
                            </div>
                            <div className={styles.boxDesc}>
                                We constantly monitor legislative changes and update our database, ensuring you stay informed of the latest requirements in fintech licensing.
                            </div>
                    </div>
                    <div className={styles.box}>
                            <div className={styles.boxTopix}>
                                Support for Global Expansion
                            </div>
                            <div className={styles.boxDesc}>
                                We help your business expand into new markets by offering clear insights into licensing requirements across countries, simplifying the entry process.
                            </div>
                    </div>
                    <div className={styles.box}>
                            <div className={styles.boxTopix}>
                            Time and Effort Savings
                            </div>
                            <div className={styles.boxDesc}>
                                Our platform eliminates the need to search through numerous regulatory websites, providing all essential data in one convenient place.
                            </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
        
    );
};

export default MainWhyChooseUs;
