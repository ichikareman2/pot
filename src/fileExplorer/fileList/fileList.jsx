import React, { Component } from 'react';
// import * as octicons from 'octicons';
import Octicon from '../../octicon/octicon.jsx';
import FileDownload from './fileDownload.jsx'

class FileList extends Component {
    constructor(props) {
        super(props)
    }
    changeDirectory(newCurrentDirectory) {
        this.props.changeDirectory(newCurrentDirectory);
    }
    render() {
        let files = this.props.files.map((x, i) => {
            let fileDownload, cd;
            if (x.isFile) {
                let filename = [this.props.path.join('/'), x.file].join('/')
                fileDownload = (
                    <FileDownload filename={filename} />
                )
                cd = (
                    <h5>{x.file}</h5>
                )
            }
            else {
                fileDownload = <Octicon name="file-directory" />
                cd = (
                    <button onClick={this.changeDirectory.bind(this, this.props.path.concat(x.file))}>
                        <h5>{x.file}</h5>
                    </button>
                )
            }
            return (
                <div key={x.file} className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-auto">
                                {fileDownload}
                            </div>
                            <div className="col-sm">
                                {cd}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">size: {x.size}</div>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="container">
                {files}
            </div>
        );
    }
}

export default FileList;