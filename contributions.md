# Contributions MD

# Juho Lee (855888)

## **1. React Flow Initial Setup**

- **Commit name:** `53e3be0`
- **Description:**
    - Set up React Flow environment with canvas, hooks, and initial nodes/edges
    - Enabled basic drag & drop, selection, edge creation, and rendering
    - Prepared foundation for future features (ContextMenu, PropertiesPanel, AI nodes, etc.)

## **2. Node Component UI and Enhancements**

**AI Node Integration & Edge Properties**

- **Commit name:** `a35d070`, `def99aa`, `221254c`, `7bfc6d1`, `0782cc9`
- **Description:**
    - Implemented `AiApplicationNode` and `AiServiceNode` with custom SVG rendering and property fields
    - Developed dynamic edge property fields based on type (Legacy, Invocation, Trust)
    - Enhanced AI node property handling and UI consistency
    - Fixed placeholder rendering issues in dynamic property fields

**Node UI Enhancements**

- **Commit name:** `16d78c2`, `b9278f3`, `edaa573`, `0413a6b`, `e0190da`, `1de8442`, `e57311b`, `fc5baae`
- **Description:**
    - Improved SVG styling and label alignment for SecurityRealmNode and IdentityProviderNode
    - Added "Click-to-Copy" functionality for Node IDs
    - Fixed node duplication rendering and resizing constraints for SecurityRealmNode
    - Refined node visuals including background color and resize ratio handling

**Mobile & Canvas Interactions**

- **Commit name:** `6047261`, `24a1faa`, `ff44660`, `e6a5204`
- **Description:**
    - Implemented canvas actions: Clear Canvas, Select All
    - Applied `ConnectionMode.Loose` for flexible handle connections
    - Improved event handling and flicker-free rendering
    - Stabilized connection behavior across node interactions

## **3. Cost Data Management**

**Cost Calculation & Breakdown System**

- **Commit name:** `4a48664`, `38e79c7`, `a5c8d7e`
- **Description:**
    - Aggregated total costs from all nodes on the canvas
    - Implemented Cost Breakdown Accordion to display itemized costs
    - Added utility to format large numbers (e.g., 1,000,000 → "1M")

**Input Sanitization & Validation**

- **Commit name:** `4a48664`, `84d53f0`
- **Description:**
    - Regex-based cleaning to strip commas and non-numeric characters from cost inputs

**Node Initialization & Default Costs**

- **Commit name:** `494da63`
- **Description:**
    - Centralized default node costs in `nodeCosts.ts`
    - Applied default costs during `onDrop` event when creating new nodes

## **4. Diagram Page Mobile Responsiveness & Advanced UI Interactions**

**Advanced Context Menu with Floating UI**

- **Commit name:** `f716af2`, `5cf7594`, `6047261`, `24a1faa`, `1a6c5cb`, `5eb5c58`, `f8a50d8`, `bcc8380`
- **Description:**
    - Integrated `@floating-ui/react` to solve context menu positioning issues on the canvas
    - Implemented custom Bottom Sheet interface for mobile users
    - Added actions: Duplicate Node, Delete Node/Edge, Select All
    - Styled context menu actions with Tailwind CSS (destructive actions highlighted)
    - Resolved multiple TypeScript errors and runtime warnings related to ContextMenu
    - Improved stability of menu open/close behavior across environments

**Responsive Toolbar & Palette**

- **Commit name:** `4d7653e`, `ced743a`, `7d7d7f1`, `dda95cb`, `6b31d1b`
- **Description:**
    - Created `ScrollableMenuBar` for overflow handling on small screens (touch-swipe and mouse-drag)
    - Added "Click-to-Add" functionality to Palette for touch devices
    - Improved mobile UX and auto-collapse for narrow screens
    - Enhanced collaboration status responsiveness and toolbar layout behavior

**Z-Index & Rendering Optimization**

- **Commit name:** `ebf580a`, `f577871`
- **Description:**
    - Resolved layout conflicts between Chatbot overlay and PropertiesPanel via z-index adjustments and React rendering order
    - Fixed theme hydration mismatches between light and dark mode

## **5. Editor Page Architecture Refactoring**

**Modularization of useDiagram Hook**

- **Commit name:** `c65e313`, `e6a5204`, `e38a7b5`
- **Description:**
    - Split the monolithic `hooks.ts` into multiple specialized hooks: `useDiagramState`, `useDiagramDnD`, `useDiagramMenu`, `useDiagramHistory`, `useDiagramPersistence`
    - Improved code readability, maintainability, and testability

**PropertiesPanel Modularization**

- **Commit name:** `83e1c85`
- **Description:**
    - Refactored `PropertiesPanel.tsx` into smaller reusable functional components and constants
    - Reduced file complexity and simplified future UI updates

**Export Logic Decoupling**

- **Commit name:** `c65e313`
- **Description:**
    - Extracted JSON export logic from React hook into a pure utility function to follow "Rules of Hooks"
    - Enabled cleaner data processing for diagram export

## **6. Additional Editor Page Performance Tuning & Refinement**

### **Performance & Stability Optimization**

- **Frame Drop Elimination**
    - **Commit name:** `6f85b6f`
    - **Description:** Optimized state update cycles during React Flow interactions to eliminate frame drops, ensuring a smooth 60fps experience even when dragging complex nodes.
- **State Synchronization & Bug Fixes**
    - **Commit name:** `0413a6b`, `e57311b`
    - **Description:** Resolved a critical bug where duplicated nodes did not render immediately due to state sync lags; refined SVG intersection logic for improved visual layering on the canvas.
- **Runtime Stability Enhancement**
    - **Commit name:** `da7dee4`
    - **Description:** Applied optional chaining and defensive programming to node measurement logic in the ContextMenu to prevent runtime exceptions and improve system reliability.

### **Advanced Feature Implementation**

