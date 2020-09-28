import React from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';



class TodoForm extends React.Component {
    state = {
      item: ""
    };

    handleChanges = (e) => {
      this.setState({
        item: e.target.value
      });
      
    };
     
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.item);
    };
  
    render() {
      return (
        <FormControl onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChanges}
          /><br></br>
          <Button onClick={this.handleSubmit}variant="contained" color="primary"> Add Something To Do </Button>
        </FormControl>
      );
    }
  }
  
  export default TodoForm;
  