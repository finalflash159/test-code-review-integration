import express from "express";
import itemsRouter from "./routes/items.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Chào! API đang chạy." });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
