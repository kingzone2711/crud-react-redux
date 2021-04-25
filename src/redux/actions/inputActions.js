import actionType from '../actionType';

export default {
    set_input_id: (id) => ({
        type: actionType.SET_INPUT_ID,
        id
    }),
    set_input_title: (title) => ({
        type: actionType.SET_INPUT_TITLE,
        title,
    }),
    set_input_content: (content) => ({
        type: actionType.SET_INPUT_CONTENT,
        content,
    }),
    reset_input: () => ({
        type: actionType.RESET_INPUT,
    })
}