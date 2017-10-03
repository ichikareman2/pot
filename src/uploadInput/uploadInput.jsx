import React, { Component } from 'react';

class UploadInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="file" />
                    </div>
                    <div className="col">
                        <button type="submit">Upload</button>
                    </div>
                </div>
            </div>);
    }
}

export default UploadInput;