import React, { Component } from 'react';

class FileList extends Component {
    constructor(props) {
        super(props)
        this.sample = [
            { filename: "a.png", size: "1mb" }
            , { filename: "b.png", size: "1mb" }
            , { filename: "c.png", size: "1mb" }
        ]
    }

    render() {
        let files = this.sample.map((x, i) => {
            return (
                <div key={x.filename}>
                    <div className="row">
                        <div className="col-sm"><h5>{x.filename}</h5></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">size: {x.size}</div>
                    </div>
                </div>
            );
        })
        return (
            <div className="file-item">
                {files}
            </div>
        );
    }
}

export default FileList;