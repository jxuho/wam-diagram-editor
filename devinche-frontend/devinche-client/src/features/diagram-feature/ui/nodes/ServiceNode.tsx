import { Position, Handle, NodeResizer } from "@xyflow/react";
import type { NodeProps } from "@/types/diagram";

// Service - Equilateral triangle with rounded corners, pointing upwards
const ServiceNode = ({ data, selected }: NodeProps) => {
  return (
    <div className="relative w-full h-full">
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={80}
        minHeight={80}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Equilateral triangle pointing up with rounded corners effect */}
        <path
          d="M 50,8 Q 50,5 52,5 L 88,5 Q 92,5 92,8 L 92,85 Q 92,88 90,88 L 10,88 Q 8,88 8,85 L 8,8 Q 8,5 10,5 L 48,5 Q 50,5 50,8 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Simplified triangle path */}
        <path
          d="M 50,10 L 90,85 L 10,85 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-2" style={{ marginTop: '20%' }}>
        <div className="text-xs text-center font-medium">
          {data.label || "Service"}
        </div>
      </div>
      <Handle type="source" position={Position.Top} id="top-source" />
      <Handle type="source" position={Position.Left} id="left-source" />
      <Handle type="source" position={Position.Right} id="right-source" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" />
      <Handle type="target" position={Position.Top} id="top-target" />
      <Handle type="target" position={Position.Left} id="left-target" />
      <Handle type="target" position={Position.Right} id="right-target" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" />
    </div>
  );
};

export default ServiceNode;

