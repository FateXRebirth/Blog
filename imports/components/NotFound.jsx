import React from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends React.Component {

    handleClick() {
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div className="errorPage">
                <p className='oops'> Oops! </p>
                <p className='message'> You seem to be have landed on an invalid page </p>
                <div className="link">
                    <button className="ui blue button" onClick={this.handleClick.bind(this)}>GO TO HOME</button>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFound);