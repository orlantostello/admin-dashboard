import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import avatar from '../../assets/avatar.png';

const Navbar = () => {
  return (
    <div className="flex h-[50px] text-[#555] text-[14px] items-center border-b-[0.5px] border-[#e7e4e4]">
      <div className="flex items-center justify-end w-[100%] p-5">
        <ul className="flex items-center">
          <li className="flex items-center mr-5">
            <LanguageOutlinedIcon className="text-[20px]" />
            English
          </li>
          <li className="flex items-center mr-5">
            <DarkModeOutlinedIcon className="text-[20px]" />
          </li>
          <li className="flex items-center mr-5">
            <img src={avatar} alt="" className="w-[30px] h-[30px] rounded-[50%]" />
          </li>

          <li className="flex items-center mr-5">
            <ListOutlinedIcon className="text-[20px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
