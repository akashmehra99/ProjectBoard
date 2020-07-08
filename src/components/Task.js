import React from 'react';

import '../styles/components/task.scss';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const border = 'task-cont ' + this.props.task.status + '_border';
        return (
            <div className={border}>
                <div className="task-des">
                    <div>{this.props.task.description}</div>
                     <div className="dots"></div>
                </div>
                <div className="status-people-cont">
                    <div className="people-cont">
                        {this.props.task.people.map((person, index) => {
                            return (
                                <div className="people" key={this.props.task.id + index}>
                                    <div className="people-name" id={this.props.task.id}>{person}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="date-perc-cont">
                        <div className="completion-date">{this.props.task.targetDate}</div>
                        <div className="completion-perc">{this.props.task.completion}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;