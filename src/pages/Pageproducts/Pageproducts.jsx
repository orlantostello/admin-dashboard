import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import Sidebar from '../../components/Sidebar/Sidebar';

const PageProducts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[85%]">
        <Navbar />

        <div className="relative p-5 m-5 shadow">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default PageProducts;
