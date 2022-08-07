import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[85%]">
        <Navbar />
        <div className=" p-[20px] ">
          <Cards />
        </div>
        <div className="p-5 m-5 shadow">
          <p className="text-gray-500 mb-4 font-[500]  ">Latest Transactions</p>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
