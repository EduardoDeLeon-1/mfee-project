import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function NavBar(): React.JSX.Element {
  return (
    <Grid
      item
      sx={{
        display: 'flex',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0065c9',
        height: '84px'
      }}
    >
      <NavLink
        to="/"
        style={{
          textDecoration: 'none',
          color: 'white',
          display: 'flex',
          gap: '16px',
          alignItems: 'center'
        }}
      >
        <TravelExploreIcon sx={{ width: 45, height: 45 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" fontWeight="bold">
            Discovering the World
          </Typography>
          <Typography variant="caption" alignItems="center">
            Making your Life Easier
          </Typography>
        </Box>
      </NavLink>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: 2
        }}
      >
        <NavLink
          to="/categories"
          end
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            padding: '0.5em',
            borderRadius: '10px',
            backgroundColor: isActive ? '#307ecc' : 'transparent'
          })}
        >
          Categories
        </NavLink>
        <NavLink
          to="/login"
          end
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            padding: '0.5em',
            borderRadius: '10px',
            backgroundColor: isActive ? '#307ecc' : 'transparent'
          })}
        >
          Login
        </NavLink>
      </Box>
    </Grid>
  );
}
