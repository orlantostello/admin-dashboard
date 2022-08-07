import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { productsData } from '../../utils/productsData';
import ModalAddProduct from '../ModalAddProduct/ModalAddProduct';

const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className="absolute top-2 right-4 h-10 border-2 rounded-[12px]"
        onClick={onOpenModal}
      >
        <span className="text-[14px] text-black">Add product</span>
        <AddIcon />
      </button>

      {showModal && <ModalAddProduct onCloseModal={onCloseModal} />}

      <ul className="mt-6">
        {productsData.map(({ id, name, img, amount, price, description }) => (
          <li key={id} className=" mb-5 pointer-events-none">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[22px] font-bold mb-4">{name}</h2>
              <div className="flex items-center ">
                <img src={img} alt={name} className="w-[250px] " />

                <div className="flex flex-col  ml-6 w-[55%]">
                  <p>{description}</p>
                  <div className="mt-4 flex  justify-center">
                    <span className="mr-8">{`Price: ${price}$`} </span>
                    <span>{`Amount: ${amount}`}</span>
                  </div>
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
