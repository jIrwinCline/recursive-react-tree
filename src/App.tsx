import React from "react"
import RecursiveTree from "./components/recursive_tree";
import { mockOrgTreeList } from "./data";
import { TreeBranch } from "./types/types";

const onSelect = (value: TreeBranch) => {
  // You can put whatever here
  alert("you clicked: " + value.label)
}

function App() {
  return (
    <>
      <RecursiveTree
        listMeta={mockOrgTreeList}
        onSelectCallback={onSelect}
      />
    </>
  );
}

export default App;

