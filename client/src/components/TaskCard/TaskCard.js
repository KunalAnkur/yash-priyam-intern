import React, { useState } from 'react'
import "./TaskCard.css"
import {connect} from "react-redux"
import { deleteCard, updateCard } from "../../redux/actions/listAction";
function TaskCard({ card, cardIdx, deleteCard, cardlistIdx, updateCard }) {
  
  const title = card.title === undefined ? "" : card.title;
  const description = card.description === undefined ? "" : card.description;
  const handleCardRemove = () => {
    deleteCard(cardlistIdx, cardIdx);
  };
  const [currentTitle,setCurrentTitle] = useState(title);
  const [currentDescription, setCurrentDescription] = useState(description);
  const handleCardInput = () => {
    updateCard({ title: currentTitle, description: currentDescription ,cardId: cardIdx});
  };

  // const onDragStart = (e, taskObj) => {
  //   //   e.dataTransfer.setData("obj", taskObj.id);
  //   //   e.dataTransfer.setData("cardIdx", cardIdx);
  //   //   e.dataTransfer.setData("cardListIdx", cardlistIdx);
  // };
  return (
    <div
      className="task-card"
      // onDragStart={(e) => onDragStart(e, card)}
      draggable
    >
      <button className="card-remove-btn" onClick={handleCardRemove}>
        X
      </button>
      <br></br>
      <label>Title</label>
      <input
        name="title"
        onChange={(e) => {
          setCurrentTitle(e.target.value);
          handleCardInput();
        }}
        className="task-title"
        value={currentTitle}
        placeholder="title"
      />
      <br></br>
      <label>Description</label>
      <textarea
        rows="4"
        cols="15"
        name="description"
        onChange={(e) => {setCurrentDescription(e.target.value); handleCardInput();}}
        className="task-description"
        value={currentDescription}
        placeholder="description"
      ></textarea>
      <br></br>
    </div>
  );
}

export default connect(null, { deleteCard, updateCard })(TaskCard);
