const UA = window.navigator.userAgent.toLowerCase()
const isIE = UA && /msie|trident/.test(UA)
const isIE9 = UA && UA.indexOf('msie 9.0') > 0
const isEdge = UA && UA.indexOf('edge/') > 0
const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
const isPhantomJS = UA && /phantomjs/.test(UA)
const isFF = UA && UA.match(/firefox\/(\d+)/)

/** 浏览器全屏 */
function fullScreen() {
    var docel = document.documentElement;
    var fullScreenFn = docel.requestFullScreen || docel.webkitRequestFullScreen || docel.mozRequestFullScreen || docel.msRequestFullscreen;
    typeof fullScreenFn !== "undefined" && fullScreenFn.call(docel)
}

/** 退出全屏 */
function exitScreen() {
    var exitScreenFn = document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen;
    typeof exitScreenFn != "undefined" && exitScreenFn.call(document);
}

/**
 * 修复IE下阻止冒泡事件
 * @param event
 */
function stopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

/**
 * 修复IE下阻止默认事件
 * @param event
 */
function preventDefault(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

