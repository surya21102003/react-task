import React from 'react';

const BlockANode = ({ data }) => {
  return (
    <div className="react-flow__node block-a">
      {data.label}
    </div>
  );
};

export default BlockANode;