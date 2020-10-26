import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000
});

// start load phone data
const loadPhoneSuccess = (phones) => ({
    type: 'LOAD_PHONE_SUCCESS',
    phones
})

const loadPhoneFailure = () => ({
    type: 'LOAD_PHONE_FAILURE'
})

export const loadPhone = (offset = 0, limit = 3) => {
    return dispatch => {
        return request.get('phones')
            .then(function (response) {
                console.log('1',response.data)
                dispatch(loadPhoneSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadPhoneFailure())
            });
    }
}
    
// end load phone data

// start search phone data
export const searchContacts = (name, phone, offset = 0, limit = 3) => {
    return dispatch => {
        return request.get('phones', { name, phone, offset, limit })
            .then(function (response) {
                dispatch(loadPhoneSuccess(response.data))
            })
            .catch(function (error) {
                console.log(error);
                dispatch(loadPhoneFailure)
            })
    }

}


// end search phone data

// on search 
export const onSearch = (filter) => ({
    type: 'ON_SEARCH', filter
})

//PAGINATION ACTIONS START

export const previousPage = () => ({
    type: 'PREVIOUS_PAGE'
})

export const changePage = (page) => ({
    type: 'CHANGE_PAGE',
    page
})

export const nextPage = () => ({
    type: 'NEXT_PAGE'
})

//PAGINATION ACTIONS END

// start post phone data

const postPhoneSuccess = (phones) => ({
    type: 'POST_PHONE_SUCCESS',
    phones
})

const postPhoneFailure = (id) => ({
    type: 'POST_PHONE_FAILURE', id
})

const postPhoneRedux = (id, name, phone) => ({
    type: 'POST_PHONE', id, name, phone
})


export const postPhone = (name, phone) => {
    let id = Date.now();
    return dispatch => {
        dispatch(postPhoneRedux(id, name, phone))
        return request.post('phones', { id, name, phone })
            .then(function (response) {
                dispatch(postPhoneSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postPhoneFailure(id))
            });
    }
}

// start delete phone data

const deletePhoneRedux = (id) => ({
    type: 'DELETE_PHONE', id
})

const deletePhoneSuccess = (id) => ({
    type: 'DELETE_PHONE_SUCCESS',
    id
})

const deletePhoneFailure = () => ({
    type: 'DELETE_PHONE_FAILURE'
})


export const deletePhone = (id) => {
    return dispatch => {
        dispatch(deletePhoneRedux(id))
        return request.delete(`phones/${id}`)
            .then(function (response) {
                dispatch(deletePhoneSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(deletePhoneFailure())
            });
    }
}

// end delete phone data

// start resend phone data

const resendChatSuccess = (id) => ({
    type: 'RESEND_CHAT_SUCCESS', id
})


export const resendPhone = (id, name, phone) => {
    return dispatch => {
        return request.post('phones', { id, name, phone })
            .then(function (response) {
                dispatch(resendChatSuccess(id))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postPhoneFailure(id))
            });
    }
}
// end resend phone data

// start edit phone data

const clickEdit = (id) => ({
    type: 'EDIT_CLICK',
    id
})

export const clickEditAct = (id) => {
    return dispatch => {
        dispatch(clickEdit(id))
    }
}

const clickCancel = (id) => ({
    type: 'CANCEL_CLICK',
    id
})

export const clickCancelEditAct = (id) => {
    return dispatch => {
        dispatch(clickCancel(id))
    }
}


const putPhoneSuccess = (id, name, phone) => ({
    type: 'PUT_PHONE_SUCCESS',
    id, name, phone
})

const putPhoneFailure = (id) => ({
    type: 'PUT_PHONE_FAILURE', id
})

const putPhoneRedux = (id, name, phone) => ({
    type: 'PUT_PHONE', id, name, phone
})


export const editUpdatePhone = (id, name, phone) => {
    return dispatch => {
        dispatch(putPhoneRedux(id, name, phone))
        return request.put(`phones/${id}`, { name, phone })
            .then(function (response) {
                dispatch(putPhoneSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(putPhoneFailure(id))
            });
    }
}


// end edit phone data

