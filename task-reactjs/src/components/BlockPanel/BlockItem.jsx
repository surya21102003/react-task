import React from 'react';
import './BlockPanel.css';

const BlockItem = ({ block }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="block"
      draggable
      onDragStart={(event) => onDragStart(event, block.type)}
    >
      {block.label}
    </div>
  );
};

export default BlockItem;