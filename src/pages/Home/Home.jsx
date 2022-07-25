import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[85%]">
        <Navbar />
        <div className=" p-[20px] ">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
