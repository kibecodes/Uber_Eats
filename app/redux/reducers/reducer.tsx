import { FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../actions/action";

const initialState = {
    isLoading: false,
    result: null,
    error: null
}