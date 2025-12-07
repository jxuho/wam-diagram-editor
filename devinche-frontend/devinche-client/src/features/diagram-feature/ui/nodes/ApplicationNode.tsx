// Application - Square with rounded corners
import { Position, Handle, NodeResizer } from "@xyflow/react";
import type { NodeProps } from "@/types/diagram";

const ApplicationNode = ({ data, selected }: NodeProps) => {
  return (
    <div className="relative w-full h-full">
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={100}
        minHeight={100}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Square with rounded corners */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="8"
          ry="8"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <div className="text-xs text-center font-medium">
          {data.label || "Application"}
        </div>
      </div>
      <Handle type="source" position={Position.Top} id="top-source"/>
      <Handle type="source" position={Position.Left} id="left-source"/>
      <Handle type="source" position={Position.Right} id="right-source"/>
      <Handle type="source" position={Position.Bottom} id="bottom-source"/>
      <Handle type="target" position={Position.Top} id="top-target"/>
      <Handle type="target" position={Position.Left} id="left-target"/>
      <Handle type="target" position={Position.Right} id="right-target"/>
      <Handle type="target" position={Position.Bottom} id="bottom-target"/>
    </div>
  );
};

export default ApplicationNode;

