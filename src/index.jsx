
import React from 'react';
import { render } from 'react-dom';
import './index.css';

import UploadInput from './uploadInput/uploadInput.jsx'
import FileList from './fileList/fileList.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <UploadInput />
        <FileList />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));