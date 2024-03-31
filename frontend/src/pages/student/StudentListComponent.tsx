import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function StudentListComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Index Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"> 
                    <Button sx={{
                        bgcolor: '#ff0000'+ ' !important', 
                        '&:hover': {
                            backgroundColor: '#4EF037',
                            opacity: [0.9, 0.8, 0.7]
                        },
                        color: 'white', width: '120px'
                    }} 
                    //    onClick={() => handelClick(id)} 
                    variant="contained">
                            Delete
                        </Button>
                </TableCell>
              <TableCell align="right"> 
                    <Button sx={{
                        bgcolor: '#3c998e'+ ' !important', 
                        '&:hover': {
                            backgroundColor: '#4EF037',
                            opacity: [0.9, 0.8, 0.7]
                        },
                        color: 'white', width: '120px'
                    }} 
                    //    onClick={() => handelClick(id)} 
                    variant="contained" >
                            Delete
                        </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}