import { useState, useEffect } from "react";
import FileTreeModel from "../model/fileTreeModel";

function useTree() {
  const [tree, setTree] = useState(FileTreeModel.createRootFileTreeModelFrom());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function fetchTree() {
    (async () => {
      setIsLoading(true);
      const response = await fetch("/tree");
      const data = await response.json();

      const tree = FileTreeModel.createRootFileTreeModelFrom(data);
      setTree(tree);
      setIsLoading(false);
    })();
  }, []);

  return { tree, isLoading };
}

export default useTree;
