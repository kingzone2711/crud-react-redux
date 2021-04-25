import actionType from '../actionType'

export default {
    add_note: (note) => ({
        type: actionType.ADD_NOTE,
        note,
    }),
    update_note: (index, note) => ({
        type: actionType.UPDATE_NOT,
        index,
        note
    }),
    delete_note: (index) => ({
        type: actionType.DELETE_NOT,
        index,
    })
}