export interface StatusType {
    onBackgroundChange: boolean
    getActiveTasks: (event: any) => void
    getCompletedTasks: (event: any) => void
    getAllTasks: (event: any) => void
}