- **Type-Specific Attributes & Expandable UI**
    - **Commit name:** `400f03c`, `bb9ec0e`
    - **Description:** Implemented specialized attribute fields for varied node types; developed an expandable accordion UI for cost breakdowns to manage data-dense panels efficiently.
- **Currency & Business Logic Alignment**
    - **Commit name:** `5234a55`
    - **Description:** Standardized all currency icons and numeric symbols to Euro (€) to align with the project's specific business requirements and regional standards.

### **Editor Page UI/UX & Accessibility Polish**

- **Visual Hierarchy & Readability**
    - **Commit name:** `67f5fbf`, `49e1809`, `befa0a0`, `e0190da`, `1de8442`
    - **Description:** Conducted fine-grained UI adjustments, including scaling text for cost visibility, refining button hover behaviors, and optimizing the layout of labels in `SecurityRealmNode` and `IdentityProviderNode`.
- **User Access Improvement**
    - **Commit name:** `7b5191a`
    - **Description:** Enhanced accessibility by allowing unauthenticated access to the UserAvatarMenu, streamlining the onboarding experience for guest users.


# Rocket Primm (852887)

## **1. Validation System Implementation**

**Core Validation Engine**
- **Commit name:** `0b27459`, `28a5628`, `4d40126`
- **Description:**
    - Implemented comprehensive **WAM validation engine** checking relationship rules (valid node-edge connections) and identity rules across the diagram canvas
    - Error messages render dynamically in top-right notification area with specific violation details
    - Bug fix for useCallback dependency ensuring stable validation performance

**Visual Feedback & User Experience**
- **Commit name:** `1c6ffb1`
- **Description:**
    - Visual feedback system - nodes/edges violating rules highlight **red** immediately upon validation trigger
    - Created dedicated **WAM Rules informational page** educating users on model constraints
    - "No Error" success popup confirmation after clean validation passes

**Backend Integration & Auto-Validation**
- **Commit name:** `1507282`, `bef0346`, `9439090`
- **Description:**
    - Backend validation bug fixes ensuring server-side consistency
    - **Automatic edge validation** triggers on arrow creation with real-time error messaging
    - Complete **frontend/backend validation separation** - moved core logic to API endpoints maintaining clean architecture

## **2. Import/Export - Multi-Format Standards Compliance**

**Core Export/Import Pipeline**
- **Commit name:** `eb38f89`, `5a3baab`, `2db7962`
- **Description:**
    - Full **JSON/PNG/RDF export pipeline** with working JSON import functionality
    - Extended export capabilities to **RDF/XML semantic web standards**
    - Production-ready **top toolbar dropdown** with all format options

**Advanced Format Support**
- **Commit name:** `dfc78dd`, `3b049dc`, `29293c7`, `5a43cc8`
- **Description:**
    - Added **XML/RDF import parsers** supporting industry-standard diagram interchange
    - Multiple rounds of **RDF/XML schema updates** ensuring WAM model compliance

**Architectural Refactoring**
- **Commit name:** `b4d0d06`
- **Description:**
    - **Architectural refactoring** - extracted import/export logic into dedicated utility modules
    - Cleaned core components (Toolbar, DiagramScreen) removing monolithic export code

## **3. AI/ML Node Infrastructure**

**New AI Node Types**
- **Commit name:** `977147e`
- **Description:**
    - Created **DatasetNode & AIProcessNode** with complete SVG rendering, drag-drop integration, property panels

**Palette Integration**
- **Commit name:** `cbdaede`
- **Description:**
    - New **AI Elements section** in PalettePanel with dedicated visual grouping
    - PalettePanel **refactoring** supporting dynamic AI node types and improved visual hierarchy

**Validation & Positioning**
- **Commit name:** `8472ac2`, `c49ff63`
- **Description:**
    - **Real-time validation visualization** - invalid AI connections highlight red instantly
    - Fixed **AI node label positioning** ensuring proper text alignment across node types

## **4. Backend Foundation & TypeScript Migration**

**TypeScript Migration**
- **Commit name:** `8aea495`
- **Description:**
    - **Full backend TypeScript conversion** with type-safe API endpoints and validation logic

**Project Structure**
- **Commit name:** `1b95af8`, `adffdff`
- **Description:**
    - Established **production folder structure** with REST route examples and middleware patterns
    - Integrated **MongoDB database setup** with User/Diagram models and connection pooling

## **5. Cross-Browser Node Reliability**

**Security Realm Fixes**
- **Commit name:** `c28d540`
- **Description:**
    - Fixed **SecurityRealmNode rendering** on Firefox/Safari (SVG path issues)

**Node Properties Enhancement**
- **Commit name:** `c78ec33`
- **Description:**
    - Added **missing custom properties** across node types ensuring complete metadata support
    - Implemented **type-specific properties** for SecurityRealmNode and ServiceNode

## **6. Project Documentation & Setup**

**Contributions Tracking**
- **Commit name:** `2b1044d`
- **Description:**
    - Created **comprehensive contributions.md** tracking all team commits with hash/author/date

**Company Documentation**
- **Commit name:** `e5990a7`
- **Description:**
    - Added **company culture section** (vision, mission, values) plus technology stack documentation


# Commits

Below is a list of all commits made to our project, structured in the following format:
| Hash | Author | Date | Message | Explanation |

| Hash | Author | Date | Message | Explanation |

| 2b1044d | Rocket Primm | 2026-03-19 | Add contributions.md |

| bb2771b | Mariia Katsala | 2026-02-26 | Merge branch 'ai-default-costs' into 'main' |

| 90ddc90 | Mariia Katsala | 2026-02-26 | default costs values for AI generated diagrams |

| 61ab02d | Muhammad Ibtisam Tanveer | 2026-02-26 | Merge branch 'feat/major-collab-feature' into 'main' |

| 7e1abee | Mariia Katsala | 2026-02-26 | Merge remote-tracking branch 'origin/main' |

