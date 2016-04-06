import React from 'react'
import FilterLink from '../containers/FilterLink'
import * as filterConstants from '../constants/filters';

var divStyle = {marginTop:'1%'};

const Footer = () => (
    <div>
        <div className="col-xs-2 col-md-1" style={divStyle}><span >Show:</span></div>
        <div className="col-xs-6 col-md-4 btn-group">
            <FilterLink className="btn btn-info" filter={filterConstants.SHOW_ALL}>
                All
            </FilterLink>
           
            <FilterLink className="btn btn-info" filter={filterConstants.SHOW_ACTIVE}>
                Active
            </FilterLink>
          
            <FilterLink className="btn btn-info" filter={filterConstants.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    </div>
);

export default Footer;