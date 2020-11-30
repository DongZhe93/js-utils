/**
 * 计算字符长度 （中文按双字节算）
 * @param str {string} 文本
 * @return {number} 文本长度
 */
function getTextLen(str) {
    return (str || '').replace(/[^x00-xff]/gi, '**').length;
}

/**
 * 返回8位随机码
 * @returns {string}
 */
function getRandom() {
    return Math.random().toString(36).substring(2, 10);
}

/**
 * 处理SpringMVC POST传参
 * @param obj 对象
 */
function handleFormObject(obj) {
    var newobj = {};

    function handleObject(prevkey, data) {
        for (var key in data) {
            var val = data[key] || '';
            if (Object.prototype.toString.call(val) === '[object Object]') {
                prevkey ? handleObject(prevkey + '.' + key, val) : handleObject(key, val);
            } else if (Object.prototype.toString.call(val) === '[object Array]') {
                prevkey ? handleArray(prevkey + '.' + key, val) : handleArray(key, val);
            } else {
                prevkey ? newobj[prevkey + '.' + key] = val : newobj[key] = val;
            }
        }
    }

    handleObject('', obj);
    return newobj;

    function handleArray(prevkey, data) {
        var len = data.length;
        for (var i = 0; i < len; i++) {
            var val = data[i] || '';
            if (Object.prototype.toString.call(val) === '[object Object]') {
                handleObject(prevkey + '[' + i + ']', val)
            } else if (Object.prototype.toString.call(val) === '[object Array]') {
                handleArray(prevkey + '[' + i + ']', val);
            } else {
                newobj[prevkey + '[' + i + ']'] = val;
            }
        }
    }
}

/**
 * unicode 字符串处理
 * @param unicode unicode字符串
 * @return {string}
 */
function unicodeToStr (unicode) {
    return unicode.replace(/\\u[0-9a-fA-F]{1,4}/g, function (unicode) {
      unicode = unicode.split('\\u')[1]
      return String.fromCharCode(parseInt(unicode, 16))
    })
  }