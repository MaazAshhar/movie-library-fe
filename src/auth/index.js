// check whether user is logged in or not

export const isLoggedIn = ()=>{
    const token = localStorage.getItem("token");
    return token? true:false;
}


// get the token from localstorage

export const getToken = async ()=>{
    if(isLoggedIn()){
        const token = localStorage.getItem("token");
        if(token){
            return JSON.parse(token);
        }
    }else{
        return null;
    }
}
// login the user and save token to localstorage

export const doLogin = async (res,next)=>{
    localStorage.setItem("token",JSON.stringify(res.data.token));
    next();
}

//logout current user

export const doLogout = async (next) =>{
    localStorage.removeItem("token");
    next();
}