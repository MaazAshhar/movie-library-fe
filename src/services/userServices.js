import { myAxios } from "./helper";

export const loginUser = async (values) =>{
    const body = {
        user : {
            email : values.email,
            password : values.password,
        },
    };

    const res = await myAxios.post('/login',body);
    return res;
}

export const registerUser = async (values)=>{
    const body = {
        user : {
            email : values.email,
            password : values.password,
            name : values.name,
            phone : values.phone,
        },
    };
    const res = await myAxios.post('/signup',body);
    return res;
}