import React from 'react';

const FilteredFruitList = props => {
    let fruits;
    if (props.list) {
      fruits = props.list.map((item, index) => <li key={index}>{item.char}</li>)
    } 
    return (
      <ul className="fruit-list">
        {fruits}
      </ul>
    )
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
}

export default FilteredFruitList;