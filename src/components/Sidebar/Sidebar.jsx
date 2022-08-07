import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Link } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className="min-h-[100vh] bg-white border-r-[0.5px] border-[#e7e4e4] flex-1">
      <div className="flex h-[50px] items-center justify-center">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="text-[20px] text-[#9825db] font-bold">Shops</span>
        </Link>
      </div>
      <hr className="border-r-[0.5px] border-[#e7e4e4] h-0" />
      <div className="pl-[10px] pt-2">
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="text-[18px] text-[#ad51f8]" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <li>
              <ShoppingCartOutlinedIcon className={s.icon} />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className={s.icon} />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <PeopleOutlineIcon className={s.icon} />
            <span>Customers</span>
          </li>

          <li>
            <InsertChartIcon className={s.icon} />
            <span>Stats</span>
          </li>

          <li>
            <SettingsApplicationsIcon className={s.icon} />
            <span>Settings</span>
          </li>

          <li>
            <ExitToAppIcon className={s.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
