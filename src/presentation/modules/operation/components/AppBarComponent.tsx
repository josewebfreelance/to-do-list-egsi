import {
    AppBar,
    Avatar,
    Box,
    Divider,
    IconButton,
    ListItem,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import {getTokenFromSessionStorage, useAuthenticationStore, useTasksStore} from "../../../../stores";
import {useNavigate} from "react-router-dom";
import {ItemOrderComponent} from "./ItemOrderComponent.tsx";

export const AppBarComponent = () => {
    const fetchTasks = useTasksStore(state => state.fetchTasks);

    const order = useTasksStore(state => state.order);
    const setOrder = useTasksStore(state => state.setOrder);
    const logout = useAuthenticationStore(state => state.logout);
    const tokenStorage = getTokenFromSessionStorage();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleChangeOrder = (orderValue: string) => {
        if (!order) {
            setOrder(orderValue);
        }

        if (order?.includes('-')) {
            setOrder(orderValue.replace('-', ''));
        } else {
            setOrder(`-${orderValue}`);
        }
        fetchTasks();
    }

    const navigate = useNavigate();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <AppBar position="static" className="app-bar-component">
            <Toolbar>
                <Box sx={{flexGrow: 1}}/>

                <Stack component="ul" className="order-item-list">

                    <ListItem sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                    }}>
                        <Typography variant="h6" color="textSecondary" gutterBottom>Ordenar por: </Typography>
                        <ItemOrderComponent
                            order={order as string} label="Creación" valueInclude="created_at"
                            handleChangeOrder={handleChangeOrder}/>

                        <ItemOrderComponent
                            order={order as string} label="Titulo" valueInclude="title"
                            handleChangeOrder={handleChangeOrder}/>

                        <ItemOrderComponent
                            order={order as string} label="Estado" valueInclude="is_completed"
                            handleChangeOrder={handleChangeOrder}/>

                    </ListItem>
                </Stack>

                <Box sx={{flexGrow: 1}}/>

                <Stack spacing={2} direction="row" className="user-content">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}} className="user-content__avatar">
                        <Avatar alt="Remy Sharp" src="/src/assets/avatar.gif"/>
                    </IconButton>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem>
                            <Typography sx={{textAlign: 'center'}}>{tokenStorage.email}</Typography>
                        </MenuItem>

                        <Divider/>

                        <MenuItem onClick={handleLogout}>
                            <Typography sx={{textAlign: 'center'}}>Cerrar sesión</Typography>
                        </MenuItem>
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
