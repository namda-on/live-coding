import { http, HttpResponse } from "msw";
import { mockTree } from "./mockData";

export const handlers = [
  http.get("/tree", () => {
    return HttpResponse.json(mockTree);
  }),

  http.post("/tree", ({ request }) => {
    return HttpResponse.json({ name: "John" });
  }),
];
