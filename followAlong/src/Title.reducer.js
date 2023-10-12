export const initialState = {
    title: 'Hello Earthlings',
    editing: false,
    newTitleText: ''
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_TITLE):
            return ({...state, title: action.title, newTitleText: '', editing:  })
        case(TOGGLE_EDITING):
            return ({...state, editing: !state.editing})
        case(SET_NEW_TEXT_TITLE):
            return({...state, newTitleText: action.newTitleText})
        default: 
            return (state)
    }
}