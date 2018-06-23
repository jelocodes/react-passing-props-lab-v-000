import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
    return (
      <div className="fruit-basket">
        <Filter fetchFilters={props.fetchFilters} filters={props.filters} handleChange={props.handleFilterChange} />
        <FilteredFruitList
          filter={props.selectedFilter} list={props.list} />
      </div>
    )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ''
}

export default FruitBasket;
