import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableData } from '../../utils/tableData';

const List = () => {
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
          {tableData.map(
            ({ id, idTracking, img, product, date, price, method, customer, status }) => (
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
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
