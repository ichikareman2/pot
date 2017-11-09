import React, { Component } from 'react';

class UploadInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: {}
        }
        
        this.selectFile = this.selectFile.bind(this)
        this.upload = this.upload.bind(this)
        this.refresh = this.props.refresh.bind(this)
    }

    upload() {
        let data = new FormData();
        let pathString = this.props.path.join('/');
        data.append("file", this.state.files[0])

        fetch(`http://localhost:3000/upload/${encodeURIComponent(pathString)}`,
            {
                method: "POST",
                // headers: {
                //     "Content-type": "image"
                // },
                // body: this.state.files[0]
                body: data
            }).then((data) => {
                if(data.status === 200){
                    this.refresh(this.props.path)
                }
            })
    }

    selectFile(a) {
        // console.log(a)
        // console.log(a.target.files)
        this.setState({
                files: a.target.files
            })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="file" onChange={this.selectFile}/>
                    </div>
                    <div className="col">
                        <button type="submit" onClick={this.upload}>Upload</button>
                    </div>
                </div>
            </div>);
    }
}

export default UploadInput;