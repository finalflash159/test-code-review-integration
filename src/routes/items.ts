import { Router, Request, Response } from "express";
import * as itemsStore from "../store/items.js";
import type { CreateItemBody, UpdateItemBody } from "../types/item.js";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const items = itemsStore.getAllItems();
  res.json({ items });
});

router.get("/:id", (req: Request, res: Response) => {
  const item = itemsStore.getItemById(req.params.id);
  if (!item) {
    res.status(404).json({ error: "Item không tồn tại" });
    return;
  }
  res.json(item);
});

router.post("/", (req: Request, res: Response) => {
  const body = req.body as CreateItemBody;
  if (!body?.title || typeof body.title !== "string") {
    res.status(400).json({ error: "title (string) là bắt buộc" });
    return;
  }
  const item = itemsStore.createItem({ title: body.title.trim() });
  res.status(201).json(item);
});

router.patch("/:id", (req: Request, res: Response) => {
  const body = req.body as UpdateItemBody;
  const updated = itemsStore.updateItem(req.params.id, {
    ...(body?.title !== undefined && { title: String(body.title).trim() }),
    ...(body?.completed !== undefined && { completed: Boolean(body.completed) }),
  });
  if (!updated) {
    res.status(404).json({ error: "Item không tồn tại" });
    return;
  }
  res.json(updated);
});

router.delete("/:id", (req: Request, res: Response) => {
  const deleted = itemsStore.deleteItem(req.params.id);
  if (!deleted) {
    res.status(404).json({ error: "Item không tồn tại" });
    return;
  }
  res.status(204).send();
});

export default router;
