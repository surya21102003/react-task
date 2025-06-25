

## Introduction 

The React Flow Block Canvas is a comprehensive implementation of a drag-and-drop workflow builder that meets all specified requirements from the evaluation criteria. This solution demonstrates:

- Drag-and-drop functionality with React Flow
- Custom connection validation rules
- Context menu implementation
- Modular React component architecture
- Clean UI/UX design

The application allows users to create workflows by dragging Block A and Block B from a panel onto a canvas, connecting them with validation rules (only A→B allowed), and accessing context menus via right-click.

## Features 

### Core Functionality
1. **Block Panel**
   - Displays draggable Block A and Block B elements
   - Blocks are loaded from a static JSON source
   - Visual feedback during drag operations

2. **Canvas Area**
   - Accepts dropped blocks
   - Provides connection handles
   - Shows visual feedback for valid/invalid connections
   - Includes zoom and pan controls

3. **Connection Validation**
   - Only allows connections from Block A to Block B
   - Prevents invalid connections (B→A, A→A, B→B)
   - Real-time validation during connection attempts

4. **Context Menu**
   - Appears on right-click of any block
   - Displays "Hello World" message
   - Closes when clicking elsewhere

### Technical Features
- **React Flow Integration**: Comprehensive use of React Flow components and hooks
- **Modular Architecture**: Components organized by functionality
- **Custom Hooks**: Reusable logic for canvas operations and validation
- **Responsive Design**: Adapts to different screen sizes
- **Error Handling**: Prevents invalid operations and connections


## Project Structure 

```
src/
├── components/
│   ├── BlockPanel/          # Block selection panel
│   │   ├── BlockItem.jsx    # Individual block component
│   │   ├── BlockPanel.jsx   # Main panel component
│   │   └── BlockPanel.css   # Panel styling
│   ├── CanvasArea/          # Canvas components
│   │   ├── CanvasArea.jsx   # Main canvas component
│   │   ├── ConnectionValidator.js # Connection validation logic
│   │   └── CanvasArea.css   # Canvas styling
│   ├── ContextMenu/         # Context menu components
│   │   ├── ContextMenu.jsx  # Context menu component
│   │   └── ContextMenu.css  # Menu styling
│   └── NodeTypes/           # Custom node components
│       ├── BlockANode.jsx   # Block A node
│       ├── BlockBNode.jsx   # Block B node
│       └── nodeTypes.js     # Node type mapping
├── hooks/                   # Custom hooks
│   ├── useBlocks.js         # Block data management
│   ├── useCanvasHandlers.js # Canvas event handlers
│   └── useConnectionValidator.js # Connection validation hook
├── App.js                   # Main application component
├── App.css                  # Global styles
└── index.js                 # Application entry point
```

## Implementation Details 
### Key Components

1. **Block Panel**
   - Renders draggable blocks from JSON data
   - Uses HTML5 drag-and-drop API
   - Implements `onDragStart` to transfer block type data

2. **Canvas Area**
   - Manages nodes and edges state
   - Handles drop events with position calculation
   - Integrates React Flow components (Background, Controls)
   - Implements connection validation

3. **Connection Validation**
   - Custom validator function
   - Checks source and target node types
   - Only allows A→B connections
   - Prevents invalid connections visually

4. **Context Menu**
   - Appears on node right-click
   - Positioned at cursor location
   - Closes on any click outside

### Custom Hooks

1. `useBlocks.js`
   - Manages block data (static JSON)
   - Provides blocks to BlockPanel

2. `useCanvasHandlers.js`
   - Manages React Flow instance
   - Handles drag, drop, and connection events
   - Implements context menu triggers

3. `useConnectionValidator.js`
   - Validates connection attempts
   - Uses current node state for validation

## Design Decisions 

1. **Modular Architecture**
   - Components organized by functionality
   - Separation of concerns (UI vs logic)
   - Reusable custom hooks

2. **React Flow Optimization**
   - Efficient node rendering
   - Built-in zoom/pan controls
   - Connection validation integration

3. **User Experience**
   - Visual distinction between block types
   - Clear connection handles
   - Immediate feedback for invalid operations
   - Context menu positioning at cursor

4. **Performance Considerations**
   - Memoized event handlers
   - Efficient state updates
   - Component-specific styling

## Troubleshooting 

**Common Issues:**
1. **Blocks not draggable**
   - Ensure you're using a modern browser
   - Check for console errors
   - Verify React Flow version

2. **Connections not working**
   - Make sure you're dragging from Block A to Block B
   - Check connection validator logic
   - Verify node types in state

3. **Context menu not appearing**
   - Ensure right-click is not blocked by browser
   - Check event propagation
   - Verify menu state management

## Installation Guide 

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Git (optional)

### Step-by-Step Installation
```bash
# Clone the repository
git clone https://github.com/surya21102003/react-task.git

# Navigate to project directory
cd task-reactjs

# Install dependencies
npm install

# Start the development server
npm start
```

### Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.2.0 | React core library |
| `react-dom` | ^18.2.0 | React DOM rendering |
| `reactflow` | ^11.7.0 | Canvas and node functionality |
| `react-dnd` | ^16.0.1 | Drag and drop support (optional) |

## Getting Started 

1. **Launch the Application**
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`

2. **Using the Interface**
   - Drag blocks from the right panel to the canvas
   - Connect blocks by dragging from Block A's handle to Block B's handle
   - Right-click any block to see the context menu
   - Use the controls in the bottom-right to zoom/pan

3. **Testing Validation**
   - Try connecting Block B to Block A (should be prevented)
   - Try connecting same-type blocks (should be prevented)
   - Verify only A→B connections are allowed

**Development Tips:**
```bash
# Run linter
npm run lint

# Fix formatting issues
npm run format

# Create production build
npm run build
```
