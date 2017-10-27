
import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Directory from './directory/directory.jsx'
import UploadInput from './uploadInput/uploadInput.jsx'
import FileList from './fileList/fileList.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDirectory: []
    }
  }
  
  render() {
    return (
      <div>
        <Directory path={this.state.currentDirectory} />
        <UploadInput />
        <FileList path={this.state.currentDirectory}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));