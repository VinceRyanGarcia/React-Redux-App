import axios from 'axios';

export const FETCH_QUOTE_LOADING = "FETCH_QUOTE_LOADING";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL";

// export const getQuote = () => {
//     //1. start load
//     //2. do our call
//     //3. success on a successful call
//     //4. fail on a failed call
//     return dispatch => {
//         dispatch(fetchQuoteLoading());

//         axios
//             .get('https://api.kanye.rest')
//             .then(res=>{
//                 dispatch(fetchQuoteSuccess(res.data.quote));
//             })
//             .catch(err=>{
//                 dispatch(fetchQuoteFail(err.Response.code));
//             });
//     }
// }

export const getQuote = () => dispatch => {
    dispatch(fetchQuoteLoading());

    axios
        .get('https://api.taylor.rest')
        .then(res=>{
            dispatch(fetchQuoteSuccess(res.data.quote));
        })
        .catch(err=>{
            dispatch(fetchQuoteFail(err.Response.code));
        });
}

export const fetchQuoteLoading = () => {
    return({ type:FETCH_QUOTE_LOADING});
}

export const fetchQuoteSuccess = (quote) => {
    return({type:FETCH_QUOTE_SUCCESS, payload:quote});
}

export const fetchQuoteFail = (error) => {
    return({type:FETCH_QUOTE_FAIL, payload:error});
}