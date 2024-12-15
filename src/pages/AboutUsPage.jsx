import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Header from '../components/Header/Header';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import OurMission from '../components/OurMission/OurMission';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import AtFintechLicensingMap from '../components/AtFintechLicensingMap/AtFintechLicensingMap';
import Footer from '../components/Footer/Footer';

function AboutUsPage() {
  return (
    <div>
        <Header/>
        <AboutUs/>
        <OurMission/>
        <WhyChooseUs/>
        <WhatWeDo/>
        <HowWeWork/>
        <AtFintechLicensingMap/>
        <Footer/>
    </div>
  );
}

export default AboutUsPage;
