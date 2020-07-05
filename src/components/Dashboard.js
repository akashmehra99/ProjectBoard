import React from 'react';

import '../styles/components/dashboard.scss';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='conatiner'>
                <div className="heading">Board</div>
            </div>
        );
    }
}

export default Dashboard;