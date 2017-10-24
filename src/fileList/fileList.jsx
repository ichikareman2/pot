import React, { Component } from 'react';

class FileList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }
    componentDidMount() {
        this.browse()
    }
    browse() {
        // let data = new FormData();
        // data.append("file", this.state.files[0])

        fetch(`http://localhost:3000/browse`,
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
            return (
                <div key={x.file}>
                    <div className="row">
                        <div className="col-sm"><h5>{x.file}</h5></div>
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