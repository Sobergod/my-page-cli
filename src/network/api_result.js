import netWork from "./network_config"

// 解构
const { get, post } = netWork;
const HOME = "/home";
class ApiResult {
    test(params) {
        return get(HOME, params);
    }
}
export default new ApiResult();