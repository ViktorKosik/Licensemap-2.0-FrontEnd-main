import React from 'react';
import Header from '../components/Header/Header';
import MainPageDesc from '../components/MainPageDescription/MainPageDescription';
import MainWhyChooseUs from '../components/MainPageWhyChooseUs/MainPageWhyChooseUs';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <div>
        <Header />
        <MainPageDesc/>
        <MainWhyChooseUs/>
        <Footer/>
    </div>
  );
}

export default Main;
