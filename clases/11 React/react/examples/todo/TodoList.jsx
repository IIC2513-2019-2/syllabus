import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

export default function TodoList(props) {
  const { items, onDelete } = props;
  return (
    <ul>
      { items.map((item, idx) => (
        <li key={`${faker.random.uuid()}`}>
          {item}
          <button value={idx} type="button" onClick={onDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};
