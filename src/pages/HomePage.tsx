import React, { useContext } from 'react';
import NewArrivalsSection from '../components/NewArrivalsSection';
import NavBar from '../components/NavBar';
import { DataContext } from '../context/dataContext';
import TrendingRightNow from '../components/TrendingRightNow';
import PopularThisWeek from '../components/PopularThisWeek';

export default function Home() {
  const { example, cuteFunction } = useContext(DataContext);

  return (
    <>
      {/* {cuteFunction('dimanche')}
      <p>{example}</p> */}
      <NavBar />
      <PopularThisWeek />
      <NewArrivalsSection />
      <TrendingRightNow />
    </>
  );
}
