export default function manageSearchHistory(state = {
    searchHistory: [] 
}, action){
    switch(action.type){
        case 'ADD_SEARCH':
            return {
                ...state,
                searchHistory: [...state.searchHistory, action.query]
            }
        default:
            return state;
    }
} 
