import {CHANGE_SEARC_HFIELD} from "./constance";

const initialState = {
    searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARC_HFIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}
