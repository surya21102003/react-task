export default (connection, nodes) => {
    const sourceNode = nodes.find((node) => node.id === connection.source);
    const targetNode = nodes.find((node) => node.id === connection.target);
    
    return sourceNode?.type === 'blockA' && targetNode?.type === 'blockB';
  };