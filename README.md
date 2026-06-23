# 🎨 Wam Studio (Team Project)

> **An AI-powered, browser-based WAM (WebComposition Architecture Model) diagram editor** — built to visualize Web Service Architecture intuitive, fast, and collaborative.

![Next.js](https://img.shields.io/badge/Next.js-Frontend-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Typed-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React Flow](https://img.shields.io/badge/React_Flow-Canvas-ff0072?style=flat-square&logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=flat-square&logo=openai&logoColor=white)

---
## 🖥️ Preview
<img width="2559" height="1599" alt="Screenshot 2026-04-22 115737" src="https://github.com/user-attachments/assets/f96d8f17-dac3-4ce8-80f1-06425fbcfa3d" />
<img width="2559" height="1599" alt="Screenshot 2026-04-22 115728" src="https://github.com/user-attachments/assets/d9b9cdc4-3b16-4243-94c7-3ffff1abbce2" />




---

## 📌 Overview

**Wam Studio** is a full-stack web application developed as a **Team project on Master Web Engineering at TU Chemnitz** (5-member team). It provides a visual, AI-assisted editor for creating and managing WAM (WebComposition Architecture Model) diagrams directly in the browser — reducing the complexity of Web System Architecture Diagramming through an intuitive drag-and-drop interface, real-time AI generation, and collaborative tooling.

🔗 [GitHub Repository](https://github.com/jxuho/Devinche/) &nbsp;|&nbsp; 🌐 [Live Demo](https://www.wam-studio.de/editor/)


---

## ✨ Features

- 🖊️ **Visual WAM Diagram Editor** — fully responsive drag-and-drop canvas powered by React Flow
- 🤖 **AI Generation & Explanation** — OpenAI-powered diagram suggestions via optimized prompting
- 🔐 **Google OAuth Authentication** — seamless sign-in via Google
- 💾 **Cloud Persistence** — diagrams saved and synced via MongoDB
- 📱 **Responsive UI/UX** — consistent experience across screen sizes, built with Tailwind CSS
- ⚡ **Modular Codebase** — code-split, hook-based architecture for maintainability across the team

---

## 🏗️ Architecture

```
├── devinche-frontend/
│   └── devinche-client/     # Next.js + TypeScript frontend (port 3000)
└── backend/                 # Express.js REST API (port 4000)
```

The frontend and backend are decoupled services that communicate via RESTful API.

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18+ |
| Package manager | npm / yarn / pnpm |
| Database | MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) |

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/wam-studio.git
cd wam-studio
```

### 2. Frontend Setup

```bash
cd devinche-frontend/devinche-client
npm install
npm run dev
```

Runs at: **http://localhost:3000**

### 3. Backend Setup

```bash
cd ../../backend
npm install
npm run dev
```

Runs at: **http://localhost:4000**

---

## 🔧 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server
NODE_ENV=development
PORT=4000

# Database
MONGODB_URI=your_mongodb_connection_string

# Auth
JWT_KEY=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=your_google_redirect_uri

# AI
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key
```

> **Note:** The app runs without third-party credentials, but Google OAuth and AI features will be disabled.

---

## 🧩 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Next.js, TypeScript, React Flow, Tailwind CSS |
| **Backend** | Express.js, Node.js |
| **Database** | MongoDB (Mongoose) |
| **AI / LLM** | OpenAI API, Google Gemini API |
| **Auth** | JWT, Google OAuth 2.0 |
| **Collaboration** | Notion, Lightweight Agile |

---

## 👥 My Contributions

This project was built collaboratively by a 5-member team at TU Chemnitz.

### 🖥️ Front-End Development

Owned the diagram editor page end-to-end. Evaluated diagramming libraries
and selected React Flow based on its customization capabilities and
active maintenance. Integrated it from scratch after rapid review of the
official docs.

Implemented custom node types with SVG-based designs and dynamic edge
rendering (Legacy, Invocation, Trust). Built per-node Properties Panels
for metadata input and a cost model system that aggregates total cost
across all canvas nodes automatically.

Replaced a custom context menu implementation with @floating-ui/react
after the original overflowed the viewport on edge cases — resolving
positioning instability across zoom levels and mobile viewports.

Refactored a monolithic useDiagram hook into eight specialized hooks
(useDiagram, useDiagramState, useDiagramDnD, useDiagramMenu, useDiagramHistory,
useDiagramPersistence, useDiagramValidation), eliminating frame drops during complex node
interactions and improving team maintainability.

1,100+ line `useDiagram` hook with 44 returned functions into seven concern-specific hooks, improving maintainability and separation of concerns.

### 🤖 AI Frontend Integration

Built the frontend API layer connecting the UI to OpenAI and Gemini
endpoints. Collaboratively tuned system prompts encoding WAM diagram
rules to improve accuracy and consistency of AI-generated output.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