| 711de02 | Juho Lee | 2026-02-26 | Merge branch 'ai_node_names' into 'main' |

| 0a2a07f | Ibtisam | 2026-02-26 | feat: major collaboration feature |

| 4760643 | Rocket Primm | 2026-02-26 | Merge branch 'main' into ai_node_names |

| c49ff63 | Rocket Primm | 2026-02-26 | fix: move AI node names down |

| 54f42d2 | Mariia Katsala | 2026-02-25 | Trigger redeploy |

| e5248de | Mariia Katsala | 2026-02-25 | Merge remote-tracking branch 'origin/main' |

| c7e6b15 | Mariia Katsala | 2026-02-25 | Merge branch 'feat/context-menu-ui-fix' into 'main' |

| e1ba3ae | Mariia Katsala | 2026-02-25 | Merge remote-tracking branch 'origin/main' |

| 5cf7594 | Juho Lee | 2026-02-24 | fix: context menu ui fix |

| c3344ca | Valeriia Bondareva | 2026-02-24 | Merge branch 'settings-ux' into 'main' |

| b3b5f2c | Mariia Katsala | 2026-02-24 | fix the design of the subscription page for macOS |

| 31de9a8 | Mariia Katsala | 2026-02-24 | Merge branch 'settings-ux' into 'main' |

| 6c3f6bd | Valeriia | 2026-02-24 | - Button color change + aligment |

| e0c869d | Valeriia | 2026-02-24 | - Fix of the grid in the editor |

| d570888 | Mariia Katsala | 2026-02-24 | Merge remote-tracking branch 'origin/main' |

| cc18a83 | Valeriia Bondareva | 2026-02-23 | Merge branch 'forgot-password' into 'main' |

| f82540c | Valeriia | 2026-02-23 | Merge branch 'main' into forgot-password |

| 2297dda | Mariia Katsala | 2026-02-23 | Trigger redeploy |

| 2f84185 | Mariia Katsala | 2026-02-23 | Merge remote-tracking branch 'origin/main' |

| 08e8e65 | Juho Lee | 2026-02-23 | Merge branch 'feat/contextmenu-properties-toolbar-ui-enhancement' into 'main' |

| 1a6c5cb | Juho Lee | 2026-02-23 | fix: typescript error |

| 5eb5c58 | Juho Lee | 2026-02-23 | fix: context menu typescript error |

| 3aae946 | Mariia Katsala | 2026-02-23 | Trigger redeploy |

| 888fa28 | Mariia Katsala | 2026-02-23 | Merge remote-tracking branch 'origin/main' |

| f11f3b5 | Juho Lee | 2026-02-23 | Merge branch 'feat/contextmenu-properties-toolbar-ui-enhancement' into 'main' |

| 2546287 | Juho Lee | 2026-02-23 | Merge branch 'validation' into 'main' |

| fd9bf96 | Mariia Katsala | 2026-02-23 | Merge remote-tracking branch 'origin/main' |

| 6cf3103 | Valeriia | 2026-02-23 | - Font used in the editor is now on all of our pages |

| 714bbbe | Valeriia | 2026-02-23 | - "My diagrams" Devince logo leads towards the main page - Button to the subscription page was added |

| d447c85 | Valeriia | 2026-02-23 | - Dark theme subscription page text fixed x2 |

| ad97dea | Valeriia | 2026-02-23 | - Dark theme grid fix - Dark theme subscription page text fixed |

| b9278f3 | Juho Lee | 2026-02-22 | ui(properties panel): improve dark mode styling, align size and id panel, click to copy function |

| 4d7653e | Juho Lee | 2026-02-22 | feat(toolbar): add WAM Studio logo, comment out back to diagram button, improve mobile screen responsiveness |

| eef5ea3 | Valeriia | 2026-02-22 | - Other subscriptions added - Mobile optimization fixed |

| e337fad | Juho Lee | 2026-02-22 | Merge branch 'main' into feat/contextmenu-properties-ui |

| 754c915 | Rocket Primm | 2026-02-22 | Revert "Merge branch 'revert-95d2e6f4' into 'main'" |

| c1e1c66 | Valeriia | 2026-02-22 | - Student subscription type - All of the pages are scrollable now |

| 8dc5684 | Valeriia | 2026-02-22 | Merge branch 'refs/heads/main' into forgot-password |

| c9c6e7f | Rocket Primm | 2026-02-22 | Merge branch 'revert-95d2e6f4' into 'main' |

| d03f31a | Rocket Primm | 2026-02-22 | Revert "Merge branch 'validation' into 'main'" |

| dc31b1a | Mariia Katsala | 2026-02-22 | Trigger redeploy |

| 95d2e6f | Rocket Primm | 2026-02-22 | Merge branch 'validation' into 'main' |

| 69dc49f | Mariia Katsala | 2026-02-22 | Merge branch 'favicon-fix' into 'main' |

| 629bb8d | Mariia Katsala | 2026-02-22 | favicon fix for firefox |

| 52c0adf | Mariia Katsala | 2026-02-22 | Trigger redeploy |

| daa950f | Rocket Primm | 2026-02-22 | fix: remove stray devinche-client folder |

| 499bf28 | Rocket Primm | 2026-02-22 | Merge branch 'main' into validation |

| a55e39a | Rocket Primm | 2026-02-22 | Merge branch 'feat/toolbar-responsive-design' into 'main' |

| ebf580a | Juho Lee | 2026-02-21 | ui: render chatbot behind properties panel, context menu |

| be03643 | Juho Lee | 2026-02-21 | fix: remove unnecessary comment |

| 83e1c85 | Juho Lee | 2026-02-21 | refactor(properties): split PropertiesPanel into modular components and constants |

| b05e5fd | Juho Lee | 2026-02-21 | feat(ui): implement mobile-responsive design for PropertiesPanel |

| f716af2 | Juho Lee | 2026-02-21 | feat: improve ContextMenu with Floating UI and custom mobile bottom sheet |

