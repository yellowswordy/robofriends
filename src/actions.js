import {CHANGE_SEARC_HFIELD} from "./constance";

export const setSearchField = (text) => ({
    type: CHANGE_SEARC_HFIELD,
    payload: text
});
