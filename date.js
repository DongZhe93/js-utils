/**
 * 获取某年某月的天数
 * @param year {number} 年
 * @param month {number} 月
 * @return {number} 天数
 */
function getDay (year, month) {
    if (!year || !month) {
        return 0;
    } else if (/^(1|3|5|7|8|10|12)$/.test(month)) {
        return 31;
    } else if (/^(4|6|9|11)$/.test(month)) {
        return 30;
    } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
    } else return 28;
}