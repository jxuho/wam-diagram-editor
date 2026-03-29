# WAM Studio

**WAM Studio** by **Devinche** is an AI-powered **editor for WAM diagrams** enabling efficient creation of complex system architectures through an intuitive drag-and-drop interface and intelligent features.

## Key Features

### Core Editing
- **Drag-and-drop diagram builder** — 10+ node types (applications, services, databases, security realms, AI components, and more)
- **Real-time WAM validation** — built-in rule checker ensures your diagrams comply with WAM methodology
- **Collaborative editing** — real-time cursor sharing and presence awareness (WebSocket-based)
- **Comment system** — attach and resolve architectural discussions directly on nodes and edges
- **Rich properties panel** — customize every node and edge with type-specific attributes

### AI Features
- **AI Diagram Generation** — describe your system in natural language; Mona Lisa (AI assistant) generates a complete diagram
- **Diagram Explanation** — auto-generate human-readable documentation at multiple technical levels (simple/technical)
- **System Description Analysis** — provide architectural specs and AI will build a comprehensive WAM diagram
- **Documentation Export** — automatically generate Markdown documentation from any diagram

### Data Management
- **Version History** — save up to 10 snapshots per diagram; restore previous states instantly
- **Multiple Export Formats** — JSON, XML, RDF, PNG, SVG, PDF, Markdown
- **Import Support** — load diagrams from JSON, XML, or RDF formats
- **Cloud Storage** — auto-save and sync across devices
- **Diagram Sharing** — invite collaborators with role-based access (viewer, editor, owner)

### User Experience
- **Light & Dark Themes** — comfortable editing in any lighting condition
- **Multi-language Support** — 11+ languages (EN, DE, FR, RU, ZH, JA, KO, AR, TR, UK, UR, SQ)
- **Authentication** — Google OAuth 2.0 + email/password signup
- **Responsive Design** — works on desktop, tablet, and mobile browsers

---

## Project Structure

```
devinche/
├── backend/                    # Express.js + TypeScript backend
│   ├── api/
│   │   ├── controllers/        # Business logic (LLM, diagram ops, auth, etc.)
│   │   ├── routes/             # API endpoints
│   │   └── middleware/         # Auth, error handling, logging
│   ├── models/                 # Mongoose schemas (User, Diagram, Comment, etc.)
│   ├── types/                  # TypeScript type definitions
│   ├── collaboration/          # WebSocket server for real-time features
│   ├── config/                 # Configuration loader
│   ├── scripts/                # Database initialization script
│   ├── index.ts                # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md               # Backend setup guide
│
├── devinche-frontend/
│   └── devinche-client/        # Next.js 14 (App Router) + React 18 frontend
│       ├── src/
│       │   ├── app/            # Next.js pages & layouts
│       │   ├── components/     # Reusable UI components
│       │   ├── contexts/       # React context (auth, theme, language)
│       │   ├── features/
│       │   │   ├── auth-feature/     # Login, signup, password reset
│       │   │   └── diagram-feature/  # Editor, canvas, properties panel
│       │   ├── locales/        # i18n translation files
│       │   └── types/          # TypeScript types
│       ├── public/             # Static assets
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.ts
│       └── README.md           # Frontend dev notes
│
├── website/                    # Next.js marketing website
│   ├── src/
│   │   ├── app/               # Landing, blog, about, contact pages
│   │   ├── components/        # Reusable UI (navbar, footer, cards, etc.)
│   │   └── data/              # Static content
│   └── package.json
│
├── report/                     # Academic report (LaTeX source)
│   ├── report.tex
│   ├── bibfile.bib
│   └── README.md
│
└── README.md                   # This file
```

---

## Quick Start

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm**, **yarn**, **pnpm**, or **bun**
- **MongoDB** (local or cloud, e.g., MongoDB Atlas)
- **Git**

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/Ubuntovka/Planspiel26.git
cd devinche
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

**Create `.env` file** in `backend/` directory:

```env
NODE_ENV=development
PORT=4000
MONGODB_URI=mongodb://localhost:27017/devinche
JWT_KEY=your-super-secret-jwt-key-change-this

# Google OAuth (for authentication)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google

# OpenAI API (for AI features)
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4o
```

**Start MongoDB** (if running locally):

```bash
# macOS (Homebrew)
brew services start mongodb-community

# Linux (systemd)
sudo systemctl start mongod
```

**Run database initialization** (one-time setup):

```bash
npm run init-db
```

**Start backend**:

```bash
npm run dev
```

Backend runs on `http://localhost:4000`

#### 3. Frontend Setup

```bash
cd ../devinche-frontend/devinche-client
npm install
```

**Create `.env` file** in `devinche-frontend/devinche-client/` directory:

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:4000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

**Start frontend**:

```bash
npm run dev
```

Frontend runs on `http://localhost:3000`


### Interactive API Documentation (Swagger)

Once the backend is running, access the interactive Swagger UI to explore and test all API endpoints:

```
http://localhost:4000/api-docs
```
For full API documentation, see [`backend/README.md`](./backend/README.md).

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js)                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Editor UI │ Properties │ Toolbar │ Palette │ Comments   │   │
│  │            React Flow Canvas (Diagram Rendering)          │   │
│  └──────────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────────┘
                             │ REST API + WebSocket
┌────────────────────────────▼────────────────────────────────────┐
│                      Backend (Express.js)                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Auth │ Diagrams │ LLM │ Validation │ Export │ Comments  │   │
│  │            Business Logic Controllers                     │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ MongoDB (Diagrams, Users, Comments, Versions)            │   │
│  │ OpenAI (AI diagram generation & explanation)             │   │
│  │ WebSocket (Real-time collaboration)                      │   │
│  └──────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────┘
```
---

## Documentation Files

- **[`backend/README.md`](./backend/README.md)** — Backend setup, API reference, LLM integration details
- **[`devinche-frontend/devinche-client/README.md`](./devinche-frontend/devinche-client/README.md)** — Frontend dev notes
- **[`contributions.md`](./contributions.md)** — Contribution guidelines

---

**Last Updated:** March 2026
