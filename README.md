### 요구사항

서버의 파일 트리 data에 대해서 랜더링 및 선택 등이 React로 구현되어 있는 상태입니다.
트리의 최대 depth는 2이며, 현재 화면에 그려지고 있는 트리가 트리의 최대 depth 입니다.
`useTree` 의 return으로 반환되는 rootTree는 아래와 같은 구조로 표현할 수 있습니다.

```
root Tree
ㄴ folder1
  ㄴ 1_1 file
  ㄴ 1_2 file
  ㄴ Untitled
ㄴ folder2
  ㄴ 2_1 file
  ㄴ 2_2 file
ㄴ rootfile
```

화면상에서 각각의 트리 노드는 클릭시 id가 `App.tsx`의 `selectedTreeNodeId` 로 저장됩니다.

- App.tsx 파일에, 선택된 노드를 기준으로 파일을 생성하는 Create button 의 onClick 에 등록되는 함수 `onClickCreate` 및 FileTreeModel 파일의 `findNodeById` 매서드를 구현하세요.
- fetch api로 `/tree` 에 생성될 node의 parentId를 body로 포함하여 Post 요청을 하면 tree node가 생성됩니다.
- 선택된 노드가 폴더라면 폴더의 하위에, 선택된 노드가 파일이라면 해당 파일과 동일한 폴더에, 아무 노드도 선택되지 않은 경우에는 root(parentId = null)에 파일을 생성하세요.

### 예시

- folder1을 선택하고 파일을 생성한 경우
  folder1 하위에 Untitled 파일 생성

- 1_1 file을 선택하고 파일을 생성한 경우
  folder1 하위에 Untitled 파일 생성

- 2_2 file을 선택하고 파일을 생성한 경우
  folder2 하위에 Untitled 파일 생성


![예시](https://github.com/namda-on/live-coding/assets/60877502/1134cfa4-d06a-4235-bec9-f0a943395314)
