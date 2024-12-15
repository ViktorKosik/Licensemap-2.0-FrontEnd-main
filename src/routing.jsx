import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import OurMission from './components/OurMission/OurMission';
import HowWeWork from './components/HowWeWork/HowWeWork';
import AtFintechLicensingMap from './components/AtFintechLicensingMap/AtFintechLicensingMap';
import Footer from './components/Footer/Footer';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: "/test",
        element: <Header/>
    }
])


