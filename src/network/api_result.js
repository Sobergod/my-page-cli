import netWork from "./network_config"

// 解构
const { get, post } = netWork;
const HOME = "/home";
/**
 * @description 接口集合 后缀必须用_get/_post标注类型
 */
let api = {
    home_get: "/home",
    first_post: "/first",
}
class ApiResult {
    constructor(apiSet) {
        this.apiSet = apiSet
    }
    getApi(name, params) {
        let apiSet = this.apiSet;
        if (apiSet[name + "_post"] !== undefined && apiSet[name + "_post"] !== "") {
            // post请求优先
            return post(apiSet[name + "_post"], params);
        } else if (apiSet[name + "_get"] !== undefined && apiSet[name + "_get"] !== "") {
            // get请求
            return get(apiSet[name + "_get"], params);
        }
        // 返回一个统一报错信息
        return new Promise((resolve) => {
            resolve("api error!");
        })


    }
}
export default new ApiResult(api);