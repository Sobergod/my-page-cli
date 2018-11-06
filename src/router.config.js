/**
 * 
 * @class Routers
 * @author cjh
 * @method getRoutersAll 获取完整路由表
 * @method getRoutersPart 获取部分路由表
 * 
 */
class Routers {
    constructor(routerConfig) {
        this.routerConfig = routerConfig;
    }
    getRoutersAll() {
        let routerConfig = this.routerConfig
        return routerConfig;
    }
    getRoutersPart() {
        let routersResult = [];
        let routerConfig = this.routerConfig;
        for (let j in routerConfig[0].children) {
            let obj = {
                path: routerConfig[0].children[j].path,
                name: routerConfig[0].children[j].name,
            }
            routersResult.push(obj);
        }
        return routersResult;
    }
}
// 全局router配置
const routersConfig = [
    {
        path: '/',
        component: resolve => require(['@/components/MainRoute'], resolve),
        children: [
            {
                path: '/',
                name: 'Index',
                component: resolve => require(['@/components/Pages/Index/Index'], resolve),
            },
            {
                path: '/mine',
                name: 'Mine',
                component: resolve => require(['@/components/Pages/Mine/Mine'], resolve),
            },

        ],
    },
    {
        path: '/a',
        component: resolve => require(['@/components/SubRoute'], resolve),
        children: [
            {
                path: '/',
                name: 'SubMine',
                component: resolve => require(['@/components/Pages/SubMine/SubMine'], resolve),
            },
        ],
    },
]
const routers = new Routers(routersConfig),
    routersPart = routers.getRoutersPart(),
    routersAll = routers.getRoutersAll();

export default routersAll
export {
    routersPart,
}