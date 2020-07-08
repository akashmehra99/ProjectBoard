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
                <Task />
                <Task />
                <Task />
            </div>
        );
    }
}

export default TaskStatusContainer;