import { ReactFlow, Background, Controls, Panel, MiniMap, useReactFlow } from "@xyflow/react";
import ContextMenu from "./controls/ContextMenu";
import PalettePanel from "./palette/PalettePanel";
import type { DiagramNode, DiagramEdge, ContextMenuState } from "@/types/diagram";
import { NodeTypes, EdgeTypes, NodeChange, EdgeChange, Connection, ConnectionMode } from "@xyflow/react";
import { useCallback, useEffect } from "react";
import React from "react";

interface DiagramCanvasProps {
  flowWrapperRef: React.RefObject<HTMLDivElement>;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  nodeTypes: NodeTypes;
  edgeTypes: EdgeTypes;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (params: Connection) => void;
  onNodeContextMenu: (event: React.MouseEvent, node: any) => void;
  onEdgeContextMenu: (event: React.MouseEvent, edge: any) => void;
  onPaneClick: () => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent, screenToFlowPosition: (position: { x: number; y: number }) => { x: number; y: number }) => void;
  menu: ContextMenuState | null;
}

// Internal component to create drop handler with React Flow context
const DropHandlerWrapper = ({ 
  onDrop, 
  onDragOver 
}: { 
  onDrop: (event: React.DragEvent, screenToFlowPosition: (position: { x: number; y: number }) => { x: number; y: number }) => void;
  onDragOver: (event: React.DragEvent) => void;
}) => {
  const { screenToFlowPosition } = useReactFlow();
  
  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    onDrop(event, screenToFlowPosition);
  }, [onDrop, screenToFlowPosition]);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    onDragOver(event);
  }, [onDragOver]);

  // Return null - we'll attach handlers to ReactFlow directly
  return null;
};

// Component that uses React Flow context to create drop handlers
const DropHandlerWithContext = ({ 
  onDrop, 
  onDragOver 
}: { 
  onDrop: (event: React.DragEvent, screenToFlowPosition: (position: { x: number; y: number }) => { x: number; y: number }) => void;
  onDragOver: (event: React.DragEvent) => void;
}) => {
  const { screenToFlowPosition } = useReactFlow();
  
  // Use useEffect to attach handlers to the ReactFlow pane
  useEffect(() => {
    // Wait for the pane to be available
    const findPane = () => {
      return document.querySelector('.react-flow__pane') as HTMLElement;
    };

    let pane = findPane();
    if (!pane) {
      // If pane is not ready, wait a bit and try again
      const timeout = setTimeout(() => {
        pane = findPane();
        if (pane) {
          attachHandlers(pane);
        }
      }, 100);
      return () => clearTimeout(timeout);
    }

    const attachHandlers = (paneElement: HTMLElement) => {
      const handleDrop = (event: Event) => {
        const dragEvent = event as DragEvent;
        dragEvent.preventDefault();
        dragEvent.stopPropagation();
        onDrop(dragEvent as any, screenToFlowPosition);
      };

      const handleDragOver = (event: Event) => {
        const dragEvent = event as DragEvent;
        dragEvent.preventDefault();
        dragEvent.stopPropagation();
        onDragOver(dragEvent as any);
      };

      paneElement.addEventListener('drop', handleDrop, true);
      paneElement.addEventListener('dragover', handleDragOver, true);

      return () => {
        paneElement.removeEventListener('drop', handleDrop, true);
        paneElement.removeEventListener('dragover', handleDragOver, true);
      };
    };

    const cleanup = attachHandlers(pane);
    return cleanup;
  }, [onDrop, onDragOver, screenToFlowPosition]);

  return null;
};

const DiagramCanvas = ({
  flowWrapperRef,
  nodes,
  edges,
  nodeTypes,
  edgeTypes,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeContextMenu,
  onEdgeContextMenu,
  onPaneClick,
  onDragOver,
  onDrop,
  menu,
}: DiagramCanvasProps) => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#ffffff" }} ref={flowWrapperRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeContextMenu={onNodeContextMenu}
        onEdgeContextMenu={onEdgeContextMenu}
        onPaneClick={onPaneClick}
        connectionMode={ConnectionMode.Loose}
        fitView
        deleteKeyCode={["Backspace", "Delete"]}
        multiSelectionKeyCode={["Meta", "Control"]}
      >
        <DropHandlerWithContext onDrop={onDrop} onDragOver={onDragOver} />
        <Background />
        <Controls />
        <MiniMap 
          position="bottom-right"
          nodeColor={(node: any) => {
            if (node.selected) return '#ff0071';
            return '#b1b1b7';
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
        <PalettePanel />
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </div>
  );
};

export default DiagramCanvas;

