import React, { Component } from 'react';
import * as octicons from 'octicons';

class Octicon extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (<span dangerouslySetInnerHTML={{__html:octicons[this.props.name].toSVG()}}></span>)
    }
}
export default Octicon;