import React from 'react';

import '../styles/components/task.scss';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-cont on-track-border">
                <div className="task-des">
                    <div>CBSE: Grade:5 - Algebra</div>
                     <div className="dots"></div>
                </div>
                <div className="status-people-cont">
                    <div className="people-cont">
                        <div className="people">
                            <div className="people-name">AK</div>
                        </div>
                        <div className="people">
                            <div className="people-name">AK</div>
                        </div>
                        <div className="people">
                            <div className="people-name">AK</div>
                        </div>
                        <div className="people">
                            <div className="people-name">AK</div>
                        </div>
                    </div>
                    <div className="date-perc-cont">
                        <div className="completion-date">28-Nov-2020</div>
                        <div className="completion-perc">75%</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;