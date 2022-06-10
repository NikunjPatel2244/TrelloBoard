import { useState } from 'react';
import './App.css';
import Board from 'react-trello';
import data from "./data.json";

function App() {
  const [task, setTask] = useState(data);

  const newData = (nextData: any) => {
    nextData.lanes.map((item: any) => {
      let count = item.cards.length;
      item.label = count.toString();
      return item
    })
    setTask(nextData);
  }
  
  return (
    <div className="App">
      <h1>Trello Board</h1>
      <Board
        data={task}
        draggable
        editable
        canAddLanes
        addLaneTitle="Add Column"
        addCardTitle="Add Item"
        onDataChange={newData}
      />
    </div>
  );
}

export default App;
