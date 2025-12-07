"use client";

import { useCallback } from "react";
import SecurityRealm from "../nodes/SecurityRealm";
import IdentityProviderNode from "../nodes/IdentityProviderNode";
import ApplicationNode from "../nodes/ApplicationNode";
import ServiceNode from "../nodes/ServiceNode";
import DataProviderNode from "../nodes/DataProviderNode";
import { ProcessUnitNode } from "../nodes/ProcessUnitNode";

interface PaletteItem {
  type: string;
  label: string;
  icon: React.ComponentType<any>;
  defaultSize: { width: number; height: number };
}

const paletteItems: PaletteItem[] = [
  {
    type: "securityRealm",
    label: "Security Realm",
    icon: SecurityRealm,
    defaultSize: { width: 170, height: 80 },
  },
  {
    type: "identityProviderNode",
    label: "Identity Provider",
    icon: IdentityProviderNode,
    defaultSize: { width: 100, height: 100 },
  },
  {
    type: "applicationNode",
    label: "Application",
    icon: ApplicationNode,
    defaultSize: { width: 120, height: 120 },
  },
  {
    type: "serviceNode",
    label: "Service",
    icon: ServiceNode,
    defaultSize: { width: 100, height: 100 },
  },
  {
    type: "dataProviderNode",
    label: "Data Provider",
    icon: DataProviderNode,
    defaultSize: { width: 80, height: 120 },
  },
  {
    type: "processUnitNode",
    label: "Process Unit",
    icon: ProcessUnitNode,
    defaultSize: { width: 100, height: 100 },
  },
];

interface PalettePanelProps {
  onDragStart?: (event: React.DragEvent, nodeType: string) => void;
}

const PalettePanel = ({ onDragStart }: PalettePanelProps) => {
  const handleDragStart = useCallback(
    (event: React.DragEvent, nodeType: string) => {
      event.dataTransfer.setData("application/reactflow", nodeType);
      event.dataTransfer.effectAllowed = "move";
      if (onDragStart) {
        onDragStart(event, nodeType);
      }
    },
    [onDragStart]
  );

  return (
    <div className="absolute left-4 top-4 z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-4 min-w-[200px]">
      <h3 className="text-sm font-semibold mb-3 text-gray-700 border-b pb-2">
        Components
      </h3>
      <div className="space-y-2">
        {paletteItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.type}
              draggable
              onDragStart={(e) => handleDragStart(e, item.type)}
              className="flex items-center gap-3 p-2 border border-gray-200 rounded cursor-grab active:cursor-grabbing hover:bg-gray-50 transition-colors"
            >
              <div
                className="flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  position: "relative",
                }}
              >
                <IconComponent
                  data={{ label: "" }}
                  id={`palette-${item.type}`}
                />
              </div>
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-3 border-t">
        <h3 className="text-sm font-semibold mb-3 text-gray-700">Relationships</h3>
        <div className="space-y-2">
          <div className="p-2 border border-gray-200 rounded text-xs text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-12 h-1 bg-gray-800"></div>
              <span>Legacy</span>
            </div>
          </div>
          <div className="p-2 border border-gray-200 rounded text-xs text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-12 h-1 bg-gray-800 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
              </div>
              <span>Invocation</span>
            </div>
          </div>
          <div className="p-2 border border-gray-200 rounded text-xs text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-12 h-1 bg-gray-800 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
              </div>
              <span>Trust</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalettePanel;

