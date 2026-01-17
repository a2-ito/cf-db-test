import { describe, it, expect } from "vitest";

describe("Todos API", () => {
  it("GET /api/todos", async () => {
    const res = await fetch("http://localhost:8787/api/todos");
    const json = await res.json();
    expect(Array.isArray(json)).toBe(true);
  });
});
