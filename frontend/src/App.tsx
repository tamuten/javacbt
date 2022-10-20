import { AppBar, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail } from './Detail';
import { Register } from './Register';
import { ThoughtList } from './ThoughtList';

const drawerWidth = 240;

export const App = () => {
    const [drowerOpen, setDrowerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrowerOpen(open => !open);
    }

    const toggleOpen = () => {
        setDrowerOpen(!drowerOpen);
    }

    return (
        <>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Stack direction="row" spacing={3}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">Cbt App</Typography>
                            <Button href="/" color="inherit">List</Button>
                            <Button href="/register" color="inherit">Register</Button>
                        </Stack>

                    </Toolbar>

                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        }
                    }}
                    anchor="left"
                    open={drowerOpen}
                    onClose={toggleOpen}
                >
                    <Toolbar />
                </Drawer>
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
