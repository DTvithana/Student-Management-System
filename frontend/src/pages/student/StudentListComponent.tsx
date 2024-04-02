import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Dialog, Fade } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';
import { useState } from 'react';
import StudentEditCard from './StudentEditCard';

interface StdProps {
  data: object[];
  handleView: (id: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  std: object[];
}

function StudentEdit(props: { onClose: any; selectedValue: any; openView: any; }) {
    const { onClose, selectedValue, openView } = props;
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog 
      sx={{
        backdropFilter: "blur(2px) sepia(5%)",
      }}
      onClose={handleClose} open={openView} maxWidth='xl' scroll='body' TransitionComponent={Fade}>
        <StudentEditCard handelClick={handleClose}/>
      </Dialog>
    
    );
  }
  
  StudentEdit.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
  };


export default function StudentListComponent({ data, handleView, handleEdit, handleDelete }: StdProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  
  const [openEdit, setOpenEdit] = useState(false);
 
  const handleCloseEdit = () => {
    setOpenEdit(false);
  }; 

  return (
    <Box paddingLeft='4rem'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300, maxWidth: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.fName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.fName}</TableCell>
                  <TableCell align="right">{row.index}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        bgcolor: '#22c25e' + ' !important',
                        '&:hover': { backgroundColor: '#4EF037', opacity: [0.9, 0.8, 0.7] },
                        color: 'white',
                        width: '120px',
                      }}
                      variant="contained"
                      onClick={() => { 
                        handleEdit(row.id)
                        setOpenEdit(true)}}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        bgcolor: '#3c998e' + ' !important',
                        '&:hover': { backgroundColor: '#4EF037', opacity: [0.9, 0.8, 0.7] },
                        color: 'white',
                        width: '120px',
                      }}
                      variant="contained"
                      onClick={() => { 
                        handleView(row.id)
                        }}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        bgcolor: '#ff0000' + ' !important',
                        '&:hover': { backgroundColor: '#4EF037', opacity: [0.9, 0.8, 0.7] },
                        color: 'white',
                        width: '120px',
                      }}
                      variant="contained"
                      onClick={() => { 
                        handleDelete(row.id)
                        }}
                    >
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data?.length || 0}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
      />
       

              <StudentEdit
              openView={openEdit}
              onClose={handleCloseEdit} selectedValue={''} open={false}                 />
    </Box>
  );
}

