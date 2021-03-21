import React from "react"
import TreeList from "./components/tree_list";
import { mockOrgTreeList } from "./data";
import { TreeBranch } from "./types/types";

const onSelect = (value: TreeBranch) => {
  // You can put whatever here
  alert("you clicked: " + value.label)
}

function App() {
  return (
    <>
      <TreeList
        listMeta={mockOrgTreeList}
        onSelectCallback={onSelect}
      />
    </>
  );
}

export default App;

