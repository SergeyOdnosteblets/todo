import { TaskType } from './TaskType';

export interface TodoListType {
    todos: TaskType[] | []
    setTodos: (event: TaskType[]) => void
    setFilteredTodos:(event: TaskType[]) => void
    filteredTodos: TaskType[] | []
    theme: boolean
}