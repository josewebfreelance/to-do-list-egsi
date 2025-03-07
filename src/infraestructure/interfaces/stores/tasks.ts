export interface TasksResponse {
    meta?: Meta;
    data?: Task[];
}

export interface UserEmail {
    user_email?: string;
}

export interface Task extends UserEmail{
    id?: number,
    title?: string,
    description?: null | string,
    is_completed?: boolean,
    created_at?: Date,
    key?: number,
    taskId?: number | undefined
}

export interface Meta {
    pages?: number;
    next?: string;
    previous?: null;
}

export interface Tasks {
    data: TasksResponse;
    page?: number;
    order?: string;
    task?: Task
}

export interface TasksActions {
    setPage: (page: number) => void;
    setOrder: (value: string) => void;
    setTask: (task: Task) => void;

    fetchTasks: () => void;
    createTask: () => void;
    updateTask: (taskId: number | undefined) => void;
    deleteTask: () => void;
}

export interface SelectedTask {
    id: number;
    title: string;
}

export interface SelectedTaskActions {
    setId: (id: number | undefined) => void;
    setTitle: (title: string | undefined) => void;
}
