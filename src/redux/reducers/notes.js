import actionType from '../actionType'

const innitalState = {
    notes: []
}
export default (state = innitalState, action) => {
    switch (action.type) {
        case actionType.ADD_NOTE: {
            const notes = [...state.notes];
            notes.push(action.note);
            return {
                notes,
            }
        }
        case actionType.DELETE_NOT: {
            const { index } = action;
            const notes = [];
            state.notes.forEach((note, i) => {
                if (index !== i) {
                    notes.push(note);
                }
            })
            return {
                notes,
            }
        }
        case actionType.UPDATE_NOT: {
            const { index, note } = action;
            const notes = [...state.notes]
            notes[index] = note;
            return { notes, }
        }
        default:return state;
    }
}