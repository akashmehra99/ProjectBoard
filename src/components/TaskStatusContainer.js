import React from 'react';

import '../styles/components/taskStatusContainer.scss';

import Task from './Task';

class TaskStatusContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-container">
                <div className="status-heading">{this.props.status}</div>
                {this.props.tasks.map((task, index) => {
                    return (
                        <Task key={task.status + index} task={task} />
                    );
                })}
            </div>
        );
    }
}

export default TaskStatusContainer;