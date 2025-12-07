import { useState, useCallback, useRef } from "react";
import {
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    type NodeChange,
    type EdgeChange,
    type Connection,
    type Node,
    type Edge,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";
import { initialNodes, initialEdges } from "./data/initialElements";
import type { DiagramNode, DiagramEdge, ContextMenuState, UseDiagramReturn } from "@/types/diagram";

// Default sizes for each node type
const nodeTypeDefaults: Record<string, { width: number; height: number }> = {
  securityRealm: { width: 170, height: 80 },
  identityProviderNode: { width: 100, height: 100 },
  applicationNode: { width: 120, height: 120 },
  serviceNode: { width: 100, height: 100 },
  dataProviderNode: { width: 80, height: 120 },
  processUnitNode: { width: 100, height: 100 },
};

export const useDiagram = (): UseDiagramReturn => {
    const [nodes, setNodes] = useState<DiagramNode[]>(initialNodes);
    const [edges, setEdges] = useState<DiagramEdge[]>(initialEdges);
    const [menu, setMenu] = useState<ContextMenuState | null>(null);
    const flowWrapperRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>; 

    // 1. Node change handler
    const onNodesChange = useCallback((changes: NodeChange[]) => {
        setNodes((nds) => applyNodeChanges(changes, nds) as DiagramNode[]);
    }, []);

    // 2. Edge change handler
    const onEdgesChange = useCallback((changes: EdgeChange[]) => {
        setEdges((eds) => applyEdgeChanges(changes, eds) as DiagramEdge[]);
    }, []);

    // 3. Connection handler
    const onConnect = useCallback((params: Connection) => {
        if (!params.source || !params.target) return;
        
        const newEdge: DiagramEdge = {
            ...params,
            id: params.source + '-' + params.target,
            type: "step", 
            source: params.source, 
            target: params.target, 
            markerEnd: { type: 'arrowclosed', color: '#808080' },
        };
        setEdges((eds) => addEdge(newEdge, eds) as DiagramEdge[]);
    }, []);

    // 4. Node context menu handler
    const onNodeContextMenu = useCallback(
        (event: React.MouseEvent, node: Node) => { 
            event.preventDefault();

            if (!flowWrapperRef.current) return;
            const pane = flowWrapperRef.current.getBoundingClientRect();
            
            const top = event.clientY < pane.height - 200 ? event.clientY : undefined;
            const left = event.clientX < pane.width - 200 ? event.clientX : undefined;
            const right = event.clientX >= pane.width - 200 ? pane.width - event.clientX : undefined;
            const bottom = event.clientY >= pane.height - 200 ? pane.height - event.clientY : undefined;
            
            setMenu({ id: node.id, top, left, right, bottom });
        },
        [] 
    );

    // 5. Edge context menu handler
    const onEdgeContextMenu = useCallback((event: React.MouseEvent, edge: Edge) => { 
        event.preventDefault();
        
        if (!flowWrapperRef.current) return;
        const pane = flowWrapperRef.current.getBoundingClientRect();

        const top = event.clientY < pane.height - 200 ? event.clientY : undefined;
        const left = event.clientX < pane.width - 200 ? event.clientX : undefined;
        const right = event.clientX >= pane.width - 200 ? pane.width - event.clientX : undefined;
        const bottom = event.clientY >= pane.height - 200 ? pane.height - event.clientY : undefined;
        
        setMenu({ id: edge.id, type: 'edge', top, left, right, bottom });
    }, []);

    const onPaneClick = useCallback(() => {
        setMenu(null);
    }, []);

    // Handle drag and drop from palette
    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent, screenToFlowPosition: (position: { x: number; y: number }) => { x: number; y: number }) => {
            event.preventDefault();

            const nodeType = event.dataTransfer.getData("application/reactflow");
            if (!nodeType) return;

            // Convert screen coordinates to flow coordinates
            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const defaults = nodeTypeDefaults[nodeType] || { width: 100, height: 100 };

            const newNode: DiagramNode = {
                id: uuidv4(),
                type: nodeType,
                position,
                data: { label: null },
                style: {
                    width: defaults.width,
                    height: defaults.height,
                },
            };

            setNodes((nds) => [...nds, newNode]);
        },
        []
    );

    return {
        nodes,
        edges,
        menu,
        flowWrapperRef,
        onNodesChange,
        onEdgesChange,
        onConnect,
        onNodeContextMenu,
        onEdgeContextMenu,
        onPaneClick,
        onDragOver,
        onDrop,
    };
};

