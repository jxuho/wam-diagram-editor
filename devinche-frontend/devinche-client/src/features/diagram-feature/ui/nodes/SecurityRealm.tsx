// Security Realm - Horizontal rectangle with rounded corners and diagonal cut at top-right

import { Position, Handle, NodeResizer } from "@xyflow/react";
import type { NodeProps } from "@/types/diagram";

const SecurityRealm = ({ data, selected }: NodeProps) => {
  return (
    <div className="relative w-full h-full">
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={120}
        minHeight={60}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Horizontal rectangle with rounded corners */}
        <rect
          x="5"
          y="5"
          width="90"
          height="40"
          rx="5"
          ry="5"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
        {/* Diagonal line from top-right to bottom-left creating triangular segment */}
        <line
          x1="90"
          y1="5"
          x2="5"
          y2="45"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <div className="text-xs text-center font-medium">
          {data.label || "Security Realm"}
        </div>
      </div>
      {/* <Handle type="source" position={Position.Top} id="top-source" />
      <Handle type="source" position={Position.Left} id="left-source" />
      <Handle type="source" position={Position.Right} id="right-source" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" />
      <Handle type="target" position={Position.Top} id="top-target" />
      <Handle type="target" position={Position.Left} id="left-target" />
      <Handle type="target" position={Position.Right} id="right-target" /> */}
      <Handle type="target" position={Position.Bottom} id="bottom-target" />
    </div>
  );
};

export default SecurityRealm;

