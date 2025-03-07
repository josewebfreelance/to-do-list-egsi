import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";
import {useTaskSelectedStore, useTasksStore} from "../../../../stores";

interface Props {
    open: boolean;

    handleClose: () => void;
}

export const DialogDeleteTaskComponent = ({open, handleClose}: Props) => {
    const deleteTask = useTasksStore(state => state.deleteTask);
    const title = useTaskSelectedStore(state => state.title);

    const handleConfirm = async () => {
        await deleteTask();
        handleClose();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Desea eliminar la tarea?</DialogTitle>
            <DialogContent>
                <DialogContentText>{title}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="text" className="btn-cancel">Cancelar</Button>
                <Button onClick={handleConfirm} variant="contained">Continuar</Button>
            </DialogActions>
        </Dialog>
    );
}
