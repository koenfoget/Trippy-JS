(function() {
    var ds = [];
    function addtods(nodes) {
        for (var i in nodes) {
            ds.push(nodes[i]);
        }
    }
    setInterval(function () {
        ds = [];
        addtods(document.getElementsByTagName('div'));
        addtods(document.getElementsByTagName('span'));
        addtods(document.getElementsByTagName('a'));
        addtods(document.getElementsByTagName('li'));
        addtods(document.getElementsByTagName('ul'));
        addtods(document.getElementsByTagName('textarea'));
        addtods(document.getElementsByTagName('input'));
        document.body.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        document.body.style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        for (var i in ds) {
            if (ds[i] && ds[i].style) {
                ds[i].style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                ds[i].style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                ds[i].style.borderColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            }
        }
    }, 10);
})();