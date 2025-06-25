
import { useState } from 'react';

const useBlocks = () => {
  const [blocks] = useState([
    { id: '1', type: 'blockA', label: 'Block A' },
    { id: '2', type: 'blockB', label: 'Block B' },
  ]);

  return { blocks };
};

export default useBlocks;