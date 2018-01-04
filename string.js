/**
 * 计算字符长度 （中文按双字节算）
 * @param str {string} 文本
 * @return {number} 文本长度
 */
function getTextLen(str) {
    return (str || '').replace(/[^x00-xff]/gi, '**').length;
}