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

const routes = [
    {
        isMainPage: true,
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        isMainPage: true,
        path: '/mine',
        name: 'Mine',
        component: Mine,
    },
    {
        // isMainPage: true,
        path: '/submine',
        name: 'SubMine',
        component: SubMine,
    },
    {
        // isMainPage: true,
        path: '/test',
        name: 'Test',
        component: Test,
    }
]

export default routes