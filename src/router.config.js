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

const routes = [
    {
        isMinePage: true,
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        isMinePage: true,
        path: '/mine',
        name: 'Mine',
        component: Mine,
    }
]

export default routes