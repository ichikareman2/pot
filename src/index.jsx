
import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Directory from './directory/directory.jsx'
import UploadInput from './uploadInput/uploadInput.jsx'
import FileList from './fileList/fileList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDirectory: []
    }
    this.changeDirectory = this.changeDirectory.bind(this)
  }

  render() {
    return (
      <div>
        <Directory path={this.state.currentDirectory} changeDirectory={this.changeDirectory} />
        <UploadInput />
        <FileList path={this.state.currentDirectory} changeDirectory={this.changeDirectory} />
      </div>
    )
  }

  changeDirectory(newCurrentDirectory) {
    this.setState({
      currentDirectory: newCurrentDirectory
    })
  }
}

render(<App />, document.getElementById('app'));