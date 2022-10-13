import { AppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail } from './Detail';
import { Register } from './Register';
import { ThoughtList } from './ThoughtList';

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Stack direction="row" spacing={3}>
                            <Typography variant="h6">Cbt App</Typography>
                            <Button href="/" color="inherit">List</Button>
                            <Button href="/register" color="inherit">Register</Button>
                        </Stack>

                    </Toolbar>

                </AppBar>
                <Container maxWidth="lg">
                    <div style={{ padding: 30 }}>
                        <Routes>
                            <Route path="/" element={<ThoughtList />}></Route>
                            <Route path="register" element={<Register />}></Route>
                            <Route path="detail/:id" element={<Detail />}></Route>
                        </Routes>
                    </div>
                </Container>

            </BrowserRouter>

        </>
    );
}

export default App;
