import React, { useContext } from 'react';
import NewArrivalsSection from '../components/NewArrivalsSection';
import NavBar from '../components/NavBar';
import { DataContext } from '../context/dataContext';
import TrendingRightNow from '../components/TrendingRightNow';
import PopularThisWeek from '../components/PopularThisWeek';
import Footer from '../components/footer';

export default function Home() {

  return (
    <>
      
      <NavBar />
      <PopularThisWeek />
      <NewArrivalsSection />
      <TrendingRightNow />
      <Footer/>
    </>
  );
}
