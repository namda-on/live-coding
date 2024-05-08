import { http, HttpResponse } from "msw";
import { mockTree } from "./mockData";

let idx = 9;

export const handlers = [
  http.get("/tree", () => {
    return HttpResponse.json(mockTree);
  }),

  http.post("/tree", async ({ request }) => {
    const { parentId } = await request.json();

    if (parentId === undefined) {
      return HttpResponse.json({ error: "parentId is required" }, { status: 400 });
    }

    const targetParent = parentId === null ? mockTree : mockTree.find((node) => node.id === String(parentId));

    const lastNode = targetParent?.children?.length
      ? targetParent?.children[targetParent.children?.length - 1] ?? null
      : null;

    const newNode = {
      id: idx,
      name: "Untitled",
      type: "FILE",
      parentId: parentId,
      nextNodeId: null,
      prevNodeId: lastNode,
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
