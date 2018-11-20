import routes from "./router.config"
// 顶级页面基础信息设置,包括图标,底部栏结构等
const Header = {
    style: {
        color: "" || "#fff",
        backgroundColor: "" || "#2196F3",
    },
    title: "我的app",
}
/**
* tabbar选择栏位基础样式设置
* icon推荐使用字体图标,直接给class名即可
* iconType==2!important, 
* list推荐最多配置5个
* name值要对上router里有isMainPage的值
*/
let TabBar = {
    style: {
        color: "grey" || "#000",
        backgroundColor: "" || "#fff",
    },
    selectColor: "" || "#2196F3",
    iconType: 2, //2代表ui自带
    list: [
        {
            icon: "home",
            selectIcon: "accessibility",
            text: "主页",
            name: "index",
        },
        {
            icon: "person",
            selectIcon: "account_circle",
            text: "我的",
            name: "mine"
        }
    ],
}
/**
 * 需要按顺序配置,n性能较好
 */

// function setTabBar1() {
//     setTimeout(() => {
//         let flag = 0;
//         for (let i in routes) {
//             let rName = routes[i].name.toLowerCase();
//             let lName = TabBar.list[flag].name.toLowerCase()
//             if (rName === lName && routes[i].isMainPage === true) {
//                 TabBar.list[flag].pagePath = routes[i].path;
//                 flag++;
//             }
//         }
//     }, 0)
//     return TabBar
// }

/**
 * 乱序配置,n的平方性能一般
 * 会过滤有无isMainPage的项
 */
const setTabBar = function () {
    return new Promise((resolve, reject) => {
        for (let i in routes) {
            let rName = routes[i].name.toLowerCase();
            for (let j in TabBar.list) {
                let lName = TabBar.list[j].name.toLowerCase()
                if (rName === lName && routes[i].isMainPage === true) {
                    TabBar.list[j].pagePath = routes[i].path;
                    TabBar.list[j].isMainPage = true;
                    break;
                }
            }
        }
        for (let i in TabBar.list) {
            if (TabBar.list[i].isMainPage === undefined) {
                TabBar.list.splice(i, 1);
            }
        }
        resolve(TabBar);
    })
}
// function setTabBar() {
//     setTimeout(() => {
//         for (let i in routes) {
//             let rName = routes[i].name.toLowerCase();
//             for (let j in TabBar.list) {
//                 let lName = TabBar.list[j].name.toLowerCase()
//                 if (rName === lName && routes[i].isMainPage === true) {
//                     TabBar.list[j].pagePath = routes[i].path;
//                     TabBar.list[j].isMainPage = true;
//                 }
//             }
//         }
//     }, 0)
//     return TabBar;
// }
// setTabBar()
// console.log(setTabBar())
export {
    Header,
    setTabBar
}