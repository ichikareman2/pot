import React, { Component } from 'react';
import Octicon from '../../octicon/octicon.jsx'

class Directory extends Component {
    constructor(props) {
        super();
    }
    render() {
        let pathEl = this.props.path.map((x, i) => {
            /// in case of path props changing to a more complicated 
            /// list of objects instead of list of string, you might need to loop object assign.

            // let pathClone = Object.assign({}, this.props.path)
            // console.log(pathClone)
            let pathClone = this.props.path.slice(0)
            let pathPart = pathClone.splice(0, i + 1)
            return (<div className="col-auto" key={`${x}-${i}`}>
                <button onClick={this.props.changeDirectory.bind(this, pathPart)}>
                    <h4>
                        {x}
                    </h4>
                </button>
            </div>
            )
        })
        let directoryEl = [];
        directoryEl.push(this.separator(0))
        pathEl.forEach(function (element, index) {

            directoryEl.push(element, this.separator(index + 1))
        }, this);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <button onClick={this.props.changeDirectory.bind(this, [])} ><Octicon name="home"/></button>
                    </div>

                    {directoryEl}
                </div>
            </div>
        )
    }
    separator(id) {
        return (<div className="col-auto" key={`separator-${id}`}>
            <h4>/</h4>
        </div>)
    }
}

export default Directory;