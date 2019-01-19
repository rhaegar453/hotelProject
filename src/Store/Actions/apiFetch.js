import * as actionsTypes from '../ActionTypes/apiFetch';
import axios from 'axios';


const fetchAllStarted=()=>{
    return{
        type:actionsTypes.FETCH_ALL_STARTED
    }
}

const fetchAllSuccess=(data)=>{
    return{
        type:actionsTypes.FETCH_ALL_SUCCCESS,
        payload:data
    }
}

const fetchAllFailed=(err)=>{
    return{
        type:actionsTypes.FETCH_ALL_FAILED,
        payload:err
    }
}

export const fetchAll=()=>{
    return dispatch=>{
        dispatch(fetchAllStarted());
        const headers={
            'Content-Type':'application/json'
        }
        axios.get('http://localhost:3001/api/all', {headers:headers}).
        then(data=>{
            console.log(data);
            dispatch(fetchAllSuccess(data.data));
        })
        .catch(err=>{
            dispatch(fetchAllFailed(err));
        });
    }
}

const fetchByNameStarted=()=>{
    return {
        type:actionsTypes.FETCH_BY_NAME_STARTED
    }
}

const fetchByNameFail=()=>{
    return{
        type:actionsTypes.FETCH_BY_NAME_FAILED
    }
}
const fetchByNameSuccess=(data)=>{
    console.log(data)
    return{
        type:actionsTypes.FETCH_BY_NAME_SUCCESS,
        payload:data
    }
}

export const fetchByName=(name)=>{
    return dispatch=>{
        dispatch(fetchByNameStarted());
        const headers={
            'Content-Type':'application/json'
        }
        axios.post('http://localhost:3001/api/byname', {name:name}, {headers:headers})
        .then(data=>{
            dispatch(fetchByNameSuccess(data.data));
        })
        .catch(err=>{
            dispatch(fetchByNameFail(err));
        });
    }
}

const fetchByCuisineStarted=()=>{
    return{
        type:actionsTypes.FETCH_BY_CUISINE_STARTED
    }
}

const fetchByCuisineFailed=(err)=>{
    return{
        type:actionsTypes.FETCH_BY_CUISINE_FAILED,
        payload:err
    }
}

const fetchByCuisineSuccess=(response)=>{
    return{
        type:actionsTypes.FETCH_BY_CUISINE_SUCCESS,
        payload:response
    }
}
export const fetchByCuisine=(cuisine)=>{
    return dispatch=>{
        dispatch(fetchByCuisineStarted());
        const headers={
            'Content-Type':'application/json'
        }
        axios.post('http://localhost:3001/api/bycuisine', {cuisine:cuisine}, {headers:headers})
        .then(data=>{
            dispatch(fetchByCuisineSuccess(data));
        })
        .catch(err=>{
            dispatch(fetchByCuisineFailed(err));
        })
    }
}

const fetchByIdStarted=()=>{
    return{
        type:actionsTypes.FETCH_BY_ID_STARTED
    }
}

const fetchByIdFailed=(err)=>{
    return{
        type:actionsTypes.FETCH_BY_ID_FAILED,
        payload:err
    }
}

const fetchByIdSuccess=(data)=>{
    return{
        type:actionsTypes.FETCH_BY_ID_SUCCESS,
        payload:data
    }
}

export const fetchById=(id)=>{
    return dispatch=>{
        dispatch(fetchByIdStarted());
        const headers={
            'Content-Type':'application/json'
        }
        axios.post('http://localhost:3001/api/byid', {id:id}, {headers:headers})
        .then(data=>{
            console.log(data.data.cuisines);
            dispatch(fetchByIdSuccess(data.data));
        })
        .catch(err=>{
            console.log(err);
            dispatch(fetchByIdFailed(err));
        })
    }
}