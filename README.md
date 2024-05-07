### 요구사항

Mock 파일 트리가 React로 구현되어 있는 상태입니다. 각각의 트리 노드는 클릭시 선택되며, `selectedTreeNodeId` 로 저장됩니다.

- App.tsx 파일에, 선택된 노드를 기준으로 파일을 생성하는 Create button 의 onClick 에 등록되는 함수 `onClickCreate` 및 FileTreeModel의 `findNodeById` 매서드를 구현하세요.
- fetch api로 `/tree` 에 생성될 node의 parentId를 body로 포함하여 Post 요청을 하면 tree node가 생성됩니다.
- 선택된 노드가 폴더라면 폴더의 하위에, 선택된 노드가 파일이라면 해당 파일과 동일한 폴더에, 아무 노드도 선택되지 않은 경우에는 root(parentId = null)에 파일을 생성하세요.

### 예시

- folder1을 선택하고 파일을 생성한 경우
  folder1 하위에 Untitled 파일 생성

- 1_1 file을 선택하고 파일을 생성한 경우
  folder1 하위에 Untitled 파일 생성

- 2_2 file을 선택하고 파일을 생성한 경우
  folder2 하위에 Untitled 파일 생성
