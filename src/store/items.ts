import type { Item, CreateItemBody, UpdateItemBody } from "../types/item.js";

const items = new Map<string, Item>();

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function getAllItems(): Item[] {
  return Array.from(items.values());
}

export function getItemById(id: string): Item | undefined {
  return items.get(id);
}

export function createItem(body: CreateItemBody): Item {
  const id = generateId();
  const item: Item = {
    id,
    title: body.title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  items.set(id, item);
  return item;
}

export function updateItem(id: string, body: UpdateItemBody): Item | undefined {
  const existing = items.get(id);
  if (!existing) return undefined;

  const updated: Item = {
    ...existing,
    ...(body.title !== undefined && { title: body.title }),
    ...(body.completed !== undefined && { completed: body.completed }),
  };
  items.set(id, updated);
  return updated;
}

export function deleteItem(id: string): boolean {
  return items.delete(id);
}
