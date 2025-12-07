"use client"

import { ReactFlowProvider } from '@xyflow/react';
import { useDiagram } from './hooks';
import DiagramCanvas from './ui/DiagramCanvas';
import { ProcessUnitNode } from "./ui/nodes/ProcessUnitNode"; 
import DataProviderNode from "./ui/nodes/DataProviderNode";
import ApplicationNode from "./ui/nodes/ApplicationNode";
import ResizableNode from "./ui/nodes/ResizableNode";
import SecurityRealm from "./ui/nodes/SecurityRealm";
import IdentityProviderNode from "./ui/nodes/IdentityProviderNode";
import ServiceNode from "./ui/nodes/ServiceNode";
import StepEdge from "./ui/edges/StepEdge";
import InvocationEdge from "./ui/edges/InvocationEdge";
import LegacyEdge from "./ui/edges/LegacyEdge";
import TrustEdge from "./ui/edges/TrustEdge";
import type { NodeTypes, EdgeTypes } from '@xyflow/react';

const nodeTypes: NodeTypes = {
    processUnitNode: ProcessUnitNode,
    dataProviderNode: DataProviderNode,
    applicationNode: ApplicationNode,
    resizableNode: ResizableNode,
    securityRealm: SecurityRealm,
    identityProviderNode: IdentityProviderNode,
    serviceNode: ServiceNode,
};

const edgeTypes: EdgeTypes = {
    step: StepEdge,
    invocation: InvocationEdge,
    legacy: LegacyEdge,
    trust: TrustEdge,
};

const DiagramScreen = () => {
    const { 
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
    } = useDiagram();

    return (
        <ReactFlowProvider>
            <DiagramCanvas
                flowWrapperRef={flowWrapperRef}
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeContextMenu={onNodeContextMenu}
                onEdgeContextMenu={onEdgeContextMenu}
                onPaneClick={onPaneClick}
                onDragOver={onDragOver}
                onDrop={onDrop}
                menu={menu}
            />
        </ReactFlowProvider>
    );
}

export default DiagramScreen;

