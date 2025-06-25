import React from 'react';
import './ContextMenu.css';

const ContextMenu = ({ x, y, onClose }) => {
  return (
    <div
      className="context-menu"
      style={{ top: y, left: x }}
      onClick={onClose}
    >
      <div className="context-menu-item">Hello World</div>
    </div>
  );
};

export default ContextMenu;