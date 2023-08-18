import axios from 'axios';


import {
    getAccessToken,getRefreshToken,setAccessToken,setRefreshToken,getType
} from '../utils/common-utils';

import {API_NOTIFICATION_MESSAGE,SERVICE_URLS} from '../constants/utils';

const axiosInstance=axios.create({
    baseURL:'http://localhost:4000/api/v1',
    headers:{
        'Content-Type':'application/json',
    },
    timeout:10000
})


axiosInstance.interceptors.request.use((config)=>{
        if(config.Type.params){
            config.params=config.Type.params;
        }
        else if(config.Type.query){
            config.url=config.url+'/:'+config.Type.query;
        }

        return config;
},(error)=>Promise.reject(error));

axiosInstance.interceptors.response.use((config)=>{
    return processResponse(config);
},(error)=>Promise.reject(processError(error)));


function processResponse(config){
    if(config.status===200){
        return {
            success:true,
            data:config.data
        }
    }else{
        return {
            success:false,
            statusCode:config.status,
            message:config.msg
        }
    }
}


function processError(error){
    if(error.response){
        if(error.response?.status===403){
            sessionStorage.clear();
        }else{
            console.log("ERROR IN RESPONSE: ", error.toJSON());
            return {
                isError:true,
                msg:API_NOTIFICATION_MESSAGE.responseFailure,
                statusCode:error.response.status,
            }
        }
    }else if(error.request){
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGE.requestFailure,
            statusCode:error.request?.status
        }
    }else{
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGE.networkFailure,
            statusCode:''
        }
    }
}


export const API={};

for(let [key,value] of Object.entries(SERVICE_URLS)){
    API[key]=(body,showDownload,showUpload)=>{
        axiosInstance({
            method:value.method,
            url:value.url,
            Type:getType(value,body),
            responseType:value.responseType,
            headers:{
                'Authorization':"Bearer "+getAccessToken
            },
            data:method==="DELETE"?"":body,
            onDownloadProgress:function(progressEvent){
                if(showDownload){
                    let percentCompleted=Math.round((progressEvent.loaded*100)/progressEvent.total);
                    showDownload(percentCompleted);
                }
            },
            onUploadProgress:function(progressEvent){
                if(showUpload){
                    let percentCompleted=Math.round((progressEvent.loaded*100)/progressEvent.total);
                    showUpload(percentCompleted);
                }
            }
        })
    }
}