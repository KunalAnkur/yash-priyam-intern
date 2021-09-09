import React, { useState } from 'react'
import "./CardList.css"
import TaskCard from "../TaskCard/TaskCard";
import {
  deleteList,
  updateList,
  createList,
  createCard,
} from "../../redux/actions/listAction";
import {connect} from "react-redux"

function CardList({ list, deleteList, cardlistIdx, updateList, createCard }) {
  const { cardList} = list;
  const listName = list.listName === undefined ? "" : list.listName;
  const [currentListName, setCurrentListName] = useState(listName)
  const handleCardAdd = () => {
    createCard({ listRef: cardlistIdx });
  };

  const handleListRemove = () => {
    deleteList(cardlistIdx);
  };

  const handleListTitleChange = () => {
    updateList({ listName: currentListName, listId: cardlistIdx });
  };

  // const onDragOver = (e) => {
  //   e.preventDefault();
  // };

  // const onDrop = (e, cardlist) => {
  //   // const cardInsIdx = e.dataTransfer.getData("cardIdx");
  //   // const cardlistInsIdx = e.dataTransfer.getData("cardListIdx");
  //   // let insIdx = updatedState.findIndex(
  //   //   (listObj) => listObj.id === cardlist.id
  //   // );
  //   // insIdx = insIdx === -1 ? 0 : insIdx;
  //   // updatedState[insIdx].cards.unshift(
  //   //   updatedState[cardlistInsIdx].cards[cardInsIdx]
  //   // );
  //   // updatedState[cardlistInsIdx].cards.splice(cardInsIdx, 1);
  //   // dispatch({ type: "moveTask", value: updatedState });
  // };
  return (
    <div
      className="card-list"
      // onDragOver={(e) => onDragOver(e)}
      // onDrop={(e) => onDrop(e, cardList)}
    >
      <input
        className="card-list-name"
        onChange={(e) => {setCurrentListName(e.target.value);handleListTitleChange();}}
        placeholder="card list name"
        value={currentListName}
      />
      <button className="remove-btn" onClick={handleListRemove}>
        Remove List
      </button>
      <span className="card-number">{cardList.length}</span>
      <div className="card-list-container">
        {cardList.map((card) => (
          <TaskCard
            key={card._id}
            card={card}
            cardIdx={card._id}
            cardlistIdx={cardlistIdx}
          />
        ))}
      </div>
      <button className="card-add-btn" onClick={handleCardAdd}>
        Add task
      </button>
    </div>
  );
}

export default connect(null, {
  deleteList,
  updateList,
  createList,
  createCard,
})(CardList);
