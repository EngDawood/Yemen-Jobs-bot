## Brief overview
This rule mandates the use of Bun as the default JavaScript runtime, package manager, bundler, and test runner. Where you would normally use `npm`, `yarn`, or `pnpm`, you should use `bun`.

## CLI Commands
- Use `bun <file>` instead of `node <file>` or `ts-node <file>`.
- Use `bun test` instead of `jest` or `vitest`.
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`.
- Use `bun install` instead of `npm install`, `yarn install`, or `pnpm install`.
- Use `bun run <script>` instead of `npm run <script>`, `yarn run <script>`, or `pnpm run <script>`.
- Bun automatically loads `.env` files, so do not use the `dotenv` package.

## APIs
- Use `Bun.serve()` for web servers, which supports WebSockets, HTTPS, and routes. Do not use `express`.
- Use `bun:sqlite` for SQLite. Do not use `better-sqlite3`.
- Use `Bun.redis` for Redis. Do not use `ioredis`.
- Use `Bun.sql` for Postgres. Do not use `pg` or `postgres.js`.
- The `WebSocket` API is built-in. Do not use the `ws` package.
- Prefer `Bun.file` over `node:fs`'s `readFile`/`writeFile`.
- Use `Bun.$` for shell commands (e.g., `const { stdout } = await $`ls`) instead of `execa`.

## Testing
- Use `bun test` to run tests.
- **Example Test (`*.test.ts`):**
  ```ts
  import { test, expect } from "bun:test";

  test("hello world", () => {
    expect(1).toBe(1);
  });
  ```

## Frontend Development
- Use HTML imports with `Bun.serve()`. Do not use `vite`. HTML imports fully support React, CSS, and Tailwind.
- **Server Example (`index.ts`):**
  ```ts
  import index from "./index.html"

  Bun.serve({
    routes: {
      "/": index,
      "/api/users/:id": {
        GET: (req) => {
          return new Response(JSON.stringify({ id: req.params.id }));
        },
      },
    },
    // optional websocket support
    websocket: {
      open: (ws) => {
        ws.send("Hello, world!");
      },
      message: (ws, message) => {
        ws.send(message);
      },
      close: (ws) => {
        // handle close
      }
    },
    development: {
      hmr: true,
      console: true,
    }
  })
  ```
- **HTML Example (`index.html`):**
  ```html
  <html>
    <body>
      <h1>Hello, world!</h1>
      <script type="module" src="./frontend.tsx"></script>
    </body>
  </html>
  ```
- **React Example (`frontend.tsx`):**
  ```tsx
  import React from "react";
  // import .css files directly and it works
  import './index.css';
  import { createRoot } from "react-dom/client";

  const root = createRoot(document.body);

  export default function Frontend() {
    return <h1>Hello, world!</h1>;
  }

  root.render(<Frontend />);
  ```
- **Run with Hot Reloading:**
  ```sh
  bun --hot ./index.ts
  ```

## Documentation
For more information, read the Bun API docs located in `node_modules/bun-types/docs/**.md`.
