import { useState } from 'react';
import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { PageContainer } from './CategoriesPage.styles';
import { Category } from '../../../types';

const categories: Category[] = [
  { id: '663fef70d513515319551d1f', name: 'Travel' },
  { id: '663fef70d513515319546d1f', name: 'Food' }
];

function CategoriesPage() {
  const [rows] = useState(categories);

  function handleEditItem() {}
  function handleDeleteItem() {}
  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: 'flex-end', display: 'flex' }}>
        {/* Add category (Icon button) */}
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
      {/* Modal */}
    </PageContainer>
  );
}

export default CategoriesPage;
