import useTree from "./hooks/useTree";
import FileTree from "./FileTree";
import "./app.css";

function App() {
  const { tree: result, isLoading } = useTree();

  if (isLoading) return <div>Loading </div>;

  return (
    <div>
      <button className="create_button">create</button>
      <FileTree tree={result} />
    </div>
  );
}

export default App;
