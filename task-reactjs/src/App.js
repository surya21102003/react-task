
import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import BlockPanel from './components/BlockPanel/BlockPanel';
import CanvasArea from './components/CanvasArea/CanvasArea';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ReactFlowProvider>
        <div className="block-panel-container">
          <BlockPanel />
        </div>
        <div className="canvas-container">
          <CanvasArea />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default App;