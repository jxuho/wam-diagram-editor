// Process Unit - Perfect circle
import { Position, Handle, NodeResizer } from "@xyflow/react";
import type { NodeProps } from "@/types/diagram";

export function ProcessUnitNode({ data, selected }: NodeProps) {
  return (
    <div className="relative w-full h-full">
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={80}
        minHeight={80}
        keepAspectRatio={true}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0"
      >
        {/* Perfect circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <div className="text-xs text-center font-medium">
          {data.label || "Process Unit"}
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
}

