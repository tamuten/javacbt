import { AppBar, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './Register';
import { ThoughtList } from './ThoughtList';

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Cbt App</Typography>
            <Button variant="contained" color="primary" ></Button>
            <Button>List</Button>
          </Toolbar>

        </AppBar>
        <Container maxWidth="lg">
          <div style={{ padding: 30 }}>
            <Routes>
              <Route path="/" element={<ThoughtList />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Routes>
          </div>
        </Container>

      </BrowserRouter>

    </>
  );
}

export default App;
