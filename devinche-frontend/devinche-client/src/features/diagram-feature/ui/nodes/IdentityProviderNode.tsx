import { Position, Handle, NodeResizer } from "@xyflow/react";
import type { NodeProps } from "@/types/diagram";

// Identity Provider - Right-angled triangle with rounded corners
// Right side is vertical, bottom side is horizontal, hypotenuse slopes from top-left to bottom-right
const IdentityProviderNode = ({ data, selected }: NodeProps) => {
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
        {/* Right-angled triangle: vertical right side, horizontal bottom, hypotenuse from top-left to bottom-right */}
        <path
          d="M 10,10 L 10,90 L 90,90 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-2" style={{ paddingLeft: '20%', paddingTop: '30%' }}>
        <div className="text-xs text-center font-medium">
          {data.label || "Identity Provider"}
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

export default IdentityProviderNode;

