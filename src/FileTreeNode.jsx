import { useContext, useMemo } from "react";
import { SelectedTreeContext } from "./App";

import FileIcon from "./assets/file.svg?react";
import DirectoryIcon from "./assets/directory.svg?react";

function FileTreeNode({ node, children }) {
  const { selectedTreeNode, setSelectedTreeNode } = useContext(SelectedTreeContext);

  const handleClick = () => {
    setSelectedTreeNode(node);
  };

  const isSelected = useMemo(() => node.id === selectedTreeNode?.id, [selectedTreeNode]);
  const selectedStyle = useMemo(() => (isSelected ? { backgroundColor: "#D0D3D2" } : {}), [isSelected]);

  return (
    <li className="tree_node">
      <div onClick={handleClick} className="tree_node_content" style={selectedStyle}>
        <FileTreeNodeIcon isDirectory={node.isDirectory} />
        {node.name}
      </div>
      <ul>{children}</ul>
    </li>
  );
}

function FileTreeNodeIcon({ isDirectory }) {
  const renderIcon = () => {
    if (isDirectory) {
      return <DirectoryIcon className="shrink-0 w-3" />;
    } else {
      return <FileIcon className="shrink-0 h-3 text-gray-600" />;
    }
  };

  return <div className="shrink-0 flex items-center justify-center w-4 h-4">{renderIcon()}</div>;
}

export default FileTreeNode;
