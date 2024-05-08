import { useState, createContext, useMemo } from "react";
import useTree from "./hooks/useTree";
import FileTree from "./FileTree";
import "./app.css";

export const SelectedTreeContext = createContext<{
  selectedTreeNodeId: string;
  setSelectedTreeNodeId: React.Dispatch<React.SetStateAction<string>>;
}>({ selectedTreeNodeId: "", setSelectedTreeNodeId: () => {} });

function App() {
  const { rootTree, isLoading, refetch } = useTree();
  const [selectedTreeNodeId, setSelectedTreeNodeId] = useState<string>("");

  const contextValue = useMemo(
    () => ({ selectedTreeNodeId, setSelectedTreeNodeId }),
    [selectedTreeNodeId, setSelectedTreeNodeId]
  );

  if (isLoading) return <div>Loading </div>;

  // TODO : 해당 함수 구현
  const onClickCreate = async () => {
    //NOTE: rootTree는 최상위 루트노드를 의미합니다. 자식 노드를 순회하며 선택된 노트를 탐색하는 메서드를 구현하세요.
    const node = rootTree.findNodeById(selectedTreeNodeId);

    const result = await fetch("/tree", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentId: null, // FIXME : parentId 를 설정해주세요
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
        <FileTree tree={rootTree} />
      </div>
    </SelectedTreeContext.Provider>
  );
}

export default App;
