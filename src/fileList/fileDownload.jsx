import React, { Component } from 'react';
// import * as octicons from 'octicons';
import Octicon from '../octicon/octicon.jsx';

class FileDownload extends Component {
    constructor(props) {
        super(props);

        this.download = this.download.bind(this)
    }
    download() {
        // fetch(`http://localhost:3000/download/${filename}`, {
        //     method: "GET"
        // }).then(data => {
        //     return data.blob()
        // })
        console.log(this.props)
        let win = window.open(`http://localhost:3000/download/${this.props.filename}`, "_blank")
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