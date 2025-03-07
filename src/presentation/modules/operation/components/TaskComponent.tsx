import Card from '@mui/material/Card';
import React, {useState} from "react";
import {Task} from "../../../../infraestructure";
import {Box, CardContent, Chip, Collapse, IconButton, Stack, Tooltip, Typography} from "@mui/material";
import {DateRange, ExpandMore} from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {useTaskSelectedStore, useTasksStore} from "../../../../stores";
import Grid from "@mui/material/Grid2";

interface Props extends Task {
    handleOpen: () => void;
}

export const TaskComponent = ({title, description, taskId, is_completed, id, created_at, handleOpen}: Props) => {
    const updateTask = useTasksStore(state => state.updateTask);

    const setId = useTaskSelectedStore(state => state.setId);
    const setTitle = useTaskSelectedStore(state => state.setTitle);

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleOpenDelete = () => {
        setId(id);
        setTitle(title);
        handleOpen();
    }

    return (
        <Card key={taskId} variant='elevation' className="task-component">
            <Tooltip title={is_completed ? 'Finalizada' : 'Pendiente'}>
                <CardContent>
                    <Stack direction='row' spacing={2}>
                        <Tooltip title={!is_completed ? 'Click para finalizar' : ''}>

                            <IconButton className="btn-status" onClick={() => updateTask(id)}>
                                {
                                    is_completed && <CheckCircleRoundedIcon className="btn-status__icon"/>
                                }
                            </IconButton>
                        </Tooltip>

                        <Typography variant="h6" color="textSecondary"
                                    style={{textDecoration: is_completed ? 'line-through' : 'none'}}
                                    gutterBottom>{title}</Typography>

                        <Box sx={{flexGrow: 1}}/>

                        <Chip label={new Date(created_at as string).toLocaleDateString('en-GB')} className="created-at"
                              icon={<DateRange/>}/>

                        <Tooltip title="Eliminar tarea">
                            <IconButton onClick={handleOpenDelete} className="btn-delete">
                                <DeleteIcon className="btn-delete__icon"/>
                            </IconButton>
                        </Tooltip>

                        <Grid sx={{
                            width: '2rem'
                        }}>
                            {
                                description?.toString().length > 0 && (
                                    <Tooltip title="Ver más">
                                        <ExpandMore
                                            expand={expanded.toString()}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon/>
                                        </ExpandMore>
                                    </Tooltip>
                                )
                            }
                        </Grid>
                    </Stack>
                </CardContent>
            </Tooltip>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body1" color="textSecondary" gutterBottom>{description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
