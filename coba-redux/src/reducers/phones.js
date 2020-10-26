let globalState = {
    phones: [],
    page: 1,
    pages: 0,
    isSearch: false,
    filterName: '',
    filterPhone: ''
}

const phones = (state = globalState, action) => {
    switch (action.type) {
        case 'LOAD_PHONE_SUCCESS':

            return {
                ...state, phones: action.phones.map((item) => {
                    item.sent = true;
                    item.isEdit = false
                    return item
                }),
                pages: Math.ceil(action.phones.count / 5)
            }

        case 'ON _SEARCH':
            return {
                ...state,
                isSearch: true,
                filterName: action.filter.name,
                filterPhone: action.filter.phone
            }

        case 'NEXT_PAGE':
            return {
                ...state, page: state.page + 1
            }

        case 'PREVIOUS_PAGE':
            return {
                ...state, page: state.page - 1
            }

        case 'CHANGE_PAGE':
            return {
                ...state, page: action.page
            }

        case 'POST_PHONE':
            return {
                ...state,
                phones: [
                    ...state.phones, {
                        id: action.id,
                        name: action.name,
                        phone: action.phone,
                        sent: true,
                        isEdit: false
                    }
                ]

            }


        case 'POST_PHONE_SUCCESS':
            return state

        case 'POST_PHONE_FAILURE':
            return {
                ...state, phones: state.phones.map((item) => {
                    if (item.id === action.id) {
                        item.sent = false;

                    }
                    return item
                })
            }

        case 'RESEND_CHAT_SUCCESS':
            return {
                ...state, phones: state.phones.map(item => {
                    if (item.id === action.id) {
                        item.sent = true;
                    }
                    return item;
                })
            }

        case 'EDIT_CLICK':
            return {
                ...state, phones: state.phones.map(item => {
                    if (item.id === action.id) {
                        item.isEdit = true
                    }
                    return item
                })
            }

        case 'CANCEL_CLICK':
            return {
                ...state, phones: state.phones.map(item => {
                    if (item.id === action.id) {
                        item.isEdit = false
                    }
                    return item
                })
            }

        case 'PUT_PHONE':
            return {
                ...state, phones: state.phones.map(item => {
                    if (item.id === action.id) {
                        item.name = action.name
                        item.phone = action.phone
                        item.isEdit = false
                    }
                    return item
                })
            }

        case 'PUT_PHONE_SUCCESS':
            return state

        case 'PUT_PHONE_FAILURE':
            return {
                ...state, phones: state.phones.map((item) => {
                    if (item.id === action.id) {
                        item.isEdit = false
                    }
                    return item
                })
            }

        case 'DELETE_PHONE':
            return {
                ...state, phones: state.phones.filter((item) => item.id !== action.id)
            }

        case 'DELETE_PHONE_SUCCESS':
            return state

        case 'LOAD_PHONE_FAILURE':
        case 'DELETE_PHONE_FAILURE':
        default:
            return state
    }
}

export default phones