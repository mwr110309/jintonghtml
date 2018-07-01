window.onload = function () {
    var myScroll;

    function loaded () {
        myScroll = new IScroll('#wrapper', { bounceEasing: 'elastic', bounceTime: 1200 });
    }

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
        capture: false,
        passive: false
    } : false);

};
