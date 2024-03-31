import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


interface StdProps{
   data: string
  }


export default function StudentListComponent({data}: StdProps) {
  

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
          {data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.index}</TableCell>
              <TableCell align="right"> 
                    <Button sx={{
                        bgcolor: '#09bd0c'+ ' !important', 
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
                    bgcolor: '#09bd0c'+ ' !important', 
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