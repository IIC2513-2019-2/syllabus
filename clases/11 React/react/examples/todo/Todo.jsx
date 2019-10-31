import React, { Component } from 'react';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(event) {
    this.setState({
      currentItem: event.target.value,
    });
  }

  onDelete(event) {
    const { items } = this.state;
    const idxToDelete = event.target.value;
    this.setState({
      items: items.filter((_, idx) => idx.toString() !== idxToDelete),
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { items, currentItem } = this.state;
    this.setState({
      items: [...items, currentItem],
      currentItem: '',
    });
  }

  render() {
    const { currentItem, items } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input value={currentItem} onChange={this.onChange} />
            <input type="submit" value="Submit HERE" />
          </form>
        </div>
        <TodoList items={items} onDelete={this.onDelete} />
      </div>
    );
  }
}
