/**
 * 是否在微信中打开
 * @returns {boolean}
 */
window.isInWeixinApp = function () {
    return /MicroMessenger/.test(navigator.userAgent);
};

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
    url = url || 'http://donzhe93.com/s?a=b#rd';
    var tmp = url.split('?'),
        query = (tmp[1] || "").split('#')[0].split('&'),
        params = {};
    for (var i = 0; i < query.length; i++) {
        var arg = query[i].split('=');
        params[arg[0]] = arg[1];
    }
    if (params['pass_ticket']) {
        params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g, "+"));
    }
    return params;
}