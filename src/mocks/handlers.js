import { http, HttpResponse } from "msw";
import { mockTree } from "./mockData";

let idx = 9;

export const handlers = [
  http.get("/tree", () => {
    return HttpResponse.json(mockTree);
  }),

  http.post("/tree", async ({ request }) => {
    const { prevId, parentId } = await request.json();

    // Create a new node
    const targetParent = parentId === null ? mockTree : mockTree.find((node) => node.id === parentId);
    const newNode = {
      id: idx,
      name: "Untitled",
      type: "FILE",
      parentId: parentId,
      nextNodeId: null,
      prevNodeId: prevId,
    };

    if (Array.isArray(targetParent)) {
      targetParent.push(newNode);
    } else {
      targetParent.children.push(newNode);
    }
    idx++;

    return HttpResponse.json({ name: "John" });
  }),
];
