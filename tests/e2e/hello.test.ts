import request from "supertest";
import express from "express";
import helloRoutes from "../../src/webApi/routers/HelloRouter";

const app = express();
app.use("/api", helloRoutes);

describe("GET /api/hello", () => {
  it('should return a "Hello, World!" message', async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World!");
  });
});
