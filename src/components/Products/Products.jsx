import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { productsData } from '../../utils/productsData';

const Products = () => {
  console.log(productsData);
  return (
    <>
      <button className="absolute top-2 right-4 h-10 border-2 rounded-[12px]">
        <span className="text-[14px] text-black">Add product</span>
        <AddIcon />
      </button>
      <ul className="mt-6">
        {productsData.map(({ id, name, img, amount, price, description }) => (
          <li key={id} className=" mb-5 pointer-events-none">
            <div className="flex items-center justify-center">
              <img src={img} alt={name} className="w-[300px] " />

              <div className="flex flex-col items-center ml-6 w-[55%]">
                <h2 className="text-[22px] font-bold mb-4">{name}</h2>
                <p>{description}</p>
                <div className="mt-4">
                  <span className="mr-8">{`Price: ${price}$`} </span>
                  <span>{`Amount: ${amount}`}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
