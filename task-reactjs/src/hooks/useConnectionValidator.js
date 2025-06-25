import { useCallback } from 'react';

const useConnectionValidator = (nodes) => {
  const validateConnection = useCallback(
    (connection) => {
      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);
      
      return sourceNode?.type === 'blockA' && targetNode?.type === 'blockB';
    },
    [nodes]
  );

  return { validateConnection };
};

export default useConnectionValidator;