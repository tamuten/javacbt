import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
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
