import React, { Component } from 'react';
// import * as octicons from 'octicons';
import Octicon from '../octicon/octicon.jsx';
import FileDownload from './fileDownload.jsx'

class FileList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
        // this.changeDirectory = this.props.changeDirectory;
    }
    componentDidMount() {
        let pathString = this.props.path.join('/')
        this.browse(pathString)
    }
    browse(pathString) {
        // let data = new FormData();
        // data.append("file", this.state.files[0])

        fetch(`http://localhost:3000/browse/${encodeURI(pathString)}`,
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

    render() {
        let files = this.state.files.map((x, i) => {
            let fileDownload;
            if (x.isFile) {
                fileDownload = (
                    <FileDownload filename={x.file} />
                )
            }
            else {
                fileDownload = <Octicon name="file-directory" />
            }
            return (
                <div key={x.file} className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-auto">
                                {fileDownload}
                            </div>
                            <div className="col-sm">
                                
                                    <h5>{x.file}</h5>
                                
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