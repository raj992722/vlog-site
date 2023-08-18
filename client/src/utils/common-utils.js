

export const getAccessToken=()=>{
    return localStorage.getItem('accessToken');
}

export const getRefreshToken=()=>{
    return localStorage.getItem('refreshToken');
}


export const setAccessToken=(token)=>{
    return localStorage.setItem('accessToken',token);
}

export const setRefreshToken=(token)=>{
    return localStorage.setItem('refreshToken',token);
}

export const getType=(value,body)=>{
    if(value.params){
        return {params:body}
    }
    else if(value.query){
        if(typeof body === 'object'){
            return {query:body._id}
        }else{
            return {query:body}
        }
    }
    else {
        return {};
    }
}