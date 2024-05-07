export const FILE_TREE_TYPE = {
  DIRECTORY: "DIRECTORY",
  FILE: "FILE",
};

class FileTreeModel {
  constructor(serverData) {
    this.id = serverData.id;
    this.name = serverData.name;
    this.type = serverData.type; // "DIRECTORY" | "FILE"
    this.children = serverData.children?.map((child) => new FileTreeModel(child)) ?? [];
    this.parentId = serverData.parentId ?? null;
    this.prevNodeId = serverData.prevNodeId ?? null;
    this.nextNodeId = serverData.nextNodeId ?? null;
  }

  static createRootFileTreeModelFrom(fileTreeData = []) {
    return new FileTreeModel({
      id: "root",
      name: "root",
      type: FILE_TREE_TYPE.DIRECTORY,
      children: fileTreeData,
      parentId: null,
      prevNodeId: null,
      nextNodeId: null,
    });
  }

  get isDirectory() {
    return this.type === FILE_TREE_TYPE.DIRECTORY;
  }

  get isFile() {
    return this.type === FILE_TREE_TYPE.FILE;
  }

  hasChildren() {
    return this.children.length > 0;
  }
}

export default FileTreeModel;
