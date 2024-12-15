import React from 'react';
import styles from './OurMission.module.css';

const OurMission = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.bottom}>
                    <div className={styles.missionText}>Our Mission</div>
                    <div className={styles.descriptionText}>
                        Our goal is to simplify access to essential information on fintech licensing worldwide. We aim to break down regulatory complexities, allowing our users to quickly understand the key requirements, permitted activities, and unique features of licenses in various regions.
                    </div>
                </div>
                <div className={styles.line}>

                </div>
            </div>
        </div>
    );
};

export default OurMission;
