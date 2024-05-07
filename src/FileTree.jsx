import { useCallback } from "react";
import FileTreeNode from "./FileTreeNode";

function FileTree({ tree }) {
  // NOTE : file tree node 랜더링
  const renderTree = useCallback((node) => {
    return (
      <FileTreeNode key={node.id} node={node}>
        {node.hasChildren() ? node.children.map(renderTree) : null}
      </FileTreeNode>
    );
  });

  return <ul>{tree.children.map(renderTree)}</ul>;
}

export default FileTree;
