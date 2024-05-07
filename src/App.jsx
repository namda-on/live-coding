import { useState, createContext, useMemo } from "react";
import useTree from "./hooks/useTree";
import FileTree from "./FileTree";
import "./app.css";

export const SelectedTreeContext = createContext(null);

function App() {
  const { tree, isLoading, refetch } = useTree();
  const [selectedTreeNodeId, setSelectedTreeNodeId] = useState(null);

  const contextValue = useMemo(
    () => ({ selectedTreeNodeId, setSelectedTreeNodeId }),
    [selectedTreeNodeId, setSelectedTreeNodeId]
  );

  if (isLoading) return <div>Loading </div>;

  const onClickCreate = async () => {
    const node = tree.findNodeById(selectedTreeNodeId);

    const result = await fetch("/tree", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // parentId : TODO
      }),
    });

    if (result.ok) {
      refetch();
    }
  };

  return (
    <SelectedTreeContext.Provider value={contextValue}>
      <div>
        <button onClick={onClickCreate} className="create_button">
          create
        </button>
        <FileTree tree={tree} />
      </div>
    </SelectedTreeContext.Provider>
  );
}

export default App;
