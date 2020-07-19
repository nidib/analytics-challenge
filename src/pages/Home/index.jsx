import React from 'react';

import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Searchbar />
        <Table />
      </main>
      <Footer />
    </>
  );
};

export default Home;
