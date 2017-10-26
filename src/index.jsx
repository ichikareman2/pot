
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
      path:'/'
    }
  }
  render() {
    return (
      <div>
        <Directory path={this.state.path} />
        <UploadInput />
        <FileList />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));