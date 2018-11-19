import netWork from "./network_config"
import Api from "./api_array"

// 解构
const { get, post } = netWork;
const { HOME } = Api
// const HOME = "/home";
class ApiResult {
    test(params) {
        return get(HOME, params);
    }
}
export default new ApiResult();