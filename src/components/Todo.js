import React from "react";
import './Todo.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

const Todo = (props) => {
  // const handleClick = (e) => {
  //   props.toggleItem(props.item.id);
  // };
  return (
    <>
      <List component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary={props.item.name} onClick={() => props.toggleItem(props.item.id)}
            className={`item${props.item.purchased ? " purchased" : ""}`} />
        </ListItem>
        <Divider />
      </List>
      <div

      >
      </div>
    </>
  );
};

export default Todo;
