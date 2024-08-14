import { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { PageContainer } from './CategoriesPage.styles';
import { Category } from '../../../types';

const categories: Category[] = [
  { id: '663fef70d513515319551d1f', name: 'Travel' },
  { id: '663fef70d513515319546d1f', name: 'Food' }
];

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

function CategoriesPage() {
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(categories);

  const handleAdd = (categoryName: string) => {
    categories.push({
      id: categories[categories.length - 1].id,
      name: categoryName
    });
    setRows(categories);
    handleClose();
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  function handleCategory(str: string) {
    setCategory(str);
  }

  function handleEditItem() {}
  function handleDeleteItem() {}

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: 'flex-end', display: 'flex' }}>
        <IconButton aria-label="open" onClick={handleOpen}>
          <AddIcon />
        </IconButton>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell>
                    <IconButton aria-label="delete" onClick={handleDeleteItem}>
                      <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label="edit" onClick={handleEditItem}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="categories-title" aria-describedby="categories-desc">
        <Box sx={style}>
          <Typography id="categories-title" variant="h6" component="h2">
            Add a category
          </Typography>

          <TextField fullWidth required id="category-modal-body" label="Category name" onChange={(e) => handleCategory(e.target.value)} />
          <Button type="submit" variant="contained" onClick={(e) => handleAdd(category)}>
            Submit
          </Button>
        </Box>
      </Modal>
    </PageContainer>
  );
}

export default CategoriesPage;
