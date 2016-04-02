import React from 'react'
import FilterLink from '../containers/FilterLink'
import * as filterConstants from '../constants/filters';

const Footer = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter={filterConstants.SHOW_ALL}>
            All
        </FilterLink>
        {", "}
        <FilterLink filter={filterConstants.SHOW_ACTIVE}>
            Active
        </FilterLink>
        {", "}
        <FilterLink filter={filterConstants.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
);

export default Footer;