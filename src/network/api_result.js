import netWork from "./network_config"
class ApiResult {
    test(params) {
        return netWork.getResult("https://www.easy-mock.com/mock/5b319ab2a776703db5dff938/test/home", params);
    }
}
export default new ApiResult();