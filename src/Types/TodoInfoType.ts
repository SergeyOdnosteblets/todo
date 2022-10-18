import { TaskType } from "./TaskType"

export interface TodoInfoType {
    todos: TaskType[]
    setTodos: (event: TaskType[]) => void
    filteredTodos: TaskType[]
    theme: boolean
    getActiveTasks: () => void
    getCompletedTasks: () => void
    getAllTasks: () => void
}