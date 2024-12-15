import React from 'react';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.topic}>
                        What We Do
                    </div>
                    <div className={styles.description}>
                        With a focus on Electronic Money Institution (EMI), Money Services Business (MSB), Payment Institution (PI), Money Service Operator (MSO), and Stored Value Facility (SVF) licenses, we provide a comprehensive overview of each license type. You can compare licenses, access summaries on permitted activities, and stay updated on the latest regulatory changes in just a few clicks.
                    </div>
                </div>
                <div className={styles.imgContainer}>
                        
                </div>

                <div className={styles.line}></div>
            </div>
        </div>
    );
};

export default WhatWeDo;
