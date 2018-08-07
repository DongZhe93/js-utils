(function (w,lib) {
    var docEle = w.document.documentElement;

    function adjustFontSize() {
        var windowWidth = docEle.getBoundingClientRect().width;
        var ftsize = windowWidth / 10;
        w.ftsize  = ftsize;
        docEle.style.fontSize = ftsize + "px";
    }

    w.addEventListener('resize', adjustFontSize);
    adjustFontSize();

    lib.rem2px = function(d) {
        return parseFloat(d) * w.ftsize;
    }
})(window,window['flexible'] || (window['flexible'] = {}));