| f8a50d8 | Juho Lee | 2026-02-21 | fix: resolve ContextMenu error |

| e1f88ea | Juho Lee | 2026-02-21 | ui: remove black border flickering when Palette Panel expand |

| 880a81a | Juho Lee | 2026-02-21 | chore: remove unnecessary comments |

| 18328c3 | Juho Lee | 2026-02-21 | ui: comment out Tools in PaletteSection |

| 7d7d7f1 | Juho Lee | 2026-02-21 | feat(palette): improve palette UX with click-to-add and responsive behavior |

| 20b7be8 | Juho Lee | 2026-02-21 | ui: improve Version History panel responsiveness and typography |

| 67f5fbf | Juho Lee | 2026-02-21 | style(CostBreakdown): Scale up the size of text for readability |

| 7b5191a | Juho Lee | 2026-02-21 | feat(UserAvatarMenu): allow unauthenticated access to UserAvatarMenu and optimize UI in diagram page |

| d8a3ea8 | Juho Lee | 2026-02-21 | feat(UserAvatarMenu): allow unauthenticated access to UserAvatarMenu and optimize UI in diagram page |

| 6aa9140 | Juho Lee | 2026-02-21 | feat(LanguageSwitcher): align style language switcher button on the landing page |

| 30b1476 | Juho Lee | 2026-02-21 | fix(toolbar): resolve conflict with remote main branch |

| 78cb7b8 | Juho Lee | 2026-02-21 | Sync package files with main to fix dependency issues |

| 58e7ce8 | Juho Lee | 2026-02-21 | temp: save dependencies |

| 22932a1 | Mariia Katsala | 2026-02-21 | Merge branch 'frontend-deployment' into 'main' |

| 5a76408 | Mariia Katsala | 2026-02-21 | typescript error fixes, empty lockfile is removed |

| 56bc66a | Valeriia | 2026-02-21 | Merge branch 'main' into forgot-password |

| 93f782f | Valeriia | 2026-02-21 | - Subscription page template |

| 3fed522 | Mariia Katsala | 2026-02-20 | Merge branch 'backend-deployment' into 'main' |

| 1ebd9b4 | Mariia Katsala | 2026-02-20 | add necessary packages |

| 68fec46 | Mariia Katsala | 2026-02-20 | setup for render |

| dda95cb | Juho Lee | 2026-02-20 | feat(toolbar): improve responsive design on collaboration status |

| 6b31d1b | Juho Lee | 2026-02-20 | feat(toolbar): improve responsive design on bar_1 elements |

| a5c8d7e | Juho Lee | 2026-02-19 | feat(Toolbar): format large cost number to k, mil, bil |

| 754e31b | Juho Lee | 2026-02-19 | fix: integrate Toolbar from main |

| f55c84d | Juho Lee | 2026-02-19 | fix: NotificationBell error fix |

| 4fc64a1 | Juho Lee | 2026-02-19 | fix: toolbar dropdown outside click |

| a5745db | Juho Lee | 2026-02-19 | fix: merge conflict solving |

| 8777709 | Juho Lee | 2026-02-19 | Merge main into toolbar and resolve conflicts |

| ced743a | Juho Lee | 2026-02-19 | feat(toolbar): modularize components and enhance mobile responsiveness |

| 2bea5df | Rocket Primm | 2026-02-19 | Merge branch 'main' |

| bef0346 | Rocket Primm | 2026-02-19 | feat: connect auto edge validation to error message |

| 331a907 | Valeriia Bondareva | 2026-02-18 | Merge branch 'forgot-password' into 'main' |

| 3221558 | Valeriia | 2026-02-19 | Merge branch 'main' into forgot-password |

| 6ea1e59 | Mariia Katsala | 2026-02-18 | Merge branch 'llm-features' into 'main' |

| 8d0fce9 | Muhammad Ibtisam Tanveer | 2026-02-18 | Merge branch 'feat/ai-improvement' into 'main' |

| a3c8571 | Mariia Katsala | 2026-02-18 | generate documentation with llm and download as md file |

| ea9a362 | Mariia Katsala | 2026-02-18 | version control for diagrams |

| 1ebc07d | Valeriia | 2026-02-18 | - Dark theme fixes (background) |

| ee79b59 | Valeriia | 2026-02-18 | - Dark theme |

| cf3c206 | Valeriia | 2026-02-18 | - Page for password reset - Added new route in API |

| 372708a | Ibtisam | 2026-02-17 | feat: ai improvement fix |

| c629d4e | Ibtisam | 2026-02-17 | feat: AI feature user experience |

| ebd5b91 | Mariia Katsala | 2026-02-17 | Merge branch 'llm-updates' into 'main' |

| edcff83 | Mariia Katsala | 2026-02-17 | explain diagram LLM feature now has techical and non-technical descriptions |

| df91065 | Mariia Katsala | 2026-02-17 | bigger default size of all nodes generated with llm + bigger font size for security realm node |

| c3cf9dc | Mariia Katsala | 2026-02-17 | security realm has a name in the top right corner |

| 9a68bd6 | Mariia Katsala | 2026-02-16 | LLM builds a diagram based on a system description |

| 83120d7 | Muhammad Ibtisam Tanveer | 2026-02-13 | Merge branch 'feat/node-fixes' into 'main' |

| dfc53eb | Muhammad Ibtisam Tanveer | 2026-02-13 | Merge branch 'feat/imports-exports' into 'main' |

| c28d540 | Rocket Primm | 2026-02-12 | Fixed security realm issue on firefox and maybe safari. Added a few custom properties to nodes that lacked them. |

| 607d2de | Rocket Primm | 2026-02-11 | Merge branch 'main' into feat/imports-exports |

| b4d0d06 | Rocket Primm | 2026-02-11 | Moved import and export logic to dedicated files, cleaning up the Toolbar and DiagramScreen files |

