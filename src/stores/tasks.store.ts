import {create} from "zustand/react";
import {SelectedTask, SelectedTaskActions, Task, Tasks, TasksActions} from "../infraestructure";
import axios from "axios";
import {Constants} from "../config";
import {useGeneralStore} from "./general.store.ts";
import toast from "react-hot-toast";

const {setIsLoading} = useGeneralStore.getState();

export const useTasksStore = create<Tasks & TasksActions>((set, get) => ({
    data: {},
    page: 1,
    order: 'is_completed',
    task: {},

    setPage: (page: number) => (set({page})),
    setOrder: (order: string) => (set({order})),
    setTask: (task: Task) => (set({task: task})),

    fetchTasks: async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${Constants.BASEURL}tasks?limit=${Constants.LIMIT}&order=${get().order}&page=${get().page}`);

            set({data: response.data});
        } catch (error) {
            setIsLoading(false);
            toast.error(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    },

    createTask: async () => {
        try {
            setIsLoading(true);
            await axios.post(`${Constants.BASEURL}tasks/create`, get().task);
            toast.success('Tarea creada exitosamente');

            get().fetchTasks();
        } catch (error) {
            setIsLoading(false);
            toast.error(`Error creando tarea: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    },

    updateTask: async (taskId: number) => {
        try {
            setIsLoading(true);
            await axios.patch(`${Constants.BASEURL}tasks/update/${taskId}`);

            toast.success('Tarea Completada!');

            const updatedData = get().data.data.map(item =>
                item.id === taskId ? {...item, is_completed: !item.is_completed} : item
            );

            set({data: {...get().data, data: updatedData}});
        } catch (error) {
            setIsLoading(false);
            toast.error(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    },

    deleteTask: async () => {
        try {
            setIsLoading(true);
            const {id} = useTaskSelectedStore.getState();

            await axios.delete(`${Constants.BASEURL}tasks/delete/${id}`);
            toast.success('Tarea eliminada con éxito');

            get().fetchTasks();
        } catch (error) {
            setIsLoading(false);
            toast.error(`Error eliminando tarea: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    }
}));

export const useTaskSelectedStore = create<SelectedTask & SelectedTaskActions>((set) => ({
    id: null,
    title: '',

    setId: (value: number) => (set({id: value})),
    setTitle: (value: string) => (set({title: value})),
}))
