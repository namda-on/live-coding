export const mockTree = [
  {
    id: "1",
    name: "folder1",
    type: "DIRECTORY",
    parentId: null,
    nextNodeId: "2",
    prevNodeId: null,
    children: [
      {
        id: "3",
        name: "1_1",
        type: "FILE",
        parentId: "1",
        nextNodeId: "4",
        prevNodeId: null,
      },
      {
        id: "4",
        name: "1_2",
        type: "FILE",
        parentId: "1",
        nextNodeId: "5",
        prevNodeId: "3",
      },
      {
        id: "5",
        name: "Untitled",
        type: "FILE",
        parentId: "1",
        nextNodeId: null,
        prevNodeId: "4",
      },
    ],
  },
  {
    id: "2",
    name: "folder2",
    type: "DIRECTORY",
    parentId: null,
    nextNodeId: null,
    prevNodeId: "1",
    children: [
      {
        id: "6",
        name: "1_3",
        type: "FILE",
        parentId: "2",
        nextNodeId: "7",
        prevNodeId: null,
      },
      {
        id: "7",
        name: "1_zz",
        type: "FILE",
        parentId: "2",
        nextNodeId: null,
        prevNodeId: "6",
      },
    ],
  },
  {
    id: "8",
    name: "rootfile",
    type: "FILE",
    parentId: null,
    nextNodeId: null,
    prevNodeId: null,
    children: [],
  },
];
