
import React from 'react';
import { render } from 'react-dom';
import './index.css';

import FileExplorer from './fileExplorer/fileExplorer.jsx'

class App extends React.Component {

  render() {
    return (
      <div>
        <FileExplorer />
      </div>
    )
  }
}
render(<App />, document.getElementById('app'));