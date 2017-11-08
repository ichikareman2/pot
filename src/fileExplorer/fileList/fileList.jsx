import React, { Component } from 'react';
// import * as octicons from 'octicons';
import Octicon from '../../octicon/octicon.jsx';
import FileDownload from './fileDownload.jsx'

class FileList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
        // this.changeDirectory = this.changeDirectory.bind(this);
    }
    componentDidMount() {
        let pathString = this.props.path.join('/')
        this.browse(pathString)
    }
    componentWillReceiveProps(newProps) {
        let pathString = newProps.path.join('/')
        this.browse(pathString)
    }
    browse(pathString) {
        // let data = new FormData();
        // data.append("file", this.state.files[0])

        fetch(`http://localhost:3000/browse/${encodeURIComponent(pathString)}`,
            {
                method: "GET",
                // headers: {
                //     "Content-type": "image"
                // },
                // body: this.state.files[0]
                // body: data
            }).then((data) => {
                return data.json()
            }).then((json) => {
                this.setState({
                    files: json
                })
            })
    }
    changeDirectory(newCurrentDirectory) {
        this.props.changeDirectory(newCurrentDirectory);
    }
    render() {
        let files = this.state.files.map((x, i) => {
            let fileDownload, cd;
            if (x.isFile) {
                fileDownload = (
                    <FileDownload filename={x.file} />
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