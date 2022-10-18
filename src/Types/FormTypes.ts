import { TaskType } from "./TaskType"

export interface FormTypes {
    todos: TaskType[] | []
    setTodos: (event: TaskType[]) => void
    onBackgroundChange: boolean
}

