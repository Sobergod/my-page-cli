import axios from "axios"

// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b319ab2a776703db5dff938/test'
// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        // if (store.state.token) {
        //     config.headers.token = store.state.token;
        // }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if (err.response) {
            switch (err.response.status) {
                // 接口出错判断
                case 500:
                    console.log(err.response.status)
                    break;
            }
        }
        return Promise.reject(err.response);//返回错误信息
    }
)
class NetWork {
    constructor(axios) {
        this.axios = axios
    }
    // get请求
    getResult(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params: params }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
    // post请求
    postResult(params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })

    }
}
export default new NetWork();