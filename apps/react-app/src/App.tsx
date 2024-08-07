import { Grid } from '@mui/material';

import NavBar from './components/NavBar';
import { CategoriesPage, HomePage, LoginPage, PostPage } from './components/Page';
import { PostProvider, SnackbarProvider } from './context';

function App() {
  const page: string = 'HomePage';
  return (
    <SnackbarProvider>
      <PostProvider>
        <Grid container id="app" direction="column" height="100vh" wrap="nowrap">
          <NavBar />
          <Grid container item wrap="nowrap" sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 84px)' }}>
            {page === 'HomePage' && <HomePage />}
            {page === 'PostPage' && <PostPage />}
            {page === 'LoginPage' && <LoginPage />}
            {page === 'CategoriesPage' && <CategoriesPage />}
          </Grid>
        </Grid>
      </PostProvider>
    </SnackbarProvider>
  );
}

export default App;
