import { AppBar, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
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
                        <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">Cbt App</Typography>
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
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton href="/">
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="List" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton href="/register">
                                <ListItemIcon>
                                    <FormatListBulletedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Register" />
                            </ListItemButton>
                        </ListItem>
                    </List>
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
