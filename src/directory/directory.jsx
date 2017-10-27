import React, { Component } from 'react';
import Octicon from '../octicon/octicon.jsx'

class Directory extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <button><Octicon name="home" /></button>
                    </div>
                    <div className="col">
                        <h4>{this.props.path.join('/')}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;