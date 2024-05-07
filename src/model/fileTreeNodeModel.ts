export enum FileTreeNodeType {
  Directory = "DIRECTORY",
  File = "FILE",
}

type ServerTreeData = {
  id: string;
  name: string;
  type: FileTreeNodeType;
  children: ServerTreeData[];
  parentId: string | null;
  prevNodeId: string | null;
  nextNodeId: string | null;
};

class FileTreeModel {
  id: string;
  name: string;
  type: FileTreeNodeType;
  children: FileTreeModel[];
  parentId: string | null;
  prevNodeId: string | null;
  nextNodeId: string | null;

  constructor(serverData: ServerTreeData) {
    this.id = serverData.id;
    this.name = serverData.name;
    this.type = serverData.type;
    this.children = serverData.children?.map((child: ServerTreeData) => new FileTreeModel(child)) ?? [];
    this.parentId = serverData.parentId ?? null;
    this.prevNodeId = serverData.prevNodeId ?? null;
    this.nextNodeId = serverData.nextNodeId ?? null;
  }

  static createRootFileTreeModelFrom(fileTreeData = []) {
    return new FileTreeModel({
      id: "root",
      name: "root",
      type: FileTreeNodeType.Directory,
      children: fileTreeData,
      parentId: null,
      prevNodeId: null,
      nextNodeId: null,
    });
  }

  get isDirectory() {
    return this.type === FileTreeNodeType.Directory;
  }

  get isFile() {
    return this.type === FileTreeNodeType.File;
  }

  hasChildren() {
    return this.children.length > 0;
  }

  // TODO : id 를 받아서 해당 노드를 찾아서 반환하는 함수
  findNodeById(id: string): FileTreeModel | null {
    return null;
  }
}

export default FileTreeModel;
