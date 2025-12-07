// Juho
import React, { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";
import { v4 as uuidv4 } from 'uuid';
import type { ContextMenuState } from "@/types/diagram";

interface ContextMenuProps extends ContextMenuState {
  onClick?: () => void;
}

const edgeTypes = ["step", "invocation", "legacy", "trust"];

export default function ContextMenu({ id, type = "node", top, left, right, bottom, onClick, ...props }: ContextMenuProps) {
  const { getNode, getEdge, setNodes, addNodes, setEdges, deleteElements } = useReactFlow();

  const duplicateNode = useCallback(() => {
    if (type !== "node") return;

    const node = getNode(id);
    if (!node) return;

    const position = { x: node.position.x + 50, y: node.position.y + 50 };
    const newId = uuidv4();
    addNodes({ ...node, selected: false, dragging: false, id: newId, position });
    if (onClick) onClick();
  }, [id, getNode, addNodes, type, onClick]);

  const deleteItem = useCallback(() => {
    if (type === "node") {
      setNodes((nodes) => nodes.filter((node) => node.id !== id));
      setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));
    } else if (type === "edge") {
      deleteElements({ edges: [{ id }] });
    }
    if (onClick) onClick();
  }, [id, type, setNodes, setEdges, deleteElements, onClick]);

  const changeEdgeType = useCallback((edgeType: string) => {
    if (type !== "edge") return;
    
    setEdges((edges) =>
      edges.map((edge) =>
        edge.id === id ? { ...edge, type: edgeType } : edge
      )
    );
    if (onClick) onClick();
  }, [id, type, setEdges, onClick]);

  const edge = type === "edge" ? getEdge(id) : null;

  return (
    <div
      style={{ top, left, right, bottom }}
      className="absolute bg-white border rounded shadow-lg p-2 z-50 flex flex-col gap-2 min-w-[180px]"
      {...props}
    >
      <p className="text-xs font-semibold text-gray-600 border-b pb-1 mb-1">
        {type === "node" ? "Node" : "Edge"}: {id.slice(0, 8)}...
      </p>
      {type === "node" && (
        <button 
          className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 rounded text-sm text-left transition-colors" 
          onClick={duplicateNode}
        >
          Duplicate
        </button>
      )}
      {type === "edge" && (
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-gray-600 mb-1">Change Edge Type:</p>
          {edgeTypes.map((edgeType) => (
            <button
              key={edgeType}
              className={`px-3 py-1.5 rounded text-sm text-left transition-colors ${
                edge?.type === edgeType
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => changeEdgeType(edgeType)}
            >
              {edgeType.charAt(0).toUpperCase() + edgeType.slice(1)}
            </button>
          ))}
        </div>
      )}
      <button 
        className="px-3 py-1.5 bg-red-100 hover:bg-red-200 rounded text-sm text-left transition-colors mt-1" 
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
}

