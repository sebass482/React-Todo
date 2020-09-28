import React from "react";
import Todo from "./Todo";
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const TodoList = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.groceries.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <Button className="clear-btn" onClick={props.clearPurchased}variant="contained" color="secondary">
        Remove Done
      </Button>
      <br/><br/>
      <Button className="clear-btn" onClick={props.clearAllPurchased}variant="contained" color="secondary">
        Clear All
      </Button>
    </div>
  );
};

export default TodoList;