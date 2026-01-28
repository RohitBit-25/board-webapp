# Srishti (Creation)

![Srishti Banner](https://img.shields.io/badge/Status-Production-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

**Srishti** is a premium, real-time collaborative whiteboard designed for the modern visualizer. Born from the concept of *infinite creation*, Srishti provides a seamless, glassmorphic workspace for ideation, diagramming, and team collaboration.

Built with a "Cosmic Dark" aesthetic, it prioritizes focus and fluidity, offering an experience that feels both expansive and grounded.

---

## 🚀 Key Features

*   **🌌 Infinite Canvas**: A boundless workspace that scales with your imagination.
*   **⚡ Real-Time Collaboration**: Multi-cursor support with sub-millisecond latency using Liveblocks.
*   **🔐 Organization-First Auth**: Secure, multi-tenant architecture powered by Clerk and Convex.
*   **💎 Premium Aesthetics**:
    *   **Glassmorphism**: Translucent UI elements for a modern feel.
    *   **Cosmic Dark Theme**: Deep indigo/black palette to reduce eye strain.
    *   **Vector Graphics**: High-fidelity icons and sharp rendering.
*   **🛠️ Creative Tools**:
    *   Pen & Highlighter with pressure sensitivity.
    *   Vector Shapes (Rectangle, Ellipse).
    *   Sticky Notes & Text.
    *   Layer Management (Send to Back/Front).

---

## 🏗️ Architecture & Tech Stack

Srishti is built on a modern, edge-ready stack designed for performance and scalability.

### Frontend
*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (Local state) & [Liveblocks](https://liveblocks.io/) (Real-time state)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) + CSS Variables
*   **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

### Backend & Database
*   **Database**: [Convex](https://www.convex.dev/) (Real-time, reactive database)
*   **Authentication**: [Clerk](https://clerk.com/) (Middleware-protected routes)
*   **Edge**: Middleware for route protection and redirection.

### Data Model (`convex/schema.ts`)
*   `boards`: Stores board metadata (title, author, orgId).
*   `userFavourites`: Many-to-many relationship for user-favored boards.
*   *Note: Whiteboard content (strokes, layers) is synced ephemerally via Liveblocks Storage.*

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.17 or later)
*   npm, yarn, pnpm, or bun

---

## 🏁 Getting Started

Follow these steps to deploy your own instance of Srishti.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/srishti-board.git
cd srishti-board
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory. You will need keys from [Convex](https://dashboard.convex.dev), [Clerk](https://dashboard.clerk.com), and [Liveblocks](https://liveblocks.io/dashboard).

```env
# Convex (Database)
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Liveblocks (Real-time)
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

### 4. Initialize Database
Run the Convex dev server to sync your schema.
```bash
npx convex dev
```

### 5. Start the App
In a new terminal:
```bash
npm run dev
```

Visit `http://localhost:3000` to verify the installation.

---

## 🤝 Contributing

Capabilities are infinite, but our time is not. Contributions are welcome!
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes.
4.  Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

<p align="center">
  Crafted with ❤️ in Bharat 🇮🇳
</p>
