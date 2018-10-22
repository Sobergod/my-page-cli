import Index from '@/components/Index'
import Mine from '@/components/Mine'
// isMainPage === true 为顶级页面需要指定哪些为顶级页面
export const routers = [
    {
        isMainPage: true,
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        isMainPage: true,
        path: '/mine',
        name: 'Mine',
        component: Mine
    },
]