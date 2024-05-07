import { useState, useEffect } from "react";
import FileTreeModel from "../model/fileTreeNodeModel";

function useTree() {
  const [rootTree, setRootTree] = useState(FileTreeModel.createRootFileTreeModelFrom());
  const [isLoading, setIsLoading] = useState(false);

  const fetchTreeData = async () => {
    setIsLoading(true);
    const response = await fetch("/tree");
    const data = await response.json();

    const rootTree = FileTreeModel.createRootFileTreeModelFrom(data);
    setRootTree(rootTree);
    setIsLoading(false);
  };

  useEffect(function fetchTree() {
    fetchTreeData();
  }, []);

  return { rootTree, isLoading, refetch: fetchTreeData };
}

export default useTree;
