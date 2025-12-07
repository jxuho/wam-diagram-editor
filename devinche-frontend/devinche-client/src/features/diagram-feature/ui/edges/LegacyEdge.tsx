// Legacy Edge - Thick horizontal line without arrowheads
import { BaseEdge, getBezierPath } from "@xyflow/react";
import type { EdgeProps } from "@/types/diagram";

export default function LegacyEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ stroke: "#222", strokeWidth: 3 }}
    />
  );
}