| 73ee385 | Rocket Primm | 2026-02-10 | Merge branch 'settings-ux' into 'main' |

| f5da82f | Valeriia | 2026-02-10 | Merge branch 'main' into settings-ux |

| 5a43cc8 | Rocket Primm | 2026-02-10 | Updated rdf and xml schemas |

| 720d2d2 | Rocket Primm | 2026-02-10 | Merge branch 'refactor/split-diagram-hooks' into 'main' |

| 0b4da6b | Rocket Primm | 2026-02-09 | Automatic relationship verfication upon creating new arrow. Refactored no error pop up and WAM rule page. |

| dfc78dd | Rocket Primm | 2026-02-09 | Added xml and rdf imports |

| 6b1d840 | Valeriia | 2026-02-09 | Merge branch 'main' into settings-ux |

| 534cb2e | Valeriia | 2026-02-09 | - Mobile optimization: sign up page |

| 224c52d | Valeriia | 2026-02-09 | - Mobile optimization: login page 2 |

| f8b0999 | Valeriia | 2026-02-09 | - Mobile optimization: login page |

| c3e4801 | Valeriia | 2026-02-09 | - Mobile optimization: settings page |

| 1e01abc | Valeriia | 2026-02-09 | - Mobile optimization: main page |

| e38a7b5 | juho lee | 2026-02-09 | Merge branch 'main' into refactor/split-diagram-hooks |

| bca147b | Juho Lee | 2026-02-09 | Merge branch 'feat/node-default-cost' into 'main' |

| c65e313 | juho lee | 2026-02-09 | refactor: modularize useDiagram hook, fix lint errors, and extract export logic |

| 494da63 | juho lee | 2026-02-09 | feat: set default costs for nodes |

| 3b049dc | Rocket Primm | 2026-02-09 | Updated rdf and xml exports |

| 29293c7 | Rocket Primm | 2026-02-09 | Updated rdf and xml exports |

| d21bcac | juho lee | 2026-02-09 | Merge branch 'main' of https://gitlab.hrz.tu-chemnitz.de/vsr/edu/planspiel/ws2526/devinche |

| 008767e | Muhammad Ibtisam Tanveer | 2026-02-09 | Merge branch 'feat/localization-and-collab' into 'main' |

| 89113f7 | juho lee | 2026-02-09 | chore: package update |

| 22b5cb8 | Ibtisam | 2026-02-08 | comment lang switch |

| 3b3109e | Ibtisam | 2026-02-08 | ui better |

| 538364f | Ibtisam | 2026-02-08 | feat: minor issue |

| 78c4e0e | Ibtisam | 2026-02-08 | feat: merge with main |

| 7faf7a9 | Mariia Katsala | 2026-02-08 | Merge branch 'llm-teaching' into 'main' |

| 3139f93 | Mariia Katsala | 2026-02-08 | Explain diagram mode for the llm |

| 5151cfa | Ibtisam | 2026-02-08 | added translations and improve ui for collab feature |

| b7ab2e3 | Valeriia Bondareva | 2026-02-07 | Merge branch 'settings-ux' into 'main' |

| a16094a | Mariia Katsala | 2026-02-07 | Merge branch 'small-fixes' into 'main' |

| 869cac4 | Mariia Katsala | 2026-02-07 | new favicon |

| f45bfc5 | Valeriia | 2026-02-07 | - Dark theme added |

| d9b4c72 | Mariia Katsala | 2026-02-07 | autosave every minute and if warning once reload |

| ba5b980 | Valeriia | 2026-02-07 | - Updated API with new scenario - changing data of the user - Updated the settings page with API - Delete account button added |

| fb55f36 | Mariia Katsala | 2026-02-07 | save to png saves without showing that elements are highlighted |

| 762b449 | Valeriia | 2026-02-07 | Settings page UX (without showing data from the DB, WIP) |

| bbad9dd | Mariia Katsala | 2026-02-05 | Merge branch 'frontend/my-diagrams' into 'main' |

| 5dd65c5 | Mariia Katsala | 2026-02-05 | fix logout button |

| eb691fb | Mariia Katsala | 2026-02-05 | my diagrams page mobile optimization |

| 64cc598 | Mariia Katsala | 2026-02-05 | new style for my diagrams page |

| 0b0abaf | Mariia Katsala | 2026-02-05 | button logout goes to the main page |

| 5a42e0d | Mariia Katsala | 2026-02-05 | Merge branch 'feat/ai-integration' into 'main' |

| 207281e | Ibtisam | 2026-02-05 | feat: collab user |

| 8aa7640 | Ibtisam | 2026-02-05 | feat: share diagram |

| dc33298 | Ibtisam | 2026-02-04 | feat: AI Logic |

| 120867f | Muhammad Ibtisam Tanveer | 2026-02-04 | Merge branch 'feat/edge-properties-and-ai-nodes' into 'main' |

| 0e29673 | juho lee | 2026-02-04 | refactor: Comment out step edge types and initial node and edge data |

| 1ded0df | juho lee | 2026-02-04 | feat: add edge property panel, remove resizable node |

| bcc8380 | juho lee | 2026-02-03 | fix: context menuclosemenu warning |

| a35d070 | juho lee | 2026-02-03 | feat: add AiApplicationNode, AiServiceNode into PalettePanel |

| 990bbd1 | juho lee | 2026-02-03 | fix: temp save |

| f1e5c97 | juho lee | 2026-02-03 | fix: merge PropertiesPanel(temp) |

| 83021ec | juho lee | 2026-02-03 | fix: git revert |

| 818cdcc | Mariia Katsala | 2026-02-03 | Merge branch 'feat/backend-user-diagrams' into 'main' |

| 31367af | Ibtisam | 2026-02-03 | Revert merge of feat/add-ai-nodes-and-edge-properties |

| a143cf4 | Rocket Primm | 2026-02-03 | Merge branch 'feat/add-ai-nodes-and-edge-properties' into 'main' |

