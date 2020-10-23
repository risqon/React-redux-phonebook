let globalState ={
   
}

const phones = (state = [] , action ) => {
    switch (action.type) {
        case 'LOAD_PHONE_SUCCESS':
            return action.phones.map((item) => {
                item.sent = true;
                item.isEdit = false
                return item
            })

        case 'POST_PHONE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    phone: action.phone,
                    sent: true,
                    isEdit: false
                }
            ]

        case 'POST_PHONE_SUCCESS':
            return state

        case 'POST_PHONE_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false;

                }
                return item
            })

        case 'RESEND_CHAT_SUCCESS':
            return state.map(item => {
                if (item.id === action.id) {
                    item.sent = true;
                }
                return item;
            })

        case 'EDIT_CLICK':
            return state.map(item => {
                if (item.id === action.id) {
                    item.isEdit = true
                }
                return item
            })

        case 'CANCEL_CLICK':
            return state.map(item => {
                if (item.id === action.id) {
                    item.isEdit = false
                }
                return item
            })


        case 'PUT_PHONE':
            return state.map(item => {
                if (item.id === action.id) {
                    item.name = action.name
                    item.phone = action.phone
                    item.isEdit = false
                }
                return item
            })


        case 'PUT_PHONE_SUCCESS':
            return state

        case 'PUT_PHONE_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.isEdit = false
                }
                return item
            })

        case 'DELETE_PHONE':
            return state.filter((item) => item.id !== action.id)

        case 'DELETE_PHONE_SUCCESS':
            return state

        case 'LOAD_PHONE_FAILURE':
        case 'DELETE_PHONE_FAILURE':
        default:
            return state
    }
}

export default phones