import { Alert, AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail } from './Detail';
import { Register } from './Register';
import { ThoughtList } from './ThoughtList';
import { AppSnackbar, SnackbarContext } from './SnackbarContext';

const drawerWidth = 240;

export const App = () => {
    const [drawerOpen, setDrowerOpen] = useState(false);
    const [appSnackbar, setAppSnackbar] = useState<AppSnackbar>({
        isOpen: false,
        message: "メッセージ",
        severity: "info",
        autoHideDuration: 6000
    });
    const handleDrawerOpen = () => {
        setDrowerOpen(open => !open);
    }

    const handleSnackbarClose = () => {
        const snackbar = { ...appSnackbar };
        snackbar.isOpen = false;
        setAppSnackbar(snackbar);
    }

    return (
        <>
            <BrowserRouter>
                <Box sx={{ display: "flex" }}>
                    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
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
                        open={drawerOpen}
                        onClose={handleDrawerOpen}
                        variant="permanent"
                    >
                        <Toolbar />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton href="/">
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton href="/register">
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Register" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1 }} >
                        <Toolbar />
                        <Box sx={{ p: 3 }}>
                            <SnackbarContext.Provider value={{ setAppSnackbar }}>
                                <Routes>
                                    <Route path="/" element={<ThoughtList />}></Route>
                                    <Route path="register" element={<Register />}></Route>
                                    <Route path="detail/:id" element={<Detail />}></Route>
                                </Routes>
                            </SnackbarContext.Provider>
                        </Box>
                    </Box>
                </Box>
            </BrowserRouter>
            <Snackbar
                open={appSnackbar.isOpen}
                autoHideDuration={appSnackbar.autoHideDuration}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity={appSnackbar.severity}>
                    {appSnackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}

export default App;
