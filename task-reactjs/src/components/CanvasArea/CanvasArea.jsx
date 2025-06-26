import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import ConnectionValidator from './ConnectionValidator';
import useCanvasHandlers from '../../hooks/useCanvasHandlers';
import nodeTypes from '../NodeTypes/nodeTypes';
import ContextMenu from '../ContextMenu/ContextMenu';
import './CanvasArea.css';

const CanvasArea = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [menu, setMenu] = useState(null);
  
  const {
    reactFlowInstance,
    setReactFlowInstance,
    onConnect,
    onDragOver,
    onDrop,
    onNodeContextMenu,
    onPaneClick,
  } = useCanvasHandlers(nodes, setNodes, setEdges, setMenu);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={setEdges}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeContextMenu={onNodeContextMenu}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        connectionValidator={ConnectionValidator}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      {menu && <ContextMenu {...menu} onClose={() => setMenu(null)} />}
    </>
  );
};

export default CanvasArea;
