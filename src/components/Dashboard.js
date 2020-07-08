import React from 'react';

import '../styles/components/dashboard.scss';

import TaskStatusContainer from './TaskStatusContainer';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCategory: ['On Track', 'Delayed', 'On Hold']
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='conatiner'> 
                    {this.state.taskCategory.map((category) => {
                        return (
                            <TaskStatusContainer status={category} key={category} />
                        );
                    })}   
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;