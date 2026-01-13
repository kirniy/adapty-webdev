/**
 * DS2 (Attio-Inspired) Components
 *
 * These components implement Attio's signature "technical diagram" aesthetic:
 * - Schematic connector lines
 * - Connection node circles
 * - Flow diagram cards with status badges
 *
 * Usage:
 * These components should only be rendered when data-theme="ds2" is active.
 * They rely on CSS custom properties defined in globals.css.
 */

export { SchematicLine, SchematicCorner, SchematicConnector } from "./SchematicLine";
export { ConnectionNode, StatusNode } from "./ConnectionNode";
export {
  FlowDiagramCard,
  FlowDiagramBranch,
  FlowDiagramResult,
} from "./FlowDiagramCard";
