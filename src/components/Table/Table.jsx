import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 2143135,
      idTracking: 2143135,
      product: 'Apple iPad mini 2021',
      img: 'https://mzimg.com/big/j1/gugywbo02j1.jpg',
      customer: 'Chaim Lewis',
      date: '28 July',
      price: 880,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2637235,
      idTracking: 2637235,
      product: 'Playstation 5',
      img: 'https://mzimg.com/big/n1/gfpmqomkzn1.jpg',
      customer: 'Michael Doe',
      date: '28 July',
      price: 900,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2642853,
      idTracking: 2642853,
      product: 'Monitor 2E G2721B',
      img: 'https://s.ek.ua/jpg_zoom1/2203216.jpg',
      customer: 'Allen Raymond',
      date: '28 July',
      price: 450,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 2357791,
      idTracking: 2357791,
      product: 'HyperX Cloud Alpha',
      img: 'https://s.ek.ua/jpg_zoom1/1193298.jpg',
      customer: 'Cyrus Jackson',
      date: '28 July',
      price: 125,
      method: 'Online Payment',
      status: 'Approved',
    },
    {
      id: 2347358,
      idTracking: 2347358,
      product: 'Apple iPhone 13 Pro',
      img: 'https://s.ek.ua/jpg_zoom1/2090047.jpg',
      customer: 'Harold Carol',
      date: '28 July',
      price: 1350,
      method: 'Online Payment',
      status: 'Delivered',
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Tracking ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Customer</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Payment Method</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, idTracking, img, product, date, price, method, customer, status }) => (
            <TableRow key={id}>
              <TableCell className="tableCell">{idTracking}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={img} alt="" className="w-8 h-8 mr-[10px]  object-cover" />
                  {product}
                </div>
              </TableCell>
              <TableCell>{customer}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{method}</TableCell>
              <TableCell>
                <span
                  className={
                    status === 'Approved'
                      ? `text-[green] bg-[#91fe9f78] p-2 rounded-[10px]`
                      : status === 'Pending'
                      ? `text-[goldenrod] bg-[#bdbd031a] p-2 rounded-[10px]`
                      : `text-white bg-[#59bfff] p-2 rounded-[10px]`
                  }
                >
                  {status}
                </span>
              </TableCell>
              <TableCell align="left" sx={{ color: '#00b5ff' }}>
                Details
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
