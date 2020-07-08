// Get visible tasks

const getVisibleTasks = (tasks, status) => {
    if (status) {
        return tasks.filter((task) => {
            return task.status === status
        });
    } else {
        return tasks;
    }
};

export default getVisibleTasks;