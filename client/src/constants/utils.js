

export const API_NOTIFICATION_MESSAGE={
    loading:{
        title:"LOADING...",
        message:'Data is being loaded, Please wait...'
    },
    success:{
        title:'SUCCESS',
        message:'Data is successfully loaded'
    },
    requestFailure:{
        title:"REQUEST ERROR",
        message:'There is error while requesting'
    },
    responseFailure:{
        title:"RESPONSE ERROR",
        message:'There is error while fetching response'
    },
    networkFailure:{
        title:'NETWORK ERROR',
        message:'There is error in connecting! Please try again'
    }
}


export const SERVICE_URLS={
    userLogin:{method:"POST",url:'/login'},
    signUp:{method:'POST',url:'/sign'},
    getAllPosts:{method:"GET",url:'/post'},
    getPostById:{method:'GET',url:'/post',query:true},
    deletePost:{method:'DELETE',url:'/post',query:true},
    updatePostById:{method:"PATCH",url:'/post',query:true},
    createPost:{method:'POST',url:'/post'},
    getAllComments:{method:'GET',url:'/comment'},
    getCommentById:{method:'GET',url:'/comment',query:true},
    createComment:{method:'POST',url:'/comment'},
    deleteComment:{method:'DELETE',url:'/comment',query:true},
    updateCommentById:{method:'PATCH',url:'/comment',query:true},
    getRefreshToken:{method:"POST",url:'/token'},
    uploadImage:{method:"POST",url:'/upload'}
}