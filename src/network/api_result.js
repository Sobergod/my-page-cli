import netWork from "./network_config"
const get = netWork.getResult,
    post = netWork.postResult;
class ApiResult {
    test(params) {
        return get("/home", params);
    }
}
export default new ApiResult();