| 787ce7c | juho lee | 2026-02-03 | Merge branch 'main' into feat/add-ai-nodes-and-edge-properties |

| 18f7603 | Ibtisam | 2026-02-03 | feat: add user diagrams |

| 1eb2b19 | Ibtisam | 2026-02-03 | user diagrams |

| def99aa | juho lee | 2026-02-03 | feat(properties panel): add comprehensive property fields for various edge types |

| d238897 | Ibtisam | 2026-02-02 | added protected routed logic to fronted and chat ui for ai |

| 221254c | juho lee | 2026-02-02 | feat: support edge properties in PropertiesPanel |

| ab78ec7 | juho lee | 2026-02-02 | feat: add tooltips and descriptions for node property fields |

| 7bfc6d1 | juho lee | 2026-02-02 | feat: enhance AI node properties in PropertiesPanel |

| 0782cc9 | juho lee | 2026-02-02 | fix: placeholder not showing appropriate in AdditionalFields in PropertiesPanel Component |

| bedbc5d | Juho Lee | 2026-02-02 | Merge branch 'data-process-ai-nodes' into 'main' |

| 79f4afa | juho lee | 2026-02-02 | feat: add AiApplicationNode and AiServiceNode |

| cbdaede | Rocket Primm | 2026-02-02 | Fix: Refactord palette panel to better support ai nodes and increase clarity. |

| b9e9db2 | Rocket Primm | 2026-02-02 | Merge branch 'main' into data-process-ai-nodes |

| 977147e | Rocket Primm | 2026-02-02 | Added dataset and AI process nodes with accompanying details and palette panel integration. New section for AI elements in the pallette panel |

| 8472ac2 | Rocket Primm | 2026-02-02 | Red highlight on invalid arrows and nodes |

| 3282a5b | Mariia Katsala | 2026-01-31 | Merge branch 'user-save' into 'main' |

| 47d2e62 | Valeriia | 2026-01-31 | Small fixes: 1. Mona Lisa svg fixed 2. Dark theme for the main, login and sign-up pages + theme synchronization across the pages and editor 3. Log out button on the main page if you're logged in |

| 1507282 | Rocket Primm | 2026-01-29 | Small bug fix in validation backend |

| 1c6ffb1 | Rocket Primm | 2026-01-29 | Nodes and edges in violation of validation rules now turn red upon validation. WAM rule page made to inform users of WAM rules. |

| 1868dfd | Muhammad Ibtisam Tanveer | 2026-01-29 | Merge branch 'feature/toolbar-total-cost-ui' into 'main' |

| 2049fc2 | Muhammad Ibtisam Tanveer | 2026-01-29 | Merge branch 'feat/validation' into 'main' |

| 9e4487e | juho lee | 2026-01-26 | chore: remove temp file |

| 49e1809 | juho lee | 2026-01-25 | style(Toolbar): update toolbar hover cursor and improve validate button styling |

| befa0a0 | juho lee | 2026-01-25 | style(Toolbar): improve Total Cost button |

| a242cc3 | juho lee | 2026-01-25 | chore: remove unused imports |

| 22eb44f | juho lee | 2026-01-25 | Refactor: move total cost logic to Toolbar and remove from PropertiesPanel |

| 66233b2 | Mariia Katsala | 2026-01-24 | Merge branch 'backend/swagger' into 'main' |

| 748b76d | Mariia Katsala | 2026-01-24 | delete the exampleRoute |

| f8663a9 | Mariia Katsala | 2026-01-24 | updates readme file with swagger info |

| ae36246 | Mariia Katsala | 2026-01-24 | swagger is connected |

| 1205ba3 | Rocket Primm | 2026-01-21 | chore: commit from incorrect directory |

| 9439090 | Rocket Primm | 2026-01-21 | Moved validation logic to the backend as is necessary for the required frontend, backend separation |

| 38d25ae | Juho Lee | 2026-01-21 | Merge branch 'feat/security-service-properties' into 'main' |

| c209d4e | Rocket Primm | 2026-01-21 | Merge branch 'login-register' into 'main' |

| c78ec33 | Rocket Primm | 2026-01-21 | Added custome properties for the security realm and service node |

