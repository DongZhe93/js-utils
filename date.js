/**
 * 获取某年某月的天数
 * @param year {number} 年
 * @param month {number} 月
 * @return {number} 天数
 */
function getDay(year, month) {
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
    formats = formats || 'Y-M-D';
    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    var myDate = timestamp ? new Date(timestamp) : new Date();

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

/**
 * 时间戳显示为多少分钟前，多少天前的处理
 * eg.
 * console.log(dateDiff(1411111111111));  // 2014年09月19日
 * console.log(dateDiff(1481111111111));  // 9月前
 * console.log(dateDiff(1499911111111));  // 2月前
 * console.log(dateDiff(1503211111111));  // 3周前
 * console.log(dateDiff(1505283100802));  // 1分钟前
 */
var dateDiff = function (timestamp) {
    // 补全为13位
    var arrTimestamp = (timestamp + '').split('');
    for (var start = 0; start < 13; start++) {
        if (!arrTimestamp[start]) {
            arrTimestamp[start] = '0';
        }
    }
    timestamp = arrTimestamp.join('') * 1;

    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - timestamp;

    // 如果本地时间反而小于变量时间
    if (diffValue < 0) {
        return '不久前';
    }

    // 计算差异时间的量级
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;

    // 数值补0方法
    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    // 使用
    if (monthC > 12) {
        // 超过1年，直接显示年月日
        return (function () {
            var date = new Date(timestamp);
            return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
        })();
    } else if (monthC >= 1) {
        return parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        return parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        return parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        return parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        return parseInt(minC) + "分钟前";
    }
    return '刚刚';
};