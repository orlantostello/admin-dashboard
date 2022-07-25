import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const cardsData = [
  {
    title: 'Sales',
    color: {
      backGround: 'linear-gradient(180deg, #c267ff 0%, #ca84f3 100%)',
      boxShadow: '0px 10px 20px 0px #d3c6f5',
    },
    barValue: 75,
    value: '15,605',
    png: ShoppingCartOutlinedIcon,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Revenue',
    color: {
      backGround: 'linear-gradient(rgb(29, 253, 21) -146.42%, rgb(6, 230, 36) -46.42%)',
      boxShadow: '0px 10px 20px 0px #c0fdc0',
    },
    barValue: 83,
    value: '13,245',
    png: MonetizationOnOutlinedIcon,
    series: [
      {
        name: 'Revenue',
        data: [25, 55, 50, 70, 80, 100, 40],
      },
    ],
  },
  {
    title: 'Expenses',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    barValue: 65,
    value: '6,845',
    png: AccountBalanceWalletOutlinedIcon,
    series: [
      {
        name: 'Expenses',
        data: [5, 25, 13, 24, 12, 21, 23],
      },
    ],
  },
];
