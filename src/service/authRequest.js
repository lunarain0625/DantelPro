// 是否正在刷新的标记
import API from "@/assets/API.js";
import axios from 'axios';

function refreshToken() {
    return axios.post(API.GET_TOKEN, {}, {
        headers: {
            appid: API.API_APPID,
            appkey: API.API_APPKEY,
        }
    })
        .then(res => {
            const token = res.data.data.token;
            localStorage.setItem('token', token);
            return token
        })
        .catch(err => {
            console.error("refresh token error", err)
            return Promise.reject(err)
        })
}

const instance = axios.create({
    baseURL: API.BASE_URL,
    timeout: 1000 * 30,
});

instance.interceptors.request.use(config => {
    config.headers.token = localStorage.getItem('token');
    console.log('mytoken', config.headers.token)
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    if (response.data.msg === "无操作权限") {
        //refresh token
        return refreshToken().then((res) => {
            console.log('refresh token', res)
            response.config.headers.token = res;
            return instance(response.config);
        })
    } else {
        return response;
    }
}, error => {
    return Promise.reject(error);
})

/** 方法 **/
export default {
    get: instance.get,
    post: instance.post,
};
