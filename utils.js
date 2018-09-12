/**
 * 是否在微信中打开
 * @returns {boolean}
 */
function isInWeixinApp() {
    return /MicroMessenger/.test(navigator.userAgent);
}

/**
 * 字符串转义和反转义
 * @param encode
 * @returns {String}
 */
String.prototype.html = function (encode) {
    var replace = ["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
    if (encode) {
        replace.reverse();
    }
    for (var i = 0, str = this; i < replace.length; i += 2) {
        str = str.replace(new RegExp(replace[i], 'g'), replace[i + 1]);
    }
    return str;
};

/**
 * 获取url中的参数
 * @param url
 * @returns {params}
 */
function getQueryFromURL(url) {
    url = url || '';
    var tmp = url.split('?'),
        query = (tmp[1] || "").split('#')[0].split('&'),
        params = {};
    for (var i = 0; i < query.length; i++) {
        var queryitem = query[i];
        if (queryitem !== '') {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
    }
    return params;
}

/**
 * 验证请求中Referer是否合法
 * @param referer => req.headers.referer
 * @param host    => req.headers.host
 * @returns {boolean}
 */
function isCertifiedRequset(referer, host) {
    return referer === undefined || referer.match(/(https?:\/\/)([\w+\.]+(:[0-9]+)?)\/.+/)[2] === host;
}
