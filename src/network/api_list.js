// 接口信息统一配置入口,配置需要遵循以下规则即可
let apiConfig = {
    baseURL: "https://www.easy-mock.com/mock/5b319ab2a776703db5dff938/test",
    apiList: {
        // @description 必须加后缀表示请求类型_get表示get请求_post表示post请求
        home_get: "/home",
        first_post: "/first",
    }

}
export default apiConfig