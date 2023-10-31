export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

interface ActionProps {
    query: string,
    error: string,
    success: string,
}

export const fetchDataRequest = (query: ActionProps) => ({
    type: FETCH_DATA_REQUEST,
    payload: query
})


export const fetchDataFailure = (error: ActionProps) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})

export const fetchDataSuccess = (result: ActionProps) => ({
    type: FETCH_DATA_SUCCESS,
    payload: result
})