| ac9fcf7 | Valeriia | 2026-01-21 | 1. Login and sign up pages done (signup.tsx and signin.tsx in features/ui) 2. Combined backend with frontend 3. Changed backend for Google OaUTH (also changed README file with it's data) 4. Frontend on port 3000, backend on 4000 5. Errors in the google.svg for whatever reason |

| 7b7408a | Rocket Primm | 2026-01-21 | Merge branch 'feat/properties-panel-enhancement' into 'main' |

| 84d53f0 | juho lee | 2026-01-20 | feat(PropertiesPanel): implement type-specific attributes from model spec |

| 400f03c | juho lee | 2026-01-20 | feat(PropertiesPanel): implement type-specific attributes from model spec |

| 4a48664 | juho lee | 2026-01-20 | feat(PropertiesPanel): add cost breakdown with sanitized input and UI refinements |

| bb9ec0e | juho lee | 2026-01-20 | feat(PropertiesPanel): implement expandable cost breakdown and refactor styles, PropertyInput |

| 5234a55 | juho lee | 2026-01-20 | feat: update currency icon and symbol to Euro |

| 38e79c7 | juho lee | 2026-01-20 | feat: add Total Cost display to PropertiesPanel |

| 44af069 | Mariia Katsala | 2026-01-19 | Merge branch 'backend/registration-login' into 'main' |

| 5fbd29e | Mariia Katsala | 2026-01-19 | updates readme with api info |

| 9e0932d | Mariia Katsala | 2026-01-19 | registration, login, update, delete, and logout works |

| fa83669 | Rocket Primm | 2026-01-19 | Merge branch 'feat/properties-panel' into 'main' |

| b0916fa | Ibtisam | 2026-01-17 | added name to nodes as properties to display |

| fd1c352 | Ibtisam | 2026-01-17 | added basic properties panel and give some properties to the nodes |

| 781a1d1 | Muhammad Ibtisam Tanveer | 2026-01-17 | Merge branch 'validation' into 'main' |

| b07e5c9 | Rocket Primm | 2026-01-11 | Added security realm validation check. Added 'No Error' pop up upon successful validation |

| d091d09 | Muhammad Ibtisam Tanveer | 2026-01-10 | Merge branch 'feat/realm-grouping' into 'main' |

| e09b501 | Ibtisam | 2026-01-09 | dark ui |

| b679c24 | Muhammad Ibtisam Tanveer | 2026-01-09 | Merge branch 'frontend/history' into 'main' |

| 32a9d50 | Mariia Katsala | 2026-01-09 | Undo and Redo buttons functionality |

| 2ba94fe | Mariia Katsala | 2026-01-09 | Merge branch 'main_page' into 'main' |

| 0c2aa38 | Valeriia Bondareva | 2026-01-09 | - Moved editor page.tsx into a different folder to not create a conflict (app/editor/page.tsx) - Created main page in the app/page.tsx - Added svg for the background and logo into /public |

| a31008d | Ibtisam | 2026-01-09 | feat: realm grouping |

| 03de675 | Juho Lee | 2026-01-08 | Merge branch 'validation' into 'main' |

| 184a536 | Rocket Primm | 2026-01-08 | Merge branch 'main' into validation |

| c6ba058 | Rocket Primm | 2026-01-08 | Merge branch 'feat/node-ui-enhancements' into 'main' |

| 4d40126 | Rocket Primm | 2026-01-08 | Bug fix adding dependency to useCallback function |

| 28a5628 | Rocket Primm | 2026-01-08 | Merge branch 'main' into validation |

| 0b27459 | Rocket Primm | 2026-01-08 | Validates against relationship rules and identity rule. Still need to implement security realm children when possible. Error messages show errors in top right. |

| edaa573 | juho lee | 2026-01-08 | chore: remove console log in context menu component |

| 2c652f2 | juho lee | 2026-01-08 | chore: remove reference comments |

| 0413a6b | juho lee | 2026-01-08 | fix(diagram): fix node duplication not rendering on canvas |

| e0190da | juho lee | 2026-01-08 | feat(ui): improve SecurityRealmNode, IdentityProviderNode text styling |

| 1de8442 | juho lee | 2026-01-08 | feat(ui): improve SecurityRealmNode styling and label layout |

| 2db7962 | Rocket Primm | 2026-01-08 | Export/import fully functional in top bar |

| e57311b | juho lee | 2026-01-07 | refactor: fix node duplication and update intersection SVG styles |

| 16d78c2 | juho lee | 2026-01-07 | feat: Improve node SVG styling, optimize inner text styling, set nodes initial size |

| 5ea8baf | Rocket Primm | 2026-01-07 | Working dropdown and options. Still refactoring and will clean up previous implementation |

| 5a3baab | Rocket Primm | 2026-01-07 | extended exports to include RDF and XML |

| 628b07a | juho lee | 2026-01-07 | Merge remote-tracking branch 'origin/main' into wip/2025-12-12 |

| e1e9004 | Juho Lee | 2026-01-07 | Merge branch 'lera_code' into 'main' |

| 67d760a | juho lee | 2026-01-07 | Temp save before reviewing the codes from the other branch |

| 24c4470 | Valeriia Bondareva | 2026-01-07 | - Added icons for every node and optimized them for comfortable appearence in the menu - Changed edges icons from GitBranch to ArrowUpIcon |

| fc5baae | juho lee | 2025-12-13 | feat: ApplicationNode background color, SecurityRealm resize ratio |

| 23c3857 | Mariia Katsala | 2025-12-12 | Merge branch 'frontend/local-storage' into 'main' |

| ec41090 | Mariia Katsala | 2025-12-12 | Store and display the current diagram from localStorage |

| 5803c0f | Muhammad Ibtisam Tanveer | 2025-12-12 | Merge branch 'feat/canvas-context-menu' into 'main' |

| 6047261 | juho lee | 2025-12-12 | feat: add 'select all' action to canvas context menu |

| b807f9a | juho lee | 2025-12-12 | chore: minor styling change |

| dff0960 | juho lee | 2025-12-12 | chore: resolve merge conflict with updated feat/dark-theme branch |

| d94e5c3 | Muhammad Ibtisam Tanveer | 2025-12-11 | Merge branch 'feat/dark-theme' into 'main' |

| 24a1faa | juho lee | 2025-12-11 | Feat(Diagram): Implement clear canvas functionality on reset |

| 6f85b6f | juho lee | 2025-12-11 | fix(perf): Eliminate frame drops during React Flow dragging |

| f577871 | juho lee | 2025-12-11 | fix(theme): Prevent hydration mismatch on change to light theme |

| ff44660 | juho lee | 2025-12-10 | feat: Canvas context menu and cleanup function |

| c7801a9 | Ibtisam | 2025-12-09 | dark ui |

| 60a5301 | Valeriia Bondareva | 2025-12-09 | Merge branch 'lera_code' into 'main' |

| 94a30cd | Mariia Katsala | 2025-12-09 | fix merge issues |

| 82b25fb | Mariia Katsala | 2025-12-09 | Merge branch 'main' into 'lera_code' |

| 294fd52 | Mariia Katsala | 2025-12-09 | fix(diagram): resolve hydration mismatch, enable DnD node creation, and send serializable palette payload |

| 99b6441 | Valeriia | 2025-12-09 | palette design 2 |

| 81f2f9f | Juho Lee | 2025-12-09 | Merge branch 'frontend/nodes-fix' into 'main' |

| 2291926 | juho lee | 2025-12-09 | Fix: merge confilict |

| 8ebf58c | Rocket Primm | 2025-12-09 | Merge branch 'feat/context-menu' into 'main' |

| 4055df8 | Rocket Primm | 2025-12-09 | Merge branch 'feat/edges' into 'main' |

| 15ad5f1 | Mariia Katsala | 2025-12-09 | Fix strokeWidth |

| 95c90a9 | Ibtisam | 2025-12-09 | merge with test |

| f7dd837 | juho lee | 2025-12-09 | fix: merge conflict |

| f5899fc | Valeriia | 2025-12-09 | Merge branch 'main' into lera_code |

| 710d730 | Rocket Primm | 2025-12-09 | Merge branch 'exports' into 'main' |

| 790e6fd | juho lee | 2025-12-09 | feat: context menu with mui icons |

| 6951af8 | Mariia Katsala | 2025-12-09 | Fix colors for Mac |

| 535bd38 | juho lee | 2025-12-09 | Merge remote-tracking branch 'origin/main' into wip/context-menu |

| ed281f9 | Valeriia | 2025-12-09 | palette design (half working) |

| de8b1a2 | Ibtisam | 2025-12-09 | edges shapes |

| b6971b1 | Rocket Primm | 2025-12-09 | Merge branch 'main' into exports |

| 5a5f9ab | Valeriia | 2025-12-09 | Merge branch 'refs/heads/main' into lera_code |

| eb348bb | Muhammad Ibtisam Tanveer | 2025-12-08 | Merge branch 'frontend/nodes' into 'main' |

| be73847 | Mariia Katsala | 2025-12-08 | Add 6 nodes with handles, display them on the board |

| d455de2 | juho lee | 2025-12-08 | feat: enhance ContextMenu UI with MUI icons |

| eb38f89 | Rocket Primm | 2025-12-08 | json, png, rdf exports working. json import working |

| 99d45b1 | juho lee | 2025-12-08 | chore: temp commit |

| da7dee4 | juho lee | 2025-12-06 | Fix: Apply optional chaining for node.measured in ContextMenu |

| e3d3631 | Juho Lee | 2025-12-06 | Merge branch 'feat/ts-conversion' into 'main' |

| e6a5204 | juho lee | 2025-12-06 | Fix: Apply ConnectionMode.Loose for flexible handle connections in DiagramCanvas |

| b2c9a97 | juho lee | 2025-12-06 | WIP: temp save before switching to feat/ts-conversion |

| 583c41c | Ibtisam | 2025-12-06 | convert project to ts |

| 62d3b05 | Valeriia | 2025-12-02 | Merge branch 'refs/heads/main' into lera_code |

| 53e3be0 | juho lee | 2025-12-02 | feat(diagram): Add initial React Flow setup |

| 97829cd | Valeriia | 2025-12-02 | Merge branch 'main' into lera_code |

| adffdff | Rocket Primm | 2025-11-23 | Merge branch 'database-setup' into 'main' |

| 3c59bfc | Mariia Katsala | 2025-11-21 | Add models for user and diagram, refactor dbInit.ts, connect MongoDB to backend. |

| a77ae3c | Mariia Katsala | 2025-11-21 | Readme file for backend. |

| 1fafa2b | Mariia Katsala | 2025-11-21 | Script to initialize MongoDB and add mock data. Config file for environment variables. Example file for .env. |

| 8aea495 | Rocket Primm | 2025-11-21 | changed backend to typescript |

| 718adc1 | Valeriia | 2025-11-18 | Merge branch 'refs/heads/main' into lera_code |

| e24e6c8 | Muhammad Ibtisam Tanveer | 2025-11-18 | Merge branch 'feat/frontend-scream-architecture' into 'main' |

| 35de0f2 | Ibtisam | 2025-11-18 | feat: remove old frontend |

| 29221be | Valeriia | 2025-11-17 | Merge branch 'main' into lera_code |

| 4020c5e | Ibtisam | 2025-11-16 | feat: implement scream architecture |

| 363496d | Muhammad Ibtisam Tanveer | 2025-11-16 | Merge branch 'feat/devinche-client-application' into 'main' |

| e7efbb7 | Ibtisam | 2025-11-15 | feat: add client application |

| e773040 | Mariia Katsala | 2025-11-14 | Team tools, Agile methodology, team member section |

| d1c0525 | Rocket Primm | 2025-11-14 | Merge branch 'rocket_contribution' into 'main' |

| d21777b | Valeriia | 2025-11-14 | test 2 |

| 216fe93 | Valeriia | 2025-11-14 | Test test |

| 7507a0c | Mariia Katsala | 2025-11-14 | Merge remote-tracking branch 'origin/main' |

| 9507a04 | Mariia Katsala | 2025-11-14 | fix the space after the filename |

| c18c96f | Rocket Primm | 2025-11-14 | Merge branch 'backend_init' into 'main' |

| 1b95af8 | Rocket Primm | 2025-11-14 | Added folder structure and route example |

| e5990a7 | Rocket Primm | 2025-11-03 | Added Company culture (Vision, mission, etc.) section, technology sections, and template for the team member section with my own contribution |

| 882a082 | Juho Lee | 2025-11-01 | Merge branch 'juho-oct-report' into 'main' |

| 65a69d2 | Juho Lee | 2025-11-01 | Add meeting notes section for October report |

| 0c9cf53 | Mariia Katsala | 2025-10-30 | Merge branch 'refactor' into 'main' |

| 68fd493 | Mariia Katsala | 2025-10-30 | report template |

| 1ad9726 | Mariia Katsala | 2025-10-30 | move website to \website |

| 84bc9a9 | Muhammad Ibtisam Tanveer | 2025-10-27 | Merge branch 'feat/hero-section-footer' into 'main' |

| 1f30c2c | Ibtisam | 2025-10-27 | hero section and footer with basic project setup |

| 5a5ea09 | Sandra Schaftner | 2025-10-27 | Initial commit |