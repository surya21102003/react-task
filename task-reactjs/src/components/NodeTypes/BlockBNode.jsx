import React from 'react';

const BlockBNode = ({ data }) => {
  return (
    <div className="react-flow__node block-b">
      {data.label}
    </div>
  );
};

export default BlockBNode;