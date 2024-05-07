import { useState, createContext, useMemo } from "react";
import useTree from "./hooks/useTree";
import FileTree from "./FileTree";
import "./app.css";

export const SelectedTreeContext = createContext(null);

function App() {
  const { tree: result, isLoading } = useTree();
  const [selectedTreeNode, setSelectedTreeNode] = useState(null);

  const contextValue = useMemo(
    () => ({ selectedTreeNode, setSelectedTreeNode }),
    [selectedTreeNode, setSelectedTreeNode]
  );

  if (isLoading) return <div>Loading </div>;

  return (
    <SelectedTreeContext.Provider value={contextValue}>
      <div>
        <button className="create_button">create</button>
        <FileTree tree={result} setSelectedTreeNode={setSelectedTreeNode} />
      </div>
    </SelectedTreeContext.Provider>
  );
}

export default App;
