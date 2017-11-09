import React, { Component } from 'react';
// import * as octicons from 'octicons';
import Octicon from '../../octicon/octicon.jsx';

class FileDownload extends Component {
    constructor(props) {
        super(props);

        this.download = this.download.bind(this)
    }
    download() {
        let filename = encodeURIComponent(this.props.filename)
        let win = window.open(`http://localhost:3000/download/${filename}`, "_blank")
        win.focus();
    }
    render() {
        return (
            <button onClick={this.download}>
                {<Octicon name="cloud-download" />}
            </button>
        )
    }
}

export default FileDownload