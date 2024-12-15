import React from 'react';
import styles from './Footer.module.css';

const WhatWeDo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.MainTextContainer}>
                    <div className={styles.MainTextINMainTextContainer}>
                        FINTECH LicenseMap
                    </div>
                    <div className={styles.BottomTextINMainTextContainer}>
                        Navigate the world of fintech licensing with ease
                    </div>
                </div>
                <div className={styles.nav}>
                    <div className={styles.navigationContainer}>
                        <div className={styles.column}>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Licenses</li>
                            <li>Profile</li>
                        </div>
                        <div className={styles.column}>
                            <li>Sign Up</li>
                            <li>Log In</li>
                        </div>
                    </div>
                    <div className={styles.contactUs}>
                        <div style={{ marginBottom: '10px' }}>Contact Us</div>
                        <div style={{ marginBottom: '10px' }}>Have questions or need assistance?</div>
                        <div style={{ marginBottom: '10px' }}>Email: support@fintechlicensingmap.com</div>
                        <div style={{ marginBottom: '10px' }}>Phone: +123-456-7890</div>
                    </div>
                </div>

                <div className={styles.MainTextContainer}>
                    <div style={{ marginTop: '70px'}} className={styles.MainTextINMainTextContainer}>
                        © 2024 FINTECH LicenseMap 
                    </div>
                    <div  style={{ marginBottom: '100px'}} className={styles.BottomTextINMainTextContainer}>
                        All rights reserved.
                    </div>
                </div>



            </div>
        </div>
    );
};

export default WhatWeDo;
