import React from 'react';
import { connect } from 'react-redux';

import '../styles/components/dashboard.scss';

import TaskStatusContainer from './TaskStatusContainer';
import getVisibleTasks from '../selectors/tasks';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCategory: ['On Track', 'Delayed', 'On Hold'],
            status: ['on_track', 'delayed', 'on_hold']
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='conatiner'> 
                    {this.state.taskCategory.map((category, index) => {
                        return (
                            <TaskStatusContainer status={category} key={category} tasks={this.props[this.state.status[index]]} />
                        );
                    })}   
                </div>
            </React.Fragment>
        );
    }
}

const mapToStateProps = (state) => {
    return {
        on_track: getVisibleTasks(state.tasks, 'on_track'),
        delayed: getVisibleTasks(state.tasks, 'delayed'),
        on_hold: getVisibleTasks(state.tasks, 'on_hold')
    };
}

const ConnectedDashboard = connect(mapToStateProps)(Dashboard);

export default ConnectedDashboard;