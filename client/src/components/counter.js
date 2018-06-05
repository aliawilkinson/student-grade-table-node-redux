import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from '../actions';

class Counter extends Component {
    render() {
        const { count } = this.props
        return (
            <div>
                <h1>count: {count}</h1>
                <button onClick={() => this.props.incrementCount(count)}>Increment Count</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.countReducer.count
    }
}

export default connect(mapStateToProps, { incrementCount })(Counter);