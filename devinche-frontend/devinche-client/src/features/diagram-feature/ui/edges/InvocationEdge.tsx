// Invocation Edge - Thick horizontal line with arrowhead
import { BaseEdge, getBezierPath } from "@xyflow/react";
import type { EdgeProps } from "@/types/diagram";

export default function InvocationEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const markerId = `invocation-arrowhead-${id}`;

  return (
    <>
      <defs>
        <marker
          id={markerId}
          markerWidth="12"
          markerHeight="10"
          refX="12"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 12 5, 0 10" fill="#222" />
        </marker>
      </defs>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={`url(#${markerId})`}
        style={{ stroke: "#222", strokeWidth: 3 }}
      />
    </>
  );
}
