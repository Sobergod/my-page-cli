/**
 * 
 * @class Routers
 * @author cjh
 * @method getRoutersAll 获取完整路由表
 * @method getRoutersPart 获取部分路由表
 * 
 */
import Index from "./components/Pages/Index/Index"
import Mine from "./components/Pages/Mine/Mine"
import SubMine from "./components/Pages/SubMine/SubMine"
import Test from "./components/Pages/TestPage/TestPage"
import NotFound from "./components/NotFound/NotFound"

const routes = [
    {
        isMainPage: true,
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            isMainPage: true,
            keepAlive: true // 需要被缓存
        }
    },
    {
        isMainPage: true,
        path: '/mine',
        name: 'Mine',
        component: Mine,
        meta: {
            isMainPage: true,
            keepAlive: true // 需要被缓存
        }
    },
    {
        isMainPage: true,
        path: '/submine',
        name: 'SubMine',
        component: SubMine,
        meta: {
            isMainPage: true,
        }
    },
    {
        // isMainPage: true,
        path: '/test',
        name: 'Test',
        component: Test,
    },
    {
        // isMainPage: true,
        path: '*',
        name: 'NotFound',
        component: NotFound,
    }
]

export default routes