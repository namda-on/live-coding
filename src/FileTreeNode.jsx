function FileTreeNode({ node, children }) {
  return (
    <li className="tree_node">
      <div className="tree_node_content">{node.name}</div>
      {children}
    </li>
  );
}

export default FileTreeNode;
