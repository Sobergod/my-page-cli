import netWork from "./network_config"
import apiConfig from "./api_list"
class ApiResult {
    constructor(apiSet) {
        this.apiSet = this._setApiKey(apiSet);
    }
    _setApiKey(apiSet) {
        // 键名转化成小写
        let _apiSet = {};
        for (let i in apiSet) {
            _apiSet[i.toLowerCase()] = apiSet[i];
            delete apiSet[i];
        }
        return _apiSet
    }
    getApi(name, params) {
        let apiSet = this.apiSet,
            _name = name.toLowerCase();
        if (apiSet[_name + "_post"] !== undefined && apiSet[_name + "_post"] !== "") {
            // post请求优先
            return netWork.post(apiSet[_name + "_post"], params);
        } else if (apiSet[_name + "_get"] !== undefined && apiSet[_name + "_get"] !== "") {
            // get请求
            return netWork.get(apiSet[_name + "_get"], params);
        }
        // 返回一个统一报错信息
        return new Promise((resolve) => {
            resolve("api error!");
        })


    }
}
export default new ApiResult(apiConfig.apiList);