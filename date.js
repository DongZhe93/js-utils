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

/**
 * 获取时间戳当前时间
 * @returns {number}
 */
function getTimeNow() {
    return +new Date();//等同于new Date().getTime();
}

/**
 * 时间戳转换成指定格式日期
 * @param timestamp
 * @param formats
 * // formats格式包括
 * Y-M-D
 * Y-M-D H:i:s
 * Y年M月D日
 * Y年M月D日 H时i分s秒
 * Y/M/D H:i:s
 * @returns {string}
 */
function dateFormat(timestamp, formats) {
    formats = formats ||'Y-M-D';
    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    var myDate = timestamp? new Date(timestamp): new Date();

    var year = myDate.getFullYear();
    var month = zero(myDate.getMonth() + 1);
    var day = zero(myDate.getDate());

    var hour = zero(myDate.getHours());
    var minite = zero(myDate.getMinutes());
    var second = zero(myDate.getSeconds());

    return formats.replace(/Y|M|D|H|i|s/ig, function (matches) {
        return ({
            Y: year,
            M: month,
            D: day,
            H: hour,
            i: minite,
            s: second
        })[matches];
    });
}