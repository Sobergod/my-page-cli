import netWork from "./network_config"
const get = netWork.getResult,
    post = netWork.postResult;
const HOME = "/home";
class ApiResult {
    test(params) {
        return get(HOME, params);
    }
}
export default new ApiResult();