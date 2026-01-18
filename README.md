# Boardy

Boardy is a real-time collaborative whiteboard application intended to foster creativity and teamwork. Built with the latest web technologies, it offers a seamless and responsive drawing experience similar to Miro or FigJam.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Convex](https://img.shields.io/badge/Convex-Backend-orange)
![Liveblocks](https://img.shields.io/badge/Liveblocks-Realtime-red)
![Clerk](https://img.shields.io/badge/Clerk-Auth-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🚀 Key Features

*   **Real-time Collaboration**: Multiple users can draw, move, and interact with elements on the board simultaneously.
*   **Authentication & Organizations**: Secure login and multi-tenancy support using **Clerk**. Create organizations to manage team boards.
*   **Infinite Canvas**: A vast workspace to unleash your ideas.
*   **Tools & Shapes**: Various tools including pen, shapes (rectangles, ellipses), sticky notes, and text.
*   **Layer Management**: Reorder, resize, and manage board elements easily.
*   **Real-time Presence**: See other users' cursors and selection in real-time.
*   **Database**: Robust backend powered by **Convex** for storing boards and user data.
*   **Favorites System**: Mark boards as favorites for quick access.
*   **Search & Filtering**: Easily find boards within your organization.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
*   **Auth**: [Clerk](https://clerk.com/)
*   **Database**: [Convex](https://www.convex.dev/)
*   **Real-time**: [Liveblocks](https://liveblocks.io/)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
*   **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Prerequisites

Ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (v18 or later)
*   npm, yarn, pnpm, or bun

## 🏁 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/boardy.git
cd boardy
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and add the following keys. You will need to obtain these from your respective dashboards (Convex, Clerk, Liveblocks).

```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
# or
LIVEBLOCKS_SECRET_KEY=
```

### 4. Run Convex

Start the Convex dev server to sync your schema and functions.

```bash
npx convex dev
```

### 5. Run the Application

In a new terminal window, start the Next.js development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

*   `/app`: Next.js App Router pages and layouts.
*   `/components`: Reusable UI components.
*   `/convex`: Convex backend functions and schema.
*   `/hooks`: Custom React hooks.
*   `/store`: Global state management with Zustand.
*   `/lib`: Utility functions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
