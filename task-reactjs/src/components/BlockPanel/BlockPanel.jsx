import React from 'react';
import BlockItem from './BlockItem';
import useBlocks from '../../../hooks/useBlocks';
import './BlockPanel.css';

const BlockPanel = () => {
  const { blocks } = useBlocks();

  return (
    <div className="block-panel">
      <h3>Blocks</h3>
      {blocks.map((block) => (
        <BlockItem key={block.id} block={block} />
      ))}
    </div>
  );
};

export default BlockPanel;