// Trust Edge - Thick horizontal line with arrowhead and "Trusts" label
import { BaseEdge, getBezierPath, getEdgeCenter } from "@xyflow/react";
import type { EdgeProps } from "@/types/diagram";

export default function TrustEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [centerX, centerY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const markerId = `arrow-${id}`;

  return (
    <>
      <defs>
 
    <marker
      id={markerId}
      markerWidth="12"
      markerHeight="10"
      refX="11"
      refY="5"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <polygon points="2,0 11,5 2,10" fill="#222" />
    </marker>

      </defs>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={`url(#${markerId})`}
        style={{ stroke: "#222", strokeWidth: 3 }}
      />
      <text
        x={centerX}
        y={centerY - 10}
        textAnchor="middle"
        className="text-xs font-medium fill-black pointer-events-none select-none"
        style={{ fontSize: '12px' }}
      >
        Trusts
      </text>
    </>
  );
}
