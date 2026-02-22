# test-code-review-integration

A simple API with **Node.js**, **TypeScript**, and **Express**.

## Installation

```bash
npm install
```

## Running

- **Development** (hot reload):

  ```bash
  npm run dev
  ```

- **Production** (build then run):

  ```bash
  npm run build
  npm start
  ```

## Endpoints

- `GET /` – Welcome message
- `GET /health` – Health check

### Items API (`/api/items`)

- `GET /api/items` – List all items
- `GET /api/items/:id` – Get one item by id
- `POST /api/items` – Create item (body: `{ "title": "string" }`)
- `PATCH /api/items/:id` – Update item (body: `{ "title"?, "completed"? }`)
- `DELETE /api/items/:id` – Delete item

Server runs at http://localhost:3000 by default.
