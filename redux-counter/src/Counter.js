import React from 'react';
import { connect } from 'react-redux';
import './index.css';


class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
      };

    render() {
        return (
            <div className="container-box">
                <h2>Counter</h2>
                <div className="counter-body">
                <span className="counter-value">{this.props.count}</span>
                    <button 
                        onClick={this.decrement}>
                        -
                    </button>
                    <button 
                        onClick={this.increment}>
                        +
                    </button>
                    <button
                        onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);