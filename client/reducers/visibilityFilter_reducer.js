import * as filterConstants from '../constants/filters';


const visibilityFilter = (state = filterConstants.SHOW_ALL, action) => {
    switch (action.type) {
        case filterConstants.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;