import Grid from "@mui/material/Grid2";
import {Container, Fab, Pagination, Stack, Tooltip} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useTasksStore} from "../../../../stores";
import {AppBarComponent, DialogDeleteTaskComponent, DialogTask, TaskComponent} from "../components";
import AddIcon from '@mui/icons-material/Add';

export const TasksPage = () => {
    const fetchTasks = useTasksStore(state => state.fetchTasks);
    const setPage = useTasksStore(state => state.setPage);
    const data = useTasksStore(state => state.data);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, [])

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        fetchTasks();
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    return (
        <Grid className="tasks-page" container sx={{flexGrow: 1}}>
            <AppBarComponent/>

            <Container sx={{mt: 2, mb: 2, width: { xs: '100%', sm: '80%', md: '80%', lg: '50%', xl: '50%' }}} className="tasks-page-container">
                <Stack sx={{mt: 2}}>
                    <Stack spacing={2}>
                        {
                            data.data?.map((task) => (
                                <TaskComponent key={task.id} taskId={task.id} {...task}
                                               handleOpen={() => handleOpenDelete()}/>
                            ))
                        }
                    </Stack>

                    <Pagination sx={{mt: '1rem'}} count={data.meta?.pages} onChange={handleChangePage}/>
                </Stack>

                <Tooltip title="Crear tarea">
                    <Fab color="primary" aria-label="add" className="btn-add" onClick={handleOpen}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>
            </Container>

            <DialogTask open={open} handleClose={handleClose} isCreate={true}/>
            <DialogDeleteTaskComponent open={openDelete} handleClose={handleCloseDelete}/>

        </Grid>
    );
};
