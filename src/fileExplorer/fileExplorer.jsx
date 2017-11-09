import React, { Component } from 'react';

import Directory from './directory/directory.jsx'
import UploadInput from './uploadInput/uploadInput.jsx'
import FileList from './fileList/fileList.jsx'

class FileExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // array of folder names that leads to current directory
      currentDirectory: [],
      // array of files and folder names in current directory
      files: []
    }
    this.changeDirectory = this.changeDirectory.bind(this)
    this.updateFiles = this.updateFiles.bind(this)
  }

  componentDidMount() {
    // let pathString = this.state.currentDirectory.join('/')
    this.updateFiles(this.state.currentDirectory)
  }
  render() {
    return (
      <div>
        <Directory
          path={this.state.currentDirectory}
          changeDirectory={this.changeDirectory} />

        <UploadInput
          path={this.state.currentDirectory}
          refresh={this.updateFiles} />

        <FileList
          path={this.state.currentDirectory}
          changeDirectory={this.changeDirectory}
          files={this.state.files} />
      </div>
    )
  }

  changeDirectory(newCurrentDirectory) {
    this.updateFiles(newCurrentDirectory)
    this.setState({
      currentDirectory: newCurrentDirectory
    })
  }
  updateFiles(path) {
    let pathString = path.join('/')
    fetch(`http://localhost:3000/browse/${encodeURIComponent(pathString)}`,
      {
        method: "GET",
      }).then((data) => {
        return data.json()
      }).then((json) => {
        this.setState({
          files: json
        })
      })
  }

}

export default FileExplorer;