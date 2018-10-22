class Utils {
    constructor() { }
    // 获取可视区高度
    getDocumentHeight() {
        return document.documentElement.clientHeight;
    }
    // 获取dom高度
    getDomHeight(dom) {
        return dom.offsetHeight
    }
}

export default Utils;