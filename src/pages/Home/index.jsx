import React from 'react';

import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import Table from '../../components/Table';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Searchbar />
        <Table />
      </main>
    </>
  );
};

export default Home;
