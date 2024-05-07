import { useContext, useMemo } from "react";
import { SelectedTreeContext } from "./App";

function FileTreeNode({ node, children }) {
  const { selectedTreeNode, setSelectedTreeNode } = useContext(SelectedTreeContext);

  const handleClick = () => {
    setSelectedTreeNode(node);
  };

  const isSelected = useMemo(() => node.id === selectedTreeNode?.id, [selectedTreeNode]);
  const selectedStyle = useMemo(() => (isSelected ? { backgroundColor: "gray" } : {}), [isSelected]);

  return (
    <li className="tree_node">
      <div onClick={handleClick} className="tree_node_content" style={selectedStyle}>
        {node.name}
      </div>
      <ul>{children}</ul>
    </li>
  );
}

export default FileTreeNode;
