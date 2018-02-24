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